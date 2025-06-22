'use client';
import React from 'react';
import { Card, Descriptions, Badge } from 'antd';
import Image from 'next/image';
import styles from './FleetCard.module.css';

const FleetCard = ({ vessel }) => {
  const { name, type, image, specs, year, capacity } = vessel;

  return (
    <Card className={styles.fleetCard} hoverable>
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={name}
          width={400}
          height={250}
          className={styles.vesselImage}
        />
        <Badge.Ribbon text={type} color="blue" className={styles.ribbon} />
      </div>
      <div className={styles.contentContainer}>
        <h4 className={styles.vesselName}>{name}</h4>
        
        <Descriptions bordered column={1} size="small" className={styles.specs}>
          <Descriptions.Item label="Type">{type}</Descriptions.Item>
          <Descriptions.Item label="Engine">{specs.engine}</Descriptions.Item>
          <Descriptions.Item label="Dimensions">{specs.dimensions}</Descriptions.Item>
          <Descriptions.Item label="Year Built">{year}</Descriptions.Item>
          <Descriptions.Item label="Capacity">{capacity}</Descriptions.Item>
          {specs.bollardPull && (
            <Descriptions.Item label="Bollard Pull">{specs.bollardPull}</Descriptions.Item>
          )}
        </Descriptions>
      </div>
    </Card>
  );
};

export default FleetCard;