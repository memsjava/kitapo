import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ArrowUpCircleFill, ArrowDownCircleFill } from 'react-bootstrap-icons';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
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
          const portfolioResponse = await fetch('http://localhost:5000/kitapo/portfolio?email=memsjava@gmail.com');
          const portfolioData = await portfolioResponse.json();

          // Fetch current data
          const currentDataResponse = await fetch('http://localhost:5000/kitapo/data?email=memsjava@gmail.com');
          const currentData = await currentDataResponse.json();

          // Process portfolio data for the chart
          const processedChartData = portfolioData.portfolio_values.map(item => ({
            name: new Date(item.date).toLocaleDateString(),
            value: item.total_value_usdt,
          }));
          setChartData(processedChartData);

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
              change: `${portfolioChange.toFixed(2)}%`, // 24h change for portfolio
              isPositive: portfolioChange >= 0,
            },
            {
              title: '24h Change',
              value: `$${(todayValue - yesterdayValue).toFixed(2)}`, // Absolute change in USD
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
            // Process current data for top assets
            Object.entries(currentData.current_data.assets).map(async ([symbol, value]) => {
              let currentPrice = 1; // Default price for USDT
              let previousPrice = 1; // Default previous price for USDT
              let changePercentage = 0; // Default change percentage for USDT

              if (symbol !== 'USDT') {
                // Fetch current price from Binance API for non-USDT assets
                const currentPriceResponse = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}USDT`);
                const currentPriceData = await currentPriceResponse.json();
                currentPrice = parseFloat(currentPriceData.price);

                // Fetch 24-hour price change from Binance API for non-USDT assets
                const priceChangeResponse = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}USDT`);
                const priceChangeData = await priceChangeResponse.json();
                previousPrice = parseFloat(priceChangeData.prevClosePrice);

                // Calculate the percentage change for non-USDT assets
                changePercentage = value === '0' ? 0 : (((currentPrice - previousPrice) / previousPrice) * 100).toFixed(2);
              }

              // Calculate the value in USD
              const valueInUSD = (value * currentPrice).toFixed(4);

              // Determine if the change is positive or negative
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

          setDataFetched(true );
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
        {/* <Row className="mb-4">
          <Col>
            <h1 className="page-title">Portfolio</h1>
            <p className="text-muted">Track and manage your crypto assets</p>
          </Col>
        </Row> */}

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
          <Col>
            <Card className="chart-card">
              <Card.Body>
                <h5 className="mb-4">Portfolio Performance</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--primary-color)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="var(--primary-color)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                    <XAxis dataKey="name" stroke="var(--gray-text)" />
                    <YAxis stroke="var(--gray-text)" />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="var(--primary-color)"
                      fillOpacity={1}
                      fill="transparent"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Card className="asset-card">
              <Card.Body>
                <h5 className="mb-4">All assets</h5>
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
