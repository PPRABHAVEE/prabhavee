// Single source for site copy. Wording comes from Anumita Sarkar's pitch deck (51 slides, Oct 2026) unless a comment says otherwise.
// Where the deck PDF and PowerPoint disagree on a number, the PDF (the later export) is used; see STATS.

export const SITE = {
  name: "P/ PRABHAVEE",
  tagline: "Partner for Social Impact",
  strapline: "Empowering Sustainable Progress through Strategic Capacity Building",
  email: "anumita@prabhavee.org",
  linkedinCompany: "https://www.linkedin.com/company/prabhavee/",
  linkedinFounder: "https://www.linkedin.com/in/advocateanumitasarkar/",
  url: "https://www.prabhaveepfsi.org",
  location: "Based in: India | Pan-India & Global Collaborations",
  registered: "Registered with the Ministry of Women & Child Development, Government of India",
};

export const NAV = [
  { label: "About", href: "/background", items: [["About P/ PRABHAVEE", "/background"], ["Networks & collaborations", "/networking"], ["Strategic milestones", "/journey"]] },
  { label: "Services", href: "/services", items: [["Professional services", "/services"], ["Training & capacity building", "/training"], ["PoSH consultancy & services", "/posh"], ["Academic collaborations", "/academic"]] },
  { label: "Who we serve", href: "/whoWeServe", items: [] },
  { label: "People", href: "/people/founder", items: [["Founder", "/people/founder"], ["Consultants & alumni", "/people/consultant"]] },
  { label: "Engagements", href: "/events", items: [["Events", "/events"], ["Resources", "/resources"], ["PoSH Pro workshop", "/posh_workshop"]] },
];

// Slides 22-26. PowerPoint differs on three: 1100+ trained, 5 academic institutions, 60+ PoSH organisations.
export const STATS = {
  network: [
    { n: "1150+", t: "individuals trained" },
    { n: "20", t: "CSOs, NGOs and social impact start-ups" },
    { n: "125+", t: "academicians and policy experts" },
    { n: "70+", t: "organisations empowered through PoSH training" },
  ],
  engagements: [
    { n: "12", t: "policy and stakeholder consultations" },
    { n: "7", t: "GRI standard development consultations" },
    { n: "14", t: "workshops, capacity-building and learning initiatives" },
    { n: "50+", t: "organisations engaged, including global collaborations" },
    { n: "5", t: "strategic partnerships" },
    { n: "6", t: "academic institutions and universities" },
  ],
};

// Slides 11-14
export const APPROACH = [
  {
    k: "Articulation",
    lead: "Understanding the evolving regulatory landscape and human rights expectations, and applying contextual understanding of the problem statement by interpreting the applicability of the mandates.",
    steps: ["Scan and interpret evolving regulations and standards", "Understand human rights expectations and stakeholder perspectives", "Apply context to interpret mandates and identify key implications", "Translate mandates into context-driven insight", "Assess risks, impacts and opportunities", "Prioritise actions based on materiality and stakeholder input"],
  },
  {
    k: "Alignment",
    lead: "Embedding human rights into governance, policy and operations, ensuring that commitments are not only articulated at the top, but translated into consistent decision-making, accountability structures and everyday business practices.",
    steps: ["Embed into governance policies and frameworks", "Integrate into operations and decision-making processes", "Establish accountability structures and remedies"],
  },
  {
    k: "Actualisation",
    lead: "Translating intent, influence and integrity into on-the-ground practice across the workforce, supply chains and stakeholder ecosystems.",
    steps: ["Engage and collaborate across the workforce, suppliers and stakeholders", "Implement actions and build capability", "Monitor, measure and learn for continuous improvement"],
  },
];

