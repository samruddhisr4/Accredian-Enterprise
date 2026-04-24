'use client';

import React, { useState } from 'react';
import styles from './EnquiryForm.module.css';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form Data Submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 1500);
  };

  return (
    <section id="enquiry" className="section">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h2 className={styles.title}>Ready to <span className={styles.accent}>Transform</span> Your Team?</h2>
            <p className={styles.description}>
              Fill out the form and our enterprise experts will reach out to design a tailored learning path for your organization.
            </p>
            <div className={styles.contactItem}>
              <span>📧</span> enterprise@accredian.com
            </div>
          </div>
          
          <div className={styles.formCard}>
            {status === 'success' ? (
              <div className={styles.successMessage}>
                <h3>✅ Thank You!</h3>
                <p>Your enquiry has been received. Our team will contact you shortly.</p>
                <button className="btn btn-primary" onClick={() => setStatus('idle')}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Work Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="company">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    required 
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="message">How can we help?</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    placeholder="Tell us about your team's needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Submit Enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
