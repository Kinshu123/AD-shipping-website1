'use client';
import React from 'react';
import { Card, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ServiceCard.module.css';

const ServiceCard = ({ title, description, icon, link }) => {
  return (
    <Card className={styles.serviceCard} hoverable>
      <div className={styles.iconContainer}>
        {icon}
      </div>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.description}>{description}</p>
      <Link href={link}>
        <Button type="link" className={styles.learnMoreBtn}>
          Learn More <ArrowRightOutlined />
        </Button>
      </Link>
    </Card>
  );
};

export default ServiceCard;