// Slides 16-18, 21, 49. Key services under areas 3, 4, 5 and the non-profit group are retained from the current website (not in the deck).
export const SERVICES = [
  { slug: "regulatory-risk", title: "Regulatory risk & compliance advisory", short: "Helping businesses navigate evolving regulatory, legal and policy landscapes.",
    body: "Strategic guidance on emerging regulatory and compliance frameworks, identifying and mitigating risks across operations and supply chains, aligned with Indian and global standards.",
    benefit: "Strengthen strategies, compliance systems, processes, practices and governance frameworks to identify, mitigate and manage legal, regulatory and human rights risks proactively.", items: [] },
  { slug: "policy-advocacy", title: "Policy, strategic communication & advocacy", short: "Enabling organisations to translate human rights and responsible business commitments into influence.",
    body: "Translating human rights and responsible business commitments into influence, shaping regulations, industry norms and stakeholder behaviour through evidence, narrative and coalition-building.",
    benefit: "Build resilient strategies that safeguard organisational reputation, strengthen stakeholder trust and support effective communication.",
    items: ["Communication strategy development", "Outreach plan design and implementation"] },
  { slug: "policy-research", title: "Policy research, analysis & convenings", short: "Supporting institutions in co-creating strategic programmes: policy discourse through consultation, stakeholder analysis and multi-stakeholder initiatives.",
    body: "Supporting institutions in co-creating strategic programmes: policy discourse through strategic consultation, stakeholder analysis, multi-stakeholder initiatives, events and conferences.", benefit: "",
    items: ["Research on laws and regulations", "Policy analysis and development", "Stakeholder consultations facilitation", "Expert policy input to decision-makers", "Knowledge and expertise contribution", "Systemic change advocacy"] },
  { slug: "training-capacity", title: "Training & institutional capacity building", short: "Enabling institutions to build and scale impactful programmes: end-to-end project management and programme execution.",
    body: "Enabling institutions to build and scale impactful programmes through end-to-end project management and programme execution.",
    benefit: "Enhance organisational awareness, skills and capabilities through practical learning, guidance and capacity-building initiatives.",
    items: ["PoSH training", "Child protection and safeguarding practices", "Masterclasses and workshops", "Life-skills and behavioural training", "Mentorship programmes"], link: ["See training offerings", "/training"] },
  { slug: "strategic-programmes", title: "Strategic programmes & learning initiatives", short: "Developing high-quality academic and practitioner-oriented learning offerings and curriculum.",
    body: "Developing high-quality academic and practitioner-oriented learning offerings and curriculum.", benefit: "", items: [] },
  { slug: "multi-stakeholder", title: "Multi-stakeholder engagement, thought leadership & convenings", short: "Supporting institutions and policy actors in co-creating strategic initiatives: consultations, forums and facilitation.",
    body: "Supporting institutions and policy actors in co-creating strategic initiatives: consultations, forums and facilitation, narrative-building, ecosystem development and fostering stakeholder relationships.", benefit: "", items: [] },
  { slug: "governance-boards", title: "Governance & non-profit board leadership", short: "Strategic guidance on institutionalising systems, procedures, policies, board development and leadership capacity building.",
    body: "Strategic guidance on institutionalising systems, procedures and policies, board development and leadership capacity building.", benefit: "",
    items: ["Strategy development and implementation", "Compliance management", "Systems and procedures institutionalisation", "Board development programmes", "Leadership capacity building"] },
  { slug: "events-forums", title: "Events, forums & strategic engagements", short: "Convenes and curates high-impact strategic policy interventions.",
    body: "Convenes and curates high-impact strategic policy interventions.", benefit: "", items: [], link: ["See our engagements", "/events"] },
  { slug: "posh", title: "PoSH consultancy & services", short: "Prevention of Sexual Harassment of Women at Workplace advisory, training and External Member of PoSH Internal Committee.",
    body: "Prevention of Sexual Harassment of Women at Workplace advisory, training and External Member of PoSH Internal Committee.", benefit: "", items: [], link: ["PoSH consultancy & services", "/posh"] },
];

