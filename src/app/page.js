'use client';
import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TeamSection from '../components/TeamSection';
import ClientsSection from '../components/ClientsSection';
import CoreValues from '../components/CoreValues';
import servicesData from '../utils/servicesData';
import styles from './page.module.css';

export default function Home() {
  // Display only 3 featured services on the home page
  const featuredServices = servicesData.slice(0, 3);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className={styles.section}>
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12}>
            <div className={styles.aboutImage}>
              <Image 
                src="/images/gallery/IMG_5735.JPG" 
                alt="About AD Shipping Services" 
                width={600} 
                height={400}
                className={styles.image}
              />
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className={styles.aboutContent}>
              <h2>About AD Shipping Services</h2>
              <p className={styles.aboutText}>
                Founded in 2005, AD Shipping Services has established itself as a leading maritime services provider in the UAE. With a commitment to excellence and innovation, we offer comprehensive solutions for all your maritime needs.
              </p>
              <p className={styles.aboutText}>
                Our team of experienced professionals ensures the highest standards of quality and safety in all our operations, from shipbuilding and repairs to port operations and towing assistance.
              </p>
              <Link href="/about">
                <Button type="primary" size="large" className={styles.aboutButton}>
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </section>

      {/* Services Section */}
      <section className={`${styles.section} ${styles.servicesSection}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <p className={styles.sectionDescription}>
            We provide a wide range of maritime services to meet your specific needs
          </p>
        </div>
        <Row gutter={[32, 32]}>
          {featuredServices.map((service) => (
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
        <div className={styles.sectionFooter}>
          <Link href="/services">
            <Button type="primary" size="large">
              View All Services
            </Button>
          </Link>
        </div>
      </section>

      {/* Core Values Section */}
      <CoreValues />

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <Card className={styles.statCard}>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statTitle}>Years of Experience</div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card className={styles.statCard}>
              <div className={styles.statNumber}>200+</div>
              <div className={styles.statTitle}>Projects Completed</div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card className={styles.statCard}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statTitle}>Vessels in Fleet</div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card className={styles.statCard}>
              <div className={styles.statNumber}>300+</div>
              <div className={styles.statTitle}>Satisfied Clients</div>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Clients Section */}
      <ClientsSection />

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
          <p className={styles.ctaText}>
            Contact us today to discuss your maritime needs and discover how our services can benefit your operations.
          </p>
          <Link href="/contact">
            <Button type="primary" size="large" className={styles.ctaButton}>
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
