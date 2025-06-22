'use client';
import React, { useState, useEffect } from 'react';
import { Typography, Row, Col, Card, Button, Modal, Badge, Tabs, Statistic, Input, Select } from 'antd';
import {
  EyeOutlined,
  DownloadOutlined,
  ShareAltOutlined,
  SearchOutlined,
  FilterOutlined,
  RocketOutlined,
  ToolOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  CloseOutlined,
  LeftOutlined,
  RightOutlined,
  ZoomInOutlined,
  ZoomOutOutlined
} from '@ant-design/icons';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import styles from './page.module.css';

const { Title, Paragraph } = Typography;
const { TabPane } = Tabs;
const { Search } = Input;
const { Option } = Select;

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [animate, setAnimate] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Enhanced gallery data with categories and metadata
  const galleryData = [
    {
      id: 1,
      filename: 'IMG_0291.JPG',
      title: 'Shipbuilding Facility',
      description: 'State-of-the-art shipbuilding facility showcasing our construction capabilities',
      category: 'shipbuilding',
      year: '2023',
      location: 'Gujarat, India',
      tags: ['facility', 'construction', 'shipyard']
    },
    {
      id: 2,
      filename: 'IMG_0292.JPG',
      title: 'Vessel Construction',
      description: 'Advanced vessel under construction demonstrating our engineering expertise',
      category: 'shipbuilding',
      year: '2023',
      location: 'Gujarat, India',
      tags: ['vessel', 'construction', 'engineering']
    },
    {
      id: 3,
      filename: 'IMG_0309.JPG',
      title: 'Dry Dock Operations',
      description: 'Professional dry dock services for vessel maintenance and repairs',
      category: 'maintenance',
      year: '2023',
      location: 'Gujarat, India',
      tags: ['drydock', 'maintenance', 'repair']
    },
    {
      id: 4,
      filename: 'IMG_0574.JPG',
      title: 'Marine Support Vessel',
      description: 'Specialized support vessel for offshore operations',
      category: 'fleet',
      year: '2022',
      location: 'Arabian Sea',
      tags: ['support', 'offshore', 'vessel']
    },
    {
      id: 5,
      filename: 'IMG_0577.JPG',
      title: 'Port Operations',
      description: 'Efficient port and harbor services for maritime logistics',
      category: 'operations',
      year: '2022',
      location: 'Gujarat Port',
      tags: ['port', 'logistics', 'operations']
    },
    {
      id: 6,
      filename: 'IMG_4540.JPG',
      title: 'Team Leadership',
      description: 'Our experienced leadership team overseeing operations',
      category: 'team',
      year: '2023',
      location: 'Head Office',
      tags: ['leadership', 'team', 'management']
    },
    {
      id: 7,
      filename: 'IMG_5732.JPG',
      title: 'Cargo Vessel',
      description: 'Custom-built cargo vessel for efficient transportation',
      category: 'fleet',
      year: '2023',
      location: 'Gujarat Shipyard',
      tags: ['cargo', 'vessel', 'transportation']
    },
    {
      id: 8,
      filename: 'IMG_5733.JPG',
      title: 'Offshore Platform',
      description: 'Specialized offshore platform for marine operations',
      category: 'fleet',
      year: '2023',
      location: 'Offshore',
      tags: ['platform', 'offshore', 'marine']
    },
    {
      id: 9,
      filename: 'IMG_5734.JPG',
      title: 'Tugboat Operations',
      description: 'Powerful tugboat providing towing and assistance services',
      category: 'operations',
      year: '2023',
      location: 'Port Area',
      tags: ['tugboat', 'towing', 'assistance']
    },
    {
      id: 10,
      filename: 'IMG_5735.JPG',
      title: 'Fleet Overview',
      description: 'Comprehensive view of our diverse maritime fleet',
      category: 'fleet',
      year: '2023',
      location: 'Gujarat Waters',
      tags: ['fleet', 'overview', 'maritime']
    },
    // Additional images with enhanced metadata
    {
      id: 11,
      filename: '2d919283-f8f9-4057-9493-bcfc2d68a8e1.JPG',
      title: 'Workshop Facilities',
      description: 'Advanced workshop facilities for vessel maintenance',
      category: 'maintenance',
      year: '2022',
      location: 'Gujarat Facility',
      tags: ['workshop', 'maintenance', 'facilities']
    },
    {
      id: 12,
      filename: '344d11f9-2dc1-435e-809b-32d98e5f3d20.jpg',
      title: 'Marine Engineering',
      description: 'Precision marine engineering and fabrication work',
      category: 'shipbuilding',
      year: '2022',
      location: 'Engineering Bay',
      tags: ['engineering', 'fabrication', 'precision']
    }
    // Note: Adding more images would follow the same pattern
  ];

  // Category definitions
  const categories = [
    { key: 'all', label: 'All Projects', icon: <SafetyCertificateOutlined />, count: galleryData.length },
    { key: 'shipbuilding', label: 'Shipbuilding', icon: <RocketOutlined />, count: galleryData.filter(item => item.category === 'shipbuilding').length },
    { key: 'fleet', label: 'Our Fleet', icon: <TeamOutlined />, count: galleryData.filter(item => item.category === 'fleet').length },
    { key: 'maintenance', label: 'Maintenance', icon: <ToolOutlined />, count: galleryData.filter(item => item.category === 'maintenance').length },
    { key: 'operations', label: 'Operations', icon: <SafetyCertificateOutlined />, count: galleryData.filter(item => item.category === 'operations').length },
    { key: 'team', label: 'Our Team', icon: <TeamOutlined />, count: galleryData.filter(item => item.category === 'team').length }
  ];

  // Gallery statistics
  const galleryStats = [
    { title: "Total Projects", value: galleryData.length, suffix: "+", icon: <SafetyCertificateOutlined />, color: "#1890ff" },
    { title: "Vessels Built", value: galleryData.filter(item => item.category === 'shipbuilding' || item.category === 'fleet').length, suffix: "+", icon: <RocketOutlined />, color: "#52c41a" },
    { title: "Years Active", value: 19, suffix: "+", icon: <CalendarOutlined />, color: "#722ed1" },
    { title: "Locations", value: 5, suffix: "+", icon: <EnvironmentOutlined />, color: "#fa8c16" }
  ];

  // Filter and search functionality
  const filteredImages = galleryData.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = searchTerm === '' ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  // Modal navigation
  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next'
      ? (currentImageIndex + 1) % filteredImages.length
      : (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (modalVisible) {
        if (e.key === 'ArrowLeft') navigateImage('prev');
        if (e.key === 'ArrowRight') navigateImage('next');
        if (e.key === 'Escape') closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [modalVisible, currentImageIndex]);

  const breadcrumbs = [
    { label: 'Gallery & Fleet' }
  ];

  return (
    <div className={styles.container}>
      <PageHeader title="Gallery & Fleet Showcase" breadcrumbs={breadcrumbs} />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <div className={`${styles.heroContent} ${animate ? styles.slideUp : ''}`}>
                <Badge.Ribbon text="Visual Portfolio" color="blue">
                  <div className={styles.heroHeader}>
                    <Title level={1} className={styles.heroTitle}>
                      Our Maritime Excellence
                    </Title>
                    <Paragraph className={styles.heroSubtitle}>
                      Showcasing Two Decades of Innovation
                    </Paragraph>
                  </div>
                </Badge.Ribbon>

                <Paragraph className={styles.heroDescription}>
                  Explore our comprehensive portfolio showcasing advanced shipbuilding projects,
                  state-of-the-art facilities, diverse fleet operations, and the dedicated team
                  behind our maritime success. Each image tells a story of innovation, quality,
                  and commitment to excellence.
                </Paragraph>

                <div className={styles.heroStats}>
                  <Row gutter={[24, 24]}>
                    {galleryStats.map((stat, index) => (
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
              </div>
            </Col>
            <Col xs={24} lg={12}>
              <div className={styles.heroImageContainer}>
                <div className={styles.heroImageWrapper}>
                  <Image
                    src="/images/gallery/IMG_5735.JPG"
                    alt="AD Shipping Services Fleet"
                    width={600}
                    height={400}
                    className={styles.heroImage}
                  />
                  <div className={styles.imageOverlay}>
                    <div className={styles.overlayContent}>
                      <Title level={3} className={styles.overlayTitle}>Our Fleet</Title>
                      <Paragraph className={styles.overlayText}>Professional Maritime Services</Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className={styles.controlsSection}>
        <div className="container">
          <Row gutter={[24, 24]} align="middle" justify="space-between">
            <Col xs={24} md={12}>
              <div className={styles.searchContainer}>
                <Search
                  placeholder="Search projects, vessels, or services..."
                  allowClear
                  size="large"
                  prefix={<SearchOutlined />}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className={styles.filterContainer}>
                <Select
                  defaultValue="all"
                  size="large"
                  style={{ width: '100%' }}
                  onChange={setActiveFilter}
                  className={styles.filterSelect}
                >
                  {categories.map(category => (
                    <Option key={category.key} value={category.key}>
                      <div className={styles.filterOption}>
                        {category.icon}
                        <span>{category.label} ({category.count})</span>
                      </div>
                    </Option>
                  ))}
                </Select>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Category Tabs */}
      <section className={styles.categoriesSection}>
        <div className="container">
          <Tabs
            activeKey={activeFilter}
            onChange={setActiveFilter}
            centered
            size="large"
            className={styles.categoryTabs}
          >
            {categories.map(category => (
              <TabPane
                tab={
                  <div className={styles.tabHeader}>
                    <div className={styles.tabIcon}>{category.icon}</div>
                    <span>{category.label}</span>
                    <Badge count={category.count} className={styles.tabBadge} />
                  </div>
                }
                key={category.key}
              >
                <div className={styles.galleryGrid}>
                  <Row gutter={[24, 24]}>
                    {filteredImages.map((item, index) => (
                      <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
                        <Card
                          className={`${styles.galleryCard} ${animate ? styles.fadeIn : ''}`}
                          style={{ animationDelay: `${index * 0.1}s` }}
                          bordered={false}
                          cover={
                            <div className={styles.imageContainer}>
                              <Image
                                src={`/images/gallery/${item.filename}`}
                                alt={item.title}
                                width={400}
                                height={300}
                                className={styles.galleryImage}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = '/images/placeholder-gallery.jpg';
                                }}
                              />
                              <div className={styles.imageOverlayActions}>
                                <Button
                                  type="primary"
                                  shape="circle"
                                  icon={<EyeOutlined />}
                                  onClick={() => openModal(item, index)}
                                  className={styles.viewButton}
                                />
                              </div>
                            </div>
                          }
                        >
                          <div className={styles.cardContent}>
                            <Title level={5} className={styles.cardTitle}>{item.title}</Title>
                            <Paragraph className={styles.cardDescription}>
                              {item.description}
                            </Paragraph>
                            <div className={styles.cardMeta}>
                              <div className={styles.metaItem}>
                                <CalendarOutlined className={styles.metaIcon} />
                                <span>{item.year}</span>
                              </div>
                              <div className={styles.metaItem}>
                                <EnvironmentOutlined className={styles.metaIcon} />
                                <span>{item.location}</span>
                              </div>
                            </div>
                            <div className={styles.cardTags}>
                              {item.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} count={tag} className={styles.tag} />
                              ))}
                            </div>
                          </div>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </TabPane>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Image Modal */}
      <Modal
        open={modalVisible}
        onCancel={closeModal}
        footer={null}
        width="90vw"
        style={{ top: 20 }}
        className={styles.imageModal}
        closeIcon={<CloseOutlined className={styles.modalCloseIcon} />}
      >
        {selectedImage && (
          <div className={styles.modalContent}>
            <div className={styles.modalImageContainer}>
              <Button
                className={styles.navButton}
                icon={<LeftOutlined />}
                onClick={() => navigateImage('prev')}
                disabled={filteredImages.length <= 1}
              />
              <div className={styles.modalImageWrapper}>
                <Image
                  src={`/images/gallery/${selectedImage.filename}`}
                  alt={selectedImage.title}
                  width={800}
                  height={600}
                  className={styles.modalImage}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/placeholder-gallery.jpg';
                  }}
                />
              </div>
              <Button
                className={styles.navButton}
                icon={<RightOutlined />}
                onClick={() => navigateImage('next')}
                disabled={filteredImages.length <= 1}
              />
            </div>

            <div className={styles.modalInfo}>
              <div className={styles.modalHeader}>
                <Title level={3} className={styles.modalTitle}>{selectedImage.title}</Title>
                <div className={styles.modalActions}>
                  <Button icon={<ShareAltOutlined />} className={styles.actionButton}>
                    Share
                  </Button>
                  <Button icon={<DownloadOutlined />} className={styles.actionButton}>
                    Download
                  </Button>
                </div>
              </div>

              <Paragraph className={styles.modalDescription}>
                {selectedImage.description}
              </Paragraph>

              <div className={styles.modalMeta}>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={8}>
                    <div className={styles.metaGroup}>
                      <CalendarOutlined className={styles.metaIcon} />
                      <div>
                        <div className={styles.metaLabel}>Year</div>
                        <div className={styles.metaValue}>{selectedImage.year}</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} sm={8}>
                    <div className={styles.metaGroup}>
                      <EnvironmentOutlined className={styles.metaIcon} />
                      <div>
                        <div className={styles.metaLabel}>Location</div>
                        <div className={styles.metaValue}>{selectedImage.location}</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs={24} sm={8}>
                    <div className={styles.metaGroup}>
                      <FilterOutlined className={styles.metaIcon} />
                      <div>
                        <div className={styles.metaLabel}>Category</div>
                        <div className={styles.metaValue}>
                          {categories.find(cat => cat.key === selectedImage.category)?.label}
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className={styles.modalTags}>
                <Title level={5} className={styles.tagsTitle}>Tags:</Title>
                <div className={styles.tagsContainer}>
                  {selectedImage.tags.map((tag, index) => (
                    <Badge key={index} count={tag} className={styles.modalTag} />
                  ))}
                </div>
              </div>

              <div className={styles.modalNavigation}>
                <span className={styles.imageCounter}>
                  {currentImageIndex + 1} of {filteredImages.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <Title level={2} className={styles.ctaTitle}>
              Ready to Start Your Maritime Project?
            </Title>
            <Paragraph className={styles.ctaDescription}>
              Inspired by our work? Let's discuss how we can bring your maritime vision to life
              with the same level of excellence and attention to detail showcased in our gallery.
            </Paragraph>
            <div className={styles.ctaActions}>
              <Button type="primary" size="large" className={styles.ctaPrimary}>
                <a href="/contact">Start Your Project</a>
              </Button>
              <Button size="large" className={styles.ctaSecondary}>
                <a href="/services">Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;