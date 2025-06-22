'use client';
import React, { useState, useEffect } from 'react';
import { Typography, Row, Col, Card, Button, Badge, Statistic, Timeline, Tabs } from 'antd';
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
  GlobalOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  MessageOutlined,
  WhatsAppOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  FacebookOutlined,
  CalendarOutlined,
  UserOutlined,
  CheckCircleOutlined,
  RocketOutlined,
  HeartOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import styles from './page.module.css';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;

export default function ContactPage() {
  const [animate, setAnimate] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');

  const breadcrumbs = [
    { label: 'Contact Us' }
  ];

  // Contact statistics
  const contactStats = [
    { title: "Response Time", value: "< 2", suffix: "Hours", icon: <ClockCircleOutlined />, color: "#1890ff" },
    { title: "Projects Completed", value: 500, suffix: "+", icon: <CheckCircleOutlined />, color: "#52c41a" },
    { title: "Happy Clients", value: 300, suffix: "+", icon: <HeartOutlined />, color: "#f5222d" },
    { title: "Years Experience", value: 19, suffix: "+", icon: <SafetyCertificateOutlined />, color: "#722ed1" }
  ];

  // Office locations with enhanced data
  const offices = [
    {
      id: 1,
      name: "Headquarters",
      city: "Jamnagar",
      country: "Gujarat, India",
      address: "PLOT NO.6, NEAR INDANE GAS GODOWN, OPP. RAILWAY STATION, BEDI BUNDAR ROAD, M.P SHAH UDHYOGNAGAR, JAMNAGAR, GUJARAT, INDIA-361008",
      phone: "+91-9909480248",
      email: "adshippingservices@gmail.com",
      manager: "Mr. Amit Vora",
      managerPhone: "+91-9909480248",
      workingHours: "Sunday - Thursday: 8:00 AM - 5:00 PM",
      services: ["Shipbuilding", "Dry Dock", "Marine Services"],
      image: "/images/office-hq.jpg",
      isHeadquarters: true
    },
    {
      id: 2,
      name: "Operations Center",
      city: "Gujarat Port",
      country: "Gujarat, India",
      address: "Gujarat Maritime Board, Bedi Port, Jamnagar District, Gujarat, India",
      phone: "+91-7600271333",
      email: "voratirth1245@gmail.com",
      manager: "Mr. Tirth A Vora",
      managerPhone: "+91-7600271333",
      workingHours: "24/7 Operations Support",
      services: ["Port Operations", "Logistics", "Support Services"],
      image: "/images/office-port.jpg",
      isHeadquarters: false
    }
  ];

  // Contact methods
  const contactMethods = [
    {
      icon: <PhoneOutlined />,
      title: "Call Us",
      description: "Speak directly with our team",
      action: "tel:+919909480248",
      actionText: "+91-9909480248",
      color: "#1890ff",
      available: "24/7 Emergency Support"
    },
    {
      icon: <MailOutlined />,
      title: "Email Us",
      description: "Send us a detailed message",
      action: "mailto:adshippingservices@gmail.com",
      actionText: "adshippingservices@gmail.com",
      color: "#52c41a",
      available: "Response within 2 hours"
    },
    {
      icon: <WhatsAppOutlined />,
      title: "WhatsApp",
      description: "Quick chat for urgent queries",
      action: "https://wa.me/919909480248",
      actionText: "Chat on WhatsApp",
      color: "#25d366",
      available: "Instant messaging"
    },
    {
      icon: <MessageOutlined />,
      title: "Live Chat",
      description: "Real-time support",
      action: "#",
      actionText: "Start Chat",
      color: "#722ed1",
      available: "Mon-Fri 9AM-6PM"
    }
  ];

  // Social media links
  const socialLinks = [
    { icon: <LinkedinOutlined />, url: "#", color: "#0077b5", name: "LinkedIn" },
    { icon: <TwitterOutlined />, url: "#", color: "#1da1f2", name: "Twitter" },
    { icon: <FacebookOutlined />, url: "#", color: "#4267b2", name: "Facebook" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);

    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.fadeIn);
        }
      });
    }, observerOptions);

    // Observe all cards and sections
    const cards = document.querySelectorAll(`.${styles.contactMethodCard}, .${styles.officeCard}, .${styles.supportCard}`);
    cards.forEach(card => observer.observe(card));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.container}>
      <PageHeader title="Contact AD Shipping Services" breadcrumbs={breadcrumbs} />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div className={`${styles.heroContent} ${animate ? styles.slideUp : ''}`}>
                <Badge.Ribbon text="Always Available" color="blue">
                  <div className={styles.heroHeader}>
                    <Title level={1} className={styles.heroTitle}>
                      Let's Start Your Maritime Journey
                    </Title>
                    <Paragraph className={styles.heroSubtitle}>
                      Professional Support When You Need It
                    </Paragraph>
                  </div>
                </Badge.Ribbon>

                <Paragraph className={styles.heroDescription}>
                  Ready to discuss your maritime project? Our experienced team is here to provide
                  expert guidance, detailed quotes, and comprehensive support for all your shipping
                  and maritime service needs. Contact us today and discover why we're the trusted
                  choice for maritime excellence.
                </Paragraph>

                <div className={styles.heroStats}>
                  <Row gutter={[24, 24]}>
                    {contactStats.map((stat, index) => (
                      <Col xs={12} sm={6} key={index}>
                        <Card className={styles.statCard} bordered={false}>
                          <Statistic
                            title={stat.title}
                            value={stat.value}
                            suffix={stat.suffix}
                            prefix={<div className={styles.statIcon} style={{ color: stat.color }}>{stat.icon}</div>}
                            className={styles.statistic}
                          />
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>

                <div className={styles.quickActions}>
                  <Button type="primary" size="large" className={styles.primaryBtn}>
                    <Link href="#contact-form">Get Free Quote</Link>
                  </Button>
                  <Button size="large" className={styles.secondaryBtn}>
                    <Link href="tel:+919909480248">Call Now</Link>
                  </Button>
                </div>
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className={styles.heroImageContainer}>
                <div className={styles.contactMethodsGrid}>
                  {contactMethods.map((method, index) => (
                    <Card key={index} className={styles.contactMethodCard} bordered={false}>
                      <div className={styles.methodIcon} style={{ color: method.color }}>
                        {method.icon}
                      </div>
                      <Title level={5} className={styles.methodTitle}>{method.title}</Title>
                      <Paragraph className={styles.methodDescription}>
                        {method.description}
                      </Paragraph>
                      <Button
                        type="link"
                        className={styles.methodAction}
                        style={{ color: method.color }}
                      >
                        <a href={method.action} target={method.action.startsWith('http') ? '_blank' : '_self'}>
                          {method.actionText}
                        </a>
                      </Button>
                      <div className={styles.methodAvailability}>
                        {method.available}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className={styles.mainContactSection}>
        <div className="container">
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            centered
            size="large"
            className={styles.contactTabs}
          >
            <TabPane tab="Contact Form" key="contact">
              <div className={styles.formSection} id="contact-form">
                <div className={styles.sectionHeader}>
                  <Title level={2} className={styles.sectionTitle}>Send Us a Message</Title>
                  <Paragraph className={styles.sectionDescription}>
                    Fill out the form below and our team will get back to you within 2 hours during business hours.
                  </Paragraph>
                </div>

                <Row gutter={[48, 48]} justify="center">
                  <Col xs={24} lg={16}>
                    <ContactForm />
                  </Col>
                </Row>
              </div>
            </TabPane>

            <TabPane tab="Office Locations" key="locations">
              <div className={styles.locationsSection}>
                <div className={styles.sectionHeader}>
                  <Title level={2} className={styles.sectionTitle}>Our Locations</Title>
                  <Paragraph className={styles.sectionDescription}>
                    Visit us at our offices or contact our regional teams directly.
                  </Paragraph>
                </div>

                <Row gutter={[32, 32]}>
                  {offices.map((office, index) => (
                    <Col xs={24} lg={12} key={office.id}>
                      <Card className={styles.officeCard} bordered={false}>
                        {office.isHeadquarters && (
                          <Badge.Ribbon text="Headquarters" color="blue" className={styles.hqRibbon}>
                            <div className={styles.officeHeader}>
                              <div className={styles.officeIcon}>
                                <EnvironmentOutlined />
                              </div>
                              <div className={styles.officeInfo}>
                                <Title level={3} className={styles.officeTitle}>{office.name}</Title>
                                <Paragraph className={styles.officeLocation}>
                                  {office.city}, {office.country}
                                </Paragraph>
                              </div>
                            </div>
                          </Badge.Ribbon>
                        )}

                        {!office.isHeadquarters && (
                          <div className={styles.officeHeader}>
                            <div className={styles.officeIcon}>
                              <GlobalOutlined />
                            </div>
                            <div className={styles.officeInfo}>
                              <Title level={3} className={styles.officeTitle}>{office.name}</Title>
                              <Paragraph className={styles.officeLocation}>
                                {office.city}, {office.country}
                              </Paragraph>
                            </div>
                          </div>
                        )}

                        <div className={styles.officeDetails}>
                          <div className={styles.officeDetailItem}>
                            <EnvironmentOutlined className={styles.detailIcon} />
                            <div>
                              <div className={styles.detailLabel}>Address</div>
                              <div className={styles.detailValue}>{office.address}</div>
                            </div>
                          </div>

                          <div className={styles.officeDetailItem}>
                            <UserOutlined className={styles.detailIcon} />
                            <div>
                              <div className={styles.detailLabel}>Manager</div>
                              <div className={styles.detailValue}>{office.manager}</div>
                            </div>
                          </div>

                          <div className={styles.officeDetailItem}>
                            <PhoneOutlined className={styles.detailIcon} />
                            <div>
                              <div className={styles.detailLabel}>Phone</div>
                              <div className={styles.detailValue}>
                                <a href={`tel:${office.phone}`}>{office.phone}</a>
                              </div>
                            </div>
                          </div>

                          <div className={styles.officeDetailItem}>
                            <MailOutlined className={styles.detailIcon} />
                            <div>
                              <div className={styles.detailLabel}>Email</div>
                              <div className={styles.detailValue}>
                                <a href={`mailto:${office.email}`}>{office.email}</a>
                              </div>
                            </div>
                          </div>

                          <div className={styles.officeDetailItem}>
                            <ClockCircleOutlined className={styles.detailIcon} />
                            <div>
                              <div className={styles.detailLabel}>Working Hours</div>
                              <div className={styles.detailValue}>{office.workingHours}</div>
                            </div>
                          </div>
                        </div>

                        <div className={styles.officeServices}>
                          <Title level={5} className={styles.servicesTitle}>Services Available:</Title>
                          <div className={styles.servicesTags}>
                            {office.services.map((service, idx) => (
                              <Badge key={idx} count={service} className={styles.serviceTag} />
                            ))}
                          </div>
                        </div>

                        <div className={styles.officeActions}>
                          <Button type="primary" className={styles.officeBtn}>
                            <a href={`tel:${office.phone}`}>Call Office</a>
                          </Button>
                          <Button className={styles.officeSecondaryBtn}>
                            <a href={`mailto:${office.email}`}>Send Email</a>
                          </Button>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </TabPane>

            <TabPane tab="Support Center" key="support">
              <div className={styles.supportSection}>
                <div className={styles.sectionHeader}>
                  <Title level={2} className={styles.sectionTitle}>24/7 Support Center</Title>
                  <Paragraph className={styles.sectionDescription}>
                    Get immediate assistance for urgent maritime needs and emergency support.
                  </Paragraph>
                </div>

                <Row gutter={[32, 32]}>
                  <Col xs={24} lg={12}>
                    <Card className={styles.supportCard} bordered={false}>
                      <div className={styles.supportHeader}>
                        <div className={styles.supportIcon}>
                          <PhoneOutlined />
                        </div>
                        <Title level={3} className={styles.supportTitle}>Emergency Hotline</Title>
                      </div>
                      <Paragraph className={styles.supportDescription}>
                        24/7 emergency support for urgent maritime assistance, vessel breakdowns,
                        and critical operational issues.
                      </Paragraph>
                      <div className={styles.supportContact}>
                        <Button type="primary" size="large" className={styles.emergencyBtn}>
                          <a href="tel:+919909480248">Call Emergency: +91-9909480248</a>
                        </Button>
                      </div>
                      <div className={styles.supportFeatures}>
                        <div className={styles.supportFeature}>
                          <CheckCircleOutlined className={styles.featureIcon} />
                          <span>Immediate Response</span>
                        </div>
                        <div className={styles.supportFeature}>
                          <CheckCircleOutlined className={styles.featureIcon} />
                          <span>Expert Technical Support</span>
                        </div>
                        <div className={styles.supportFeature}>
                          <CheckCircleOutlined className={styles.featureIcon} />
                          <span>Multilingual Assistance</span>
                        </div>
                      </div>
                    </Card>
                  </Col>

                  <Col xs={24} lg={12}>
                    <Card className={styles.supportCard} bordered={false}>
                      <div className={styles.supportHeader}>
                        <div className={styles.supportIcon}>
                          <MessageOutlined />
                        </div>
                        <Title level={3} className={styles.supportTitle}>Live Chat Support</Title>
                      </div>
                      <Paragraph className={styles.supportDescription}>
                        Real-time chat support for general inquiries, project discussions,
                        and technical consultations during business hours.
                      </Paragraph>
                      <div className={styles.supportContact}>
                        <Button size="large" className={styles.chatBtn}>
                          Start Live Chat
                        </Button>
                      </div>
                      <div className={styles.supportHours}>
                        <Title level={5} className={styles.hoursTitle}>Available Hours:</Title>
                        <Timeline size="small" className={styles.hoursTimeline}>
                          <Timeline.Item color="green">Monday - Thursday: 8:00 AM - 5:00 PM</Timeline.Item>
                          <Timeline.Item color="blue">Friday: 8:00 AM - 12:00 PM</Timeline.Item>
                          <Timeline.Item color="gray">Saturday - Sunday: Closed</Timeline.Item>
                        </Timeline>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </section>

      {/* Social Media & Follow Section */}
      <section className={styles.socialSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Title level={2} className={styles.sectionTitle}>Stay Connected</Title>
            <Paragraph className={styles.sectionDescription}>
              Follow us on social media for the latest updates, project showcases, and industry insights.
            </Paragraph>
          </div>

          <div className={styles.socialContainer}>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  type="primary"
                  shape="circle"
                  size="large"
                  className={styles.socialButton}
                  style={{ backgroundColor: social.color, borderColor: social.color }}
                  icon={social.icon}
                  title={social.name}
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer" />
                </Button>
              ))}
            </div>
            <div className={styles.socialCta}>
              <Title level={4} className={styles.socialCtaTitle}>
                Join Our Maritime Community
              </Title>
              <Paragraph className={styles.socialCtaText}>
                Get exclusive insights, project updates, and industry news delivered to your feed.
              </Paragraph>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <Title level={2} className={styles.ctaTitle}>
              Ready to Start Your Maritime Project?
            </Title>
            <Paragraph className={styles.ctaDescription}>
              Contact our expert team today for a free consultation and detailed project quote.
              Let's bring your maritime vision to life with professional excellence.
            </Paragraph>
            <div className={styles.ctaActions}>
              <Button type="primary" size="large" className={styles.ctaPrimary}>
                <Link href="#contact-form">Get Free Quote</Link>
              </Button>
              <Button size="large" className={styles.ctaSecondary}>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
            <div className={styles.ctaContact}>
              <div className={styles.ctaContactItem}>
                <PhoneOutlined className={styles.ctaContactIcon} />
                <span>Emergency: +91-9909480248</span>
              </div>
              <div className={styles.ctaContactItem}>
                <MailOutlined className={styles.ctaContactIcon} />
                <span>adshippingservices@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}