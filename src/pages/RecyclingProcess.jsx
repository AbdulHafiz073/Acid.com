import React, { useState } from 'react';
import { processStages } from '../data/factoryData';
import ProcessFlowchart from '../components/ProcessFlowchart';
import { IconRecycle, IconShieldCheck, IconFactory, IconCheck, IconArrowRight } from '../components/Icons';
import { Link } from 'react-router-dom';
import '../styles/process.css';

export default function RecyclingProcess() {
  return (
    <div className="process-page-root">
      
      {/* Hero Header */}
    
<section className="process-hero-banner">

  {/* Background Image */}
  <img
    src="/assets/Recycling-Process 2-100kb.jpeg"
    alt="Lead Acid Battery Recycling Factory"
    className="process-hero-background"
  />

  {/* Dark Overlay */}
  <div className="process-hero-overlay"></div>

  <div className="app-container">
    <div className="process-hero-content">

      <div className="process-badge">
        <IconRecycle size={18} />
      </div>

      <h1 className="process-hero-title">
        Lead-Acid Battery Recycling Process Flow Chart
      </h1>

      <p className="process-hero-lead">
        Our closed-loop industrial recycling process transforms hazardous
        spent lead-acid batteries into refined 99.97% pure lead ingots,
        extrusion-grade polypropylene granules, and treated industrial
        chemicals with zero liquid discharge.
      </p>

      <div className="process-hero-stats">

        <div>
          <div className="process-stat-number">11 Stages</div>
          <div className="process-stat-label">Exact Sequential Flow</div>
        </div>

        <div>
          <div className="process-stat-number">98.5%</div>
          <div className="process-stat-label">Material Recovery Rate</div>
        </div>

        <div>
          <div className="process-stat-number">100% Zero ZLD</div>
          <div className="process-stat-label">Closed-Loop Effluent</div>
        </div>

      </div>

    </div>
  </div>
</section>


      {/* Main Interactive Flowchart Section */}
      <section className="section-wrapper" style={{ paddingTop: '1rem' }}>
        <div className="app-container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-kicker">Interactive Engineering Flowchart</span>
            <h2 className="section-title">Step-by-Step Recycling Lifecycle</h2>
            <p className="section-subtitle" style={{ maxWidth: '720px', margin: '0 auto' }}>
              Click on any stage card or schematic node below to view the expanded engineering specifications, machinery parameters, safety protocols, and recovered output materials.
            </p>
          </div>

          {/* Flowchart Component with all 11 stages and modal deep-dive */}
          <ProcessFlowchart isPreview={false} />

          {/* Process Summary & Material Balance Table */}
          <div style={{ marginTop: '5rem', backgroundColor: 'var(--color-bg-white)', borderRadius: 'var(--radius-xl)', padding: '2.5rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span className="section-kicker">Mass & Material Balance</span>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-main)' }}>Typical 1 Metric Ton Battery Input Breakdown</h3>
              </div>
              <Link to="/quote" className="btn btn-primary btn-sm">
                <span>Supply Scrap Batteries</span>
                <IconArrowRight size={15} />
              </Link>
            </div>

            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
              <table style={{ width: '100%', minWidth: '580px', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--color-border)', color: 'var(--color-text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <th style={{ padding: '0.75rem 1rem' }}>Fractions Recovered</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Weight %</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Process Stage</th>
                    <th style={{ padding: '0.75rem 1rem' }}>Recovered Commercial Form</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--color-text-main)' }}>Lead Metal & Paste (Grids, Poles, Oxide)</td>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--color-primary)' }} className="tabular-nums">60% – 65%</td>
                    <td style={{ padding: '1rem' }}>STEP 06 &amp; STEP 09 (Smelting &amp; Refining)</td>
                    <td style={{ padding: '1rem', color: 'var(--color-accent)', fontWeight: 600 }}>99.97% Pure Lead Ingots &amp; Master Alloys</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--color-text-main)' }}>Polypropylene (PP) Battery Cases</td>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--color-primary)' }} className="tabular-nums">8% – 10%</td>
                    <td style={{ padding: '1rem' }}>STEP 04 &amp; STEP 07 (Sink-Float &amp; Extrusion)</td>
                    <td style={{ padding: '1rem', color: 'var(--color-accent)', fontWeight: 600 }}>Extrusion-grade PP Granules (Black &amp; Blue)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--color-text-main)' }}>Sulfuric Acid Electrolyte (H2SO4)</td>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--color-primary)' }} className="tabular-nums">15% – 20%</td>
                    <td style={{ padding: '1rem' }}>STEP 05 &amp; STEP 10 (Neutralization &amp; ETP)</td>
                    <td style={{ padding: '1rem', color: 'var(--color-accent)', fontWeight: 600 }}>Neutralized Water &amp; Sodium Sulfate Salt</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--color-text-main)' }}>Separators, Copper Lugs &amp; Residuals</td>
                    <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--color-primary)' }} className="tabular-nums">5% – 8%</td>
                    <td style={{ padding: '1rem' }}>STEP 08 (Non-Ferrous Eddy-Current Sorting)</td>
                    <td style={{ padding: '1rem', color: 'var(--color-accent)', fontWeight: 600 }}>Secondary Copper Scrap &amp; Inert Byproduct</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
