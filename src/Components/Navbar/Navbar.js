import { Typography } from 'antd';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import {Button, Menu, Typogrpahy, Avatar} from 'antd';
import icon from '../Navbar/cryptocurrency.png'
import MenuItem from 'antd/lib/menu/MenuItem';
import "../../App.css";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BulbOutlined,
  MoneyCollectOutlined,
  HomeOutlined,
  FundOutlined,
} from '@ant-design/icons';


function Navbar() {
    return ( 
        <div className='nav-container'>
          <div className='logo-container'>

        <Avatar shape='circle' src={icon} size='small'/> 
        <Typography.Title level={2} className='logo'>
<Link to='/'>Cryptoverse</Link>
        </Typography.Title>
       
        </div>
        <div className='ant-menu'>

        
        <Menu  theme='dark'>
          <Menu.Item icon={<HomeOutlined/>}>
          <Link to='/'>
          Home
          </Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined/>}>
          <Link to='/Cryptocurrencies'>
          Crypocurrencies
          </Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined/>}>
          <Link to='/Exchanges'>
          Exchanges
          </Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined/>}>
          <Link to='/News'>
          News
          </Link>
          </Menu.Item>
        </Menu>
        </div>
      </div>

     );
}

export default Navbar;