import React, { Component } from 'react';
import '../Account/AccountBalance.css'
import { Form, Row, Col, Input, Button } from 'antd';

const AccountBalance = Form.create({ name: 'account_balance' })(
    class extends Component {

        constructor(props) {
            super(props);
            this.state = {
                accountNumber: '',
                balance: ''
            }
        }

        handleAccountNumber = (e) => {
            e.preventDefault();
            this.setState({
                accountNumber: e
            });
        }

        handleBalance = (e) => {
            e.preventDefault();
            this.setState({
                balance: e
            });
        }

        handleSaveAccount = () => {
            let savePayload = {
                accountNumber: this.state.accountNumber,
                balance: this.state.balance
            };
        }

        handleResetAccount = () => {
            this.props.form.setFieldsValue({
                accountNumber: '',
                balance: ''
            });
            this.setState({
                accountNumber: '',
                balance: ''
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
                                            id="accountNumber"
                                            placeholder="Enter account number"
                                            onChange={this.handleAccountNumber}
                                        />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col>
                                <Form.Item
                                    label="Balance"
                                >{getFieldDecorator(
                                    "balance",
                                    {}
                                )(
                                    <Input
                                        id="balance"
                                        placeholder="Enter Balance"
                                        onChange={this.handleBalance}
                                    />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button
                                    id="saveAccount"
                                    type="primary"
                                    onClick={this.handleSaveAccount}
                                >
                                    Save
                                </Button>
                                <Button
                                    id="resetAccount"
                                    type="danger"
                                    onClick={this.handleResetAccount}
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

export default AccountBalance;