// Retained from the current website: services for non-profits that the deck does not cover.
export const NONPROFIT_SERVICES = [
  { slug: "nonprofit-legal", title: "Legal & compliance for non-profits", body: "Comprehensive legal and compliance advisory for nonprofit organisations, Section 8 companies, CSR foundations, start-ups and early-stage NGOs, and social entrepreneurs.",
    items: ["Entity set-up and registration", "Income tax, FCRA and allied laws compliance", "Legal documentation, agreement drafting, and review of key policies and frameworks", "Periodic compliance audits and regulatory checks", "Due diligence for donors, partners and individual funders", "Compliance with CSR laws and regulations"] },
  { slug: "nonprofit-partnerships", title: "Partnerships & donor engagement", body: "Strategic guidance to craft partnership strategies and build a diverse portfolio of collaborations with donors, CSR foundations, corporates, individual supporters and other partners aligned with the organisation's priorities.",
    items: ["Partnership strategy development", "Donor and CSR foundation engagement", "High-quality proposal development", "Impact and narrative reporting", "Funder alignment and expectations management", "Long-term collaboration support"] },
];

// Slide 51 / her "How we engage" graphic
export const OFFERINGS = ["Strategy consultation: regulatory risk and compliance advisory", "Multi-stakeholder, facilitation, training, capacity-building", "Policy, strategic communication, advocacy", "Compliance programme design and training", "Supplier capability programmes"];
export const ENGAGE_MODELS = ["Retainer-based advisory", "Project-based consulting", "Hybrid model: retainer and projects", "Facilitation and strategic programmes"];
export const ENGAGE_ACTIVITIES = [
  ["Policy consultation", "Providing input on policies and draft regulations."],
  ["Public and stakeholder consultations", "Response and written submissions to calls for inputs, and contributing to reports."],
  ["GRI standard development consultation", "Comments and written submissions on topic standards developed for industries and businesses."],
  ["Learning, training design and curriculum development", "ESG, CSR, sustainability, business and human rights themes."],
  ["Academic and policy research projects", "Collaborations with educational institutions, universities and research centres."],
  ["Training and capacity building initiatives", "Prevention of Sexual Harassment of Women at Workplace laws."],
  ["Programme faculty, expert and speaker", "Teaching certificate programmes and courses, and delivering expert sessions on ESG, CSR and sustainability."],
  ["Joint proposals: workshops, training", "For grants, side-events, workshops, training and capacity building."],
  ["Multi-stakeholder consultations", "Hosting, collaborating and facilitating consultations that advance research and policy change, and influence key stakeholders on business and human rights."],
  ["Advisory board", "Board development, strategic advisory, board meetings and strategic partnerships."],
  ["Working group, coalition and community initiatives", "Knowledge sessions, peer learning, ideation meetings and strategic input."],
];

// Slides 19-20
export const TRAINING = [
  { h: "Prevention of Sexual Harassment of Women at Workplace (PoSH)", items: ["Employee awareness and sensitisation programmes", "Capacity building for Internal Committee (IC) members", "Training for managers and leadership on workplace governance, accountability and prevention"] },
  { h: "Ethics, compliance & business integrity", items: ["Business ethics and organisational integrity", "Compliance culture and accountability", "Ethical decision-making and responsible business conduct"] },
  { h: "Supplier engagement and capability development programmes", items: ["Responsible supply-chain practices and labour standards", "Business and human rights and human rights due diligence fundamentals", "Supplier awareness, understanding risk and capacity development"] },
  { h: "Business & human rights for journalists and media professionals", items: ["Reporting on business impacts on human rights", "Investigating labour rights, workplace practices and supply-chain risks", "Understanding corporate accountability, ESG disclosures and responsible business conduct"] },
];
// Retained from the current website's Training page (feedback: keep Multi-stakeholder Dialogue & Convenings)
export const CONVENING_FORMATS = ["Roundtables and ideation meetings", "Training programmes and multi-stakeholder convenings", "Report launches", "Research ideas and contribution to consultations", "Providing expert input and feedback", "Stakeholder interviews"];
export const CONVENING_ACTIVITIES = ["Organising events and workshops", "Speaking engagements, facilitation talks and dialogues", "Delivering lectures and training: behavioural and leadership development", "Mentorship: higher academic and industry engagements", "NGO and social purpose organisation advisory, strategic guidance and advisory board membership"];

