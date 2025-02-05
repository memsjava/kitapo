import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ArrowUpCircleFill, ArrowDownCircleFill } from 'react-bootstrap-icons';
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import './Dashboard.css';

export const Dashboard = () => {
  const [portfolioStats, setPortfolioStats] = useState([]);
  const [topAssets, setTopAssets] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (!dataFetched) {
      const fetchData = async () => {
        try {
          // Fetch portfolio data
          const portfolioResponse = await fetch('https://trano-vacance.mg/kitapo/portfolio?email=memsjava@gmail.com');
          const portfolioData = await portfolioResponse.json();

          // Fetch transactions data
          const transactionsResponse = await fetch('https://trano-vacance.mg/kitapo/transactions?email=memsjava@gmail.com');
          const transactionsData = await transactionsResponse.json();

          console.log(transactionsData);

          // Fetch current data
          const currentDataResponse = await fetch('https://trano-vacance.mg/kitapo/data?email=memsjava@gmail.com');
          const currentData = await currentDataResponse.json();

          // Create a map of dates to transaction amounts
          const transactionsByDate = {};
          
          if (transactionsData && Array.isArray(transactionsData.transactions)) {
            transactionsData.transactions.forEach(tx => {
              try {
                const date = tx.date || tx.datetime;
                if (!date) return;
          
                let txDate;
                if (date.includes('T')) {
                  txDate = new Date(date);
                } else {
                  const [year, month, day] = date.split('-');
                  txDate = new Date(year, month - 1, day);
                }
          
                if (isNaN(txDate.getTime())) return;
          
                const formattedDate = `${txDate.getMonth() + 1}/${txDate.getDate()}/${txDate.getFullYear()}`;
          
                if (!transactionsByDate[formattedDate]) {
                  transactionsByDate[formattedDate] = {
                    deposit: 0,
                    withdraw: 0, // Use "withdraw" as the key
                    buy: 0,
                    sell: 0
                  };
                }
          
                const amount = parseFloat(tx.total_usdt || 0);
                if (!isNaN(amount) && tx.type) {
                  if (tx.type === "withdrawal") { // Check for "withdrawal" type
                    // Ensure withdrawals are negative
                    transactionsByDate[formattedDate].withdraw += Math.abs(amount);
                  } else if (tx.type === "deposit") {
                    transactionsByDate[formattedDate].deposit += Math.abs(amount);
                  } else if (tx.type === "buy") {
                    transactionsByDate[formattedDate].buy += Math.abs(amount);
                  } else if (tx.type === "sell") {
                    transactionsByDate[formattedDate].sell += Math.abs(amount);
                  }
                }
              } catch (error) {
                console.error('Error processing transaction:', error);
              }
            });
          }
          console.log("transactionsByDate",transactionsByDate)
          // Process portfolio data and combine with transactions
          const processedChartData = portfolioData.portfolio_values.map(item => {
            const itemDate = new Date(item.date);
            const date = `${itemDate.getMonth() + 1}/${itemDate.getDate()}/${itemDate.getFullYear()}`;
          
            // Get transactions for this date
            const dayTransactions = transactionsByDate[date] || {
              deposit: 0,
              withdraw: 0,
              buy: 0,
              sell: 0
            };
          
            return {
              name: date,
              value: item.total_value_usdt,
              deposit: dayTransactions.deposit,
              withdraw: -dayTransactions.withdraw, // Include withdraw values
              buy: dayTransactions.buy,
              sell: dayTransactions.sell
            };
          });

          setChartData(processedChartData);

          console.log(chartData);

          // Calculate 24h change for portfolio
          const portfolioValues = portfolioData.portfolio_values;
          const todayValue = portfolioValues[portfolioValues.length - 1].total_value_usdt;
          const yesterdayValue = portfolioValues[portfolioValues.length - 2].total_value_usdt;
          const portfolioChange = ((todayValue - yesterdayValue) / yesterdayValue) * 100;

          // Process current data for portfolio stats
          const totalAssets = Object.keys(currentData.current_data.assets).length;

          setPortfolioStats([
            {
              title: 'Total Value',
              value: `$${parseFloat(todayValue).toFixed(4)}`,
              change: `${portfolioChange.toFixed(2)}%`,
              isPositive: portfolioChange >= 0,
            },
            {
              title: '24h Change',
              value: `$${(todayValue - yesterdayValue).toFixed(2)}`,
              change: `${portfolioChange.toFixed(2)}%`,
              isPositive: portfolioChange >= 0,
            },
            {
              title: 'Total Assets',
              value: totalAssets,
              change: '0',
              isPositive: true,
            },
          ]);

          // Process current data for top assets
          const assets = await Promise.all(
            Object.entries(currentData.current_data.assets).map(async ([symbol, value]) => {
              let currentPrice = 1;
              let previousPrice = 1;
              let changePercentage = 0;

              if (symbol !== 'USDT') {
                const currentPriceResponse = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}USDT`);
                const currentPriceData = await currentPriceResponse.json();
                currentPrice = parseFloat(currentPriceData.price);

                const priceChangeResponse = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}USDT`);
                const priceChangeData = await priceChangeResponse.json();
                previousPrice = parseFloat(priceChangeData.prevClosePrice);

                changePercentage = value === '0' ? 0 : (((currentPrice - previousPrice) / previousPrice) * 100).toFixed(2);
              }

              const valueInUSD = (value * currentPrice).toFixed(4);
              const isPositive = changePercentage >= 0;

              return {
                name: symbol,
                symbol,
                value: `$${valueInUSD}`,
                change: symbol === 'USDT' ? '0.00%' : `${isPositive ? '+' : ''}${changePercentage}%`,
                isPositive,
              };
            })
          );
          setTopAssets(assets);
          setDataFetched(true);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }
  }, [dataFetched]);

  return (
    <div className="dashboard">
      <Container>
        <Row className="mb-4">
          {portfolioStats.map((stat, index) => (
            <Col key={index} md={4}>
              <Card className="stat-card">
                <Card.Body>
                  <h6 className="text-muted mb-2">{stat.title}</h6>
                  <h3 className="mb-2">{stat.value}</h3>
                  <div className={`change ${stat.isPositive ? 'positive' : 'negative'}`}>
                    {stat.isPositive ? (
                      <ArrowUpCircleFill className="me-1" />
                    ) : (
                      <ArrowDownCircleFill className="me-1" />
                    )}
                    {stat.change}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mb-4">
          <Col md={12}>
            <Card className="chart-card">
              <Card.Body>
                <h5 className="mb-4">Portfolio Performance & Transactions</h5>
                <div style={{ height: '400px' }}>
                <ResponsiveContainer width="100%" height="100%">
  <ComposedChart data={chartData}>
    {
      console.log(chartData)
    }
    <defs>
      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="var(--primary-color)" stopOpacity={0.3} />
        <stop offset="95%" stopColor="var(--primary-color)" stopOpacity={0} />
      </linearGradient>
    </defs>
    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
    <XAxis dataKey="name" stroke="var(--gray-text)" />
    <YAxis 
      stroke="var(--gray-text)"
      // label={{ value: 'Value ($)', angle: -90, position: 'insideLeft', fill: 'var(--gray-text)' }}
      domain={['auto', 'auto']}
    />
    <Tooltip 
      contentStyle={{
        backgroundColor: 'var(--card-bg)',
        border: '1px solid var(--border-color)',
        borderRadius: '4px',
        padding: '10px'
      }}
      formatter={(value, name) => {
        let color;
        let label;
        switch (name) {
          case 'Portfolio Value':
            color = 'var(--primary-color)';
            label = 'Portfolio Value';
            break;
          case 'Deposit':
            color = '#82ca9d';
            label = 'Deposit Amount';
            break;
          case 'Withdraw':
            color = '#ff8042';
            label = 'Withdraw Amount';
            break;
          case 'Buy':
            color = '#8884d8';
            label = 'Buy Amount';
            break;
          case 'Sell':
            color = '#ff7373';
            label = 'Sell Amount';
            break;
          default:
            color = 'var(--text-color)';
            label = name;
        }
        
        const formattedValue = name === 'Portfolio Value' 
          ? `$${value.toFixed(2)}`
          : `$${value.toFixed(2)}`;
          
        return [
          <span style={{ color, display: 'block' }}>
            <span style={{ color: 'var(--text-color)', marginRight: '8px' }}>{label}:</span>
            {formattedValue}
          </span>,
          <span style={{ color, fontSize: '12px' }}>
            {name}
          </span>
        ];
      }}
      labelFormatter={(label) => (
        <span style={{ color: 'var(--text-color)', fontWeight: 'bold' }}>
          Date: {label}
        </span>
      )}
    />
    <Area
      type="monotone"
      dataKey="value"
      name="Portfolio Value"
      stroke="var(--primary-color)"
      fill="url(#colorValue)"
      fillOpacity={1}
    />
    <Bar 
      dataKey="deposit" 
      name="Deposit" 
      fill="#82ca9d"
      barSize={10}
    />
    <Bar 
      dataKey="withdraw" 
      name="Withdraw"
      fill="#ff8042"
      barSize={10}
    />
    <Bar 
      dataKey="buy" 
      name="Buy" 
      fill="#8884d8"
      barSize={10}
    />
    <Bar 
      dataKey="sell" 
      name="Sell" 
      fill="#ff7373"
      barSize={10}
    />
  </ComposedChart>
</ResponsiveContainer>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className="asset-card">
              <Card.Body>
                <h5 className="mb-4">All Assets</h5>
                {topAssets.map((asset, index) => (
                  <div key={index} className="asset-item d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="mb-0">{asset.name}</h6>
                      <small className="text-muted">{asset.symbol}</small>
                    </div>
                    <div className="text-end">
                      <div className="mb-1">{asset.value}</div>
                      <div className={`change ${asset.isPositive ? 'positive' : 'negative'}`}>
                        {asset.isPositive ? (
                          <ArrowUpCircleFill className="me-1" />
                        ) : (
                          <ArrowDownCircleFill className="me-1" />
                        )}
                        {asset.change}
                      </div>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
