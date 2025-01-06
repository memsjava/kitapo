import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { ArrowUpCircle, ArrowDownCircle } from 'react-bootstrap-icons';

export const Market = () => {
  const marketData = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$45,234.12', change: '+2.5%', volume: '$24.5B', isPositive: true },
    { name: 'Ethereum', symbol: 'ETH', price: '$3,234.45', change: '-1.2%', volume: '$15.2B', isPositive: false },
    { name: 'Cardano', symbol: 'ADA', price: '$1.45', change: '+3.8%', volume: '$4.2B', isPositive: true },
    { name: 'Solana', symbol: 'SOL', price: '$234.12', change: '+5.2%', volume: '$3.8B', isPositive: true },
    { name: 'Polkadot', symbol: 'DOT', price: '$28.45', change: '-0.8%', volume: '$2.1B', isPositive: false },
  ];

  return (
    <div className="market-page">
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="page-title">Market</h1>
            <p className="text-muted">Live cryptocurrency prices and market data</p>
          </Col>
        </Row>

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
                      <th>Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marketData.map((coin, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="coin-name">{coin.name}</span>
                            <span className="coin-symbol text-muted ms-2">{coin.symbol}</span>
                          </div>
                        </td>
                        <td>{coin.price}</td>
                        <td>
                          <span className={`change ${coin.isPositive ? 'positive' : 'negative'}`}>
                            {coin.isPositive ? <ArrowUpCircle className="me-1" /> : <ArrowDownCircle className="me-1" />}
                            {coin.change}
                          </span>
                        </td>
                        <td>{coin.volume}</td>
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
