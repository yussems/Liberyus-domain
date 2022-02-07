import React from "react";
import { Card, Col, Row } from 'antd';
import styles from '../styles/Card.module.css'

function Cards({days,domainName,id,whereToTake}) {
  return (
    <div className={styles.card}>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Cards;