// Slides 15, 3, 9, 26, 27, 47-49
export const FRAMEWORKS = [
  "Code on Wages, 2019", "Industrial Relations Code, 2020", "Code on Social Security, 2020", "Occupational Safety, Health and Working Conditions Code, 2020",
  "UN Guiding Principles on Business and Human Rights (UNGPs)", "OECD Guidelines for Multinational Enterprises on Responsible Business Conduct", "OECD Due Diligence Guidance for Responsible Business Conduct",
  "Business Responsibility and Sustainability Reporting (BRSR)", "National Guidelines for Responsible Business Conduct (NGRBC)", "ILO Labour Standards", "Corporate Sustainability Due Diligence Directive (CSDDD)",
  "EU Forced Labour Regulations and Guidelines (2026)", "Global Reporting Initiative Standards Development Consultations",
];
export const FOCUS_AREAS = ["Business and Human Rights", "Ethical and Responsible Supply Chains", "Due Diligence and Compliance", "Labor Rights", "Gender, Diversity and Inclusion", "Governance & Corporate Accountability", "Ethics, Compliance & Business Integrity"];
export const TARGET_CLIENTS = ["Multi-national companies and brands", "MSMEs and suppliers networks", "SA8000 certified companies", "Manufacturers, suppliers and export-oriented enterprises", "Companies within scope of international due diligence requirements"];
export const INDUSTRIES = ["Textile, garment and fashion", "Leather and footwear", "Tourism and hospitality", "Automotive", "FMCG", "Electronics"];
export const STRENGTHS = {
  experience: ["Regulatory risk and compliance advisory", "Legal compliance management", "Strategy, public policy and governance", "Empanelled with the Ministry", "Extensive network of partners and experts"],
  decade: ["Strategy development and consultation", "Programme management", "Strategic partnerships", "Brand positioning and strategy", "Narrative building", "Policy advisory", "Stakeholder engagement", "Institutional partnerships"],
  industries: ["Regulatory and tax practice", "Legal technology (governance, risk and compliance management solutions)", "Information services", "SaaS and digital product management", "Publishing", "Social impact consulting", "University", "Public policy office", "Social enterprise"],
  network: ["Government", "Private sector and businesses", "Higher educational institutions", "Law universities, academic research centres", "Industry associations, business chambers, multi-stakeholder platforms", "UN agencies", "Civil society organisations", "CSOs and NGOs", "Social start-ups", "Non-profit accelerator", "SPO advisory boards"],
};
export const BENEFITS = [
  ["Regulatory risks & compliance advisory", "Strengthen strategies, compliance systems, processes, practices and governance frameworks to identify, mitigate and manage legal, regulatory and human rights risks proactively."],
  ["Strategic consultation, policy communication, advocacy", "Build resilient strategies that safeguard organisational reputation, strengthen stakeholder trust and support effective communication."],
  ["Knowledge, training, capacity building", "Enhance organisational awareness, skills and capabilities through practical learning, guidance and capacity-building initiatives."],
];
export const PARTNER_GROUPS = [
  { who: "Companies, start-ups, brands, suppliers, MSMEs", gets: ["Regulatory risk and compliance advisory", "Public policy, strategic communication, advocacy"] },
  { who: "Universities, academic research centres, think tanks, public policy offices", gets: ["Research, thought leadership, convenings", "Training and capacity building", "Strategic programmes, learning initiatives"] },
  { who: "Social purpose organisations: NGOs, civil society organisations, social enterprises", gets: ["Governance and board leadership", "Strategic consultation"] },
];

