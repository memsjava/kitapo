import React from 'react';
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

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

export const Dashboard = () => {
  // Sample portfolio data
  const portfolioStats = [
    {
      title: 'Total Value',
      value: '$15,234.23',
      change: '+2.5%',
      isPositive: true,
    },
    {
      title: '24h Change',
      value: '$323.56',
      change: '+2.1%',
      isPositive: true,
    },
    {
      title: 'Total Assets',
      value: '12',
      change: '-1',
      isPositive: false,
    },
  ];

  const topAssets = [
    { name: 'Bitcoin', symbol: 'BTC', value: '$8,234.12', change: '+3.2%', isPositive: true },
    { name: 'Ethereum', symbol: 'ETH', value: '$2,123.45', change: '-1.4%', isPositive: false },
    { name: 'Cardano', symbol: 'ADA', value: '$1,045.78', change: '+2.8%', isPositive: true },
  ];

  return (
    <div className="dashboard">
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="page-title">Portfolio</h1>
            <p className="text-muted">Track and manage your crypto assets</p>
          </Col>
        </Row>

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
                  <AreaChart data={data}>
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
                      fill="url(#colorValue)"
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
                <h5 className="mb-4">Top Assets</h5>
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
