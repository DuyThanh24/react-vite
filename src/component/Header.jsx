import React, { useState } from 'react';
import { Menu } from 'antd';
import {UsergroupAddOutlined, HomeOutlined, BookOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const Header = () => {
    const [current, setCurrent] = useState('mail');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: "home",
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/user"}>User</Link>,
            key: 'app',
            icon: <UsergroupAddOutlined />,
        },
        {
            label: <Link to={"/book"}>Books</Link>,
            key: 'SubMenu',
            icon: <BookOutlined />,
            // children: [
            //     {
            //         type: 'group',
            //         label: 'Item 1',
            //         children: [
            //             {
            //                 label: 'Option 1',
            //                 key: 'setting:1',
            //             },
            //             {
            //                 label: 'Option 2',
            //                 key: 'setting:2',
            //             },
            //         ],
            //     },
            //     {
            //         type: 'group',
            //         label: 'Item 2',
            //         children: [
            //             {
            //                 label: 'Option 3',
            //                 key: 'setting:3',
            //             },
            //             {
            //                 label: 'Option 4',
            //                 key: 'setting:4',
            //             },
            //         ],
            //     },
            // ],
        },
        // {
        //     key: 'alipay',
        //     label: (
        //         <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        //             Navigation Four - Link
        //         </a>
        //     ),
        // },
    ];

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal" items={items} />
    )
}
export default Header;