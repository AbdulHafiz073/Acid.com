import React, { useState } from 'react';
import { initialEnquiries } from '../data/factoryData';
import { IconCheck, IconMail, IconArrowRight } from './Icons';

export default function ContactForm({ defaultType = 'General Enquiry', defaultProduct = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    enquiryType: defaultType,
    productInterest: defaultProduct,
    message: defaultProduct ? `Inquiring about specifications, availability, and pricing for ${defaultProduct}.` : '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.company.trim()) errs.company = 'Company Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact number is required';
    } else if (formData.phone.trim().length < 7) {
      errs.phone = 'Please enter a valid contact number';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please provide a message with at least 15 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate verified transmission and persist to localStorage for admin management
    setTimeout(() => {
      const stored = localStorage.getItem('ecolead_enquiries');
      const currentList = stored ? JSON.parse(stored) : initialEnquiries;

      const newEnquiry = {
        id: `enq-${Date.now()}`,
        fullName: formData.fullName,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        type: formData.enquiryType,
        message: formData.message,
        date: new Date().toISOString().split('T')[0],
        status: 'New',
      };

      const updated = [newEnquiry, ...currentList];
      localStorage.setItem('ecolead_enquiries', JSON.stringify(updated));

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        enquiryType: 'General Enquiry',
        productInterest: '',
        message: '',
      });
    }, 600);
  };

  return (
    <div className="contact-form-container">
      {submitted ? (
        <div className="animate-fade-in" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
            <IconCheck size={32} />
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--color-text-main)' }}>
            Enquiry Successfully Submitted
          </h3>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '480px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
            Thank you for reaching out to EcoLead Industries. Our metallurgical procurement and commercial team will review your requirements and respond within 1 business day.
          </p>
          <button
            type="button"
            className="btn btn-navy btn-sm"
            onClick={() => setSubmitted(false)}
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="contact-form-grid">
            {/* Full Name */}
            <div className="form-group">
              <label className="form-label" htmlFor="fullName">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Robert Hansen"
                className={`form-input ${errors.fullName ? 'border-red-500' : ''}`}
                required
              />
              {errors.fullName && <span style={{ color: '#dc2626', fontSize: '0.8rem' }}>{errors.fullName}</span>}
            </div>

            {/* Company Name */}
            <div className="form-group">
              <label className="form-label" htmlFor="company">Company / Organization *</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Apex Industrial Battery Corp"
                className="form-input"
                required
              />
              {errors.company && <span style={{ color: '#dc2626', fontSize: '0.8rem' }}>{errors.company}</span>}
            </div>

            {/* Email Address */}
            <div className="form-group">
              <label className="form-label" htmlFor="email">Business Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="form-input"
                required
              />
              {errors.email && <span style={{ color: '#dc2626', fontSize: '0.8rem' }}>{errors.email}</span>}
            </div>

            {/* Mobile / Phone */}
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Mobile / Contact Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="form-input"
                required
              />
              {errors.phone && <span style={{ color: '#dc2626', fontSize: '0.8rem' }}>{errors.phone}</span>}
            </div>
          </div>

          {/* Enquiry Type */}
          <div className="form-group">
            <label className="form-label" htmlFor="enquiryType">Enquiry Type *</label>
            <select
              id="enquiryType"
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Recycled Lead Purchase">Recycled Lead Purchase (99.97% Ingot or Custom Alloys)</option>
              <option value="Plastic Granules Purchase">Plastic Granules Purchase (Polypropylene PP Copolymer)</option>
              <option value="Used Battery Supply">Used Battery Supply (Scrap ULAB / Industrial Battery Disposal)</option>
              <option value="Business Partnership">Industrial / Environmental Partnership</option>
              <option value="General Enquiry">General Factory or Technical Enquiry</option>
            </select>
          </div>

          {/* Message */}
          <div className="form-group">
            <label className="form-label" htmlFor="message">Detailed Requirement / Specifications *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Describe your volume requirements, delivery destination, testing criteria, or supply specifications..."
              className="form-textarea"
              required
            />
            {errors.message && <span style={{ color: '#dc2626', fontSize: '0.8rem' }}>{errors.message}</span>}
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
            style={{ width: '100%', padding: '0.9rem 1.5rem', marginTop: '0.5rem' }}
          >
            {isSubmitting ? (
              <span>Transmitting Commercial Enquiry...</span>
            ) : (
              <>
                <span>Submit Factory Enquiry</span>
                <IconArrowRight size={18} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
