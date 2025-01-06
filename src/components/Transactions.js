import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { ArrowUpCircleFill, ArrowDownCircleFill } from 'react-bootstrap-icons';

export const Transactions = () => {
  const transactions = [
    { type: 'buy', coin: 'Bitcoin', amount: '0.25 BTC', value: '$11,234.56', date: '2025-01-06', status: 'Completed' },
    { type: 'sell', coin: 'Ethereum', amount: '2.5 ETH', value: '$8,234.12', date: '2025-01-05', status: 'Completed' },
    { type: 'buy', coin: 'Cardano', amount: '1000 ADA', value: '$1,450.00', date: '2025-01-04', status: 'Completed' },
    { type: 'buy', coin: 'Solana', amount: '5 SOL', value: '$1,170.60', date: '2025-01-03', status: 'Completed' },
    { type: 'sell', coin: 'Polkadot', amount: '100 DOT', value: '$2,845.00', date: '2025-01-02', status: 'Completed' },
  ];

  return (
    <div className="transactions-page">
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="page-title">Transactions</h1>
            <p className="text-muted">Your transaction history</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="transaction-card">
              <Card.Body>
                <Table responsive hover className="transaction-table">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Coin</th>
                      <th>Amount</th>
                      <th>Value</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx, index) => (
                      <tr key={index}>
                        <td>
                          <span className={`transaction-type ${tx.type}`}>
                            {tx.type === 'buy' ? (
                              <ArrowUpCircleFill className="me-2" />
                            ) : (
                              <ArrowDownCircleFill className="me-2" />
                            )}
                            {tx.type.toUpperCase()}
                          </span>
                        </td>
                        <td>{tx.coin}</td>
                        <td>{tx.amount}</td>
                        <td>{tx.value}</td>
                        <td>{tx.date}</td>
                        <td>
                          <span className="status completed">{tx.status}</span>
                        </td>
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
