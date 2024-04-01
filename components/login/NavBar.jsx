import React from 'react';
import { useState } from 'react';
import { FileDoneOutlined, HomeOutlined, UserOutlined, FileProtectOutlined, UserAddOutlined, MenuOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Divider } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const menu = [
    {
        label: 'Inicio',
        icon: React.createElement(HomeOutlined),
        route: '/'
    },
    {
        label: 'Blogs',
        icon: React.createElement(UserAddOutlined),
        route: '/blogs'
    },
]


const NavBar = ({ index, children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [collapsed, setCollapsed] = useState(true);

    return (
        <Layout
            style={{
                height: '100vh',
                overflow: 'hidden'
            }}
        >
            {/*<Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'white',
                }}
            >
                <h1 className="title-h1">
                    <MenuOutlined
                    //onClick={() => setCollapsed(!collapsed)}
                    />
                    &nbsp; &nbsp; &nbsp; Ayuda digital
                </h1>
            </Header>*/}

            <Layout>
                <Sider
                    //collapsible 
                    collapsed={collapsed}
                    //onCollapse={(value) => setCollapsed(value)}
                    //width={collapsed ? 0 : 225}
                    style={{
                        background: colorBgContainer,
                    }}
                    onMouseEnter={() => setCollapsed(false)}
                    onMouseLeave={() => setCollapsed(true)}
                    className="div-hover"
                >
                    <div className="demo-logo-vertical" />
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={[`${index}`]}
                        //defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                    >
                        {menu.map((item, index) => (
                            <Menu.Item key={`links-${index}`}>
                                <Link to={item.route}>
                                    <span>{item.icon} <span>{item.label} </span> </span>
                                </Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider>
                <Layout
                //className='layout'
                >
                    <Content>
                        {/*<Header
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                background: 'white',
                                borderBottom: '0.3px solid gray',
                            }}
                        >
                            <h1 className="title-h1">
                                Ayuda digital
                            </h1>
                        </Header>*/}
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default NavBar

/*NavBar.propTypes = {
    children: PropTypes.node,
    with: PropTypes.bool
}*/