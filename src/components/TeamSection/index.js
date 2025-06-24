'use client';
import React from 'react';
import { Row, Col, Card, Avatar } from 'antd';
import { LinkedinOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import styles from './TeamSection.module.css';

const { Meta } = Card;

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Mr. Amit R. Vora',
      position: 'Chairman',
      bio: 'Responsible for the overall business development and vision of the Company.',
      image: '/images/team/amit-vora.jpg',
      email: 'voratirth1245@gmail.com',
      phone: '+91-9909480248',
    },
    {
      id: 2,
      name: 'Mr. Tirth A. Vora',
      position: 'Managing Director',
      bio: 'Responsible for operations & business development-relations of the Company.',
      image: '/images/team/tirth-vora.jpg',
      email: 'adshippingservices@gmail.com',
      phone: '+91-7600271333',
    },
  ];

  return (
    <div className={styles.teamSection}>
      <h2 className={styles.sectionTitle}>Our Leadership</h2>
      <p className={styles.sectionDescription}>
        Our experienced leadership team brings decades of maritime expertise to deliver exceptional service and innovative solutions.
      </p>
      
      <Row gutter={[32, 32]} justify="center">
        {teamMembers.map((member) => (
          <Col xs={24} sm={24} md={12} lg={12} xl={12} key={member.id}>
            <Card className={styles.teamCard} hoverable>
              <div className={styles.cardContent}>
               
                <div className={styles.memberInfo}>
                  <h4 className={styles.memberName}>{member.name}</h4>
                  <span className={styles.memberPosition}>{member.position}</span>
                  <p className={styles.memberBio}>{member.bio}</p>
                  <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                      <MailOutlined className={styles.contactIcon} />
                      <a href={`mailto:${member.email}`} className={styles.contactLink}>{member.email}</a>
                    </div>
                    <div className={styles.contactItem}>
                      <PhoneOutlined className={styles.contactIcon} />
                      <a href={`tel:${member.phone}`} className={styles.contactLink}>{member.phone}</a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TeamSection;