// Slides 35-37. Dates are the deck's.
export const FLAGSHIPS = [
  { when: "September 2026", title: "Spotlight session: Corruption and Human Rights", text: "Integrating anti-corruption into HRDD for stronger governance and supply chain resilience, with session partners Supriya Madan (BT Group) and Garima Dhiman, at the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026 in Bangkok.", img: "/img/deck/flagship-spotlight-1.webp" },
  { when: "November 2026", upcoming: true, title: "Year-end consultation and governance masterclass", text: "PoSH governance review, annual reporting and strategic planning." },
  { when: "July 2026", title: "Roundtable: Safe Workplaces by Design", text: "A leadership imperative in risk governance: a mid-year PoSH review consultation and training. 15+ participants.", img: "/img/deck/flagship-safe-workplaces-poster.webp" },
  { when: "June 2026", title: "Learning Circle: The First 10", text: "Trainer's Programme on PoSH law and practice, a 6-hour professional development workshop.", img: "/img/deck/flagship-first10-poster.webp" },
  { when: "April 2026", title: "Webinar and panel: The Business of Human Rights", text: "Unpacking linkages between corporate accountability, rights-based frameworks and the fourth estate, with New Imaginations, Jindal School of Journalism and Communication, O.P. Jindal Global University.", img: "/img/jindal-jsjc-5.webp" },
  { when: "April 2026", title: "2-day workshop: Corporate Accountability, Business Reporting and Human Rights", text: "Capacity building for early- and mid-career journalists, reporters, CSO communicators and media-advocacy professionals, with New Imaginations at O.P. Jindal Global University.", img: "/img/jindal-jsjc-flyer.webp" },
  { when: "February 2026", title: "PoSH PRO: Advanced Programme", text: "PoSH inquiry: fairness, confidentiality, justice, co-organised with Yellow Spark.", img: "/img/posh-pro-advanced-20.webp" },
  { when: "December 2026", title: "Multi-stakeholder dialogue series", text: "Research initiative ‘Local Economies, Global Values: MSMEs Driving Gender Equity in South India’ with the Centre for Business and Human Rights (CBHR) at TNNLU and Sustaim Consulting.", img: "/img/tnnlu-brochure-msme-research-collaboration.webp" },
  { when: "September 2026", title: "PoSH PRO", text: "On the prevention of sexual harassment (PoSH) and its application at the workplace, co-organised with Yellow Spark.", img: "/img/posh-pro-advanced-21.webp" },
];

export const PILLARS = ["Research, development & knowledge dissemination", "Training excellence & lifelong learning", "Strategic partnerships for sustainable long-term impact", "Institutional development & strong and effective governance", "Standardisation & best practices"];

// Slides 6-8
export const FOUNDER = {
  name: "Anumita Sarkar",
  role: "Lawyer · Independent Policy and Strategic Advisor · Founder, P/ PRABHAVEE",
  bio: [
    "Anumita Sarkar is a lawyer working as an Independent Policy and Strategic Advisor, Founder of P/ PRABHAVEE, registered with the Ministry of Women and Child Development, Government of India. She advises on regulatory risk and compliance, and provides strategic consultation on social sustainability, labour rights, PoSH, gender, diversity and inclusion, governance, ethics and compliance, business integrity, corporate accountability, human rights and responsible business.",
    "She is a strategic leader with an interdisciplinary academic background in Sociology, Law, Communications and Strategic Management, and brings close to 20 years of sectoral, cross-functional and multi-stakeholder expertise. Anumita has extensive experience spanning law practice, corporate, LegalTech (governance, risk and compliance solutions), global publishing and information services, consulting, academia, universities, a public policy office, a non-profit accelerator, social enterprise and NGO advisory boards. Since 2022, she has served as a member of UN Global Compact Network India's Anti-Corruption Collective Action Working Group.",
    "She is known for building powerful collaborations and designing high-impact training and capacity-building programmes, and leading organisations frequently invite her to deliver lectures on ESG, CSR, and business and human rights. She advises organisations on responsible business, governance and multi-stakeholder engagement through strategic advisory, facilitation, capacity building and strategic programmes. She serves as an External Member of PoSH Internal Committees.",
  ],
  training: "Anumita’s academic and professional training includes an LL.B. from Campus Law Centre, Faculty of Law, University of Delhi; a B.A. (Hons.) in Sociology from Miranda House College; a Postgraduate Diploma in Mass Communication from Bhavan's Rajendra Prasad Institute of Communication and Management; Strategic Management from IIM Bangalore; CSR, social media and strategic communication from MICA | School of Ideas; and Faculty Development Programs (FDPs) with ICRC, AIMA, GD Goenka University and FORE School of Management.",
  certs: "She holds professional certificates in Business and Human Rights, Human Rights Due Diligence, Anti-corruption and Anti-bribery, and Labor standards from ITCILO, UNODC, UNGC, Global Campus of Human Rights, TRACE International Inc., GIZ, RBH Network and Labor Solutions.",
};

