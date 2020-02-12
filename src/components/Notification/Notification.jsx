import React, { Component } from 'react';
import '../Account/AccountBalance.css'
import { Form, Row, Col, Input, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const Notification = Form.create({ name: 'notification' })(
    class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                accountNumber: '',
                message: ''
            }
        }

        handleAccountNumber = (e) => {
            e.preventDefault();
            this.setState({
                accountNumber: e
            });
        }

        handleMessage = (e) => {
            e.preventDefault();
            this.setState({
                message: e
            });
        }

        handleSaveTransaction = () => {
            let savePayload = {
                accountNumber: this.state.accountNumber,
                message: this.state.message
            }
        }

        handleResetTransaction = () => {
            this.props.form.setFieldsValue({
                accountNumber: '',
                message: ''
            });
            this.setState({
                accountNumber: '',
                message: ''
            });
        }

        render() {
            const { getFieldDecorator } = this.props.form; return (
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
                                    label="Message"
                                >
                                    {getFieldDecorator(
                                        "message",
                                        {}
                                    )(
                                        <TextArea
                                            id="message"
                                            onChange={this.handleMessage}
                                        />)}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button
                                    id="saveNotification"
                                    type="primary"
                                    onClick={this.handleSaveTransaction}
                                >
                                    Save
                                </Button>
                                <Button
                                    id="resetNotification"
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

export default Notification;