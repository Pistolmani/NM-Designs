import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  const featuredProjects = [
    {
      id: 1,
      title: 'Vake Residence',
      year: '2025',
      category: t('home.proj.1.cat', 'Interior Concept'),
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1440&q=80',
    },
    {
      id: 2,
      title: 'Mtatsminda Apartment',
      year: '2024',
      category: t('home.proj.2.cat', 'Full Renovation'),
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Saburtalo Studio',
      year: '2024',
      category: t('home.proj.3.cat', 'Space Planning'),
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const services = [
    t('home.service.1'),
    t('home.service.2'),
    t('home.service.3'),
    t('home.service.4'),
    t('home.service.5'),
    t('home.service.6'),
    t('home.service.7'),
  ];

  const processSteps = [
    { num: '01', title: t('home.step.1.title'), desc: t('home.step.1.desc') },
    { num: '02', title: t('home.step.2.title'), desc: t('home.step.2.desc') },
    { num: '03', title: t('home.step.3.title'), desc: t('home.step.3.desc') },
  ];

  return (
    <PageTransition title="NM Designs" description={t('home.hero.subtitle')}>
      <div className="home-page">
        <section className="hero-section container">
          <div className="hero-content">
            <h1 className="heading-large hero-title">{t('home.hero.title')}</h1>
            <p className="text-body hero-subtitle">{t('home.hero.subtitle')}</p>
            <Link to="/contact" className="btn-primary">
              {t('home.cta.primary')}
            </Link>
          </div>
        </section>

        <section className="section container selected-works">
          <div className="section-header">
            <h2 className="heading-medium">{t('home.works.title')}</h2>
            <Link to="/projects" className="link-arrow">
              {t('home.works.link')} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="works-grid">
            {featuredProjects.map((project, index) => (
              <Link to={`/projects/${project.id}`} key={project.id} className={`work-card work-card-${index}`}>
                <div className="work-image-container">
                  <img src={project.image} alt={project.title} className="work-image" />
                </div>
                <div className="work-meta">
                  <h3 className="heading-small">{project.title}</h3>
                  <span className="work-category">
                    {project.category} &mdash; {project.year}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="section container studio-preview">
          <div className="studio-grid">
            <div className="studio-title-area">
              <h2 className="heading-medium studio-wordmark">{t('home.studio.title')}</h2>
            </div>
            <div className="studio-text-area">
              <p className="text-body studio-lead-text">{t('home.studio.text')}</p>
              <Link to="/studio" className="link-arrow">
                {t('home.studio.link')} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="section container services-preview">
          <div className="section-header">
            <h2 className="heading-medium">{t('home.expertise.title')}</h2>
          </div>
          <div className="services-list">
            {services.map((service, idx) => (
              <div key={idx} className="service-item">
                <span className="service-number">0{idx + 1}</span>
                <h3 className="heading-small service-name">{service}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="section container process-preview">
          <h2 className="heading-medium process-section-title">{t('home.process.title')}</h2>
          <div className="process-grid">
            {processSteps.map((step) => (
              <div key={step.num} className="process-card">
                <span className="process-num">{step.num}</span>
                <h3 className="heading-small process-title">{step.title}</h3>
                <p className="text-body">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section container contact-cta">
          <div className="cta-box">
            <h2 className="heading-large">{t('home.cta.title')}</h2>
            <p className="text-body cta-text">{t('home.cta.text')}</p>
            <Link to="/contact" className="btn-primary">
              {t('home.cta.button')}
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
