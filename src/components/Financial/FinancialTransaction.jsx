import React, { Component } from 'react';
import '../account/accountBalance.css'
import { Form, Row, Col, Input, Button, message } from 'antd';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { saveFinancialTransaction } from '../redux/actions/actions';

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
                accountNumber: e.target.value
            });
        }

        handleTransactionID = (e) => {
            e.preventDefault();
            this.setState({
                txnID: e.target.value
            });
        }

        handleTransactionAmount = (e) => {
            e.preventDefault();
            this.setState({
                txnAmount: e.target.value
            });
        }

        handleSaveTransaction = () => {
            let savePayload = {
                accountNumber: this.state.accountNumber,
                transactionId: this.state.txnID,
                transactionAmount: this.state.txnAmount
            };
            this.props.saveFinancialTransaction(savePayload).then(() => {
                console.log("savePayload", this.props.saveFinancialTxnResponse);
                if (this.props.saveFinancialTxnResponse.status >= 200 && this.props.saveFinancialTxnResponse.status < 300) {
                    message.success(this.props.saveFinancialTxnResponse.data.context.entity.data);
                    this.handleResetTransaction();
                }
                else {
                    message.error(this.props.saveFinancialTxnResponse.data.context.entity.data);
                }
            });
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
    });

const mapStateToProps = (state) => {
    return {
        saveFinancialTxnResponse: state.financialTransactionReducer.saveFinancialTxnResponse
    };
};

export default withRouter(connect(mapStateToProps, { saveFinancialTransaction })(FinancialTransaction));
