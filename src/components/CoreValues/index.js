'use client';
import React from 'react';
import { Row, Col, Card } from 'antd';
import {
  SafetyOutlined,
  TeamOutlined,
  StarOutlined,
  RocketOutlined
} from '@ant-design/icons';
import styles from './CoreValues.module.css';

const CoreValues = () => {
  const values = [
    {
      icon: <SafetyOutlined className={styles.valueIcon} />,
      title: 'Safety First',
      description: 'We prioritize the safety of our team, clients, and environment in every operation.'
    },
    {
      icon: <TeamOutlined className={styles.valueIcon} />,
      title: 'Team Excellence',
      description: 'Our skilled professionals work together to deliver exceptional results.'
    },
    {
      icon: <StarOutlined className={styles.valueIcon} />,
      title: 'Quality Service',
      description: 'We maintain the highest standards in all our maritime solutions.'
    },
    {
      icon: <RocketOutlined className={styles.valueIcon} />,
      title: 'Innovation',
      description: 'We embrace new technologies to improve our services and operations.'
    }
  ];

  return (
    <section className={styles.coreValues}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Our Core Values</h2>
        <p className={styles.sectionDescription}>
          Guiding principles that define our work and commitment to excellence
        </p>
      </div>
      <Row gutter={[32, 32]} className={styles.valuesContainer}>
        {values.map((value, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card className={styles.valueCard}>
              <div className={styles.valueContent}>
                <div className={styles.valueIconContainer}>
                  {value.icon}
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default CoreValues;
