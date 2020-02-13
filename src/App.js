import React, { Component } from 'react';
import { Layout, Menu, Divider } from 'antd';
import {
  BrowserRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import Home from './components/Home';
import AccountBalance from './components/account/accountBalance';
import FinancialTransaction from './components/financial/financialTransaction';
import Notification from './components/notification/notification';
const { Header, Content, Sider } = Layout;


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', background: 'white' }}>
              <Menu
                mode="horizontal"
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="openBank"><Link to='/' style={{ color: '#f5222d', size: 60, marginLeft: 10 }}>NBS</Link></Menu.Item>
              </Menu>
            </Header>
            <Layout>
              <Sider width={200} style={{ background: '#fff', padding: '90px 0px', marginTop: 64 }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%', borderRight: 0 }}
                >
                  <Menu.Item key="accountBalance">
                    <Link to='/accountBalance'>
                      <span>
                        {/* <Icon type="dashboard" /> */}
                        Account Balance
                      </span>
                    </Link>
                  </Menu.Item>
                  <Divider />

                  <Menu.Item key="dataSource">
                    <Link to='/financialTransaction'>
                      <span>
                        {/* <Icon type="file" /> */}
                        Financial Transaction
                      </span>
                    </Link>
                  </Menu.Item>
                  <Divider />

                  <Menu.Item key="notification">
                    <Link to='/notification'>
                      <span>
                        {/* <Icon type="unordered-list" /> */}
                        Notification
                       </span>
                    </Link>
                  </Menu.Item>
                  <Divider />
                </Menu>
              </Sider>
              <Layout className="app-layout-body">
                <Content className="app-content-body">
                  <div className="app-content-div-body">
                    <Switch>
                      <Route exact path='/' component={Home} />
                      <Route exact path='/accountBalance' component={AccountBalance} />
                      <Route exact path='/financialTransaction' component={FinancialTransaction} />
                      <Route exact path='/notification' component={Notification} />
                    </Switch>
                  </div>
                </Content>

              </Layout>
            </Layout>
          </Layout> ,
      </div >
      </BrowserRouter >
    );
  }
}

export default App;