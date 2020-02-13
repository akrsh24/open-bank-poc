import React, { Component } from 'react';
import '../account/accountBalance.css'
import { Form, Row, Col } from 'antd';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchNotifications } from '../redux/actions/actions';
import { AgGridReact } from 'ag-grid-react/lib/agGridReact';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const Notification = Form.create({ name: 'notification' })(
    class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                columnDefs: [
                    {
                        headerName: 'Account Number',
                        field: 'accountNumber',
                    },
                    {
                        headerName: 'Message',
                        field: 'message',
                    }
                ],
                rowData: []
            }
        }

        componentDidMount() {
            console.log("Entering Notification");
            this.props.fetchNotifications();
        }

        static getDerivedStateFromProps(nextProps, prevState) {
            let nextState = {};
            console.log("getDerivedStateFromProps", nextProps, nextState);
            if ((nextProps.getAllNotificationsResponse !== undefined && nextProps.getAllNotificationsResponse !== '') && nextProps.getAllNotificationsResponse.data.context.entity.data !== prevState.rowData) {
                nextState.rowData = nextProps.getAllNotificationsResponse.data.context.entity.data;
            }

            return nextState;
        }

        onGridReady = (params) => {
            this.gridApi = params.api;
            this.gridApi.sizeColumnsToFit();
            this.gridColumnApi = params.columnApi;

        }

        render() {
            console.log("Notification value", this.state, this.props);
            return (
                <div className="account-balance-div">
                    <h1 style={{color:"red", fontWeight:"bold"}}>All Notifications</h1>
                    <Row>
                        <Col>
                            <div
                                className="ag-theme-balham"
                                style={{
                                    height: '200px',
                                    width: '100%'
                                }}
                            >
                                <AgGridReact
                                    columnDefs={this.state.columnDefs}
                                    rowData={this.state.rowData}
                                    onGridReady={this.onGridReady}
                                >
                                </AgGridReact>
                            </div>
                        </Col>
                    </Row>
                </div>
            );
        }
    })

const mapStateToProps = (state) => {
    return {
        getAllNotificationsResponse: state.notificationReducer.getAllNotificationsResponse
    };
};

export default withRouter(connect(mapStateToProps, { fetchNotifications })(Notification));

