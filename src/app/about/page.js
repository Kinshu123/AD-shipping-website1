'use client';
import React from 'react';
import { Typography, Row, Col, Card, Timeline, Avatar } from 'antd';
import Image from 'next/image';
import PageHeader from '../../components/PageHeader';
import TeamSection from '../../components/TeamSection';
import styles from './page.module.css';
import { SafetyCertificateOutlined, TeamOutlined, RocketOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function AboutPage() {
  const breadcrumbs = [
    { label: 'About' }
  ];

  return (
    <div className={styles.container}>
      <PageHeader title="About Us" breadcrumbs={breadcrumbs} />
      
      {/* Company Overview */}
      <section className={styles.section}>
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12}>
            <div className={styles.content}>
              <Title level={2}>Our Company</Title>
              <Paragraph className={styles.paragraph}>
                AD SHIPPING SERVICES is an Indian shipbuilder managed by an experienced and capable team. The promoters have been involved in various verticals of shipping industry since the last two decades, hence A D Shipping Services has a trusted reputation, reliable commercial and administrative capabilities, professionalism and a strong industrial network.
              </Paragraph>
              <Paragraph className={styles.paragraph}>
                We recognize that in the ever-changing shipping industry, we have to always keep in view the possible market changes and requirement of customers while ensuring that the assets acquired and placed for operation are efficient as well as commercially-viable.
              </Paragraph>
              <Paragraph className={styles.paragraph}>
                As an Indian family-owned company, we are confident about the growth and bright prospects of business in line with the MARITIME INDIA VISION 2030 and A D Shipping Services will continue and contribute to be a part of the success story of our country.
              </Paragraph>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className={styles.imageContainer}>
              <Image 
                src="/images/gallery/IMG_0292.JPG" 
                alt="AD Shipping Services Headquarters" 
                width={600} 
                height={400}
                className={styles.image}
              />
            </div>
          </Col>
        </Row>
      </section>
      
      {/* Mission, Vision, Values */}
      <section className={`${styles.section} ${styles.missionSection}`}>
        <div className={styles.sectionHeader}>
          <Title level={2} className={styles.sectionTitle}>Our Mission, Vision & Values</Title>
        </div>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={8}>
            <Card className={styles.mvvCard}>
              <div className={styles.mvvIcon}>
                <Image 
                  src="/images/mission-icon.svg" 
                  alt="Mission" 
                  width={60} 
                  height={60}
                />
              </div>
              <Title level={3} className={styles.mvvTitle}>Our Mission</Title>
              <Paragraph className={styles.mvvText}>
                We as a local company aim to provide reliable, modern and cost-effective services which are compliant with the highest applicable quality, safety and environmental standards.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className={styles.mvvCard}>
              <div className={styles.mvvIcon}>
                <Image 
                  src="/images/vision-icon.svg" 
                  alt="Vision" 
                  width={60} 
                  height={60}
                />
              </div>
              <Title level={3} className={styles.mvvTitle}>Our Vision</Title>
              <Paragraph className={styles.mvvText}>
                We aspire to be the "First Choice" as marine services provider in India.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card className={styles.mvvCard}>
              <div className={styles.mvvIcon}>
                <Image 
                  src="/images/values-icon.svg" 
                  alt="Values" 
                  width={60} 
                  height={60}
                />
              </div>
              <Title level={3} className={styles.mvvTitle}>Our Values</Title>
              <Paragraph className={styles.mvvText}>
                • Uncompromising attitude towards safety and environment.<br />
                • Focus on development & implementation of innovative and cost-effective processes in line with customer and market needs.<br />
                • Organize regular training programs for our staff to upgrade and improve their skills.<br />
                • Teamwork & clear communication.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </section>
      
      {/* Company History */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Title level={2} className={styles.sectionTitle}>Our History</Title>
          <Paragraph className={styles.sectionDescription}>
            The journey of AD Shipping Services from its founding to becoming a leading maritime services provider
          </Paragraph>
        </div>
        <div className={styles.timelineContainer}>
          <Timeline mode="alternate" items={[
            {
              children: (
                <div className={styles.timelineItem}>
                  <Title level={4}>2005</Title>
                  <Paragraph>
                    AD Shipping Services was founded in Abu Dhabi with a small fleet of tugboats, offering basic towing services.
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div className={styles.timelineItem}>
                  <Title level={4}>2008</Title>
                  <Paragraph>
                    Expanded services to include vessel repairs and maintenance, establishing our first dry-docking facility.
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div className={styles.timelineItem}>
                  <Title level={4}>2012</Title>
                  <Paragraph>
                    Entered the shipbuilding sector, focusing on custom vessel construction for the oil and gas industry.
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div className={styles.timelineItem}>
                  <Title level={4}>2015</Title>
                  <Paragraph>
                    Celebrated 10 years of operations and expanded our fleet to include offshore supply vessels and crew boats.
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div className={styles.timelineItem}>
                  <Title level={4}>2018</Title>
                  <Paragraph>
                    Began offering specialized SPM operations services, becoming a key player in the offshore loading and unloading sector.
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div className={styles.timelineItem}>
                  <Title level={4}>2020</Title>
                  <Paragraph>
                    Implemented advanced digital solutions across all operations, enhancing efficiency and service quality.
                  </Paragraph>
                </div>
              ),
            },
            {
              children: (
                <div className={styles.timelineItem}>
                  <Title level={4}>Present</Title>
                  <Paragraph>
                    Continuing to grow and innovate, with a focus on sustainable practices and expanding our presence in the Middle East and beyond.
                  </Paragraph>
                </div>
              ),
            },
          ]} />
        </div>
      </section>
      
      {/* Team Section */}
      <TeamSection />
    </div>
  );
}