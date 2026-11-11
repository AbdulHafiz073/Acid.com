import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  IconRecycle, 
  IconFactory, 
  IconShieldCheck, 
  IconArrowRight, 
  IconCheck, 
  IconLeaf, 
  IconGlobe, 
  IconAward, 
  IconCpu,
  IconMapPin,
  IconPhone,
  IconMail
} from '../components/Icons';
import '../styles/about.css';

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Lead Acid Battery Recycling',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    // Save inquiry to localStorage
    const saved = localStorage.getItem('ecolead_enquiries');
    const enquiries = saved ? JSON.parse(saved) : [];
    const newEnquiry = {
      id: `ENQ-${Date.now().toString().slice(-4)}`,
      name: formData.name,
      company: 'Individual / Plant Partner',
      email: formData.email,
      phone: formData.phone,
      product: formData.service,
      tonnage: 'General Inquiry (About Page)',
      message: formData.message,
      date: new Date().toISOString().split('T')[0],
      status: 'New'
    };
    enquiries.unshift(newEnquiry);
    localStorage.setItem('ecolead_enquiries', JSON.stringify(enquiries));

    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Lead Acid Battery Recycling',
      message: ''
    });
  };

  return (
    <div className="about-page">
      {/* 1. Breadcrumb Hero Banner */}
     <section className="about-hero-banner">

  {/* Background Image */}
  <img
    src="/public/assets/about-us-100kb.jpeg"
    alt="Lead Acid Battery Recycling Facility"
    className="about-hero-background"
  />

  {/* Dark Overlay */}
  <div className="about-hero-overlay"></div>

  <div className="app-container">
    <div className="about-hero-content">

      <h1 className="about-hero-title">
        About Us
      </h1>

      <p className="about-hero-tagline">
        Pioneering sustainable secondary metal recycling,
        closed-loop battery resource recovery, and zero-waste
        industrial manufacturing through deep-tech engineering.
      </p>

    </div>
  </div>

</section>

      {/* 2. Our Story Section */}
      <section className="story-section">
        <div className="app-container">
          <div className="story-grid">
            <div className="story-content">
              <span className="jalon-tag">Our Story</span>
              <h2>Recycling Resources with Expertise and Care</h2>
              <p className="story-lead">
                Jalon Metal Industries Pvt. Ltd., established in 2018 and based in Joya, Amroha, Uttar Pradesh, specializes in recycling lead batteries and manufacturing remelted and refined lead.
              </p>
              <p className="story-body">
                The company is approved and certified by relevant environmental and statutory pollution control authorities (CPCB / SPCB) and operates with an uncompromising focus on sustainable metal recycling. Our state-of-the-art facility integrates automated de-casing, hydrodynamic sink-float plastic and metallic lead separation, and closed-loop rotary furnace smelting with zero liquid discharge.
              </p>

              {/* 3 Value Pillars */}
              <div className="story-features">
                <div className="story-feature-card">
                  <div className="story-feature-icon">
                    <IconCpu size={22} />
                  </div>
                  <h3 className="story-feature-title">Deep Tech Expertise</h3>
                  <p className="story-feature-desc">
                    Leverage advanced technologies and globally patented processes to unlock efficiency.
                  </p>
                </div>

                <div className="story-feature-card">
                  <div className="story-feature-icon">
                    <IconLeaf size={22} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <h3 className="story-feature-title">Sustainability</h3>
                  <p className="story-feature-desc">
                    Prioritize environmentally friendly practices in all our processes with zero liquid discharge.
                  </p>
                </div>

                <div className="story-feature-card">
                  <div className="story-feature-icon">
                    <IconRecycle size={22} style={{ color: 'var(--color-secondary)' }} />
                  </div>
                  <h3 className="story-feature-title">Innovation</h3>
                  <p className="story-feature-desc">
                    Iterative evolution of our technologies for enhanced effectiveness and higher recovery yield.
                  </p>
                </div>
              </div>
            </div>

            <div className="story-image-wrap">
              <div className="story-image-container">
                <img
                  src="/src/assets/images/factory_hero_facility_1794290544562.jpg"
                  alt="Jalon Metal & EcoLead Industrial Facility"
                  referrerPolicy="no-referrer"
                />
                <div className="story-image-badge">
                  <div className="badge-stat">12,000+ TPA</div>
                  <div className="badge-label">Licensed Capacity in Joya, Amroha (UP)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. High Impact Statistics Bar */}
      <section className="about-stats-bar">
        <div className="app-container">
          <div className="about-stats-grid">
            <div className="about-stat-item">
              <div className="about-stat-num">12,000+</div>
              <div className="about-stat-label">TPA Processing Capacity</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-num">99.97%</div>
              <div className="about-stat-label">Lead Ingot Purity Rate</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-num">&gt;98%</div>
              <div className="about-stat-label">Material Recovery Efficiency</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-num">100K+</div>
              <div className="about-stat-label">Tons CO2 Saved Annually</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Goal & The Outlook (Our Mission & Our Vision) */}
      <section className="mission-vision-section">
        <div className="app-container">
          <div className="mission-vision-grid">
            {/* The Goal - Our Mission */}
            <div className="mv-card mission-card">
              <div className="mv-header">
                <span className="jalon-tag">The Goal</span>
                <div className="mv-icon-circle">
                  <IconLeaf size={26} />
                </div>
              </div>
              <h3 className="mv-title">Our Mission</h3>
              <p className="mv-desc">
                We at Jalon Metals are committed towards leading the industry in sustainable e-waste and lithium-ion battery recycling through deep-tech innovation. Our goal is to achieve zero-waste operations and carbon neutrality in a responsible manner and extract the valuable materials from today’s waste and transform them into viable solutions for a better tomorrow.
              </p>
            </div>

            {/* The Outlook - Our Vision */}
            <div className="mv-card vision-card">
              <div className="mv-header">
                <span className="jalon-tag" style={{ background: '#e0f2fe', color: 'var(--color-secondary)', borderLeftColor: 'var(--color-secondary)' }}>The Outlook</span>
                <div className="mv-icon-circle">
                  <IconGlobe size={26} />
                </div>
              </div>
              <h3 className="mv-title">Our Vision</h3>
              <p className="mv-desc">
                To be a globally recognized and responsible leader in the lead recycling sector, setting benchmarks in quality, sustainability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Giving Back - Our Impact */}
      <section className="impact-section">
        <div className="app-container">
          <div className="impact-header">
            <span className="jalon-tag">Giving Back</span>
            <h2>Our Impact</h2>
            <p>
              Measurable ecological protection and circular industrial stewardship across the entire battery lifecycle.
            </p>
          </div>

          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-icon-box">
                <IconShieldCheck size={28} />
              </div>
              <div className="impact-content">
                <h3>Environmental Stewardship</h3>
                <p>
                  Minimize environmental impact through recovery of <strong>over 98% of valuable materials</strong> from e-waste and end-of-life batteries.
                </p>
              </div>
            </div>

            <div className="impact-card">
              <div className="impact-icon-box">
                <IconLeaf size={28} />
              </div>
              <div className="impact-content">
                <h3>Carbon Footprint Reduction</h3>
                <p>
                  Save more than <strong>100,000 tons of CO2 equivalent annually</strong> through rigorous operations compared to virgin ore extraction.
                </p>
              </div>
            </div>

            <div className="impact-card">
              <div className="impact-icon-box">
                <IconAward size={28} />
              </div>
              <div className="impact-content">
                <h3>Global Leadership</h3>
                <p>
                  With over <strong>45 global patents and 200+ applied patents</strong>, be at the forefront of clean recycling technology and automated metallurgy.
                </p>
              </div>
            </div>

            <div className="impact-card">
              <div className="impact-icon-box">
                <IconRecycle size={28} />
              </div>
              <div className="impact-content">
                <h3>Circular Economy</h3>
                <p>
                  Ensure maximum resource recovery and <strong>zero-waste operations</strong> through proprietary closed-loop filtration and secondary material valorization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Facility & Engineering Infrastructure Highlights */}
      <section className="tech-highlights-section">
        <div className="app-container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <span className="jalon-tag">Engineering Infrastructure</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.3rem)', fontWeight: 800, color: 'var(--color-text-main)', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
              Advanced Machinery & Process Plants
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
              High-precision rotary furnaces, wet baghouse scrubbers, and automated polymer granulation units operating in strict compliance with central environmental directives.
            </p>
          </div>

          <div className="tech-grid">
            <div className="tech-card">
              <img
                src="/src/assets/images/battery_smelting_furnace_1794290545752.jpg"
                alt="Rotary Smelting Furnace"
                referrerPolicy="no-referrer"
              />
              <div className="tech-card-body">
                <h4>Rotary Smelting Furnaces</h4>
                <p>Controlled oxy-fuel thermal reduction with automatic slag and dross separation.</p>
              </div>
            </div>

            <div className="tech-card">
              <img
                src="/src/assets/images/battery_breaking_separation_1794290567509.jpg"
                alt="Hydrodynamic Sink-Float Separator"
                referrerPolicy="no-referrer"
              />
              <div className="tech-card-body">
                <h4>Hydrodynamic Separation</h4>
                <p>Automated breaking and heavy-media separation of battery polypropylene and lead paste.</p>
              </div>
            </div>

            <div className="tech-card">
              <img
                src="/src/assets/images/pollution_control_etp_1794290545665.jpg"
                alt="Zero Liquid Discharge ETP"
                referrerPolicy="no-referrer"
              />
              <div className="tech-card-body">
                <h4>Zero Liquid Discharge (ZLD)</h4>
                <p>Multi-stage neutralization, lamella clarifiers, and reverse osmosis closed-loop water treatment.</p>
              </div>
            </div>

            <div className="tech-card">
              <img
                src="/src/assets/images/lab_quality_testing_1794290567078.jpg"
                alt="Spectrometry Testing Lab"
                referrerPolicy="no-referrer"
              />
              <div className="tech-card-body">
                <h4>OES Quality Testing Lab</h4>
                <p>Optical Emission Spectrometry delivering atomic-level purity validation up to 99.98% Pb.</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/process" className="btn btn-navy" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>View Full 11-Stage Recycling Flowchart</span>
              <IconArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Get in Touch Section (Embedded Contact Form like jalonmetal.in) */}
      <section className="about-contact-section">
        <div className="app-container">
          <div className="about-contact-grid">
            <div className="about-contact-info">
              <span className="jalon-tag">Contact Plant Operations</span>
              <h2>Get in Touch</h2>
              <p>
                Interested in partnership, scrap battery procurement, remelted lead supply, or Extended Producer Responsibility (EPR) compliance certificates? Connect directly with our team.
              </p>

              <div className="contact-meta-list">
                <div className="contact-meta-item">
                  <div className="contact-meta-icon">
                    <IconMapPin size={20} />
                  </div>
                  <div className="contact-meta-text">
                    <h5>Plant Location</h5>
                    <p>Joya, Fairdabad Urf Nasirpur, Amroha / Jyotiba Phule Nagar, Uttar Pradesh 244222, India</p>
                  </div>
                </div>

                <div className="contact-meta-item">
                  <div className="contact-meta-icon">
                    <IconPhone size={20} />
                  </div>
                  <div className="contact-meta-text">
                    <h5>Direct Hotline</h5>
                    <p>+91 9810007913 / +91 98765 43210</p>
                  </div>
                </div>

                <div className="contact-meta-item">
                  <div className="contact-meta-icon">
                    <IconMail size={20} />
                  </div>
                  <div className="contact-meta-text">
                    <h5>Official Email</h5>
                    <p>info@jalonmetal.in / contact@ecoleadindustries.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-contact-form-card">
              <h3>Send Us a Message</h3>
              <p>We typically respond within 2-4 business hours.</p>

              {submitted && (
                <div className="form-success-alert">
                  <IconCheck size={20} />
                  <span>Thank you! Your message has been received. Our plant management will reach out shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service / Product Area</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Lead Acid Battery Recycling">Lead-Acid Battery Recycling</option>
                    <option value="Lithium-ion Battery Recycling">Lithium-ion Battery Recycling</option>
                    <option value="E-Waste Management">E-Waste Management &amp; EPR</option>
                    <option value="Recovered Pure Lead Ingots">Recovered Pure Lead Ingots (99.97%)</option>
                    <option value="Recycled Polypropylene Granules">Recycled Polypropylene Granules</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Describe your inquiry, scrap volume, or supply specifications..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-navy" style={{ width: '100%', padding: '0.85rem' }}>
                  <span>Submit Inquiry</span>
                  <IconArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
