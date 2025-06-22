'use client';
import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { MailOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';
import styles from './ContactForm.module.css';

const { TextArea } = Input;

const ContactForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form values:', values);
    message.success('Thank you for your message! We will get back to you soon.');
    form.resetFields();
  };

  return (
    <div className={styles.formContainer}>
      <Form
        form={form}
        name="contactForm"
        onFinish={onFinish}
        layout="vertical"
        className={styles.form}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please enter your name',
            },
          ]}
        >
          <Input 
            prefix={<UserOutlined className={styles.inputIcon} />} 
            placeholder="Your Name" 
            size="large" 
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: 'Please enter your email',
            },
            {
              type: 'email',
              message: 'Please enter a valid email',
            },
          ]}
        >
          <Input 
            prefix={<MailOutlined className={styles.inputIcon} />} 
            placeholder="Your Email" 
            size="large" 
          />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone"
          rules={[
            {
              required: true,
              message: 'Please enter your phone number',
            },
          ]}
        >
          <Input 
            prefix={<PhoneOutlined className={styles.inputIcon} />} 
            placeholder="Your Phone Number" 
            size="large" 
          />
        </Form.Item>

        <Form.Item
          name="message"
          label="Message"
          rules={[
            {
              required: true,
              message: 'Please enter your message',
            },
          ]}
        >
          <TextArea 
            placeholder="Your Message" 
            rows={5} 
            className={styles.textarea} 
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" className={styles.submitButton}>
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;