// ---------------------------------------------------------------- navigation: Services mega-menu, grouped by audience (deck slide 20)
export const MEGA = {
  intro: "Advisory, facilitation, capacity building and strategic programmes.",
  columns: [
    { heading: "Businesses, brands & suppliers", links: [["Regulatory risk & compliance advisory", "/services#regulatory-risk"], ["Policy, strategic communication & advocacy", "/services#policy-advocacy"], ["Supplier engagement & training", "/training"], ["PoSH consultancy & services", "/posh"]] },
    { heading: "Universities, research centres & think tanks", links: [["Policy research, analysis & convenings", "/services#policy-research"], ["Strategic programmes & learning initiatives", "/services#strategic-programmes"], ["Training & institutional capacity building", "/services#training-capacity"], ["Academic collaborations", "/academic"]] },
    { heading: "Social purpose organisations", links: [["Governance & non-profit board leadership", "/services#governance-boards"], ["Legal & compliance for non-profits", "/services#nonprofit"], ["Partnerships & donor engagement", "/services#nonprofit"], ["Multi-stakeholder engagement", "/services#multi-stakeholder"]] },
  ],
  footer: [["All practice areas", "/services"], ["Training & capacity building", "/training"], ["How we engage", "/services#engage"]],
};

// ---------------------------------------------------------------- trust signals (deck slides 4, 6, 7, 47; events sheet; brochure)
export const CREDENTIALS = [
  { k: "Registered", v: "Ministry of Women & Child Development, Government of India" },
  { k: "Empanelled", v: "New Delhi Institute of Management, for PoSH training and capacity building" },
  { k: "Member", v: "UN Global Compact Network India, Anti-Corruption Collective Action Working Group (since 2022)" },
  { k: "Contributor", v: "GRI standards consultations, UN Working Group on Business and Human Rights, European Commission" },
  { k: "Advocate", v: "Registered with the Bar Council of Delhi" },
  { k: "Alumni", v: "International Training Centre of the ILO (ITCILO) Alumni Network, member since 2021" },
];
// Partner logos supplied in the deck (slide 30). Shown in full colour.
export const LOGOS = [
  ["yellow-spark", "Yellow Spark"],
  ["sustaim", "Sustaim Consulting"],
  ["jsjc", "Jindal School of Journalism and Communication"],
  ["new-imaginations", "New Imaginations"],
  ["cbhr-tnnlu", "Centre for Business and Human Rights, TNNLU"],
  ["tnnlu", "Tamil Nadu National Law University"],
];

// ---------------------------------------------------------------- journey graphic (current website timeline, deck slides 34-37)
export const JOURNEY = [
  { y: "May 2022", t: "Founded", d: "Conceptualised at NSRCEL, IIM Bangalore." },
  { y: "Sep 2024", t: "Bangkok forum", d: "Delegate at the UN Responsible Business and Human Rights Forum." },
  { y: "Nov 2024", t: "Women on Boards", d: "Founder completes the ISDM programme." },
  { y: "May 2025", t: "Research and partnerships", d: "Policy dialogue and academic research begin." },
  { y: "2025–26", t: "Flagship programmes", d: "Nine convenings, workshops and consultations." },
  { y: "Sep 2026", t: "Spotlight session", d: "Hosted at the UN Forum, Asia-Pacific 2026." },
  { y: "Nov 2026", t: "Governance masterclass", d: "Upcoming PoSH year-end consultation.", upcoming: true },
];

// ---------------------------------------------------------------- framework graphic (deck slides 11-14): short lines for the graphic
export const FRAMEWORK_SHORT = [
  "Scan the rules. Understand expectations. Assess risk.",
  "Embed in governance. Integrate into operations. Set accountability.",
  "Engage suppliers. Implement. Monitor and learn.",
];
