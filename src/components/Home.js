import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ArrowRight, BarChart, Shield, Wallet2, CurrencyBitcoin, ClockHistory, Robot } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">Smart Crypto Investing Made Simple</h1>
              <p className="lead text-muted mb-4">
                Become a strategic investor, not a trader. Our automated DCA bot helps you build wealth 
                steadily through disciplined cryptocurrency investing.
              </p>
              <Link to="/dca-setup">
                <Button variant="primary" size="lg" className="rounded-pill px-4">
                  Start Auto-Investing <ArrowRight className="ms-2" />
                </Button>
              </Link>
            </Col>
            <Col lg={6} className="text-center">
              <Robot className="hero-icon" style={{ fontSize: '10rem', color: '#007bff' }} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* DCA Strategy Section */}
      <section className="dca-section py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="order-lg-2 mb-5 mb-lg-0">
              <div className="section-content">
                <h2 className="fw-bold mb-4">Automated Dollar-Cost Averaging</h2>
                <p className="text-muted mb-4">
                  Our intelligent DCA bot executes your investment strategy automatically:
                </p>
                <div className="benefits">
                  <div className="benefit-item mb-4">
                    <ClockHistory className="benefit-icon me-3" style={{ fontSize: '1.5rem', color: '#007bff' }} />
                    <div>
                      <h4 className="fw-bold">Set & Forget</h4>
                      <p className="text-muted mb-0">Automate regular purchases regardless of market conditions</p>
                    </div>
                  </div>
                  <div className="benefit-item mb-4">
                    <Shield className="benefit-icon me-3" style={{ fontSize: '1.5rem', color: '#007bff' }} />
                    <div>
                      <h4 className="fw-bold">Emotion-Free Investing</h4>
                      <p className="text-muted mb-0">Remove psychological barriers and human error from your strategy</p>
                    </div>
                  </div>
                  <div className="benefit-item mb-4">
                    <BarChart className="benefit-icon me-3" style={{ fontSize: '1.5rem', color: '#007bff' }} />
                    <div>
                      <h4 className="fw-bold">Long-Term Growth</h4>
                      <p className="text-muted mb-0">Benefit from compounding returns over extended periods</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} className="order-lg-1">
              <div className="dca-illustration text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 400 200"
                  className="img-fluid"
                >
                  <line x1="50" y1="150" x2="350" y2="150" stroke="#e0e0e0" strokeWidth="2" />
                  <circle cx="100" cy="150" r="5" fill="#007bff" />
                  <circle cx="200" cy="150" r="5" fill="#007bff" />
                  <circle cx="300" cy="150" r="5" fill="#007bff" />
                  <text x="100" y="170" textAnchor="middle" fontSize="12" fill="#666" fontFamily="Arial, sans-serif">
                    $100 BTC
                  </text>
                  <text x="200" y="170" textAnchor="middle" fontSize="12" fill="#666" fontFamily="Arial, sans-serif">
                    $100 ETH
                  </text>
                  <text x="300" y="170" textAnchor="middle" fontSize="12" fill="#666" fontFamily="Arial, sans-serif">
                    $100 BTC
                  </text>
                  <polyline
                    points="100,150 150,120 200,130 250,100 300,110"
                    fill="none"
                    stroke="#007bff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Investment Philosophy Section */}
      <section className="philosophy-section py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Our Investment Principles</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <ClockHistory className="mb-3" style={{ fontSize: '2rem', color: '#007bff' }} />
                  <Card.Title className="fw-bold">Timing the Market</Card.Title>
                  <Card.Text className="text-muted">
                    Consistent investment over time beats trying to predict short-term price movements
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <Shield className="mb-3" style={{ fontSize: '2rem', color: '#007bff' }} />
                  <Card.Title className="fw-bold">Risk Management First</Card.Title>
                  <Card.Text className="text-muted">
                    Never invest more than you can afford to lose. We help you maintain sustainable investment amounts
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="text-center p-4">
                  <CurrencyBitcoin className="mb-3" style={{ fontSize: '2rem', color: '#007bff' }} />
                  <Card.Title className="fw-bold">Quality Over Quantity</Card.Title>
                  <Card.Text className="text-muted">
                    Focus on established assets with long-term potential rather than chasing hype
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="workflow-section py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-5">Simple 3-Step Process</h2>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <div className="step p-4">
                <div className="step-number display-4 fw-bold text-primary mb-3">1</div>
                <h4 className="fw-bold mb-3">Set Your Strategy</h4>
                <p className="text-muted">Choose assets, investment amounts, and frequency</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="step p-4">
                <div className="step-number display-4 fw-bold text-primary mb-3">2</div>
                <h4 className="fw-bold mb-3">Fund Your Account</h4>
                <p className="text-muted">Deposit fiat or crypto to fuel your automated investments</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="step p-4">
                <div className="step-number display-4 fw-bold text-primary mb-3">3</div>
                <h4 className="fw-bold mb-3">Let the Bot Work</h4>
                <p className="text-muted">Our system executes trades automatically according to your plan</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="fw-bold mb-4">Start Building Your Crypto Wealth Today</h2>
              <p className="lead text-muted mb-4">
                Join smart investors who understand that consistent, disciplined investing 
                is the key to long-term financial success in crypto
              </p>
              <Link to="/dca-setup">
                <Button variant="primary" size="lg" className="rounded-pill px-4">
                  Launch Your DCA Strategy <ArrowRight className="ms-2" />
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};