import React, {useState} from 'react'
import {Select, Typography, Row, Col, Avatar, Card} from "antd";
import moment from "moment"
import {useGetCryptoNewsQuery} from "../services/cryptoNews";
// import "./crypto.css"
import Loader from "./Loader"
import { useGetCryptosQuery } from '../services/cryptoAPI';
import { captureRejectionSymbol } from 'events';
const {Text, Title} = Typography;
const {Option} = Select;
const demoImage = "https://i.ibb.co/Z11pcGG/cryptocurrency.png"
function News({simplified}) {
  const[newsCategory, setNewsCategory] = useState(" cryptoCurrency")

  const {data : cryptoNews} = useGetCryptoNewsQuery({newsCategory, count   : simplified ? 6 : 40})
  
    const {data} = useGetCryptosQuery(100);
  if(!cryptoNews?.value) return  <Loader/>
  return (
    <div className = "otherPagesContainer">
     {!simplified && (
       <Col span = {24}>
         <Select 
            showSearch
            className  = "select-news"
            placeholder = "select a crypto news"
            optionFilterProp = "children"
            onChange = {(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
         >
             <Option value = "Cryptocurrency">  Cryptocurrency     </Option>
                     {data?.data?.coins?.map((currency)=> <Option value = {currency.name}>{currency.name}</Option>)}
      

         </Select>
       </Col>
     )}


       <Row gutter = {[8, 32]}>
            {
              cryptoNews.value.map((news, i) => (
                  <Col xs = {24} sm ={12} key = {i} className = "newsCol">
                         <Card hoverable className="news-card">
                 <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.name}</Title>
                <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
              </div>
              <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                  <Text className="provider-name">{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
                  </Col>
              ))
            }
       </Row>
       </div>
  )
}

export default News
