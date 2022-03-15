import { useState } from "react";
import { Link } from "react-router-dom";

import { Layout, Menu } from 'antd'
import { ShoppingCartOutlined, BarChartOutlined, CalendarOutlined } from '@ant-design/icons';

import "./Sidebar.css"

const SideBar = () => {
    const { Sider } = Layout
    const { SubMenu } = Menu

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
            <Menu defaultSelectedKeys={['2']} mode="inline">
                <SubMenu key="sub1" icon={<ShoppingCartOutlined />} title="Sản phẩm">
                    <Menu.Item key="3">
                        <Link to="/dashboard/product/list">Tất cả</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/dashboard/product/add">Thêm sản phẩm</Link>
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="sub4" icon={<ShoppingCartOutlined />} title="Danh mục">
                    <Menu.Item key="5">
                        <Link to="/dashboard/category/list">Tất cả</Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to="/dashboard/category/add">Thêm danh mục</Link>
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="sub2" icon={<CalendarOutlined />} title="Đơn hàng">
                    <Menu.Item key="7">
                        <Link to="/dashboard/product/list">Tất cả</Link>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <Link to="/dashboard/product/add">Đơn hủy</Link>
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="sub3" icon={<BarChartOutlined />} title="Thêm">
                    <Menu.Item key="9">
                        <Link to="/dashboard/product/list">Doang thu</Link>
                    </Menu.Item>
                    <Menu.Item key="10">
                        <Link to="/dashboard/product/list">Mã giảm giá</Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}

export default SideBar