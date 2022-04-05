import React, { useState, useEffect } from "react";
import { Select, Typography, Col, Row, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import "./Loader";
import Loader from "./Loader";
const { Title, Text } = Typography;
const { Option } = Select;
function News({ count, simplified }) {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data, isFetching } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 6 : 12,
  });
  const [newsdata, setNews] = useState(cryptoNews);

  useEffect(() => {
    setNews(cryptoNews);
  }, [cryptoNews]);
  console.log(cryptoNews);
  if (!newsdata?.value) return <Loader />;
  return (
    <div>
      <Row gutter={[24, 24]} className="news-card-container">
        {!simplified && (
          <Col span={24}>
            <Select
            allowClear='true'
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value) => setNewsCategory(value)}
              filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
              
            >
              <Option value="Cryptocurrency">Cryptocurrency</Option>
              {data?.data?.coins.map((coin) => (
                <Option value={coin.name}>{coin.name}</Option>
              ))}
            </Select>
          </Col>
        )}
        {newsdata.value.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.name}
                  </Title>
                  <img
                    style={{ maxHeight: "200px", maxHeight: "100px" }}
                    src={news?.image?.thumbnail?.contentUrl}
                    alt=""
                  />
                </div>
                <p>
                  {news.description.length > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={news.provider[0]?.image?.thumbnail?.contentUrl}
                      alt=""
                    />
                    <Text className="provider-name">
                      {news.provider[0]?.name}
                    </Text>
                  </div>
                  {/* Moment allows me to take a snapshot of how much times elapsed from a date ss = stting */}
                  <Text>
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default News;
