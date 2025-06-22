'use client';
import React from 'react';
import { Typography, Row, Col, Card, Button } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, ClockCircleOutlined } from '@ant-design/icons';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import styles from './page.module.css';

const { Title, Paragraph } = Typography;

export default function ContactPage() {
  const breadcrumbs = [
    { label: 'Contact' }
  ];

  return (
    <div className={styles.container}>
      <PageHeader title="Contact Us" breadcrumbs={breadcrumbs} />
      
      {/* Contact Information */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Title level={2} className={styles.sectionTitle}>Get In Touch</Title>
          <Paragraph className={styles.sectionDescription}>
            We're here to answer any questions you may have about our maritime services. Reach out to us and we'll respond as soon as we can.
          </Paragraph>
        </div>
        
        <Row gutter={[32, 32]}>
          <Col xs={24} md={16}>
            <div className={styles.mapContainer}>
              {/* In a real application, this would be an actual map component */}
              <div className={styles.mapPlaceholder}>
                <img 
                  src="/images/map.svg" 
                  alt="Office Location Map" 
                  className={styles.mapImage}
                />
              </div>
            </div>
          </Col>
          
          <Col xs={24} md={8}>
            <div className={styles.contactInfoContainer}>
              <Card className={styles.contactCard}>
                <div className={styles.contactItem}>
                  <EnvironmentOutlined className={styles.contactIcon} />
                  <div>
                    <h3 className={styles.contactLabel}>Address</h3>
                    <p className={styles.contactText}>
                      PLOT NO.6, NEAR INDANE GAS GODOWN,<br />
                      OPP. RAILWAY STATION, BEDI BUNDAR ROAD,<br />
                      M.P SHAH UDHYOGNAGAR, JAMNAGAR,<br />
                      GUJARAT, INDIA-361008.
                    </p>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <PhoneOutlined className={styles.contactIcon} />
                  <div>
                    <h3 className={styles.contactLabel}>Phone</h3>
                    <p className={styles.contactText}>
                      Mr. Amit Vora: +91-9909480248<br />
                      Mr. Tirth A Vora: +91-7600271333
                    </p>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <MailOutlined className={styles.contactIcon} />
                  <div>
                    <h3 className={styles.contactLabel}>Email</h3>
                    <p className={styles.contactText}>
                      adshippingservices@gmail.com<br />
                      voratirth1245@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className={styles.contactItem}>
                  <ClockCircleOutlined className={styles.contactIcon} />
                  <div>
                    <h3 className={styles.contactLabel}>Working Hours</h3>
                    <p className={styles.contactText}>
                      Sunday - Thursday: 8:00 AM - 5:00 PM<br />
                      Friday - Saturday: Closed<br />
                      24/7 Emergency Support Available
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </section>
      
      {/* Contact Form Section */}
      <section className={`${styles.section} ${styles.formSection}`}>
        <div className={styles.sectionHeader}>
          <Title level={2} className={styles.sectionTitle}>Send Us a Message</Title>
          <Paragraph className={styles.sectionDescription}>
            Fill out the form below and our team will get back to you as soon as possible.
          </Paragraph>
        </div>
        
        <Row gutter={[32, 32]} justify="center">
          <Col xs={24} md={16} lg={12}>
            <ContactForm />
          </Col>
        </Row>
      </section>
      
      {/* Offices Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Title level={2} className={styles.sectionTitle}>Our Offices</Title>
          <Paragraph className={styles.sectionDescription}>
            Visit us at one of our offices across the UAE.
          </Paragraph>
        </div>
        
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={8}>
            <Card className={styles.officeCard}>
              <div className={styles.officeImageContainer}>
                <img 
                  src="/images/office-abudhabi.svg" 
                  alt="Abu Dhabi Office" 
                  className={styles.officeImage}
                />
              </div>
              <div className={styles.officeContent}>
                <Title level={3} className={styles.officeTitle}>Abu Dhabi (HQ)</Title>
                <p className={styles.officeAddress}>
                  <EnvironmentOutlined /> Port Zayed, Abu Dhabi, UAE
                </p>
                <p className={styles.officePhone}>
                  <PhoneOutlined /> +971 2 123 4567
                </p>
              </div>
            </Card>
          </Col>
          
          <Col xs={24} sm={12} md={8}>
            <Card className={styles.officeCard}>
              <div className={styles.officeImageContainer}>
                <img 
                  src="/images/office-dubai.svg" 
                  alt="Dubai Office" 
                  className={styles.officeImage}
                />
              </div>
              <div className={styles.officeContent}>
                <Title level={3} className={styles.officeTitle}>Dubai</Title>
                <p className={styles.officeAddress}>
                  <EnvironmentOutlined /> Jebel Ali Port, Dubai, UAE
                </p>
                <p className={styles.officePhone}>
                  <PhoneOutlined /> +971 4 987 6543
                </p>
              </div>
            </Card>
          </Col>
          
          <Col xs={24} sm={12} md={8}>
            <Card className={styles.officeCard}>
              <div className={styles.officeImageContainer}>
                <img 
                  src="/images/office-fujairah.svg" 
                  alt="Fujairah Office" 
                  className={styles.officeImage}
                />
              </div>
              <div className={styles.officeContent}>
                <Title level={3} className={styles.officeTitle}>Fujairah</Title>
                <p className={styles.officeAddress}>
                  <EnvironmentOutlined /> Fujairah Port, Fujairah, UAE
                </p>
                <p className={styles.officePhone}>
                  <PhoneOutlined /> +971 9 765 4321
                </p>
              </div>
            </Card>
          </Col>
        </Row>
      </section>
      
      {/* Bottom CTA Section */}
      <section className={styles.bottomCtaSection}>
        <div className={styles.ctaOverlay}></div>
        <div className={styles.ctaContent}>
          <Title level={2} className={styles.ctaTitle}>Ready to Work With Us?</Title>
          <Paragraph className={styles.ctaDescription}>
            Contact our team today to discuss your maritime service needs.
          </Paragraph>
          <Button type="primary" size="large" className={styles.ctaButton}>
            Get a Quote
          </Button>
        </div>
      </section>
    </div>
  );
}