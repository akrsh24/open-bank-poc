import React, { Component } from 'react';
import '../Account/AccountBalance.css'
import { Form, Row, Col, Input, Button } from 'antd';

const FinancialTransaction = Form.create({ name: 'financial_transaction' })(
    class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                accountNumber: '',
                txnID: '',
                txnAmount: ''
            }
        }

        handleAccountNumber = (e) => {
            e.preventDefault();
            this.setState({
                accountNumber: e
            });
        }

        handleTransactionID = (e) => {
            e.preventDefault();
            this.setState({
                txnID: e
            });
        }

        handleTransactionAmount = (e) => {
            e.preventDefault();
            this.setState({
                txnAmount: e
            });
        }

        handleSaveTransaction = () => {
            let savePayload = {
                accountNumber: this.state.accountNumber,
                txnID: this.state.txnID,
                txnAmount: this.state.txnAmount
            };
        }

        handleResetTransaction = () => {
            this.props.form.setFieldsValue({
                accountNumber: '',
                txnID: '',
                txnAmount: ''
            });
            this.setState({
                accountNumber: '',
                txnID: '',
                txnAmount: ''
            });
        }

        render() {
            const { getFieldDecorator } = this.props.form;
            return (
                <div className="account-balance-div">
                    <Form layout="horizontal" className="case-modal-form">
                        <Row gutter={24}>
                            <Col>
                                <Form.Item
                                    label="Account Number"
                                >
                                    {getFieldDecorator(
                                        "accountNumber",
                                        {}
                                    )(
                                        <Input
                                            id="accountNumbe"
                                            placeholder="Enter account number"
                                            onChange={this.handleAccountNumber}
                                        />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col>
                                <Form.Item
                                    label="Transaction ID"
                                >
                                    {getFieldDecorator(
                                        "txnID",
                                        {}
                                    )(
                                        <Input
                                            id="txnID"
                                            placeholder="Enter Transaction ID"
                                            onChange={this.handleTransactionID}
                                        />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col>
                                <Form.Item
                                    label="Transaction Amount"
                                >
                                    {getFieldDecorator(
                                        "txnAmount",
                                        {}
                                    )(
                                        <Input
                                            id="txnAmount"
                                            placeholder="Enter Transaction Amount"
                                            onChange={this.handleTransactionAmount}
                                        />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button
                                    id="saveTxn"
                                    type="primary"
                                    onClick={this.handleSaveTransaction}
                                >
                                    Save
                                </Button>
                                <Button
                                    id="resetTxn"
                                    type="danger"
                                    onClick={this.handleResetTransaction}
                                    style={{ marginLeft: "5px" }}
                                >
                                    Reset
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            );
        }
    })

export default FinancialTransaction;