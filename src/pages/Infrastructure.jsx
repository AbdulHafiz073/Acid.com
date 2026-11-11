import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { machineryList } from '../data/factoryData';
import {
  IconSettings,
  IconZoomIn,
  IconShieldCheck,
  IconFactory,
  IconArrowRight,
} from '../components/Icons';
import Lightbox from '../components/Lightbox';
import '../styles/infrastructure.css';

export default function Infrastructure() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const activeMachine =
    activeLightboxIndex !== null ? machineryList[activeLightboxIndex] : null;

  return (
    <div className="infrastructure-page">
      {/* ============================================================
          INFRA HERO — with background image
         ============================================================ */}
      <section className="infra-hero" aria-labelledby="infra-hero-heading">
        {/* Background layer: image + dark overlay */}
        <div className="infra-hero-bg" aria-hidden="true">
          <img
            src="/assets/machine.jfif"
            alt=""
            className="infra-hero-bg-img"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <div className="infra-hero-overlay" />
        </div>

        {/* Foreground content */}
        <div className="app-container infra-hero-content">
          <span className="section-kicker infra-hero-kicker">
            Heavy Industrial Metallurgy
          </span>

          <h1 id="infra-hero-heading" className="section-title infra-hero-title">
            Infrastructure &amp; Processing Machinery
          </h1>

          <p className="section-subtitle infra-hero-subtitle">
            Our 45,000 m² heavy industrial complex houses automated European and
            custom-engineered battery recycling machinery designed for high
            throughput, airtight containment, and maximum material recovery.
          </p>

          <div className="infra-hero-stats">
            <div className="infra-hero-stat">
              <div className="infra-hero-stat-value">45,000 m²</div>
              <div className="infra-hero-stat-label">
                Built Industrial Facility
              </div>
            </div>
            <div className="infra-hero-stat">
              <div className="infra-hero-stat-value">15 TPH</div>
              <div className="infra-hero-stat-label">
                Crushing &amp; Separation Rate
              </div>
            </div>
            <div className="infra-hero-stat">
              <div className="infra-hero-stat-value">60 T/Batch</div>
              <div className="infra-hero-stat-label">
                Refining Kettle Capacity
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MACHINERY GRID
         ============================================================ */}
      <section className="section-wrapper">
        <div className="app-container">
          <div className="section-header">
            <span className="section-kicker">Core Processing Units</span>
            <h2 className="section-title">
              Engineered Equipment &amp; Mechanical Lines
            </h2>
            <p className="section-subtitle">
              Click on any machinery unit below to view high-resolution
              photography and detailed engineering specifications.
            </p>
          </div>

          <div className="infra-grid">
            {machineryList.map((machine, index) => (
              <article key={machine.id} className="infra-card">
                <div
                  className="infra-card-media"
                  onClick={() => setActiveLightboxIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveLightboxIndex(index);
                    }
                  }}
                  title="Click to view high-resolution image"
                  role="button"
                  tabIndex={0}
                >
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="infra-card-img"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="infra-zoom-prompt">
                    <IconZoomIn size={18} />
                  </div>
                  <div className="infra-capacity-tag">
                    Capacity: {machine.capacity}
                  </div>
                </div>

                <div className="infra-card-body">
                  <h3 className="infra-name">{machine.name}</h3>
                  <p className="infra-purpose">{machine.purpose}</p>

                  <div className="infra-specs-box">
                    <strong>Specifications:</strong> {machine.specs}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ---------- Plant Tour CTA ---------- */}
          <div className="infra-audit-cta">
            <div className="infra-audit-cta-text">
              <span className="section-kicker">
                Technical Audits &amp; In-Person Verification
              </span>
              <h3 className="infra-audit-cta-heading">
                Schedule a Commercial Facility Audit
              </h3>
              <p className="infra-audit-cta-desc">
                We welcome environmental auditors, tier-1 battery procurement
                managers, and government regulators for scheduled technical
                inspections of our breaking line, rotary furnaces, and
                laboratory.
              </p>
            </div>
            <Link to="/contact" className="btn btn-navy">
              <span>Request Factory Visit</span>
              <IconArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Lightbox Preview ---------- */}
      {activeMachine && (
        <Lightbox
          image={activeMachine.image}
          title={activeMachine.name}
          caption={`${activeMachine.capacity} · ${activeMachine.purpose}`}
          onClose={() => setActiveLightboxIndex(null)}
          onPrev={
            activeLightboxIndex > 0
              ? () => setActiveLightboxIndex(activeLightboxIndex - 1)
              : null
          }
          onNext={
            activeLightboxIndex < machineryList.length - 1
              ? () => setActiveLightboxIndex(activeLightboxIndex + 1)
              : null
          }
        />
      )}
    </div>
  );
}