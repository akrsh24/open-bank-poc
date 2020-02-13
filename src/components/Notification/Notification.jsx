import React, { Component } from 'react';
import '../account/accountBalance.css'
import { Form, Row, Col, Input } from 'antd';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchNotifications } from '../redux/actions/actions';
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

        componentDidMount() {
            console.log("Entering Notification");
            this.props.fetchNotifications();
        }

        getAllNotifications = (accNumber, message) => {
            return (
                <div>
                    <Row gutter={24}>
                        <Col>
                            <Form.Item
                                label="Account Number"
                            >
                                <Input
                                    id="accountNumber"
                                    value={accNumber}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col>
                            <Form.Item
                                label="Message"
                            >
                                <TextArea
                                    id="message"
                                    value={message}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </div>
            )
        }

        render() {
            console.log("Notification", this.props.getAllNotificationsResponse)
            return (
                <div className="account-balance-div">
                    <Form layout="horizontal" className="case-modal-form">
                        {
                            this.props.getAllNotificationsResponse && this.props.getAllNotificationsResponse.map(notification => {
                                return (
                                    this.getAllNotifications(notification.accountNumber, notification.message)
                                )
                            })
                        }
                    </Form>
                </div>
            );
        }
    })

const mapStateToProps = (state) => {
    return {
        getAllNotificationsResponse: state.financialTransactionReducer.getAllNotificationsResponse
    };
};

export default withRouter(connect(mapStateToProps, { fetchNotifications })(Notification));

