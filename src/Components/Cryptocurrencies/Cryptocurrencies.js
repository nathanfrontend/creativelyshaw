import { Card, Input } from "antd";
import { Typography, Row, Col, Statistic } from "antd";
import millify from "millify";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import Loader from "./Loader";
function Cryptocurrencies({ simplified }) {
  const count = simplified ? 10 : 100;

  const { data, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setcryptos] = useState(data?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
      setcryptos(data?.data?.coins)
    const filteredData = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setcryptos(filteredData);
  }, [data, searchTerm]);
  console.log(cryptos);
  if (isFetching) return <Loader/>;
  return (
    <>
        {!simplified && (
   <div className="search-crypto">
   <Input
     placeholder="Search"
     onChange={(e) => setSearchTerm(e.target.value)}
   />
 </div>
        )}
   
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((item) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={item.uuid}>
                <Link  to={`/crypto/${item.uuid}`}>
            <Card
              title={`${item.rank}. ${item.name}`}
              extra={<img className="crypto-image" src={item.iconUrl} />}
              hoverable
              key={item.uuid}
            >
          <p>Price: {millify(item.price)}</p>
                <p>Market Cap: {millify(item.marketCap)}</p>
                <p>Daily Change: {item.change}%</p>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Cryptocurrencies;
