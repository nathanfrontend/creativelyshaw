import { Typography, Row, Col, Statistic } from "antd";
import { configureStore } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { cryptoApi } from "../../services/cryptoApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import "../../App.css";
import milify from 'millify'
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from "..";
import Loader from "../News/Loader";
const { Title } = Typography;
function Home() {
  const {data, isFetching} = useGetCryptosQuery(10);
if(isFetching) return <Loader/>;
  // console.log(data);

  return (
    <>
      <Title level={2} className="heading">
        {" "}
        Global Crypto Statistics
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={data.data.stats.total}/>
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={milify(data.data.stats.totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap"  value={milify(data.data.stats.totalMarketCap)}/>
        </Col>
        <Col span={12}>
          <Statistic title="Total 24hr Volume" value={milify(data.data.stats.total24hVolume)}/>
        </Col>

        <Col span={12}>
          <Statistic title="Total Markets" value={milify(data.data.stats.totalMarkets)}/>
        </Col>
      </Row>
      <div className="home-heading-container"> 
      <Title level={2} className="heading">Top 10 Cryptocurrencies in the world</Title>
      <Title level={3} className="show-more"> <Link to='/Cryptocurrencies'>Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className="home-heading-container"> 
      <Title level={2} className="heading">Latest Crypto News</Title>
      <Title level={3} className="show-more"> <Link to='/News'>Show More</Link></Title>
      </div>
      <News simplified/>
  
    </>
    
  );
}

export default Home;
