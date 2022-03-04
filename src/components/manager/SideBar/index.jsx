import { useState } from "react";
import { Link } from "react-router-dom";

import { Layout, Menu } from 'antd'
import { DesktopOutlined, UserOutlined } from '@ant-design/icons';

const SideBar = () => {
    const { Sider } = Layout
    const { SubMenu } = Menu

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                    Dashboard
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="Product">
                <Menu.Item key="3">
                    <Link to="/dashboard/product/list">List</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/dashboard/product/add">Add</Link>
                </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}

export default SideBar