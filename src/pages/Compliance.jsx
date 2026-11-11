import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  IconShieldCheck,
  IconCheck,
  IconUpload,
  IconLock,
  IconArrowRight,
} from '../components/Icons';
import '../styles/compliance.css';

const defaultComplianceDocs = [
  {
    id: 'doc-01',
    title: 'Occupational Lead Exposure & Air Hygiene Monitoring Protocol',
    category: 'Worker Health & Safety',
    date: '2026-10-15',
    status: 'Verified In-Force',
    type: 'PDF Document',
  },
  {
    id: 'doc-02',
    title: 'Zero Liquid Discharge (ZLD) Effluent Water Quality Assay',
    category: 'Environmental Protection',
    date: '2026-09-28',
    status: 'Verified In-Force',
    type: 'Analytical Report',
  },
  {
    id: 'doc-03',
    title: 'Spectrometer Calibration & Pure Lead (99.97% Pb) Standard Reference',
    category: 'Quality Assurance',
    date: '2026-08-14',
    status: 'Verified In-Force',
    type: 'Laboratory Assay',
  },
  {
    id: 'doc-04',
    title: 'Hazardous Waste Manifest & Slag Vitrification Protocol (Form 10)',
    category: 'Regulatory Compliance',
    date: '2026-07-22',
    status: 'Verified In-Force',
    type: 'Statutory Registry',
  },
];

