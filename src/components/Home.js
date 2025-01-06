import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { ArrowRight, BarChart, Shield, Wallet2, CurrencyBitcoin } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="hero-content">
              <h1>Smart Crypto Portfolio Management</h1>
              <p className="lead">
                Track, analyze, and optimize your cryptocurrency investments with KitaPo's powerful portfolio management tools.
              </p>
              <Link to="/portfolio">
                <Button size="lg" className="get-started-btn">
                  Get Started <ArrowRight className="ms-2" />
                </Button>
              </Link>
            </Col>
            <Col lg={6} className="hero-image">
              <CurrencyBitcoin className="hero-icon" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* DCA Section */}
      <section className="dca-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="order-lg-2">
              <div className="section-content">
                <h2>Dollar-Cost Averaging (DCA)</h2>
                <p>
                  Dollar-Cost Averaging is a smart investment strategy where you invest a fixed amount 
                  regularly, regardless of market conditions. This approach helps reduce the impact of 
                  market volatility and emotional decision-making.
                </p>
                <div className="benefits">
                  <div className="benefit-item">
                    <BarChart className="benefit-icon" />
                    <h4>Reduce Market Timing Risk</h4>
                    <p>Avoid the stress of trying to time the market perfectly</p>
                  </div>
                  <div className="benefit-item">
                    <Shield className="benefit-icon" />
                    <h4>Lower Average Cost</h4>
                    <p>Potentially lower your average purchase price over time</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} className="order-lg-1">
              <div className="dca-illustration">
                <BarChart className="dca-icon" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Hardware Wallet Section */}
      <section className="ledger-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="section-content">
                <h2>Secure Your Assets with Hardware Wallets</h2>
                <p>
                  Hardware wallets like Ledger provide the highest level of security for your 
                  cryptocurrency by storing your private keys offline, protecting them from online threats.
                </p>
                <div className="features">
                  <div className="feature-item">
                    <Shield className="feature-icon" />
                    <h4>Cold Storage Security</h4>
                    <p>Keep your private keys offline and safe from hackers</p>
                  </div>
                  <div className="feature-item">
                    <Wallet2 className="feature-icon" />
                    <h4>Multi-Currency Support</h4>
                    <p>Store multiple cryptocurrencies in one secure device</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="wallet-illustration">
                <Wallet2 className="wallet-icon" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Crypto Basics Section */}
      <section className="crypto-basics">
        <Container>
          <h2 className="text-center mb-5">Understanding Cryptocurrency</h2>
          <Row>
            <Col md={4}>
              <Card className="info-card">
                <Card.Body>
                  <div className="card-icon">
                    <CurrencyBitcoin className="info-icon" />
                  </div>
                  <Card.Title>Blockchain Technology</Card.Title>
                  <Card.Text>
                    A decentralized, transparent ledger that records all transactions 
                    across a network of computers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="info-card">
                <Card.Body>
                  <div className="card-icon">
                    <Wallet2 className="info-icon" />
                  </div>
                  <Card.Title>Digital Wallets</Card.Title>
                  <Card.Text>
                    Software or hardware that allows you to store, send, and receive 
                    cryptocurrency securely.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="info-card">
                <Card.Body>
                  <div className="card-icon">
                    <BarChart className="info-icon" />
                  </div>
                  <Card.Title>Cryptocurrency Exchanges</Card.Title>
                  <Card.Text>
                    Platforms where you can buy, sell, and trade different types of 
                    cryptocurrencies.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2>Ready to Start Your Crypto Journey?</h2>
              <p className="lead">
                Join KitaPo today and take control of your cryptocurrency investments
                with our powerful portfolio management tools.
              </p>
              <Link to="/portfolio">
                <Button size="lg" className="cta-button">
                  Get Started Now <ArrowRight className="ms-2" />
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
