import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { PersonCircle, Bell, Shield, Wallet } from 'react-bootstrap-icons';

export const Settings = () => {
  return (
    <div className="settings-page">
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="page-title">Settings</h1>
            <p className="text-muted">Manage your account preferences</p>
          </Col>
        </Row>

        <Row>
          <Col lg={4} className="mb-4">
            <Card className="settings-nav">
              <Card.Body>
                <div className="settings-nav-item active">
                  <PersonCircle className="me-2" /> Profile
                </div>
                <div className="settings-nav-item">
                  <Bell className="me-2" /> Notifications
                </div>
                <div className="settings-nav-item">
                  <Shield className="me-2" /> Security
                </div>
                <div className="settings-nav-item">
                  <Wallet className="me-2" /> Payment Methods
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={8}>
            <Card className="settings-content">
              <Card.Body>
                <h5 className="mb-4">Profile Settings</h5>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Enter phone number" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Time Zone</Form.Label>
                    <Form.Select>
                      <option>UTC+00:00 London</option>
                      <option>UTC-05:00 New York</option>
                      <option>UTC+08:00 Singapore</option>
                      <option>UTC+09:00 Tokyo</option>
                    </Form.Select>
                  </Form.Group>

                  <Button variant="primary" className="mt-3">
                    Save Changes
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
