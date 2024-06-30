import React, { useState } from 'react';
import { Menu } from 'antd';
import {
    UsergroupAddOutlined,
    HomeOutlined,
    BookOutlined,
    SettingOutlined,
    LoginOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';


const Header = () => {
    const [current, setCurrent] = useState('mail');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const items = [
        {
            label: <Link style={{ color: "white" }} to={"/"}>Home</Link>,
            key: "home",
            icon: <HomeOutlined style={{ color: "white" }} />,
        },
        {
            label: <Link style={{ color: "white" }} to={"/user"}>User</Link>,
            key: 'app',
            icon: <UsergroupAddOutlined style={{ color: "white" }} />,
        },
        {
            label: <Link style={{ color: "white" }} to={"/book"}>Books</Link>,
            key: 'SubMenu',
            icon: <BookOutlined style={{ color: "white" }} />,
        },
        {
            label: <span style={{ color: "white" }} >Cài đặt</span>,
            key: 'log',
            icon: <SettingOutlined style={{ color: "white" }} />,
            children: [
                {
                    type: 'group',
                    children: [
                        {
                            label: <Link style={{ fontWeight: "bold" }} to={"/login"}>Đăng nhập</Link>,
                            key: 'login',
                        },
                        {
                            label: <Link style={{ fontWeight: "bold" }} to={"/book"}>Đăng xuất  </Link>,
                            key: 'logout',
                        },
                    ],
                },

            ],
        },

    ];

    return (
        <Menu
            style={{
                backgroundColor: "rgb(20, 111, 201)",
                fontWeight: "bold",
                padding: "10px",
            }}
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal" items={items} />
    )
}
export default Header;