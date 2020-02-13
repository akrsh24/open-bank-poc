import React, { Component } from 'react';
import './accountBalance.css'
import { Form, Row, Col, Input, Button, message } from 'antd';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { saveAccountBalance } from '../redux/actions/actions';

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
                accountNumber: e.target.value
            });
        }

        handleBalance = (e) => {
            e.preventDefault();
            this.setState({
                balance: e.target.value
            });
        }

        handleSaveAccount = () => {
            let savePayload = {
                accountNumber: this.state.accountNumber,
                balance: this.state.balance
            };
            this.props.saveAccountBalance(savePayload).then(() => {
                console.log("savePayload", this.props.saveAccountBalanceResponse);
                if (this.props.saveAccountBalanceResponse.status >= 200 && this.props.saveAccountBalanceResponse.status < 300) {
                    message.success(this.props.saveAccountBalanceResponse.data.context.entity.data);
                    this.handleResetAccount();
                }
                else {
                    message.error(this.props.saveAccountBalanceResponse.data.context.entity.data);
                }
            });
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
const mapStateToProps = (state) => {
    return {
        saveAccountBalanceResponse: state.accountBalanceReducer.saveAccountBalanceResponse
    };
};


export default withRouter(connect(mapStateToProps, { saveAccountBalance })(AccountBalance));