export default function Compliance() {
  const [docs, setDocs] = useState([]);
  const [downloadNotice, setDownloadNotice] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('ecolead_compliance_docs');
    if (stored) {
      setDocs(JSON.parse(stored));
    } else {
      setDocs(defaultComplianceDocs);
      localStorage.setItem(
        'ecolead_compliance_docs',
        JSON.stringify(defaultComplianceDocs)
      );
    }
  }, []);

  const handleDownload = (doc) => {
    setDownloadNotice(
      `Generating verified copy of "${doc.title}"... Ready for official download.`
    );
    setTimeout(() => {
      setDownloadNotice(null);
    }, 4000);
  };

  return (
    <div className="compliance-page">
      {/* ============================================================
          COMPLIANCE HERO — with background image
         ============================================================ */}
      <section className="compliance-hero" aria-labelledby="compliance-hero-heading">
        {/* Background layer: image + dark overlay */}
        <div className="compliance-hero-bg" aria-hidden="true">
          <img
            src="/public/assets/home11-100kb.jpeg"
            alt=""
            className="compliance-hero-bg-img"
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <div className="compliance-hero-overlay" />
        </div>

        {/* Foreground content */}
        <div className="app-container compliance-hero-content">
          <span className="section-kicker compliance-hero-kicker">
            Strict Industrial Standards
          </span>

          <h1
            id="compliance-hero-heading"
            className="section-title compliance-hero-title"
          >
            Quality, Worker Safety &amp; Regulatory Compliance
          </h1>

          <p className="section-subtitle compliance-hero-subtitle">
            Operating a world-class secondary lead recycling facility requires
            uncompromising standards in worker hygiene, metallurgical precision,
            air emission containment, and statutory waste manifests.
          </p>

          <div className="compliance-hero-note">
            <IconShieldCheck size={18} className="compliance-hero-note-icon" />
            <span>
              Policy: We only publish verified operational documents and audited
              laboratory assays.
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================
          PILLARS OF COMPLIANCE
         ============================================================ */}
      <section className="section-wrapper">
        <div className="app-container">
          <div className="section-header">
            <span className="section-kicker">Governance Framework</span>
            <h2 className="section-title">
              Metallurgical Quality &amp; Industrial Safety
            </h2>
            <p className="section-subtitle">
              Our quality management system operates across every step from raw
              battery inward weighing to robotic ingot stacking.
            </p>
          </div>

          <div className="compliance-grid">
            {/* 1. Quality Management */}
            <div className="compliance-card">
              <div className="compliance-icon-wrap">
                <IconShieldCheck size={24} />
              </div>
              <h3 className="compliance-title">
                1. Metallurgical Quality Management
              </h3>
              <p className="compliance-desc">
                Every smelting charge and refining kettle melt heat is sampled
                before casting. Optical Emission Spectrometry (OES) assays 18
                elemental components (including Pb, Sb, Sn, Cu, Bi, Ag, As) to
                ensure strict adherence to OEM specifications.
              </p>
              <ul className="compliance-list">
                <li>✓ 60-second multi-element OES test cycle</li>
                <li>✓ Melt-heat batch traceability numbers</li>
                <li>✓ Certificate of Analysis with each shipment</li>
              </ul>
            </div>

            {/* 2. Worker Safety & Industrial Hygiene */}
            <div className="compliance-card">
              <div className="compliance-icon-wrap">
                <IconShieldCheck size={24} />
              </div>
              <h3 className="compliance-title">
                2. Worker Safety &amp; Health Protocols
              </h3>
              <p className="compliance-desc">
                Worker protection is engineered into the factory architecture.
                Downdraft benches extract dust at the source, and workers pass
                through pressurized clean-air locks with shower decontamination
                facilities before exiting.
              </p>
              <ul className="compliance-list">
                <li>✓ Routine biological lead level (BLL) blood testing</li>
                <li>✓ Powered Air-Purifying Respirators (PAPR)</li>
                <li>✓ Daily facility floor wet-scrub vacuuming</li>
              </ul>
            </div>

            {/* 3. Regulatory Manifests & Waste Tracking */}
            <div className="compliance-card">
              <div className="compliance-icon-wrap">
                <IconShieldCheck size={24} />
              </div>
              <h3 className="compliance-title">
                3. Statutory Hazardous Waste Tracking
              </h3>
              <p className="compliance-desc">
                All inward scrap batteries and outward solid byproducts
                (neutralized slag, filter-cake gypsum) are logged with
                regulatory transfer manifests, ensuring complete statutory
                chain-of-custody.
              </p>
              <ul className="compliance-list">
                <li>✓ Form 10 hazardous waste movement tracking</li>
                <li>✓ Annual environmental audit statements</li>
                <li>✓ Certified secondary carrier verification</li>
              </ul>
            </div>
          </div>

          {/* ============================================================
              DOCUMENT REPOSITORY & DOWNLOAD TABLE
             ============================================================ */}
          <div className="compliance-docs-section">
            <div className="compliance-docs-header">
              <div>
                <span className="section-kicker">
                  Verified Documentation Vault
                </span>
                <h3 className="compliance-docs-title">
                  Verified Compliance Documents &amp; Assays
                </h3>
              </div>
              <Link to="/admin" className="btn btn-outline btn-sm">
                <IconUpload size={15} />
                <span>Admin Upload Portal</span>
              </Link>
            </div>

            {downloadNotice && (
              <div className="form-feedback-success compliance-download-notice">
                <IconCheck size={18} />
                <span>{downloadNotice}</span>
              </div>
            )}

            <div className="compliance-table-wrap">
              <table className="doc-registry-table">
                <thead>
                  <tr>
                    <th>Document Title</th>
                    <th>Category</th>
                    <th>Audit Date</th>
                    <th>Format</th>
                    <th>Verification Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {docs.map((doc) => (
                    <tr key={doc.id}>
                      <td className="doc-title-cell">{doc.title}</td>
                      <td>{doc.category}</td>
                      <td className="tabular-nums">{doc.date}</td>
                      <td>{doc.type}</td>
                      <td>
                        <span className="doc-status-badge doc-status-verified">
                          {doc.status}
                        </span>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-navy btn-sm"
                          onClick={() => handleDownload(doc)}
                        >
                          <span>Request / Download</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="compliance-docs-note">
              Note: Factory administrators can upload new regulatory inspection
              results and audit manifests via the secure Admin Portal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}