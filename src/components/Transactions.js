import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { ArrowUpCircleFill, ArrowDownCircleFill, CartCheckFill, BagCheckFill, WalletFill } from 'react-bootstrap-icons';
import axios from 'axios';

export const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const email = 'memsjava@gmail.com';//localStorage.getItem('email');

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`https://trano-vacance.mg/kitapo/transactions?email=${email}`);
        setTransactions(response.data.transactions || []);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    if (email) {
      fetchTransactions();
    }
  }, [email]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const formatNumber = (number) => {
    return Number(number).toFixed(8).replace(/\.?0+$/, '');
  };

  return (
    <div className="transactions-page">
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="page-title"></h1>
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
                      <th>Asset</th>
                      <th>Amount</th>
                      <th>Price (USDT)</th>
                      <th>Total (USDT)</th>
                      <th>Date</th>
                      <th>Profit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((tx) => (
                      <tr key={tx.id}>
                        <td>
                          <span className={`transaction-type ${tx.type}`}>
                          {tx.type === 'deposit' ? (
                              <ArrowUpCircleFill className="me-2" />
                            ) : tx.type === 'sell' ? (
                              <CartCheckFill className="me-2" />
                            ) : tx.type === 'buy' ? (
                              <BagCheckFill className="me-2" />
                            ) : tx.type === 'withdraw' ? (
                              <WalletFill className="me-2" />
                            ) : (
                              <ArrowDownCircleFill className="me-2" />
                            )}
                            {tx.type.toUpperCase()}
                          </span>
                        </td>
                        <td>{tx.asset}</td>
                        <td>{formatNumber(tx.amount)}</td>
                        <td>{formatNumber(tx.price_usdt)}</td>
                        <td>{formatNumber(tx.total_usdt)}</td>
                        <td>{formatDate(tx.date)}</td>
                        <td>{tx.profit ? formatNumber(tx.profit) : '-'}</td>
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
