import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/PageTransition';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    type: '',
    scope: '',
    budget: '',
    timeline: '',
    description: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a production build, this would map to a serverless function, Formspree, or EmailJS
    alert("Inquiry submitted successfully! (Frontend UI Demo Only)");
  };

  return (
    <PageTransition title="Inquire" description="Start a refined interior design project with NM Designs.">
    <div className="contact-page container section">
      <div className="contact-grid">
        {/* Left Side: Framing & Info */}
        <div className="contact-info">
          <h1 className="heading-large" style={{ marginBottom: '2rem' }}>Inquire</h1>
          <p className="text-body" style={{ marginBottom: '1.5rem', maxWidth: '400px' }}>
            NM Designs takes on a limited number of comprehensive interior architecture and design projects each year to ensure uncompromising quality.
          </p>
          <p className="text-body" style={{ marginBottom: '4rem', maxWidth: '400px', opacity: 0.8 }}>
            Please fill out the details below. We will review your brief and respond within 48 hours to schedule a consultation if we appear to be a good mutual fit.
          </p>

          <div className="contact-details">
            <div className="detail-block">
              <span className="detail-label">Direct Email</span>
              <a href="mailto:hello@nmdesigns.com" className="detail-value">hello@nmdesigns.com</a>
            </div>
            <div className="detail-block">
               <span className="detail-label">Location</span>
               <span className="detail-value text-body" style={{ margin: 0, opacity: 1 }}>Tbilisi, Georgia</span>
            </div>
            <div className="detail-block">
               <span className="detail-label">Social</span>
               <a href="https://instagram.com" target="_blank" rel="noreferrer" className="detail-value">Instagram</a>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="contact-form-wrapper">
          <form className="inquiry-form" onSubmit={handleSubmit}>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="location">Project Location</label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Vake, Tbilisi" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="type">Project Type *</label>
                <select id="type" name="type" required value={formData.type} onChange={handleChange}>
                  <option value="" disabled>Select Type</option>
                  <option value="residential">Residential Build</option>
                  <option value="apartment">Apartment Renovation</option>
                  <option value="commercial">Commercial / Boutique</option>
                  <option value="concept">Concept & 3D Visualization</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="scope">Approximate Scope *</label>
                <select id="scope" name="scope" required value={formData.scope} onChange={handleChange}>
                  <option value="" disabled>Select Scope</option>
                  <option value="full">Full Property</option>
                  <option value="partial">Multiple Rooms</option>
                  <option value="single">Single Room / Custom Joinery</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="budget">Budget Range *</label>
                <select id="budget" name="budget" required value={formData.budget} onChange={handleChange}>
                  <option value="" disabled>Select Budget</option>
                  <option value="under_50k">Under $50,000</option>
                  <option value="50_100k">$50,000 - $100,000</option>
                  <option value="100_250k">$100,000 - $250,000</option>
                  <option value="over_250k">$250,000+</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="timeline">Desired Start Date</label>
                <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange}>
                  <option value="" disabled>Select Timeline</option>
                  <option value="immediate">Immediately</option>
                  <option value="1_3_months">1 to 3 Months</option>
                  <option value="3_6_months">3 to 6 Months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="description">Project Description & Goals</label>
              <textarea 
                id="description" 
                name="description" 
                rows="4" 
                placeholder="Briefly describe the vision alongside any architectural constraints..."
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', border: 'none' }}>
              Submit Inquiry
            </button>
            <p className="form-note">Your details are strictly confidential. We do not share project info without consent.</p>
          </form>
        </div>
      </div>
    </div>
    </PageTransition>
  );
};

export default Contact;
