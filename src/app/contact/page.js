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
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps?q=PLOT+NO.6,+NEAR+INDANE+GAS+GODOWN,+OPP.+RAILWAY+STATION,+BEDI+BUNDAR+ROAD,+M.P+SHAH+UDHYOGNAGAR,+JAMNAGAR,+GUJARAT,+INDIA-361008&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
      
      {/* FAQ Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <Title level={2} className={styles.sectionTitle}>Frequently Asked Questions</Title>
        </div>
        <Row justify="center">
          <Col xs={24} md={18} lg={14}>
            <div className={styles.faqList}>
              <div className={styles.faqItem}>
                <h4>How can I get a quote for your services?</h4>
                <p>You can use the contact form above, call us, or reach out via WhatsApp for a quick response.</p>
              </div>
              <div className={styles.faqItem}>
                <h4>Do you provide emergency maritime support?</h4>
                <p>Yes, we offer 24/7 emergency support. Please use the phone numbers or WhatsApp links provided.</p>
              </div>
              <div className={styles.faqItem}>
                <h4>Where are you located?</h4>
                <p>Our main office is in Jamnagar, Gujarat, India. See the map above for our exact location.</p>
              </div>
              <div className={styles.faqItem}>
                <h4>What regions do you serve?</h4>
                <p>We serve clients across India and internationally. Contact us for specific inquiries.</p>
              </div>
            </div>
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