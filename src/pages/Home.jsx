import React from 'react';
import { Link } from 'react-router-dom';
import { factoryInfo, products, environmentalPillars } from '../data/factoryData';
import { IconRecycle, IconArrowRight, IconShieldCheck, IconFactory, IconFlame, IconDroplet, IconCheck } from '../components/Icons';
import ProcessFlowchart from '../components/ProcessFlowchart';
import ProductCard from '../components/ProductCard';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section" aria-label="Hero Introduction">
        <div className="hero-background-media">
          <img
            src="/public/assets/home11-100kb.jpeg"
            alt="EcoLead Recycling Manufacturing Facility"
            className="hero-bg-img"
            referrerPolicy="no-referrer"
          />
          <div className="hero-gradient-overlay" />
        </div>

        <div className="app-container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-tag">
                <IconRecycle size={18} />
                
              </div>
              <h1 className="hero-title">
                Advanced Lead-Acid Battery 
              </h1>
              <p className="hero-subtitle">
                Turning Used Batteries into Valuable Resources for a Sustainable Tomorrow. Engineering closed-loop recovery with zero-liquid discharge and 99.97% pure lead ingot refining.
              </p>
              <div className="hero-btn-group">
                <Link to="/process" className="btn btn-primary">
                  <span>Explore Our 11-Stage Process</span>
                  <IconArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn btn-outline-white">
                  <span>Contact Our Team</span>
                </Link>
              </div>
            </div>

            {/* 3D Facility Visual Card */}
            
             
                
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <div className="app-container stats-strip-container">
        <div className="stats-card-grid">
          <div className="stat-item">
            <div className="stat-number tabular-nums">65,000<span>MT</span></div>
            <div className="stat-label">Annual Processing Capacity</div>
            <div className="stat-desc">Continuous automated battery breaking and smelting operations.</div>
          </div>
          <div className="stat-item">
            <div className="stat-number tabular-nums">15<span>+</span></div>
            <div className="stat-label">Years of Metallurgical Expertise</div>
            <div className="stat-desc">Proven industrial engineering in secondary lead recovery.</div>
          </div>
          <div className="stat-item">
            <div className="stat-number tabular-nums">98.5<span>%</span></div>
            <div className="stat-label">Material Recovery Yield</div>
            <div className="stat-desc">Near-total recovery of lead, polypropylene casings, and acid.</div>
          </div>
          <div className="stat-item">
            <div className="stat-number tabular-nums">100<span>%</span></div>
            <div className="stat-label">Closed-Loop Water ETP</div>
            <div className="stat-desc">Zero liquid discharge with total effluent neutralization and RO.</div>
          </div>
        </div>
      </div>

      {/* 3. ABOUT FACTORY SECTION */}
      <section className="section-wrapper" aria-label="About the Factory">
        <div className="app-container">
          <div className="about-preview-grid">
            <div>
              <span className="section-kicker">Sustainable Industrial Metallurgy</span>
              <h2 className="section-title">
                Pioneering Responsible Lead-Acid Battery Recycling
              </h2>
              <p className="section-subtitle" style={{ marginBottom: '1.5rem' }}>
                EcoLead Industries is an advanced secondary lead smelting and battery recycling manufacturing facility. We provide battery manufacturers, industrial telecom operators, and automotive fleets with responsible, certified end-of-life battery recycling.
              </p>
              <p style={{ color: 'var(--color-text-body)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Operating with automated hydrodynamic sink-float separation and oxy-fuel rotary furnaces, our facility transforms toxic scrap batteries into ultra-pure 99.97% lead ingots, high-impact polypropylene granules, and industrial-grade sodium sulfate.
              </p>

              <div className="about-features-list">
                <div className="about-feature-box">
                  <div className="about-feature-title">Hydrodynamic Separation</div>
                  <div className="about-feature-desc">Density-based water separation isolating pure polymer flakes from heavy lead fractions.</div>
                </div>
                <div className="about-feature-box">
                  <div className="about-feature-title">Oxy-Fuel Thermal Smelting</div>
                  <div className="about-feature-desc">70% reduction in flue gas volumes with continuous emission monitoring systems.</div>
                </div>
                <div className="about-feature-box">
                  <div className="about-feature-title">Refined Pure Lead (99.97%)</div>
                  <div className="about-feature-desc">Pyrometallurgical kettles with automated continuous ingot casting conveyors.</div>
                </div>
                <div className="about-feature-box">
                  <div className="about-feature-title">Polypropylene Extrusion</div>
                  <div className="about-feature-desc">High-grade washed PP granules ready for immediate automotive casing molding.</div>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <Link to="/about" className="btn btn-navy">
                  <span>Learn More About Our Facility</span>
                  <IconArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div>
              <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
                <img
                  src="/src/assets/images/battery_breaking_separation_1794290567509.jpg"
                  alt="Battery Breaking and Hydrodynamic Separation System"
                  style={{ width: '100%', height: '440px', objectFit: 'cover' }}
                  referrerPolicy="no-referrer"
                />
                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  backgroundColor: 'rgba(5, 26, 46, 0.9)',
                  backdropFilter: 'blur(8px)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}>
                  <div style={{ fontSize: '0.8rem', color: '#4ade80', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Automated Breaker & Sink-Float Separator
                  </div>
                  <div style={{ fontSize: '0.925rem', color: '#E2E8F0' }}>
                    15 Tons/hr continuous crushing separating light PP polymer from heavy lead paste.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RECYCLING PROCESS PREVIEW (11 STAGES) */}
      <section className="section-wrapper" style={{ backgroundColor: 'var(--color-bg-subtle)' }} aria-label="11-Stage Process Preview">
        <div className="app-container">
          <div className="section-header text-center">
            <span className="section-kicker">Interactive Metallurgical Flowchart</span>
            <h2 className="section-title">The Complete 11-Stage Recycling Flow</h2>
            <p className="section-subtitle">
              From raw battery receipt and de-energizing through rotary furnace smelting to robotic ingot casting and zero-liquid-discharge pollution control.
            </p>
          </div>

          <ProcessFlowchart isPreview={true} />

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/process" className="btn btn-primary" style={{ padding: '0.85rem 2.2rem' }}>
              <span>View All 11 Stages on Interactive Flowchart</span>
              <IconArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. RECOVERED PRODUCTS SECTION */}
      <section className="section-wrapper" aria-label="Recovered Products">
        <div className="app-container">
          <div className="section-header">
            <span className="section-kicker">Resource Circularity</span>
            <h2 className="section-title">Certified Recovered Materials</h2>
            <p className="section-subtitle">
              High-purity secondary metals, virgin-equivalent polymers, and industrial byproducts manufactured to strict OEM standards.
            </p>
          </div>

          <div className="products-grid">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/products" className="btn btn-outline">
              <span>View Full Product Catalog & Chemical Specs</span>
              <IconArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. ENVIRONMENTAL RESPONSIBILITY SECTION */}
      <section className="section-wrapper section-wrapper-dark" aria-label="Environmental Protection">
        <div className="app-container">
          <div className="section-header">
            <span className="section-kicker" style={{ color: '#4ade80' }}>Zero Compromise Ecology</span>
            <h2 className="section-title">Environmental Protection & Air Quality</h2>
            <p className="section-subtitle">
              Our factory operates with multi-stage wet scrubbers, Gore-Tex pulse-jet baghouses, and a dedicated Zero Liquid Discharge (ZLD) effluent treatment plant.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {environmentalPillars.slice(0, 3).map((pillar) => (
              <div
                key={pillar.id}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                }}
              >
                <div style={{ color: '#4ade80', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {pillar.kpi}
                </div>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                  {pillar.title}
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {pillar.details}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#4ade80', fontSize: '0.825rem', fontWeight: 600 }}>
                  <IconCheck size={16} />
                  <span>24/7 Monitored Telemetry</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/environmental" className="btn btn-primary">
              <span>Explore Environmental Systems & ETP</span>
              <IconArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CTA SECTION */}
      <section className="section-wrapper" aria-label="Call to Action">
        <div className="app-container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <h2 className="cta-heading">Building a Cleaner and Sustainable Future</h2>
              <p className="cta-subtext">
                Partner with an authorized, closed-loop industrial recycler for your scrap batteries or source premium certified 99.97% refined lead ingots and polypropylene granules.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
                  <span>Contact Our Team</span>
                  <IconArrowRight size={18} />
                </Link>
                <Link to="/quote" className="btn btn-outline-white" style={{ padding: '0.85rem 2rem' }}>
                  <span>Request Custom Quotation</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
