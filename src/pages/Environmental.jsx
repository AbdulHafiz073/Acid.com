import React from 'react';
import { environmentalPillars } from '../data/factoryData';
import {
  IconShieldCheck,
  IconDroplet,
  IconFactory,
  IconCheck,
  IconArrowRight,
} from '../components/Icons';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/polution2-100kb.jpg';
import '../styles/environmental.css';

export default function Environmental() {
  return (
    <div className="environmental-page">
      {/* ===== HERO SECTION ===== */}
      <section
        className="env-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              135deg,
              rgba(15, 23, 42, 0.88) 0%,
              rgba(20, 40, 30, 0.82) 50%,
              rgba(15, 23, 42, 0.90) 100%
            ),
            url(${heroImage})
          `,
        }}
      >
        <div className="app-container">
          <span className="section-kicker" style={{ color: '#4ade80' }}>
            Responsible Metallurgy
          </span>
          <h1 className="section-title" style={{ color: '#FFFFFF' }}>
            Environmental Protection &amp; Pollution Control
          </h1>
          <p
            className="section-subtitle"
            style={{ color: '#E2E8F0', maxWidth: '780px' }}
          >
            Industrial lead-acid recycling demands uncompromising environmental
            stewardship. Our factory operates engineered multi-barrier pollution
            abatement systems, ensuring air emission limits below 0.5 mg/Nm³ and
            100% closed-loop process water recycling.
          </p>

          <div className="env-kpi-grid">
            <div className="env-kpi-card">
              <div className="env-kpi-val">&lt; 0.5 mg/Nm³</div>
              <div className="env-kpi-title">Lead-in-Air Stack Standard</div>
              <div className="env-kpi-desc">
                Gore-Tex PTFE pulse-jet baghouse filters with HEPA secondary
                polishing.
              </div>
            </div>
            <div className="env-kpi-card">
              <div className="env-kpi-val">100% ZLD</div>
              <div className="env-kpi-title">Zero Liquid Discharge</div>
              <div className="env-kpi-desc">
                Total neutralization and reverse osmosis recycling back into
                cooling systems.
              </div>
            </div>
            <div className="env-kpi-card">
              <div className="env-kpi-val">&lt; 65 dB(A)</div>
              <div className="env-kpi-title">Perimeter Noise Level</div>
              <div className="env-kpi-desc">
                Heavy acoustic enclosures on blowers, hammer mills, and rotary
                drives.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DEEP DIVES INTO CORE SYSTEMS ===== */}
      <section className="section-wrapper">
        <div className="app-container">
          {/* 1. Air Pollution Control */}
          <div className="env-detail-section">
            <div>
              <span className="section-kicker">Multi-Stage Gas Cleaning</span>
              <h2 className="section-title">
                1. Air Pollution Control Systems (APCS)
              </h2>
              <p
                className="section-subtitle"
                style={{ marginBottom: '1.25rem' }}
              >
                Secondary lead smelting generates high-temperature off-gases
                carrying lead fumes, sulfur dioxide (SO2), and fine dust. Our
                plant utilizes a multi-stage closed-circuit exhaust treatment
                train:
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                }}
              >
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    fontSize: '0.925rem',
                  }}
                >
                  <IconCheck
                    size={18}
                    style={{
                      color: 'var(--color-accent)',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  />
                  <div>
                    <strong>Spark Arrestor &amp; Cyclone Separators:</strong>{' '}
                    Cools off-gas and removes coarse particulate matter to
                    protect downstream filter media.
                  </div>
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    fontSize: '0.925rem',
                  }}
                >
                  <IconCheck
                    size={18}
                    style={{
                      color: 'var(--color-accent)',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  />
                  <div>
                    <strong>Pulse-Jet Baghouse Filters:</strong> PTFE membrane
                    filter bags operate with continuous reverse compressed-air
                    pulsing, achieving 99.9% particulate collection efficiency
                    down to 0.1 microns.
                  </div>
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    fontSize: '0.925rem',
                  }}
                >
                  <IconCheck
                    size={18}
                    style={{
                      color: 'var(--color-accent)',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  />
                  <div>
                    <strong>Dual-Alkali Wet Venturi Scrubbers:</strong> Caustic
                    liquor (NaOH) counter-current washing neutralizes acidic
                    gases (SO2 and HCl) into soluble salts.
                  </div>
                </li>
              </ul>
            </div>
            <div className="env-media-container">
              <img
                src="/src/assets/images/pollution_control_etp_1794290545665.jpg"
                alt="Air Pollution Scrubber Towers"
                className="env-media-img"
                referrerPolicy="no-referrer"
              />
              <div className="env-system-badge">
                Multi-Stage Packed Scrubbers &amp; Baghouse Ducting
              </div>
            </div>
          </div>

          {/* 2. Effluent Treatment Plant */}
          <div className="env-detail-section reverse">
            <div>
              <span className="section-kicker">Zero Liquid Discharge (ZLD)</span>
              <h2 className="section-title">
                2. Effluent Treatment Plant (ETP)
              </h2>
              <p
                className="section-subtitle"
                style={{ marginBottom: '1.25rem' }}
              >
                Battery dismantling and floor washdowns generate acidic,
                lead-contaminated liquids. Our on-site ETP operates on a 100%
                closed-loop zero-discharge basis:
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                }}
              >
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    fontSize: '0.925rem',
                  }}
                >
                  <IconCheck
                    size={18}
                    style={{
                      color: 'var(--color-accent)',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  />
                  <div>
                    <strong>Neutralization &amp; Precipitation:</strong> Spent
                    electrolyte is reacted with lime slurry to elevate pH to
                    9.5–10.0, precipitating heavy metal hydroxides.
                  </div>
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    fontSize: '0.925rem',
                  }}
                >
                  <IconCheck
                    size={18}
                    style={{
                      color: 'var(--color-accent)',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  />
                  <div>
                    <strong>Lamella Clarifiers &amp; Sand Filtration:</strong>{' '}
                    Flocculated metal sludge settles and is dehydrated in
                    high-pressure recessed chamber filter presses.
                  </div>
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    fontSize: '0.925rem',
                  }}
                >
                  <IconCheck
                    size={18}
                    style={{
                      color: 'var(--color-accent)',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  />
                  <div>
                    <strong>Reverse Osmosis (RO) Polishing:</strong> Permeate
                    water is continuously routed back to furnace cooling jackets
                    and battery washing tanks.
                  </div>
                </li>
              </ul>
            </div>
            <div className="env-media-container">
              <img
                src="/src/assets/images/pollution_control_etp_1794290545665.jpg"
                alt="Effluent Treatment Clarifier System"
                className="env-media-img"
                referrerPolicy="no-referrer"
              />
              <div className="env-system-badge">
                ETP Reaction Tanks &amp; Lamella Clarifier
              </div>
            </div>
          </div>

          {/* 3. Hazardous Waste & Slag Handling */}
          <div className="env-detail-section">
            <div>
              <span className="section-kicker">Traceable Containment</span>
              <h2 className="section-title">
                3. Hazardous Waste &amp; Slag Management
              </h2>
              <p
                className="section-subtitle"
                style={{ marginBottom: '1.25rem' }}
              >
                Smelting generates high-iron silicate slag. All solid byproducts
                undergo rigorous chemical stabilization and documented
                containment:
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                }}
              >
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    fontSize: '0.925rem',
                  }}
                >
                  <IconCheck
                    size={18}
                    style={{
                      color: 'var(--color-accent)',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  />
                  <div>
                    <strong>Vitrification &amp; Leaching Prevention:</strong>{' '}
                    Smelting flux blends form vitrified slag that locks heavy
                    metals into stable silicate matrices.
                  </div>
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    fontSize: '0.925rem',
                  }}
                >
                  <IconCheck
                    size={18}
                    style={{
                      color: 'var(--color-accent)',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  />
                  <div>
                    <strong>TCLP Leach Testing:</strong> Every slag batch is
                    tested via Toxicity Characteristic Leaching Procedure prior
                    to storage in covered, acid-proof containment bays.
                  </div>
                </li>
                <li
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.6rem',
                    fontSize: '0.925rem',
                  }}
                >
                  <IconCheck
                    size={18}
                    style={{
                      color: 'var(--color-accent)',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  />
                  <div>
                    <strong>Authorized Disposal Manifests:</strong> Handled
                    strictly through licensed hazardous waste transfer vehicles
                    with statutory manifest paperwork.
                  </div>
                </li>
              </ul>
            </div>
            <div className="env-media-container">
              <img
                src="/src/assets/images/battery_smelting_furnace_1794290545752.jpg"
                alt="Controlled Smelting Furnace with Slag Handling"
                className="env-media-img"
                referrerPolicy="no-referrer"
              />
              <div className="env-system-badge">
                Controlled Rotary Furnace &amp; Enclosed Tap-Hole
              </div>
            </div>
          </div>

          {/* 4. Monitoring & Telemetry */}
          <div
            style={{
              backgroundColor: 'var(--color-bg-white)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <span className="section-kicker">24/7 Digital Telemetry</span>
            <h3
              style={{
                fontSize: '1.5rem',
                color: 'var(--color-text-main)',
                marginBottom: '1rem',
              }}
            >
              Continuous Environmental Monitoring System (CEMS)
            </h3>
            <p
              style={{
                color: 'var(--color-text-muted)',
                lineHeight: 1.65,
                marginBottom: '1.75rem',
              }}
            >
              Four permanent ambient air quality stations around the factory
              boundary, along with in-stack optical probes, continuously monitor
              particulate matter (PM2.5, PM10), sulfur dioxide (SO2), and carbon
              monoxide (CO). Data is logged every 15 minutes.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
              }}
            >
              <div
                style={{
                  background: 'var(--color-bg-subtle)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--color-secondary)',
                    textTransform: 'uppercase',
                  }}
                >
                  Stack Particulate (PM)
                </div>
                <div
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--color-primary)',
                    marginTop: '0.25rem',
                  }}
                >
                  &lt; 5.0 mg/Nm³
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: '#166534',
                    fontWeight: 600,
                    marginTop: '0.2rem',
                  }}
                >
                  Normal Operational Band
                </div>
              </div>
              <div
                style={{
                  background: 'var(--color-bg-subtle)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--color-secondary)',
                    textTransform: 'uppercase',
                  }}
                >
                  Sulfur Dioxide (SO2)
                </div>
                <div
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--color-primary)',
                    marginTop: '0.25rem',
                  }}
                >
                  &lt; 40 mg/Nm³
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: '#166534',
                    fontWeight: 600,
                    marginTop: '0.2rem',
                  }}
                >
                  Scrubber Controlled
                </div>
              </div>
              <div
                style={{
                  background: 'var(--color-bg-subtle)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--color-secondary)',
                    textTransform: 'uppercase',
                  }}
                >
                  Effluent pH Level
                </div>
                <div
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--color-primary)',
                    marginTop: '0.25rem',
                  }}
                >
                  7.2 – 7.8
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: '#166534',
                    fontWeight: 600,
                    marginTop: '0.2rem',
                  }}
                >
                  Neutral Water Recycle
                </div>
              </div>
              <div
                style={{
                  background: 'var(--color-bg-subtle)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--color-secondary)',
                    textTransform: 'uppercase',
                  }}
                >
                  Ambient Lead in Air
                </div>
                <div
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--color-primary)',
                    marginTop: '0.25rem',
                  }}
                >
                  &lt; 0.4 µg/m³
                </div>
                <div
                  style={{
                    fontSize: '0.75rem',
                    color: '#166534',
                    fontWeight: 600,
                    marginTop: '0.2rem',
                  }}
                >
                  Perimeter Sensor Baseline
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}