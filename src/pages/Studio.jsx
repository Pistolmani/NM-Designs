import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import './Studio.css';

const Studio = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceCategories = [
    {
      title: t('studio.cat.1.title'),
      items: [
        t('studio.cat.1.item.1'),
        t('studio.cat.1.item.2'),
        t('studio.cat.1.item.3'),
        t('studio.cat.1.item.4')
      ]
    },
    {
      title: t('studio.cat.2.title'),
      items: [
        t('studio.cat.2.item.1'),
        t('studio.cat.2.item.2'),
        t('studio.cat.2.item.3')
      ]
    },
    {
      title: t('studio.cat.3.title'),
      items: [
        t('studio.cat.3.item.1'),
        t('studio.cat.3.item.2')
      ]
    }
  ];

  const processSteps = [
    { num: '01', title: t('studio.step.1.title'), desc: t('studio.step.1.desc') },
    { num: '02', title: t('studio.step.2.title'), desc: t('studio.step.2.desc') },
    { num: '03', title: t('studio.step.3.title'), desc: t('studio.step.3.desc') }
  ];

  return (
    <PageTransition title={t('studio.title')} description={t('studio.philosophy.lead')}>
    <div className="studio-page">
      {/* 1. Philosophy Hero — centered title, then two-column text */}
      <section className="container section studio-hero">
        <h1 className="heading-large studio-page-title studio-wordmark">{t('studio.title')}</h1>
        <div className="philosophy-grid">
          <p className="text-body lead-text">
            {t('studio.philosophy.lead')}
          </p>
          <div className="philosophy-secondary">
             <p className="text-body philosophy-secondary-text">
               {t('studio.philosophy.secondary')}
             </p>
          </div>
        </div>
      </section>

      {/* 2. Grouped Services */}
      <section className="container section services-section">
        <div className="services-header">
           <h2 className="heading-medium">{t('studio.expertise.title')}</h2>
        </div>
        <div className="services-grid">
          {serviceCategories.map((cat, idx) => (
            <div key={idx} className="service-category">
               <h3 className="category-title">0{idx + 1} &mdash; {cat.title}</h3>
               <ul className="category-list text-body">
                  {cat.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
               </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The Process */}
      <section className="container section process-section">
        <h2 className="heading-medium process-section-heading">{t('studio.process.title')}</h2>
        <div className="process-timeline">
           {processSteps.map((step) => (
             <div className="timeline-step" key={step.num}>
                <span className="step-num">{step.num}</span>
                <div className="step-content">
                  <h3 className="heading-small step-title">{step.title}</h3>
                  <p className="text-body">{step.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* 4. Expectations */}
      <section className="container section expectations-section">
        <div className="expectations-grid">
          <div className="expectations-header">
             <h2 className="heading-medium">{t('studio.expectations.title')}</h2>
          </div>
          <div className="expectations-content text-body">
             <div className="expectation-item">
               <strong className="expectation-title">{t('studio.exp.scope.title')}</strong>
               <p>{t('studio.exp.scope.text')}</p>
             </div>
             <div className="expectation-item">
               <strong className="expectation-title">{t('studio.exp.visual.title')}</strong>
               <p>{t('studio.exp.visual.text')}</p>
             </div>
             <div className="expectation-item">
               <strong className="expectation-title">{t('studio.exp.trust.title')}</strong>
               <p>{t('studio.exp.trust.text')}</p>
             </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="section container contact-cta">
        <div className="cta-box">
          <h2 className="heading-large">{t('studio.cta.title')}</h2>
          <p className="text-body cta-text">
            {t('studio.cta.text')}
          </p>
          <Link to="/contact" className="btn-primary">
            {t('studio.cta.button')}
          </Link>
        </div>
      </section>
    </div>
    </PageTransition>
  );
};

export default Studio;
