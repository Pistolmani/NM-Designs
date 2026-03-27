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
    alert(t('contact.form.success'));
  };

  return (
    <PageTransition title={t('contact.title')} description={t('contact.intro1')}>
    <div className="contact-page container section">
      <div className="contact-grid">
        {/* Left Side: Framing & Info */}
        <div className="contact-info">
          <h1 className="heading-large" style={{ marginBottom: '2rem' }}>{t('contact.title')}</h1>
          <p className="text-body" style={{ marginBottom: '1.5rem', maxWidth: '400px' }}>
            {t('contact.intro1')}
          </p>
          <p className="text-body" style={{ marginBottom: '4rem', maxWidth: '400px', opacity: 0.8 }}>
            {t('contact.intro2')}
          </p>

          <div className="contact-details">
            <div className="detail-block">
              <span className="detail-label">{t('contact.direct')}</span>
              <a href="mailto:hello@nmdesigns.com" className="detail-value">hello@nmdesigns.com</a>
            </div>
            <div className="detail-block">
               <span className="detail-label">{t('contact.location')}</span>
               <span className="detail-value text-body" style={{ margin: 0, opacity: 1 }}>{t('footer.location')}</span>
            </div>
            <div className="detail-block">
               <span className="detail-label">{t('contact.social')}</span>
               <a href="https://instagram.com" target="_blank" rel="noreferrer" className="detail-value">Instagram</a>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="contact-form-wrapper">
          <form className="inquiry-form" onSubmit={handleSubmit}>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">{t('contact.form.name')}</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('contact.form.email')}</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">{t('contact.form.phone')}</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="location">{t('contact.form.loc')}</label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} placeholder={t('contact.form.loc.placeholder')} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="type">{t('contact.form.type')}</label>
                <select id="type" name="type" required value={formData.type} onChange={handleChange}>
                  <option value="" disabled>{t('contact.form.type.select')}</option>
                  <option value="residential">{t('contact.form.type.residential', 'Residential Build')}</option>
                  <option value="apartment">{t('contact.form.type.apartment', 'Apartment Renovation')}</option>
                  <option value="commercial">{t('contact.form.type.commercial', 'Commercial / Boutique')}</option>
                  <option value="concept">{t('contact.form.type.concept', 'Concept & 3D Visualization')}</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="scope">{t('contact.form.scope')}</label>
                <select id="scope" name="scope" required value={formData.scope} onChange={handleChange}>
                  <option value="" disabled>{t('contact.form.scope.select')}</option>
                  <option value="full">{t('contact.form.scope.full', 'Full Property')}</option>
                  <option value="partial">{t('contact.form.scope.partial', 'Multiple Rooms')}</option>
                  <option value="single">{t('contact.form.scope.single', 'Single Room / Custom Joinery')}</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="budget">{t('contact.form.budget')}</label>
                <select id="budget" name="budget" required value={formData.budget} onChange={handleChange}>
                  <option value="" disabled>{t('contact.form.budget.select')}</option>
                  <option value="under_50k">{t('contact.form.budget.1', 'Under $50,000')}</option>
                  <option value="50_100k">{t('contact.form.budget.2', '$50,000 - $100,000')}</option>
                  <option value="100_250k">{t('contact.form.budget.3', '$100,000 - $250,000')}</option>
                  <option value="over_250k">{t('contact.form.budget.4', '$250,000+')}</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="timeline">{t('contact.form.timeline')}</label>
                <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange}>
                  <option value="" disabled>{t('contact.form.timeline.select')}</option>
                  <option value="immediate">{t('contact.form.timeline.1', 'Immediately')}</option>
                  <option value="1_3_months">{t('contact.form.timeline.2', '1 to 3 Months')}</option>
                  <option value="3_6_months">{t('contact.form.timeline.3', '3 to 6 Months')}</option>
                  <option value="flexible">{t('contact.form.timeline.4', 'Flexible')}</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="description">{t('contact.form.desc')}</label>
              <textarea 
                id="description" 
                name="description" 
                rows="4" 
                placeholder={t('contact.form.desc.placeholder')}
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary submit-btn">
              {t('contact.form.submit')}
            </button>
            <p className="form-note">{t('contact.form.note')}</p>
          </form>
        </div>
      </div>
    </div>
    </PageTransition>
  );
};

export default Contact;
