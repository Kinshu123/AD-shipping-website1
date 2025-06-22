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
      
      {/* Why Choose Us Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Title level={2} className={styles.sectionTitle}>Why Choose Us</Title>
          <Paragraph className={styles.sectionDescription}>
            Discover what sets AD Shipping Services apart and why clients trust us for their maritime needs.
          </Paragraph>
        </div>
        <Row gutter={[32, 32]} justify="center">
          <Col xs={24} md={6}>
            <Card className={styles.mvvCard}>
              <div className={styles.mvvIcon}>
                <Image src="/images/quality-icon.svg" alt="Quality" width={60} height={60} />
              </div>
              <Title level={4} className={styles.mvvTitle}>Unmatched Quality</Title>
              <Paragraph className={styles.mvvText}>
                We adhere to the highest standards of quality and safety in every project we undertake.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card className={styles.mvvCard}>
              <div className={styles.mvvIcon}>
                <Image src="/images/safety-icon.svg" alt="Safety" width={60} height={60} />
              </div>
              <Title level={4} className={styles.mvvTitle}>Safety First</Title>
              <Paragraph className={styles.mvvText}>
                Our uncompromising attitude towards safety ensures peace of mind for our clients and staff.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card className={styles.mvvCard}>
              <div className={styles.mvvIcon}>
                <Image src="/images/experience-icon.svg" alt="Experience" width={60} height={60} />
              </div>
              <Title level={4} className={styles.mvvTitle}>Experienced Team</Title>
              <Paragraph className={styles.mvvText}>
                Our leadership and crew bring decades of maritime expertise to every project.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={6}>
            <Card className={styles.mvvCard}>
              <div className={styles.mvvIcon}>
                <Image src="/images/values-icon.svg" alt="Values" width={60} height={60} />
              </div>
              <Title level={4} className={styles.mvvTitle}>Client Focused</Title>
              <Paragraph className={styles.mvvText}>
                We build long-term relationships by understanding and meeting our clients' unique needs.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </section>
      
      {/* Team Section */}
      <TeamSection />
    </div>
  );
}