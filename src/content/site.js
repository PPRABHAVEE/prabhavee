// Single source for site copy. Wording comes from Anumita Sarkar's pitch deck unless a comment says otherwise.
// The deck PDF (52 pages, Canva export of 14 Oct 2026) is the single source of truth. Where the older PowerPoint export differs, the PDF wins.
// Page numbers in comments below are PDF pages.

export const SITE = {
  name: "P/ PRABHAVEE",
  tagline: "Partner for Social Impact",
  strapline: "Do Good Business. Build Trust.",
  email: "anumita@prabhavee.org",
  linkedinCompany: "https://www.linkedin.com/company/prabhavee/",
  linkedinFounder: "https://www.linkedin.com/in/advocateanumitasarkar/",
  url: "https://www.prabhaveepfsi.org",
  location: "Based in: India | Pan-India and global collaborations",
  registered: "Registered with the Ministry of Women & Child Development, Government of India",
};

export const NAV = [
  { label: "About", href: "/background", items: [["About P/ PRABHAVEE", "/background"], ["Networks & collaborations", "/networking"], ["Strategic milestones", "/journey"]] },
  { label: "Services", href: "/services", items: [["Professional services", "/services"], ["Training & capacity building", "/training"], ["PoSH training & compliance support", "/posh"], ["Academic collaborations", "/academic"]] },
  { label: "Who we serve", href: "/whoWeServe", items: [] },
  { label: "People", href: "/people/founder", items: [["Founder", "/people/founder"], ["Consultants & alumni", "/people/consultant"]] },
  { label: "Engagements", href: "/events", items: [["Events", "/events"], ["Resources", "/resources"]] },
];

// PDF pages 23-26 (the deck's "Impact number" pages). Page 43 labels the PoSH participation list "60+ organisations"; page 26, the stats page, says 70+ and is the figure used.
export const STATS = {
  network: [
    { n: "1150+", t: "individuals trained" },
    { n: "20", t: "CSOs, NGOs and social impact start-ups" },
    { n: "125+", t: "network of academicians, consultants and policy experts" },
    { n: "70+", t: "organisations empowered through PoSH training" },
  ],
  engagements: [
    { n: "15", t: "policy and stakeholder consultations" },
    { n: "7", t: "GRI standard development consultations" },
    { n: "15", t: "workshops, capacity-building and learning initiatives" },
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
    steps: ["Engage and collaborate across the workforce and stakeholders", "Implement actions and build capability", "Monitor, measure and learn for continuous improvement"],
  },
];

