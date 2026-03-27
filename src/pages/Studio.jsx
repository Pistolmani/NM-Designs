import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import './Studio.css';

const Studio = () => {
  const { t } = useTranslation();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const serviceCategories = [
    {
      title: 'Structural Planning & Technical Design',
      items: [
        'Full interior design & concept development',
        'Comprehensive space planning',
        'Technical drawings & design documentation',
        'Lighting & electrical layout planning'
      ]
    },
    {
      title: 'Curation & Custom Fabrication',
      items: [
        'Material & finish selection',
        'Furniture planning & sourcing',
        'Custom furniture design & detailing'
      ]
    },
    {
      title: 'Visualization & Creative Direction',
      items: [
        'Moodboards & aesthetic direction',
        'High-fidelity 3D visualizations & renders'
      ]
    }
  ];

  const processSteps = [
    { num: '01', title: 'Consultation & Briefing', desc: 'We begin by deeply analyzing the architectural constraints of your space and your functional requirements.' },
    { num: '02', title: 'Concept & Visualization', desc: 'Developing the visual language through rigorous material selection and precise 3D rendering to ensure absolute alignment.' },
    { num: '03', title: 'Technical Documentation', desc: 'Translating the concept into comprehensive technical drawings, electrical plans, and custom joinery detailing for contractors.' }
  ];

  return (
    <PageTransition title="The Studio" description="Interior Design and Architecture Studio led by Nini in Tbilisi.">
    <div className="studio-page">
      {/* 1. Philosophy Hero */}
      <section className="container section studio-hero">
        <h1 className="heading-large" style={{ marginBottom: '2rem' }}>The Studio</h1>
        <div className="philosophy-grid">
          <p className="text-body lead-text">
            NM Designs approaches interiors with technical rigor and an editing eye. We believe warm minimalism isn't just a visual aesthetic—it is the discipline of removing the unnecessary to reveal calm, purpose, and elegance in everyday living.
          </p>
          <div className="philosophy-secondary">
             <p className="text-body" style={{ opacity: 0.7 }}>
               Led by Nini in Tbilisi, we specialize in residential sanctuaries. Our process bridges the gap between conceptual beauty and absolute technical precision, ensuring that the spaces we design can actually be built flawlessly.
             </p>
          </div>
        </div>
      </section>

      {/* 2. Grouped Services */}
      <section className="container section services-section">
        <div className="services-header">
           <h2 className="heading-medium">Area of Expertise</h2>
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
        <h2 className="heading-medium" style={{ marginBottom: '4rem' }}>Our Process</h2>
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

      {/* 4. Expectations (Replacing standard FAQ) */}
      <section className="container section expectations-section">
        <div className="expectations-grid">
          <div className="expectations-header">
             <h2 className="heading-medium">Client Expectations</h2>
          </div>
          <div className="expectations-content text-body">
             <p style={{ marginBottom: '2rem' }}>
               <strong style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>Comprehensive Scope</strong>
               We do not offer piecemeal consulting or hourly decorating. We prefer to take on full-room or full-home projects to guarantee the integrity of the final design.
             </p>
             <p style={{ marginBottom: '2rem' }}>
               <strong style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>Visual Reliance</strong>
               We rely heavily on precise 3D visualizations before breaking ground. This ensures total clarity between our vision and yours, preventing costly changes during construction.
             </p>
             <p>
               <strong style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>Mutual Trust</strong>
               Premium design requires time and decisiveness. We work best with clients who value our expertise and give us the creative freedom to deliver our best work.
             </p>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="section container contact-cta" style={{ borderTop: '1px solid var(--border-color)', marginTop: 'var(--space-xl)' }}>
        <div className="cta-box">
          <h2 className="heading-large">Ready to transform your space?</h2>
          <p className="text-body" style={{ margin: '1.5rem auto 3rem auto', maxWidth: '500px', opacity: 0.8 }}>
            Tell us about your project, timeline, and vision to see if we are a good fit.
          </p>
          <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', border: 'none' }}>
            Inquire Now
          </Link>
        </div>
      </section>
    </div>
    </PageTransition>
  );
};

export default Studio;
