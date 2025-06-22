'use client';
import React, { useState } from 'react';
import { Card, Row, Col, Switch, Typography, Space, Divider } from 'antd';
import Logo from '../Logo';
import AnimatedLogo from '../AnimatedLogo';
import styles from './LogoShowcase.module.css';

const { Title, Text } = Typography;

const LogoShowcase = () => {
  const [showAnimated, setShowAnimated] = useState(false);

  const logoVariants = [
    { name: 'Default', variant: 'default', background: '#ffffff' },
    { name: 'White', variant: 'white', background: '#f8fafc' },
    { name: 'Dark', variant: 'dark', background: '#1e293b' },
    { name: 'Minimal', variant: 'minimal', background: '#ffffff' }
  ];

  const logoSizes = [
    { name: 'Large', width: 200, height: 60 },
    { name: 'Medium', width: 150, height: 45 },
    { name: 'Small', width: 120, height: 36 }
  ];

  return (
    <div className={styles.showcase}>
      <div className={styles.header}>
        <Title level={2}>AD Shipping Services - Logo Showcase</Title>
        <Text type="secondary">
          Professional logo designs created with code for your maritime business
        </Text>
        
        <div className={styles.controls}>
          <Space>
            <Text>Show Animated Version:</Text>
            <Switch 
              checked={showAnimated} 
              onChange={setShowAnimated}
              checkedChildren="Animated"
              unCheckedChildren="Static"
            />
          </Space>
        </div>
      </div>

      <Divider />

      {/* Logo Variants */}
      <div className={styles.section}>
        <Title level={3}>Logo Variants</Title>
        <Row gutter={[24, 24]}>
          {logoVariants.map((variant) => (
            <Col xs={24} sm={12} lg={6} key={variant.name}>
              <Card 
                title={variant.name}
                className={styles.variantCard}
                bodyStyle={{ 
                  backgroundColor: variant.background,
                  padding: '24px',
                  textAlign: 'center',
                  minHeight: '120px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {showAnimated ? (
                  <AnimatedLogo 
                    width={180} 
                    height={54} 
                    animate={true}
                  />
                ) : (
                  <Logo 
                    width={180} 
                    height={54} 
                    variant={variant.variant}
                  />
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Divider />

      {/* Logo Sizes */}
      <div className={styles.section}>
        <Title level={3}>Logo Sizes</Title>
        <Row gutter={[24, 24]}>
          {logoSizes.map((size) => (
            <Col xs={24} sm={8} key={size.name}>
              <Card 
                title={`${size.name} (${size.width}×${size.height})`}
                className={styles.sizeCard}
                bodyStyle={{ 
                  padding: '24px',
                  textAlign: 'center',
                  minHeight: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {showAnimated ? (
                  <AnimatedLogo 
                    width={size.width} 
                    height={size.height} 
                    animate={true}
                  />
                ) : (
                  <Logo 
                    width={size.width} 
                    height={size.height} 
                    variant="default"
                  />
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Divider />

      {/* Usage Examples */}
      <div className={styles.section}>
        <Title level={3}>Usage Examples</Title>
        
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <Card title="Navbar Logo" className={styles.usageCard}>
              <div className={styles.navbarExample}>
                <div className={styles.mockNavbar}>
                  <Logo width={160} height={48} variant="default" />
                  <div className={styles.mockMenu}>
                    <span>Home</span>
                    <span>About</span>
                    <span>Services</span>
                    <span>Contact</span>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          
          <Col xs={24} lg={12}>
            <Card title="Footer Logo" className={styles.usageCard}>
              <div className={styles.footerExample}>
                <div className={styles.mockFooter}>
                  <Logo width={140} height={42} variant="white" />
                  <Text style={{ color: '#94a3b8', fontSize: '12px' }}>
                    © 2024 AD Shipping Services. All rights reserved.
                  </Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      <Divider />

      {/* Technical Details */}
      <div className={styles.section}>
        <Title level={3}>Technical Details</Title>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Card title="Features" className={styles.techCard}>
              <ul className={styles.featureList}>
                <li>✅ SVG-based for crisp scaling</li>
                <li>✅ Multiple color variants</li>
                <li>✅ Responsive design</li>
                <li>✅ Animated version available</li>
                <li>✅ Professional maritime theme</li>
                <li>✅ Modern typography</li>
                <li>✅ Optimized for web use</li>
              </ul>
            </Card>
          </Col>
          
          <Col xs={24} md={12}>
            <Card title="Usage" className={styles.techCard}>
              <div className={styles.codeExample}>
                <Text code>
                  {`import Logo from '@/components/Logo';

// Basic usage
<Logo />

// With variants
<Logo variant="dark" />
<Logo variant="minimal" />

// Custom size
<Logo width={150} height={45} />

// Animated version
import AnimatedLogo from '@/components/AnimatedLogo';
<AnimatedLogo animate={true} />`}
                </Text>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LogoShowcase;
