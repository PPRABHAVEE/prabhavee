"use client"
import React, { useState, useEffect, useRef } from 'react';

import founder from '../../components/people/assets/founder.jpg';
import cofounder from './assets/Amrita.jpg'; 
import AlumniSection from './subPeople/alumni';

const PeoplePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [rotations, setRotations] = useState({ anumita: 0, amrita: 0 });
  const containerRefs = useRef([]);
  const [showBelowStates, setShowBelowStates] = useState({});

   useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

   useEffect(() => {
    const newStates = {};
    containerRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const sectionBottom = sectionTop + rect.height;
      const offsetThreshold = 150; 
      newStates[people[index].id] =
        scrollY + window.innerHeight / 2 > sectionTop + offsetThreshold &&
        scrollY + window.innerHeight / 2 < sectionBottom;
    });
    setShowBelowStates(newStates);
  }, [scrollY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotations(prev => ({
        anumita: (prev.anumita + 1) % 360,
        amrita: (prev.amrita - 1) % 360
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const people = [
    {
      id: 'anumita',
      name: 'Anumita Sarkar',
      title: 'Founding Lawyer - Policy and Strategic Advisor',
      image: founder.src,
      description: 'Anumita Sarkar is the Founding Lawyer - Policy and Strategic Advisor of PRABHAVEE – Partner for Social Impact and founded the organization in 2022. She is recognized as a strategic leader with nearly two decades of sectoral and functional expertise across fields like Research, Advisory, Project Management, Editorial & Knowledge Management, Strategic Partnerships, Stakeholder Engagement, Communication and Outreach, and various other strategic initiatives. Her collaborative work covers various stakeholders: Government, Statutory and Quasi-Judicial authorities, Appellate Tribunals, Courts and Forums, Corporates, Multilateral Organizations(UN), Publishers, Authors, Knowledge Partners, Big 4 Consulting Firms, Policy Professionals, Senior Tax Experts, Learning and Development Consultants, and C-Suite Leaders. She possesses deep cross-functional expertise with Production, Technology, Design, Marketing, Sales, Channel Partners &amp; Customer Care Teams.',
      expertise: [
        'Strategic leadership across diverse sectors.',
        'Business and Human Rights, Responsible Business Conduct.',
        'Corporate Accountability, Governance, Ethics and Business Integrity.',
        'Decent Work and Protection for Migrant Workers.',
        'Social Protection and other related themes.',
        'Diversity, Equity and Inclusion.',
        'Prevention of Sexual Harassment Laws (PoSH) Consulting and Practice.',
        'Strategic Partnerships and Stakeholder Engagement.',
        'Communication, Outreach, and Knowledge Management.'
      ],
      experience: [
        'Strategy and Partnership consultant at Centre for Communication Governance (CCG), National Law University Delhi.',
        'Training and Development at Haqdarshak Empowerment Solutions Pvt. Ltd.',
        'Advisory Board Member at Darbar Sahitya Sansada (DSS), working on gender, child rights, disaster management, climate action, sustainable livelihoods.',
        {
          heading: 'Mentor roles at:',
          list: [
            'Women Entrepreneurship Platform (WEP), Niti Ayog.',
            'Womennovator (Global Incubator for Women).',
            'New Delhi Institute of Management (NDIM).'
          ]
        },
        'Consulting for various non-profits and impact startups.',
         {
          heading: 'Specialist positions at:',
          list: [
            'Lexplosion Solutions Pvt. Ltd. (a Legal Technology Company providing Compliance Management Solutions to Corporates).',
            'Wolters Kluwer (Global information and software solutions leader).'
          ]
        },
        {
          heading: 'Law practice focused on taxation:',
          list: [
            'CA Firm, Law Offices and Senior Advocate’s Tax Chamber/ Ex-Standing Counsel of Income Tax Department,Delhi &amp; ITAT Kolkata.',
          ]
        },
        {
          heading: 'Engaged with various organizations:',
          list: [
            'Kartavyam (With trust).',
            'Impact Consulting.',
            'IDIA – (Increasing Diversity by Increasing Access)(IDIA) to legal education.',
            'ATMA – Accelerator of NGOs.',
            'Internet Society, Asia-Pacific (Delhi Chapter).',
            'WICCI – Women’s Indian Chamber of Commerce and Industry(WICCI).',
            'UN Global Compact Network India.'
          ]
        },
        'International funder engagements: Omidyar Network India (ONI), Friedrich-Naumann-Stiftung für die Freiheit, South Asia, Hewlett Foundation, Access Now.',
        'CSR project work: ROCHE, Mastercard Centre for Inclusive Growth, Asian Development Bank, Hyundai.'
      ],
      credentials: [
        'B.A. (Hons.) Sociology, Miranda House College, University of Delhi.',
        'LL.B., Campus Law Centre, Faculty of Law, University of Delhi.',
        'Post Graduate Diploma (PGD) in Mass Communication, Bhavans Rajendra Prasad Institute of Communication & Management.',
        'Certificate in Strategic Management, IIM Bangalore.',
       {
          heading: 'Faculty Development Programs:',
          list: [
            'CSR Law and practices, strategic engagements, and implementation of CSR initiatives through social media, FORE School of Management, New Delhi.',
            'Context to Concept: Crafting Impactful Case Studies, jointly organised by the School of Management, GD Goenka University and India Case Research Centre of All India Management Association.',
          ]
        },
        'Women on Boards Programme, Cohort 5, Indian School of Development Management (ISDM).',
        'Certified Professional CSR Impact Assessment &amp; SROI, Consultivo Academy.',
        'Certificate in Strategic Communication and Partnership Building for Social Impact, MICA | The School of Ideas.',
        'Certificate in Financial Education, National Centre for Financial Education (NCFE) & ITCILO, International Training Centre of the International Labour Organization.',
        'Certificate in CSR Laws: Its Applied Aspects by HCL Academy of HCL Foundation, Batch X.',
        'Professional trainings/certifications from World Bank Group, ITCILO, UNITAR, WHO, UNESCO APCEIU, OECD-OCDE, UN Global Compact Academy, and others.',
        'Advocate, registered with the Bar Council of Delhi.'
      ],
      otherHighlights: [
        'Worked in university/public policy offices, nonprofit accelerator, NGOs, social enterprises, and advisory boards.',
        'Strategic vision: Transform PRABHAVEE into a Centre of Excellence for strategic capacity building and knowledge exchange.',
        'Extensive participation in academic programs and international professional development.'
      ]
    },
    {
      id: 'amrita',
      name: 'Amrita Sarkar',
      title: 'Legal Counsel & Advisor',
      subtitle: 'Advocate-on-Record, Supreme Court of India, S&L Law Offices',
      image: cofounder.src,
      description: 'Amrita Sarkar is an Advocate-on-Record at the Supreme Court of India with more than 10 years of experience at the Bar. She is recognized for her litigation skills across civil and commercial matters, representing clients at various forums, including Tribunals, District Courts, High Courts, and the Supreme Court. Amrita is also involved in advisory work for domestic and international clients and has significantly contributed to company law, insolvency, and policy development in the legal field.',
      expertise: [
        'Litigation and dispute resolution for civil and commercial matters.',
        'Insolvency and company law matters(NCLT/NCLAT representation).',
        'High-value transactional work and litigation relating to complex corporate and civil proceedings.',
        'Debt recovery, MSME representation, mergers, winding up, liquidation, Insolvency.',
        'Banking practice before several forums like Arbitration, Mediation, Conciliation, DRT, DRAT, NCLT, NCLAT, High Court, Supreme Court.',
        'Policy making in insolvency and restructuring laws.',
        'Advisory to domestic and international clients on complex legal issues.'
      ],
      experience: [
        'Advocate-on-Record, Supreme Court of India.',
        'Law Clerk Cum Research Assistant to Hon\'ble Mr. Justice F.M.I. Kalifulla, Supreme Court of India.',
        'Ministry of Law and Justice, Government of India.',
        'Argus Partners, (Solicitors & Advocates): Corporate law and dispute resolution, Delhi and Mumbai.',
        'Regular appearances and representation before Tribunals, High Courts, and the Supreme Court.',
        'Involvement in INSOL International and INSOL India, Small Practice Group India, aiming to resolve debt issues being faced by companies and sharing best practices across countries.'
      ],
      credentials: [
        'Alumna of the premier law institute, National University Juridical Sciences, Kolkata (NUJS).',
        'Advocate-on-Record, Supreme Court of India.'
      ],
       otherHighlights: [
        'Expert speaker at law institutions.',
        'Student mentoring.',
        'Published author on news portals and legal journals.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white relative pt-20">
      <div className="fixed left-0 top-0 h-full w-1/4 pointer-events-none z-0">
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: 0.03
          }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${i * 15}%`,
                left: `${Math.sin(i) * 30}%`,
                width: '0',
                height: '0',
                borderLeft: '100px solid transparent',
                borderRight: '100px solid transparent',
                borderBottom: `150px solid #EF4444`,
                transform: `rotate(${i * 45 + scrollY * 0.1}deg)`,
                transition: 'transform 0.3s ease-out'
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="pt-13 pb-16 px-6 md:px-8 bg-white">
        <div
          className="max-w-5xl mx-auto text-center"
          style={{
            transform: `translateY(${-scrollY * 0.4}px)`,
            opacity: Math.max(0, 1 - scrollY / 400),
            transition: 'opacity 0.3s ease',
          }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
        <span className="text-gray-900">Powering&nbsp;</span>
        <span
          className="bg-gradient-to-r from-red-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
          style={{ WebkitBackgroundClip: 'text' }}
        >
          Change
        </span>
      </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 font-light tracking-wide leading-relaxed">
            Get to know the people inspiring change, shaping policies, and empowering communities.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pb-20">
        {people.map((person, index) => {
          const isLeft = index % 2 === 0;
          const sectionTop = 400 + (index * 1000);
          const isInView = scrollY > sectionTop - 600;
          const showBelowImage = showBelowStates[person.id];
          
          return (
            <div
              key={person.id}
              ref={(el) => (containerRefs.current[index] = el)}
              className={`mb-32 flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-18 items-start`}
            >
              <div className="w-1/3 sticky top-30 space-y-30">
                <div 
                  className="relative mb-20"
                  style={{
                    transform: isInView ? 'scale(1)' : 'scale(0.8)',
                    opacity: isInView ? 1 : 0,
                    transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      transform: `rotate(${rotations[person.id]}deg) scale(1.15)`,
                      background: 'conic-gradient(from 0deg, #EF4444, #F87171, #FCA5A5, #EF4444)',
                      padding: '4px',
                      zIndex: -1
                    }}
                  />
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      transform: `rotate(${-rotations[person.id] * 1.5}deg) scale(1.1)`,
                      background: 'conic-gradient(from 180deg, transparent, #1F2937, transparent)',
                      padding: '3px',
                      zIndex: -1
                    }}
                  />
                  <div className="sticky top-6 rounded-full aspect-square bg-white p-2">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-fill rounded-full"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full opacity-80" />
                  <div className="absolute -bottom-0 -left-4 w-6 h-6 bg-gray-800 rounded-full opacity-80" />
                </div>
                 {showBelowImage && (
                    <div
                      className="transition-all duration-700 ease-in-out text-center"
                      style={{ opacity: 1 }}
                    >
                      <h2 className="text-4xl font-bold text-gray-900 mb-2">{person.name}</h2>
                      <p className="text-xl text-red-500 font-semibold mb-1">{person.title}</p>
                      {person.subtitle && (
                        <p className="text-lg text-gray-600">{person.subtitle}</p>
                      )}
                    </div>
                  )}
                </div>
                <div 
                  className="w-2/3"
                  style={{
                    transform: isInView ? 'translateX(0)' : `translateX(${isLeft ? '50px' : '-50px'})`,
                    opacity: isInView ? 1 : 0,
                    transition: 'all 0.8s ease-out'
                  }}
                >
                  {!showBelowImage && (
                  <div className="mb-6 transition-all duration-700 ease-in-out">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">{person.name}</h2>
                    <p className="text-xl text-red-500 font-semibold mb-1">{person.title}</p>
                    {person.subtitle && <p className="text-lg text-gray-600">{person.subtitle}</p>}
                  </div>
                )}
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {person.description}
                </p>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-1 h-8 bg-red-500 mr-3" />
                    Areas of Expertise
                  </h3>
                  <div className="space-y-3">
                    {person.expertise.map((item, i) => (
                      <div 
                        key={i}
                        className="flex items-start gap-3 group"
                        style={{
                          transform: isInView ? 'translateX(0)' : 'translateX(20px)',
                          opacity: isInView ? 1 : 0,
                          transition: `all 0.5s ease-out ${i * 0.1}s`
                        }}
                      >
                        <div className="mt-2 w-2 h-2 bg-red-500 rounded-full group-hover:scale-150 transition-transform" />
                        <p className="text-gray-700 flex-1">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-1 h-8 bg-gray-800 mr-3" />
                    Professional Experience
                  </h3>
                  <div className="space-y-3">
                    {person.experience.map((item, i) => {                     
                      const transitionDelay = (i + person.expertise.length) * 0.1;
                      const itemStyle = {
                        transform: isInView ? 'translateX(0)' : 'translateX(20px)',
                        opacity: isInView ? 1 : 0,
                        transition: `all 0.5s ease-out ${transitionDelay}s`
                      };
                      if (typeof item === 'string') {
                        return (
                          <div 
                            key={i}
                            className="flex items-start gap-3 group"
                            style={itemStyle}
                          >
                            <div className="mt-2 w-2 h-2 bg-gray-800 rounded-full group-hover:scale-150 transition-transform" />
                            <p className="text-gray-700 flex-1">{item}</p>
                          </div>
                        );
                      } 
                      else if (item && item.heading && item.list) {
                        return (
                          <div 
                            key={i}
                            className="group" 
                            style={itemStyle}
                          >
                            <div className="flex items-start gap-3 mb-2">
                              <div className="mt-2 w-2 h-2 bg-gray-800 rounded-full group-hover:scale-150 transition-transform" />
                              <p className="text-gray-700 font-semibold flex-1">{item.heading}</p>
                            </div>
                            <ul className="pl-8 space-y-2">
                              {item.list.map((subItem, j) => (
                                <li key={j} className="flex items-start gap-3">                               
                                  <div className="mt-2 w-1.5 h-1.5 bg-gray-500 rounded-full flex-shrink-0" />
                                  <p className="text-gray-700 flex-1">{subItem}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      }
                      return null; 
                    })}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-1 h-8 bg-red-500 mr-3" />
                    Academic & Professional Credentials
                  </h3>
                  <div className="space-y-3">
                    {person.credentials.map((item, i) => {
                      const transitionDelay = (i + person.expertise.length) * 0.1;
                      const itemStyle = {
                        transform: isInView ? 'translateX(0)' : 'translateX(20px)',
                        opacity: isInView ? 1 : 0,
                        transition: `all 0.5s ease-out ${transitionDelay}s`
                      };
                      if (typeof item === 'string') {
                        return (
                          <div 
                            key={i}
                            className="flex items-start gap-3 group"
                            style={itemStyle}
                          >
                            <div className="mt-2 w-2 h-2 bg-gray-800 rounded-full group-hover:scale-150 transition-transform" />
                            <p className="text-gray-700 flex-1">{item}</p>
                          </div>
                        );
                      } 
                      else if (item && item.heading && item.list) {
                        return (
                          <div 
                            key={i}
                            className="group" 
                            style={itemStyle}
                          >
                            <div className="flex items-start gap-3 mb-2">
                              <div className="mt-2 w-2 h-2 bg-gray-800 rounded-full group-hover:scale-150 transition-transform" />
                              <p className="text-gray-700 font-semibold flex-1">{item.heading}</p>
                            </div>
                            <ul className="pl-8 space-y-2">
                              {item.list.map((subItem, j) => (
                                <li key={j} className="flex items-start gap-3">
                                  <div className="mt-2 w-1.5 h-1.5 bg-gray-500 rounded-full flex-shrink-0" />
                                  <p className="text-gray-700 flex-1">{subItem}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
                    
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center mt-7">
                    <span className="w-1 h-8 bg-gray-800 mr-3" />
                    Other Profesional Highlights
                  </h3>
                  <div className="space-y-3">
                    {person. otherHighlights.map((item, i) => (
                      <div 
                        key={i}
                        className="flex items-start gap-3 group"
                        style={{
                          transform: isInView ? 'translateX(0)' : 'translateX(20px)',
                          opacity: isInView ? 1 : 0,
                          transition: `all 0.5s ease-out ${(i + person.expertise.length + person.experience.length) * 0.1}s`
                        }}
                      >
                        <div className="mt-2 w-2 h-2 bg-gray-800 rounded-full group-hover:scale-150 transition-transform" />
                        <p className="text-gray-700 flex-1">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
      <AlumniSection />
    </div>
  );
};

export default PeoplePage;