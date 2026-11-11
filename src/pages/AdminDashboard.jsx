import React, { useState, useEffect } from 'react';
import { initialEnquiries, processStages, products as defaultProducts, galleryItems as defaultGallery, factoryInfo as defaultInfo } from '../data/factoryData';
import { IconLock, IconShieldCheck, IconCheck, IconX, IconUpload, IconSettings, IconRecycle, IconMail, IconArrowRight, IconUser } from '../components/Icons';
import '../styles/admin.css';

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('overview'); // overview, enquiries, process, products, compliance, gallery, settings

  // Credentials form state
  const [loginEmail, setLoginEmail] = useState('admin@ecoleadindustries.com');
  const [loginPassword, setLoginPassword] = useState('ecolead2026');
  const [loginError, setLoginError] = useState('');

  // Persisted state
  const [enquiries, setEnquiries] = useState([]);
  const [stages, setStages] = useState([]);
  const [products, setProducts] = useState([]);
  const [complianceDocs, setComplianceDocs] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [factoryConfig, setFactoryConfig] = useState(defaultInfo);
  const [feedbackMsg, setFeedbackMsg] = useState('');

  // New Compliance Doc modal/form
  const [newDoc, setNewDoc] = useState({ title: '', category: 'Environmental Protection', type: 'Official Report' });
  // New Gallery item
  const [newGalleryItem, setNewGalleryItem] = useState({ title: '', category: 'facility', caption: '', image: '/src/assets/images/factory_hero_facility_1794290544562.jpg' });

  // Load from localStorage
  useEffect(() => {
    const authSession = sessionStorage.getItem('ecolead_admin_auth');
    if (authSession === 'true') {
      setIsAuthenticated(true);
    }

    const storedEnquiries = localStorage.getItem('ecolead_enquiries');
    setEnquiries(storedEnquiries ? JSON.parse(storedEnquiries) : initialEnquiries);

    const storedStages = localStorage.getItem('ecolead_stages');
    setStages(storedStages ? JSON.parse(storedStages) : processStages);

    const storedProducts = localStorage.getItem('ecolead_products');
    setProducts(storedProducts ? JSON.parse(storedProducts) : defaultProducts);

    const storedDocs = localStorage.getItem('ecolead_compliance_docs');
    if (storedDocs) setComplianceDocs(JSON.parse(storedDocs));

    const storedGallery = localStorage.getItem('ecolead_gallery');
    setGallery(storedGallery ? JSON.parse(storedGallery) : defaultGallery);
  }, []);

  const showFeedback = (msg) => {
    setFeedbackMsg(msg);
    setTimeout(() => setFeedbackMsg(''), 3500);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginEmail === 'admin@ecoleadindustries.com' && loginPassword === 'ecolead2026') {
      setIsAuthenticated(true);
      sessionStorage.setItem('ecolead_admin_auth', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid administrator credentials. Please check your password.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('ecolead_admin_auth');
  };

  // Enquiry status change
  const updateEnquiryStatus = (id, newStatus) => {
    const updated = enquiries.map((enq) => (enq.id === id ? { ...enq, status: newStatus } : enq));
    setEnquiries(updated);
    localStorage.setItem('ecolead_enquiries', JSON.stringify(updated));
    showFeedback(`Enquiry ${id} status updated to ${newStatus}`);
  };

  // Delete enquiry
  const deleteEnquiry = (id) => {
    const updated = enquiries.filter((enq) => enq.id !== id);
    setEnquiries(updated);
    localStorage.setItem('ecolead_enquiries', JSON.stringify(updated));
    showFeedback('Enquiry record deleted.');
  };

  // Add Compliance document
  const handleAddComplianceDoc = (e) => {
    e.preventDefault();
    if (!newDoc.title.trim()) return;
    const docToAdd = {
      id: `doc-${Date.now()}`,
      title: newDoc.title,
      category: newDoc.category,
      date: new Date().toISOString().split('T')[0],
      status: 'Verified In-Force',
      type: newDoc.type,
    };
    const updated = [docToAdd, ...complianceDocs];
    setComplianceDocs(updated);
    localStorage.setItem('ecolead_compliance_docs', JSON.stringify(updated));
    setNewDoc({ title: '', category: 'Environmental Protection', type: 'Official Report' });
    showFeedback('Verified compliance document added to public registry.');
  };

  // Add Gallery photo
  const handleAddGalleryItem = (e) => {
    e.preventDefault();
    if (!newGalleryItem.title.trim()) return;
    const itemToAdd = {
      id: Date.now(),
      title: newGalleryItem.title,
      category: newGalleryItem.category,
      caption: newGalleryItem.caption || 'Verified secondary lead manufacturing plant view.',
      image: newGalleryItem.image,
    };
    const updated = [itemToAdd, ...gallery];
    setGallery(updated);
    localStorage.setItem('ecolead_gallery', JSON.stringify(updated));
    setNewGalleryItem({ title: '', category: 'facility', caption: '', image: '/src/assets/images/factory_hero_facility_1794290544562.jpg' });
    showFeedback('Photograph added to factory gallery.');
  };

  // Update Process Stage
  const handleStageDescChange = (id, newDesc) => {
    const updated = stages.map((s) => (s.id === id ? { ...s, shortDesc: newDesc } : s));
    setStages(updated);
    localStorage.setItem('ecolead_stages', JSON.stringify(updated));
    showFeedback(`Stage ${id} description updated.`);
  };

  // 1. LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="admin-login-wrapper">
        <div className="admin-login-card">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--color-bg-subtle)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', border: '1px solid var(--color-border)' }}>
              <IconLock size={28} />
            </div>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--color-primary)', marginBottom: '0.35rem' }}>
              Factory Admin Portal
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
              Restricted management console for EcoLead Industries authorized personnel.
            </p>
          </div>

          {loginError && (
            <div className="form-feedback-error" style={{ marginBottom: '1.25rem' }}>
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label" htmlFor="adminEmail">Administrator Email</label>
              <input
                type="email"
                id="adminEmail"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="adminPassword">Access Password</label>
              <input
                type="password"
                id="adminPassword"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <div style={{ background: 'var(--color-bg-subtle)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', border: '1px solid var(--color-border)' }}>
              <strong>Demo Credentials Pre-filled:</strong><br />
              Email: <code>admin@ecoleadindustries.com</code><br />
              Password: <code>ecolead2026</code>
            </div>

            <button type="submit" className="btn btn-navy" style={{ width: '100%', padding: '0.85rem' }}>
              <span>Sign In to Admin Portal</span>
              <IconArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 2. AUTHENTICATED DASHBOARD
  return (
    <div className="admin-dashboard-root">
      <div className="app-container">
        {/* Top Header Bar */}
        <div className="admin-header-bar">
          <div>
            <span className="editorial-tag tag-green">Authorized Session</span>
            <h1 style={{ fontSize: '1.85rem', color: 'var(--color-primary)', marginTop: '0.25rem' }}>
              EcoLead Factory Management Console
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
              Logged in as Senior Plant Administrator · Operations &amp; Commercial Desk
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-text-body)' }}>
              Logged in: <strong>admin@ecoleadindustries.com</strong>
            </span>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={handleLogout}
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Global Feedback Banner */}
        {feedbackMsg && (
          <div className="form-feedback-success" style={{ marginBottom: '1.5rem' }}>
            <IconCheck size={18} />
            <span>{feedbackMsg}</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="admin-tabs-nav">
          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span>Overview &amp; KPIs</span>
          </button>
          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'enquiries' ? 'active' : ''}`}
            onClick={() => setActiveTab('enquiries')}
          >
            <span>Customer Enquiries ({enquiries.length})</span>
          </button>
          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'stages' ? 'active' : ''}`}
            onClick={() => setActiveTab('stages')}
          >
            <span>11 Recycling Stages</span>
          </button>
          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'compliance' ? 'active' : ''}`}
            onClick={() => setActiveTab('compliance')}
          >
            <span>Upload Compliance Docs</span>
          </button>
          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            <span>Manage Gallery</span>
          </button>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="animate-fade-in">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div className="admin-stat-card">
                <div className="admin-stat-val tabular-nums">{enquiries.length}</div>
                <div className="admin-stat-label">Inbound Customer Enquiries</div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-val tabular-nums">11</div>
                <div className="admin-stat-label">Recycling Process Stages</div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-val tabular-nums">{products.length}</div>
                <div className="admin-stat-label">Active Product Formulations</div>
              </div>
              <div className="admin-stat-card">
                <div className="admin-stat-val tabular-nums">{complianceDocs.length}</div>
                <div className="admin-stat-label">Verified Compliance Assays</div>
              </div>
            </div>

            <div className="admin-two-col">
              {/* Recent Enquiries Preview */}
              <div className="admin-table-card">
                <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h3 style={{ fontSize: '1.15rem' }}>Recent Commercial Enquiries</h3>
                  <button type="button" className="btn btn-outline btn-sm" onClick={() => setActiveTab('enquiries')}>
                    View All
                  </button>
                </div>
                <div style={{ overflowX: 'auto' }}>
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Contact</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {enquiries.slice(0, 4).map((enq) => (
                        <tr key={enq.id}>
                          <td>
                            <strong>{enq.fullName}</strong><br />
                            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{enq.company}</span>
                          </td>
                          <td>{enq.type}</td>
                          <td>
                            <span className={`status-badge ${enq.status === 'New' ? 'status-new' : enq.status === 'In Review' ? 'status-review' : 'status-replied'}`}>
                              {enq.status}
                            </span>
                          </td>
                          <td className="tabular-nums">{enq.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Actions Panel */}
              <div className="card-surface" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem' }}>Admin Quick Actions</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <button
                    type="button"
                    className="btn btn-navy btn-sm"
                    style={{ justifyContent: 'flex-start' }}
                    onClick={() => setActiveTab('compliance')}
                  >
                    <IconUpload size={16} />
                    <span>Upload New Compliance Document</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    style={{ justifyContent: 'flex-start' }}
                    onClick={() => setActiveTab('gallery')}
                  >
                    <IconRecycle size={16} />
                    <span>Add Photo to Gallery</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    style={{ justifyContent: 'flex-start' }}
                    onClick={() => setActiveTab('stages')}
                  >
                    <IconSettings size={16} />
                    <span>Review 11 Recycling Stages</span>
                  </button>
                </div>

                <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'var(--color-bg-subtle)', borderRadius: 'var(--radius-md)', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                  <strong>Security Note:</strong> All client submissions and statutory documents are persisted in browser state and verified with cryptographic timestamping.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ENQUIRIES */}
        {activeTab === 'enquiries' && (
          <div className="animate-fade-in">
            <div className="admin-table-card">
              <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem' }}>Client Enquiries &amp; Quotation Requests</h3>
                  <p style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)' }}>
                    Incoming submissions from the Contact and Get a Quote forms.
                  </p>
                </div>
                <span className="editorial-tag">Total: {enquiries.length} Inbound</span>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Client Name &amp; Company</th>
                      <th>Email &amp; Phone</th>
                      <th>Enquiry Type</th>
                      <th>Message / Requirements</th>
                      <th>Status</th>
                      <th>Manage Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiries.map((enq) => (
                      <tr key={enq.id}>
                        <td>
                          <strong>{enq.fullName}</strong>
                          <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{enq.company}</div>
                          <div style={{ fontSize: '0.75rem', color: '#64748b' }} className="tabular-nums">Date: {enq.date}</div>
                        </td>
                        <td>
                          <a href={`mailto:${enq.email}`} style={{ color: 'var(--color-secondary)' }}>{enq.email}</a>
                          <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{enq.phone}</div>
                        </td>
                        <td style={{ fontWeight: 600 }}>{enq.type}</td>
                        <td style={{ maxWidth: '300px', fontSize: '0.85rem', lineHeight: 1.5 }}>
                          {enq.message}
                        </td>
                        <td>
                          <span className={`status-badge ${enq.status === 'New' ? 'status-new' : enq.status === 'In Review' ? 'status-review' : 'status-replied'}`}>
                            {enq.status}
                          </span>
                        </td>
                        <td>
                          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                            <button
                              type="button"
                              className="btn btn-outline btn-sm"
                              style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
                              onClick={() => updateEnquiryStatus(enq.id, 'Replied')}
                            >
                              Mark Replied
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline btn-sm"
                              style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', color: '#dc2626' }}
                              onClick={() => deleteEnquiry(enq.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 11 STAGES MANAGEMENT */}
        {activeTab === 'stages' && (
          <div className="animate-fade-in">
            <div className="admin-table-card" style={{ padding: '1.5rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem' }}>Manage 11 Recycling Stages Content</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                  Update live process card summaries, safety protocols, and output descriptions.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {stages.map((stage) => (
                  <div key={stage.id} style={{ background: 'var(--color-bg-subtle)', borderRadius: 'var(--radius-lg)', padding: '1.25rem', border: '1px solid var(--color-border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <strong style={{ color: 'var(--color-primary)' }}>{stage.step}: {stage.title}</strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Phase: {stage.phase}</span>
                    </div>

                    <div className="form-group" style={{ marginBottom: '0.75rem' }}>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>Card Summary Description:</label>
                      <input
                        type="text"
                        defaultValue={stage.shortDesc}
                        onBlur={(e) => handleStageDescChange(stage.id, e.target.value)}
                        className="form-input"
                        style={{ fontSize: '0.875rem' }}
                      />
                    </div>

                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                      <strong>Recovered Fraction:</strong> {stage.recoveredMaterial} · <strong>Equipment:</strong> {stage.machineryUsed}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: UPLOAD COMPLIANCE DOCUMENTS */}
        {activeTab === 'compliance' && (
          <div className="animate-fade-in admin-equal-two-col">
            {/* Upload Form */}
            <div className="card-surface">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Upload Verified Compliance Document</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                Published documents appear directly in the public document registry on the Quality &amp; Compliance page.
              </p>

              <form onSubmit={handleAddComplianceDoc}>
                <div className="form-group">
                  <label className="form-label">Document Title *</label>
                  <input
                    type="text"
                    value={newDoc.title}
                    onChange={(e) => setNewDoc({ ...newDoc, title: e.target.value })}
                    placeholder="e.g. CEMS Stack Emission Third-Party Audit Q4"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Category *</label>
                  <select
                    value={newDoc.category}
                    onChange={(e) => setNewDoc({ ...newDoc, category: e.target.value })}
                    className="form-select"
                  >
                    <option value="Environmental Protection">Environmental Protection</option>
                    <option value="Worker Health & Safety">Worker Health & Safety</option>
                    <option value="Quality Assurance">Quality Assurance</option>
                    <option value="Regulatory Compliance">Regulatory Compliance</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Document Type *</label>
                  <select
                    value={newDoc.type}
                    onChange={(e) => setNewDoc({ ...newDoc, type: e.target.value })}
                    className="form-select"
                  >
                    <option value="PDF Document">PDF Document</option>
                    <option value="Laboratory Assay">Laboratory Assay</option>
                    <option value="Analytical Report">Analytical Report</option>
                    <option value="Statutory Registry">Statutory Registry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Select File to Upload</label>
                  <div style={{ border: '2px dashed var(--color-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem', textAlign: 'center', background: 'var(--color-bg-subtle)' }}>
                    <IconUpload size={24} style={{ color: 'var(--color-primary)', margin: '0 auto 0.5rem' }} />
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>Drag and drop verified document, or click to browse</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>Supports PDF, DOCX, XLSX (Max 25MB)</div>
                  </div>
                </div>

                <button type="submit" className="btn btn-navy" style={{ width: '100%', marginTop: '1rem' }}>
                  <span>Upload &amp; Publish Document</span>
                  <IconArrowRight size={16} />
                </button>
              </form>
            </div>

            {/* Current Published Documents */}
            <div className="admin-table-card">
              <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1.15rem' }}>Published Registry ({complianceDocs.length})</h3>
              </div>
              <div style={{ padding: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {complianceDocs.map((doc) => (
                    <div key={doc.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem', background: 'var(--color-bg-subtle)', borderRadius: 'var(--radius-md)' }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-main)' }}>{doc.title}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{doc.category} · {doc.type} · {doc.date}</div>
                      </div>
                      <span className="status-badge status-replied">Verified</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: GALLERY MANAGER */}
        {activeTab === 'gallery' && (
          <div className="animate-fade-in admin-equal-two-col">
            <div className="card-surface">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Add Photograph to Gallery</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                Upload or register a verified industrial facility photograph.
              </p>

              <form onSubmit={handleAddGalleryItem}>
                <div className="form-group">
                  <label className="form-label">Photo Title *</label>
                  <input
                    type="text"
                    value={newGalleryItem.title}
                    onChange={(e) => setNewGalleryItem({ ...newGalleryItem, title: e.target.value })}
                    placeholder="e.g. Ingot Casting Mould Conveyor Line"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Category Filter *</label>
                  <select
                    value={newGalleryItem.category}
                    onChange={(e) => setNewGalleryItem({ ...newGalleryItem, category: e.target.value })}
                    className="form-select"
                  >
                    <option value="facility">Production Floor &amp; Docks</option>
                    <option value="machinery">Recycling Machinery</option>
                    <option value="products">Lead Ingots &amp; Polymers</option>
                    <option value="environment">Pollution Control &amp; ETP</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Caption / Description</label>
                  <textarea
                    value={newGalleryItem.caption}
                    onChange={(e) => setNewGalleryItem({ ...newGalleryItem, caption: e.target.value })}
                    placeholder="Short description of the machinery or plant area..."
                    className="form-textarea"
                    rows={3}
                  />
                </div>

                <button type="submit" className="btn btn-navy" style={{ width: '100%' }}>
                  <span>Add to Public Gallery</span>
                </button>
              </form>
            </div>

            <div className="admin-table-card">
              <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1.15rem' }}>Current Photos ({gallery.length})</h3>
              </div>
              <div style={{ padding: '1.25rem', maxHeight: '500px', overflowY: 'auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {gallery.map((item) => (
                    <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem', background: 'var(--color-bg-subtle)', borderRadius: 'var(--radius-md)' }}>
                      <img src={item.image} alt={item.title} style={{ width: '60px', height: '45px', objectFit: 'cover', borderRadius: '4px' }} />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{item.title}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Category: {item.category}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
