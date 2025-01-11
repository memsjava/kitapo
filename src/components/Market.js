import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Spinner } from 'react-bootstrap';
import { ArrowUpCircle, ArrowDownCircle } from 'react-bootstrap-icons';
import { initWebSocket, getInitialMarketData } from '../services/cryptoService';

export const Market = () => {
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [priceUpdates, setPriceUpdates] = useState({});

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const data = await getInitialMarketData();
        setMarketData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch market data. Please try again later.');
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    const cleanup = initWebSocket((updates) => {
      setPriceUpdates((prev) => ({ ...prev, ...updates }));
    });

    return cleanup;
  }, []);

  useEffect(() => {
    if (Object.keys(priceUpdates).length > 0) {
      setMarketData((prevData) =>
        prevData.map((coin) => {
          const newPrice = priceUpdates[coin.id];
          if (newPrice) {
            const priceChange = ((newPrice - coin.priceUsd) / coin.priceUsd) * 100;
            return {
              ...coin,
              priceUsd: newPrice,
              changePercent24Hr: priceChange.toString()
            };
          }
          return coin;
        })
      );
    }
  }, [priceUpdates]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const formatVolume = (volume) => {
    if (volume >= 1e9) {
      return `$${(volume / 1e9).toFixed(1)}B`;
    } else if (volume >= 1e6) {
      return `$${(volume / 1e6).toFixed(1)}M`;
    }
    return `$${volume.toFixed(0)}`;
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5">
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  return (
    <div className="market-page">
      <Container>
        {/* <Row className="mb-4">
          <Col>
            <h1 className="page-title">Market</h1> 
            <p className="text-muted">Live cryptocurrency prices and market data</p>
          </Col>
        </Row> */}

        <Row>
          <Col>
            <Card className="market-card">
              <Card.Body>
                <Table responsive hover className="market-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Price</th>
                      <th>24h Change</th>
                      <th>Volume (24h)</th>
                      <th>Market Cap</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marketData.map((coin) => (
                      <tr key={coin.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="coin-name">{coin.name}</span>
                            <span className="coin-symbol text-muted ms-2">{coin.symbol}</span>
                          </div>
                        </td>
                        <td className={priceUpdates[coin.id] ? 'price-flash' : ''}>
                          {formatPrice(coin.priceUsd)}
                        </td>
                        <td>
                          <span className={`change ${parseFloat(coin.changePercent24Hr) >= 0 ? 'positive' : 'negative'}`}>
                            {parseFloat(coin.changePercent24Hr) >= 0 ? 
                              <ArrowUpCircle className="me-1" /> : 
                              <ArrowDownCircle className="me-1" />
                            }
                            {Math.abs(parseFloat(coin.changePercent24Hr)).toFixed(2)}%
                          </span>
                        </td>
                        <td>{formatVolume(parseFloat(coin.volumeUsd24Hr))}</td>
                        <td>{formatVolume(parseFloat(coin.marketCapUsd))}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