// PDF pages 16-17, 21-22, 50-51. Services, focus areas and practice areas come from the pitch deck only (her reply of 16 Oct 2026).
export const SERVICES = [
  { slug: "regulatory-risk", title: "Regulatory risk & compliance advisory", short: "Helping businesses navigate evolving regulatory, legal and policy landscapes.",
    body: "Strategic guidance on emerging regulatory and compliance frameworks, identifying and mitigating risks across operations and supply chains, aligned with Indian and global standards.",
    benefit: "Strengthen strategies, compliance systems, processes, practices and governance frameworks to identify, mitigate and manage legal, regulatory and human rights risks proactively.", items: [] },
  { slug: "policy-advocacy", title: "Policy advisory, partnership strategy, strategic communication & advocacy", short: "Enabling organisations to translate human rights and responsible business commitments into influence.",
    body: "Translating human rights and responsible business commitments into influence, shaping regulations, industry norms and stakeholder behaviour through evidence, narrative and coalition-building.",
    benefit: "Build resilient strategies that safeguard organisational reputation, strengthen stakeholder trust and support effective communication.",
    items: [] },
  { slug: "policy-research", title: "Policy research, analysis & convenings", short: "Supporting institutions in co-creating strategic programmes: policy discourse through partnerships, strategic consultation, stakeholder analysis, multi-stakeholder initiatives, events and conferences.",
    body: "Supporting institutions in co-creating strategic programmes: policy discourse through partnerships, strategic consultation, stakeholder analysis, multi-stakeholder initiatives, events and conferences.", benefit: "",
    items: [] },
  { slug: "training-capacity", title: "Training & institutional capacity building", short: "Enabling institutions to build and scale impactful programmes: end-to-end project management and programme execution.",
    body: "Enabling institutions to build and scale impactful programmes through end-to-end project management and programme execution.",
    benefit: "Enhance organisational awareness, skills and capabilities through practical learning, guidance and capacity-building initiatives.",
    items: [], link: ["See training offerings", "/training"] },
  { slug: "strategic-programmes", title: "Strategic programme design & implementation", short: "Developing high-quality academic and practitioner-oriented learning offerings and curriculum.",
    body: "Developing high-quality academic and practitioner-oriented learning offerings and curriculum.", benefit: "", items: [] },
  { slug: "multi-stakeholder", title: "Multi-stakeholder engagement, facilitation & convenings", short: "Supporting institutions and policy actors in co-creating strategic initiatives: consultations, forums and facilitation.",
    body: "Supporting institutions and policy actors in co-creating strategic initiatives: consultations, forums and facilitation, narrative-building, ecosystem development and fostering stakeholder relationships.", benefit: "", items: [] },
  { slug: "governance-boards", title: "Governance & non-profit board leadership", short: "Strategic guidance on institutionalising systems, procedures, policies, board development and leadership capacity building.",
    body: "Strategic guidance on institutionalising systems, procedures and policies, board development and leadership capacity building.", benefit: "",
    items: [] },
  { slug: "events-forums", title: "Strategic convenings, partnerships & collaborations", short: "Convenes and curates high-impact strategic policy interventions.",
    body: "Convenes and curates high-impact strategic policy interventions.", benefit: "", items: [], link: ["See our engagements", "/events"] },
  { slug: "posh", title: "Prevention of Sexual Harassment of Women at the Workplace (PoSH) training & compliance support", short: "Prevention of Sexual Harassment of Women at Workplace advisory, training and External Member of PoSH Internal Committee.",
    body: "Prevention of Sexual Harassment of Women at Workplace advisory, training and External Member of PoSH Internal Committee.", benefit: "", items: [], link: ["PoSH training & compliance support", "/posh"] },
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
  ["Training and capacity building initiatives", "Supplier engagement and capacity programmes."],
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
export const FOCUS_AREAS = ["Business and human rights", "Ethical and responsible supply chains", "Due diligence and compliance", "Labour rights and standards", "Gender, diversity and inclusion", "Governance and corporate accountability", "Ethics, compliance and business integrity"];
export const TARGET_CLIENTS = ["Multi-national companies and brands", "MSMEs and supplier networks", "SA8000 certified companies", "Manufacturers, suppliers and export-oriented enterprises", "Companies within scope of international due diligence requirements"];
export const INDUSTRIES = ["Textile, garment and fashion", "Leather and footwear", "Tourism and hospitality", "Automotive", "FMCG", "Electronics"];
export const STRENGTHS = {
  experience: ["Regulatory risk and compliance advisory", "Legal compliance management", "Strategy, public policy and governance", "Extensive network of partners and experts"],
  decade: ["Strategy development and consultation", "Project management", "Strategic partnerships", "Brand positioning and strategy", "Narrative building", "Policy advisory", "Stakeholder engagement", "Institutional partnerships"],
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
  { who: "Universities, academic research centres, think tanks, public policy offices", gets: ["Strategic collaborations, thought leadership, convenings", "Training and capacity building", "Strategic programmes, learning initiatives"] },
  { who: "Social purpose organisations: NGOs, civil society organisations, social enterprises", gets: ["Governance and board leadership", "Strategic consultation"] },
];

// PDF pages 35-42. Dates are the deck's, except the two flagships the deck dates to late 2026 (TNNLU dialogue series, PoSH PRO): her events sheet dates both to 2025 (events 46, 2) and the sheet is followed. `more` holds what the deck's poster pages show (exact dates, speakers, takeaways, participant profile).
export const FLAGSHIPS = [
  { when: "15 September 2026", title: "Spotlight session: Corruption and Human Rights", text: "Integrating anti-corruption into HRDD for stronger governance and supply chain resilience, with session partners Supriya Madan (BT Group) and Garima Dhiman, at the UN Responsible Business and Human Rights Forum, Asia-Pacific 2026 in Bangkok.", img: "/img/deck/flagship-spotlight-1.webp",
    more: {
      facts: ["13:00 ICT, Bangkok, Thailand", "Forum theme: Remedy, Accountability and Trust", "The session explores how bribery, falsified reporting, weak compliance, unethical recruitment, compromised procurement, unsafe workplaces and ineffective grievance mechanisms enable human rights harms."],
      speakers: [["Anumita Sarkar", "Founder, P/ PRABHAVEE"], ["Praswad", "Chairman, SEA Actions"], ["Supriya Madan", "Global Ethics and Compliance Leader; Principal at BT Group"], ["Garima Dhiman", "Independent Business and Human Rights Specialist"]],
    } },
  { when: "13 November 2026", upcoming: true, title: "PoSH Governance Review, Annual Reporting and Strategic Planning: Year-end Consultation and Governance Masterclass", text: "A strategic learning journey for organisations committed to stronger governance and safer workplaces.", img: "/img/ev/47-2.webp", img2: "/img/ev/47-3.webp", pos: "center 20%",
    more: {
      facts: ["13 November 2026, 2:00 to 4:00 PM IST, online", "Q4: Dialogue, reflection and action"],
      speakers: [["Suruchi Kumar", "Founder and principal attorney, Law Chambers of Suruchi Kumar (SKLC)"], ["Madhu Mehra", "Founder, Partners for Law in Development (PLD)"], ["Anumita Sarkar", "Founder, P/ PRABHAVEE"]],
      takeaways: [["Why Q4?", "Quarter 4 of a financial year presents a strategic opportunity for organisations to move beyond routine compliance and undertake a meaningful review of their PoSH governance framework before the close of the reporting cycle."]],
      profile: ["Internal Committee members", "External Members", "Organisational leaders"],
    } },
  { when: "17 July 2026", title: "Roundtable: Safe Workplaces by Design", text: "A leadership imperative in risk governance: a mid-year PoSH review consultation and training. 15+ participants.", img: "/img/17-july-2026-roundtable.webp",
    more: {
      facts: ["Annual Roundtable 2026, launched", "2:00 to 5:00 PM IST, online"],
      speakers: [["Advocate Suruchi Kumar", "Guest speaker. Law Chambers of Suruchi Kumar: Employment & Labour Laws, PoSH, D&I"], ["Anumita Sarkar", "Facilitator and trainer. Founder, P/ PRABHAVEE: Human Rights & Responsible Business"]],
      takeaways: [["Reframing PoSH", "Moving beyond a compliance mandate and positioning PoSH as an integral component of organisational risk governance."], ["Designing Safety and Accountability", "Examining workplace grey zones, identifying risk areas, and reflecting on where Internal Committee accountability truly lies."], ["PoSH through the ESG and BRSR Lens", "Understanding that PoSH governance is increasingly becoming investor-visible governance data and an important indicator of organisational accountability."]],
      profile: ["PoSH Internal Committee members", "Gender practitioners", "Psychologists and counsellors", "PoSH trainers and advisers", "Lawyers", "Representatives from civil society organisations"],
      publication: ["Building Better Governance: Consultation Outcomes Report", "/docs/building-better-governance-2026.pdf"],
    } },
  { when: "5–6 June 2026", title: "Learning Circle: The First 10", text: "Trainer's Programme on PoSH law and practice, a 6-hour professional development workshop.", img: "/img/deck/flagship-first10-poster.webp",
    more: {
      facts: ["Learning Circle 1: The First 10", "“Carry the Law. Command the Room.”", "Registered by the Ministry of Women & Child Development, Government of India (Trainer)", "Empanelled with the New Delhi Institute of Management (NDIM) for training and capacity building", "ITC ILO Alumni Network member"],
      profile: ["Gender practitioners", "Psychologists and counsellors", "PoSH trainers and advisers", "Lawyers", "Representatives from civil society organisations"],
    } },
  { when: "April 2026", title: "Webinar and panel: The Business of Human Rights", text: "Unpacking Linkages between Corporate Accountability, Rights-based Frameworks and the Fourth Estate, with New Imaginations: Centre for Peace, Conflict and Justice of Jindal School of Journalism and Communication at O.P. Jindal Global University.", img: "/img/jindal-webinar-2026.webp", link: ["About New Imaginations", "https://jgu.edu.in/jsjc/research/new-imaginations-centre-for-peace-conflict-and-justice"] },
  { when: "April 2026", title: "2-day workshop: Corporate Accountability, Business Reporting and Human Rights", text: "Capacity building for early- and mid-career journalists, reporters, CSO communicators and media-advocacy professionals, with New Imaginations: Centre for Peace, Conflict and Justice of Jindal School of Journalism and Communication at O.P. Jindal Global University.", img: "/img/jindal-jsjc-flyer.webp", link: ["About New Imaginations", "https://jgu.edu.in/jsjc/research/new-imaginations-centre-for-peace-conflict-and-justice"] },
  { when: "February 2026", title: "PoSH PRO: Advanced Programme", text: "PoSH inquiry: fairness, confidentiality, justice, co-organised with Yellow Spark.", img: "/img/posh-pro-advanced-20.webp" },
  { when: "December 2025", title: "Multi-stakeholder dialogue series", text: "Research initiative ‘Local Economies, Global Values: MSMEs Driving Gender Equity in South India’ with the Centre for Business and Human Rights (CBHR) at TNNLU and Sustaim Consulting, followed by closed-door stakeholder consultations.", img: "/img/tnnlu-brochure-msme-research-collaboration.webp" },
  { when: "September 2025", title: "PoSH PRO", text: "On the prevention of sexual harassment (PoSH) and its application at the workplace, co-organised with Yellow Spark.", img: "/img/ev/2-1.webp" },
];

export const PILLARS = ["Research, development & knowledge dissemination", "Training excellence & lifelong learning", "Strategic partnerships for sustainable long-term impact", "Institutional development & strong and effective governance", "Standardisation & best practices"];

// Slides 6-8
export const FOUNDER = {
  name: "Anumita Sarkar",
  role: "Lawyer · Independent Policy and Strategic Advisor · Founder, P/ PRABHAVEE",
  bio: [
    "Anumita Sarkar is a lawyer, an Independent Policy and Strategic Advisor, Founder of P/ PRABHAVEE, registered with the Ministry of Women & Child Development, Government of India. She advises on regulatory risk and compliance, and provides strategic consultation on social sustainability, labour rights, PoSH, gender, diversity and inclusion, governance, ethics and compliance, business integrity, corporate accountability, human rights and responsible business.",
    "She is a strategic leader with an interdisciplinary academic background in sociology, law, communications and strategic management, and brings close to 20 years of sectoral, cross-functional and multi-stakeholder expertise. Anumita has extensive experience spanning law practice, corporate, LegalTech (governance, risk and compliance solutions), global publishing and information services, consulting, academia, universities, a public policy office, a non-profit accelerator, social enterprise and NGO advisory boards. From 2022 to 2025, she served as a member of UN Global Compact Network India's Anti-Corruption Collective Action Working Group.",
    "She is known for building powerful collaborations and designing high-impact capacity-building programmes, and leading organisations invite her to deliver lectures on ESG, CSR, and business and human rights. She advises organisations on responsible business, governance and multi-stakeholder engagement through strategic advisory, facilitation, capacity building and strategic programmes. She serves as an External Member of PoSH Internal Committees.",
  ],
  training: "Anumita’s academic and professional training includes an LL.B. from Campus Law Centre, Faculty of Law, University of Delhi; a B.A. (Hons.) in Sociology from Miranda House College; a Postgraduate Diploma in Mass Communication from Bhavan's Rajendra Prasad Institute of Communication and Management; Strategic Management from IIM Bangalore; CSR, social media and strategic communication from MICA | School of Ideas; and Faculty Development Programmes (FDPs) with ICRC, AIMA, GD Goenka University and FORE School of Management.",
  certs: "She holds professional certificates in Business and Human Rights, Human Rights Due Diligence, Anti-corruption and Anti-bribery, and Labour standards from ITCILO, UNODC, UNGC, Global Campus of Human Rights, TRACE International Inc., GIZ, RBH Network and Labor Solutions.",
};

// ---------------------------------------------------------------- navigation: Services mega-menu, grouped by audience (deck slide 20)
export const MEGA = {
  columns: [
    { heading: "Businesses, brands & suppliers", links: [["Regulatory risk & compliance advisory", "/services#regulatory-risk"], ["Policy advisory, partnership strategy, strategic communication & advocacy", "/services#policy-advocacy"], ["Supplier engagement & training", "/training"], ["PoSH training & compliance support", "/posh"]] },
    { heading: "Universities, research centres & think tanks", links: [["Policy research, analysis & convenings", "/services#policy-research"], ["Strategic programme design & implementation", "/services#strategic-programmes"], ["Training & institutional capacity building", "/services#training-capacity"], ["Academic collaborations", "/academic"]] },
    { heading: "Social purpose organisations", links: [["Governance & non-profit board leadership", "/services#governance-boards"], ["Multi-stakeholder engagement, facilitation & convenings", "/services#multi-stakeholder"]] },
  ],
  footer: [["All practice areas", "/services"], ["Training & capacity building", "/training"], ["How we engage", "/services#engage"]],
};

// ---------------------------------------------------------------- trust signals (deck slides 4, 6, 7, 47; events sheet; brochure)
export const CREDENTIALS = [
  { k: "Registered", v: "Ministry of Women & Child Development, Government of India" },
  { k: "Empanelled", v: "New Delhi Institute of Management for PoSH training and capacity building" },
  { k: "Previously", v: "Member of the Anti-Corruption Collective Action Working Group, UN Global Compact Network India (2022–2025)" },
  { k: "Contributor", v: "GRI standards consultations, UN Working Group on Business and Human Rights, European Commission" },
  { k: "Advocate (non-practising)", v: "Registered with the Bar Council of Delhi" },
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
  { y: "Sep 2024", t: "UNRBHR Forum, Asia-Pacific, 2024", d: "Delegate at the Forum in Bangkok." },
  { y: "Nov 2024", t: "Women on Boards", d: "Founder completes the ISDM programme." },
  { y: "May 2025", t: "Research and partnerships", d: "Policy dialogue and academic research begin." },
  { y: "2025–26", t: "Flagship programmes", d: "Nine convenings, workshops and consultations." },
  { y: "Sep 2026", t: "Spotlight session", d: "Hosted at the UNRBHR Forum, Asia-Pacific, 2026." },
  { y: "Nov 2026", t: "Governance masterclass", d: "PoSH year-end consultation.", upcoming: true },
];

// ---------------------------------------------------------------- framework graphic (deck slides 11-14): short lines for the graphic
export const FRAMEWORK_SHORT = [
  "Scan the rules. Understand expectations. Assess risk.",
  "Embed in governance. Integrate into operations. Set accountability.",
  "Engage stakeholders. Implement. Monitor and learn.",
];

// ---------------------------------------------------------------- enquiry form
// Her email of 14 Oct 2026 ("Call to Action / Submit your query form on the Home Page"). Wording and option order are hers.
export const ENQUIRY = {
  heading: "Have a project or partnership in mind?",
  lead: "Looking for a specialist advisory partner?",
  statement: "Engage P/ PRABHAVEE for commissioned assignments, technical advisory, workplace governance, training and programme implementation, responsible supply-chain programmes. We welcome enquiries for institutional partnerships, funded programmes and multi-stakeholder initiatives in responsible business, workplace governance, business and human rights, and social sustainability.",
  submit: "Start a conversation",
  types: [
    "Regulatory Risk and Compliance Advisory",
    "Drafting Policies and Guidance",
    "Human Rights Risk Assessments",
    "Human Rights Due Diligence (HRDD) Advisory",
    "SA8000 Readiness, Social Audits & Labour Standards",
    "PoSH Consultancy & Workplace Governance",
    "Policy Advisory, Strategic Communication & Advocacy",
    "Training, Workshops & Institutional Capacity Building",
    "Policy Research, Analysis & Stakeholder Engagement",
    "Multi-stakeholder Engagement, Facilitation & Convenings",
    "Institutional Partnerships and Academic Collaborations",
    "Governance Advisory and Non-Profit Board Leadership",
    "Corporate, Industry and Supplier Engagement Programmes",
    "Speaking Engagements, Moderation and Expert Facilitation",
    "Other Enquiries",
  ],
  engagements: [
    "Paid consultancy or advisory assignment",
    "Commissioned research or policy project",
    "Paid training or capacity-building programme",
    "Programme design or implementation partnership",
    "Funded Projects & Grant Partnerships",
    "Institutional partnership and academic collaboration",
    "Retainer or long-term advisory engagement",
    "External Member appointment (PoSH)",
    "Speaking, moderation or expert engagement",
    "Exploratory discussion / Other",
  ],
};

// Links elsewhere on the site pass ?interest=<old label>. Map each to the nearest of her enquiry types.
const TYPE_FOR_SLUG = {
  "regulatory-risk": "Regulatory Risk and Compliance Advisory",
  "policy-advocacy": "Policy Advisory, Strategic Communication & Advocacy",
  "policy-research": "Policy Research, Analysis & Stakeholder Engagement",
  "training-capacity": "Training, Workshops & Institutional Capacity Building",
  "strategic-programmes": "Institutional Partnerships and Academic Collaborations",
  "multi-stakeholder": "Multi-stakeholder Engagement, Facilitation & Convenings",
  "governance-boards": "Governance Advisory and Non-Profit Board Leadership",
  "events-forums": "Institutional Partnerships and Academic Collaborations",
  "posh": "PoSH Consultancy & Workplace Governance",
};
export const ENQUIRY_ALIASES = {
  ...Object.fromEntries(SERVICES.map((s) => [s.title, TYPE_FOR_SLUG[s.slug]])),
  "Academic collaboration": "Institutional Partnerships and Academic Collaborations",
  "Partner with us": "Institutional Partnerships and Academic Collaborations",
  "Internship": "Other Enquiries",
  "Other enquiry": "Other Enquiries",
};

// ================================================================ brought over from the current live website (prabhaveepfsi.org)
// Her own content, kept in her wording (spelling made consistent with this site). Not in the pitch deck.

// ---- Founder page (kept from the live site per her reply of 16 Oct 2026: areas of expertise, awards and recognitions, academic and professional credentials)
export const FOUNDER_MORE = {
  expertise: ["Strategic partnerships and new opportunities", "Organisational development and strategic consulting", "Non-profit board leadership", "Leadership and team-building", "Multi-disciplinary and cross-functional team leadership", "Stakeholder engagement and strategic initiatives", "Training and capacity-building", "Communication, outreach and knowledge management"],
  awards: [
    "CEO Award for exemplifying the core value of “Make It Better”, Tax, Accounting & Legal Publishing Team, for exceeding revenue targets in H1 2018 (Wolters Kluwer India, 2018)",
    "Best Product Launch of the Year 2017 (Wolters Kluwer India)",
    "Launch of the Month (Wolters Kluwer India, 2017)",
    "Launch of the Month, Best-selling Publication, Deloitte (Wolters Kluwer India, 2017)",
    "Rookie of the Year 2016 (Wolters Kluwer India, 2017)",
  ],
  credentials: [
    { h: "Degrees and diplomas", items: ["LL.B., Campus Law Centre, Faculty of Law, University of Delhi", "B.A. (Hons.) Sociology, Miranda House College, University of Delhi", "Post Graduate Diploma in Mass Communication, Bhavan's Rajendra Prasad Institute of Communication & Management", "Certificate in Strategic Management, IIM Bangalore"] },
    { h: "Faculty development programmes", items: ["CSR law and practices, strategic engagements and implementation of CSR initiatives through social media, FORE School of Management, New Delhi", "Context to Concept: Crafting Impactful Case Studies, jointly organised by the School of Management, GD Goenka University and the India Case Research Centre of the All India Management Association", "Women on Boards Programme, Cohort 5, Indian School of Development Management (ISDM)"] },
    { h: "Certificates", items: ["Certified Professional in CSR Impact Assessment and SROI, Consultivo Academy", "Strategic Communication and Partnership Building for Social Impact, MICA | The School of Ideas", "Financial Education, National Centre for Financial Education (NCFE) and ITCILO, International Training Centre of the ILO", "CSR Laws: Its Applied Aspects, HCL Academy of HCL Foundation, Batch X", "Professional trainings and certifications from the World Bank Group, ITCILO, UNITAR, WHO, UNESCO APCEIU, OECD-OCDE, UN Global Compact Academy and others"] },
    { h: "Registration", items: ["Advocate (non-practising), registered with the Bar Council of Delhi", "Alumni member, ITCILO, 2021 to present"] },
  ],
};

// ---- About page: context and regulatory shifts
export const CONTEXT = {
  bridge: "P/ PRABHAVEE envisions an integrated, legally informed, research-enabled model that brings together legal practitioners, CSOs, policy experts, communicators, academic researchers and business representatives. The aim is to improve disclosures by businesses and build capacity across the value chain.",
  shifts: [
    ["CSR Law (2013)", "Companies must allocate 2% of average net profits for community welfare, a transformative benchmark in the region."],
    ["NGRBC and the National Action Plan (NAP)", "India has released a zero draft of its National Action Plan on Business and Human Rights following multi-stakeholder consultations. The Indian Institute of Corporate Affairs (IICA) published the 2018 National Guidelines on Responsible Business Conduct (NGRBC), aligned with the 2011 National Voluntary Guidelines (NVGs) and the UNGPs. We actively follow this evolving space and look forward to its implementation."],
    ["Rising participation", "CSOs, NGOs, human rights defenders, CBOs and other agencies are advancing workers' rights and grievances. Their work covers key areas like health and safety, worker well-being, responsible supply chains, grievance redressal, fair wages, workplace harassment, child and forced labour, and access to remedies."],
  ],
  closing: "P/ PRABHAVEE aims to bridge these gaps by fostering partnerships among lawyers, legal researchers and academic experts at the intersection of business, human rights and sustainability. We gather diverse perspectives, foster partnerships, and enable multi-stakeholder dialogue to drive legal, institutional and systemic reforms.",
  stakeholders: ["Civil society organisations", "Academia and researchers", "Legal practitioners", "Businesses"],
  stakeholderNote: "Stakeholders are crucial for a collective, accountable approach, ensuring policy changes are grounded in legal rigour and real-world evidence.",
};

// ---- Networks page. Ongoing and past as she confirmed on 16 Oct 2026: network partners ATMA, IPN, Teaching Business and Human Rights Forum, eLearnPOSH.com;
// mentorship NDIM and WEP; everything else is past. [name, organisation, role, link?]. 19 Oct: the words Past / Concluded are not shown (her comments of 17 Oct).
export const NETWORK_BLOCKS = [
  { eyebrow: "Our networks", h2: "Where we take part.", lede: "Our ongoing network partners and mentorship roles.", categories: [
    { title: "Network partners", subtitle: "Ongoing", items: [
      ["ATMA, An Accelerator for NGOs", "NGO ecosystem", "Network partner"],
      ["India Partner Network (IPN)", "A Sattva initiative", "Network partner"],
      ["Teaching Business and Human Rights Forum", "Academic network", "Affiliate"],
      ["eLearnPOSH.com", "E-learning provider (PoSH)", "Learning partner", "https://elearnposh.com/em-directory/profile1/?id=7xKh7m"],
    ] },
    { title: "Mentorship", subtitle: "Ongoing", items: [
      ["New Delhi Institute of Management (NDIM)", "Academic institution", "Industry mentor"],
      ["G20 Women Entrepreneurship Platform (WEP)", "Niti Aayog, Government of India", "Platform mentor"],
    ] },
  ] },
  { eyebrow: "Networks", h2: "Where we have been members.", categories: [
    { title: "Networks and memberships", items: [
      ["Young Leaders Council (YLC)", "All India Management Association (AIMA)", "Brand partner, Mentor, Member"],
      ["UN Global Compact Network India", "United Nations initiative", "Working Group Member"],
      ["Indian Institute of Corporate Affairs (IICA)", "Government institute", "Member"],
      ["Indian Society for Training and Development (ISTD), Delhi Chapter", "Non-profit organisation", "Member"],
      ["Institute of Directors (IOD)", "Professional body", "Member (M.IOD)"],
      ["Womennovator", "Global Incubator for Women", "Global mentor"],
    ] },
  ] },
];

// ---- Training page: audiences (PDF pages 19-20, 26-27, 38)
export const TRAINING_FOR = ["Businesses, brands, suppliers and MSMEs", "PoSH Internal Committee members, managers and leaders", "Journalists, reporters, CSO communicators and media-advocacy professionals"];
