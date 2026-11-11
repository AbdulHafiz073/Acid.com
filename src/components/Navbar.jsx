import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  IconRecycle,
  IconX,
  IconLock,
  IconArrowRight,
  IconShieldCheck,
  IconSettings,
  IconCheck,
  IconImage
} from './Icons';
import '../styles/navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, [location.pathname]);

  // Click outside listener for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 220); // 220ms grace period so mouse movement between button and menu never drops
  };

  const toggleServicesClick = (e) => {
    e.stopPropagation();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesDropdownOpen((prev) => !prev);
  };

  const serviceItems = [
    {
      name: 'Environmental',
      subtitle: 'ETP, APCS & Emissions Telemetry',
      path: '/environmental',
      icon: <IconShieldCheck size={18} />
    },
    {
      name: 'Machinery',
      subtitle: 'Breaker, Furnaces & Granulation Line',
      path: '/infrastructure',
      icon: <IconSettings size={18} />
    },
    {
      name: 'Compliance',
      subtitle: 'OES Laboratory & Safety Standards',
      path: '/compliance',
      icon: <IconCheck size={18} />
    },
    {
      name: 'Gallery',
      subtitle: 'High-Res Factory & Equipment Photos',
      path: '/gallery',
      icon: <IconImage size={18} />
    },
  ];

  const isServicesActive = serviceItems.some((item) => location.pathname === item.path);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand */}
       <Link to="/" className="brand-link" aria-label="EcoLead Industries Home">

  <img
    src="/assets/logo3.png"
    alt="EcoLead Battery Logo"
    className="brand-logo"
  />

  <div className="brand-text-block">
    <span className="brand-title">
      Eco<span>Lead</span>
    </span>

    <span className="brand-subtitle">
      Battery Recycling
    </span>
  </div>

</Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links-desktop">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/process"
                className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''} highlight-process`}
              >
                Recycling Process
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
              >
                Products
              </NavLink>
            </li>

            {/* Services Dropdown (Contains Environmental, Machinery, Compliance, Gallery) */}
            <li
              className="nav-dropdown-item"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`nav-dropdown-btn ${isServicesActive ? 'active' : ''}`}
                onClick={toggleServicesClick}
                aria-expanded={servicesDropdownOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <span className={`dropdown-arrow-icon ${servicesDropdownOpen ? 'rotated' : ''}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 16 6 8 18 8" />
                  </svg>
                </span>
              </button>

              {servicesDropdownOpen && (
                <div
                  className="nav-dropdown-wrapper"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="nav-dropdown-menu" role="menu">
                    {serviceItems.map((subItem) => (
                      <NavLink
                        key={subItem.path}
                        to={subItem.path}
                        className={({ isActive }) => `dropdown-sublink ${isActive ? 'active' : ''}`}
                        role="menuitem"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        <div className="dropdown-sublink-icon">
                          {subItem.icon}
                        </div>
                        <div className="dropdown-sublink-text">
                          <span className="dropdown-sublink-title">{subItem.name}</span>
                          <span className="dropdown-sublink-desc">{subItem.subtitle}</span>
                        </div>
                        <IconArrowRight size={14} style={{ opacity: 0.5, marginLeft: 'auto' }} />
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right Action & Mobile Toggle */}
        <div className="navbar-actions">
          <Link to="/admin" className="admin-nav-link" title="Authorized Administrator Portal">
            <IconLock size={14} />
            <span>Portal</span>
          </Link>
          <Link to="/quote" className="btn btn-primary btn-sm">
            <span>Get a Quote</span>
          </Link>
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <IconX size={22} />
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <ul className="mobile-nav-links">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  end
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Home</span>
                  <IconArrowRight size={16} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>About Us</span>
                  <IconArrowRight size={16} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/process"
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Recycling Process (11 Stages)</span>
                  <IconArrowRight size={16} />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Products</span>
                  <IconArrowRight size={16} />
                </NavLink>
              </li>

              {/* Mobile Services Accordion */}
              <li>
                <button
                  type="button"
                  className={`mobile-accordion-btn ${isServicesActive ? 'active' : ''}`}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-primary)' }}>
                    Services
                  </span>
                  <span style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease', display: 'flex' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 16 6 8 18 8" />
                    </svg>
                  </span>
                </button>

                {mobileServicesOpen && (
                  <ul className="mobile-sub-list">
                    {serviceItems.map((subItem) => (
                      <li key={subItem.path}>
                        <NavLink
                          to={subItem.path}
                          className={({ isActive }) => `mobile-sub-link ${isActive ? 'active' : ''}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                            <span style={{ color: 'var(--color-accent)' }}>{subItem.icon}</span>
                            <span>{subItem.name}</span>
                          </div>
                          <IconArrowRight size={14} style={{ opacity: 0.6 }} />
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Contact</span>
                  <IconArrowRight size={16} />
                </NavLink>
              </li>
            </ul>

            <div className="mobile-actions">
              <Link to="/quote" className="btn btn-primary" style={{ width: '100%' }} onClick={() => setMobileMenuOpen(false)}>
                <span>Request Quotation</span>
              </Link>
              <Link to="/admin" className="admin-nav-link" style={{ justifyContent: 'center' }} onClick={() => setMobileMenuOpen(false)}>
                <IconLock size={15} />
                <span>Admin Management Portal</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
