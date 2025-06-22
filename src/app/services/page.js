'use client';
import React from 'react';
import { Typography, Row, Col, Divider, List, Card } from 'antd';
import Image from 'next/image';
import PageHeader from '../../components/PageHeader';
import ServiceCard from '../../components/ServiceCard';
import servicesData from '../../utils/servicesData';
import styles from './page.module.css';

const { Title, Paragraph } = Typography;

export default function ServicesPage() {
  const breadcrumbs = [
    { label: 'Services' }
  ];

  return (
    <div className={styles.container}>
      <PageHeader title="Our Services" breadcrumbs={breadcrumbs} />
      
      {/* Services Overview */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Title level={2} className={styles.sectionTitle}>Comprehensive Marine Solutions</Title>
          <Paragraph className={styles.sectionDescription}>
            AD Shipping Services is a leading shipbuilder and marine service provider with extensive experience in shipbuilding, modifications, dry-docking, and marine support services. Our commitment to quality, safety, and customer satisfaction makes us the preferred choice for maritime solutions in India and beyond.
          </Paragraph>
        </div>
        
        <Row gutter={[32, 32]}>
          {servicesData.map((service) => (
            <Col xs={24} md={8} key={service.id}>
              <ServiceCard 
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
              />
            </Col>
          ))}
        </Row>
      </section>
      
      {/* Detailed Service Descriptions */}
      {servicesData.map((service) => (
        <section className={styles.serviceDetailSection} key={service.id} id={service.link.split('#')[1]}>
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={12} className={service.id % 2 === 0 ? styles.orderMobile2 : ''}>
              <div className={styles.serviceImage}>
                <Image 
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className={styles.image}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/placeholder-service.jpg';
                  }}
                />
              </div>
            </Col>
            <Col xs={24} md={12} className={service.id % 2 === 0 ? styles.orderMobile1 : ''}>
              <div className={styles.serviceContent}>
                <Title level={2}>{service.title}</Title>
                <Paragraph className={styles.serviceOverview}>
                  {service.details.overview}
                </Paragraph>
                
                <Divider orientation="left">Key Features</Divider>
                <List
                  dataSource={service.details.features}
                  renderItem={(item) => (
                    <List.Item className={styles.featureItem}>
                      <div className={styles.featureBullet}></div>
                      {item}
                    </List.Item>
                  )}
                />
                
                <Divider orientation="left">Our Process</Divider>
                <Paragraph className={styles.serviceProcess}>
                  {service.details.process}
                </Paragraph>
              </div>
            </Col>
          </Row>
        </section>
      ))}
      
      {/* Why Choose Us */}
      <section className={`${styles.section} ${styles.whyChooseSection}`}>
        <div className={styles.sectionHeader}>
          <Title level={2} className={styles.sectionTitle}>Why Choose Our Services</Title>
          <Paragraph className={styles.sectionDescription}>
            When you partner with AD Shipping Services, you benefit from our commitment to excellence, safety, and customer satisfaction.
          </Paragraph>
        </div>
        
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <Card className={styles.whyChooseCard}>
              <div className={styles.whyChooseIcon}>
                <Image 
                  src="/images/experience-icon.svg" 
                  alt="Experience" 
                  width={60} 
                  height={60}
                />
              </div>
              <Title level={3} className={styles.whyChooseTitle}>Industry Experience</Title>
              <Paragraph className={styles.whyChooseText}>
                With over 15 years in the maritime industry, we bring extensive knowledge and expertise to every project.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className={styles.whyChooseCard}>
              <div className={styles.whyChooseIcon}>
                <Image 
                  src="/images/quality-icon.svg" 
                  alt="Quality" 
                  width={60} 
                  height={60}
                />
              </div>
              <Title level={3} className={styles.whyChooseTitle}>Quality Assurance</Title>
              <Paragraph className={styles.whyChooseText}>
                We adhere to the highest standards of quality in all our services, ensuring reliable and durable solutions.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className={styles.whyChooseCard}>
              <div className={styles.whyChooseIcon}>
                <Image 
                  src="/images/safety-icon.svg" 
                  alt="Safety" 
                  width={60} 
                  height={60}
                />
              </div>
              <Title level={3} className={styles.whyChooseTitle}>Safety First</Title>
              <Paragraph className={styles.whyChooseText}>
                Safety is our top priority, with comprehensive protocols and regular training to ensure secure operations.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
}