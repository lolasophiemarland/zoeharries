export const SITE = {
  name: "Zoë Harries",
  url: "https://zoeharries.com",
  email: "hello@zoeharries.com",
  linkedin: "https://www.linkedin.com/in/zoeharries/",
  substack: "https://zoeharries.substack.com",
  impactZones: "https://www.impactzonefdi.com",
  identity: "Global Connector. Opportunity Architect.",
  kicker: "Global Connector. Opportunity Architect.",
} as const;

export const NAV = [
  { href: "/about", label: "About" },
  { href: "/ideas", label: "Ideas & Influence" },
  { href: "/speaking", label: "Speaking" },
  { href: "/contact", label: "Contact" },
] as const;

export const STATS = [
  { value: "25+", label: "Years in FDI & SEZ" },
  { value: "US$20bn", label: "PIF-backed SEZ" },
  { value: "140+", label: "Investor agreements" },
  { value: "US$450m", label: "Anchor commitments" },
  { value: "GCC · Europe · APAC", label: "Markets connected" },
] as const;

export const CREDENTIALS = [
  "Saudi Premium Residency",
  "Member of The Boardroom Zurich",
  "Founding member of PLAYBOOK (Bahrain and Riyadh)",
  // Revisit: member vs founding member of Capital Club Dubai is unresolved.
  "Member of Capital Club Dubai",
  "Lecturer on FDI and SEZs, Nyenrode Business University and the American University in the Emirates",
] as const;

export const ORGANISATION_LOGOS = [
  { name: "Economic Cities and Special Zones Authority", src: "/logos/organisations/ecza.png" },
  { name: "Konza Technopolis Development Authority", src: "/logos/organisations/konza.png" },
  { name: "Landsvirkjun", src: "/logos/organisations/landsvirkjun.svg" },
  { name: "Business Finland", src: "/logos/organisations/business-finland.svg" },
  { name: "Jordan Investment Commission", src: "/logos/organisations/jordan-investment.png" },
  { name: "Biopharma Crescent", src: "/logos/organisations/biopharma-crescent.webp" },
  { name: "Masdar City Free Zone", src: "/logos/organisations/masdar-city-free-zone.svg" },
  { name: "Heidrick & Struggles", src: "/logos/organisations/heidrick.svg" },
  { name: "SAIF Zone", src: "/logos/organisations/saif-zone.png" },
  { name: "Sharjah Publishing City Free Zone", src: "/logos/organisations/spcfz.webp" },
  { name: "BEDB Brunei", src: "/logos/organisations/bedb-investbn.png" },
  { name: "Public Investment Fund", src: "/logos/organisations/pif.svg" },
  { name: "World Free Zones Organization", src: "/logos/organisations/wfzo.png", onDark: true },
  { name: "Sharjah Ports, Customs and Free Zones Authority", src: "/logos/organisations/spcfza.png" },
  { name: "InnoEnergy", src: "/logos/organisations/innoenergy.png" },
  { name: "World Bank", src: "/logos/organisations/world-bank.svg" },
  { name: "Universal Postal Union", src: "/logos/organisations/upu.png" },
  { name: "AmCham Jordan", src: "/logos/organisations/amcham-jordan.png" },
  { name: "WAIPA", src: "/logos/organisations/waipa.png" },
  { name: "Financial Times (fDi Intelligence)", src: "/logos/organisations/ft-masthead.svg" },
  { name: "Investment Monitor", src: "/logos/organisations/investment-monitor.png" },
  { name: "Annual Investment Meeting (AIM Congress)", src: "/logos/organisations/aim.png" },
] as const;

export const WHY_ME =
  "I bring 25+ years in economic zones and investment attraction, with more than six years of established presence and strong relationships in the region. I led investment attraction for a US$20 billion PIF-backed special economic zone in Saudi Arabia. I have held leadership roles with Masdar City Free Zone in Abu Dhabi and the World Free Zones Organization in Dubai, and most recently served as Interim Country Head for Brunei Economic City SEZ. I contribute to industry discussions as a keynote speaker and author, through fDi Intelligence (Financial Times), Investment Monitor and the Annual Investment Meeting (AIM) Congress. I am a member of the Boardroom in Zurich and the Capital Club in Dubai, and a founding member of PLAYBOOK in Bahrain and Riyadh. I hold Dutch and South African citizenship, UAE residency and Saudi Premium Residency. I also developed the ANCHOR Framework™ on what makes capital, talent and enterprise choose to stay in a place.";

export const ROLE_CARDS = [
  {
    title: "Executive & Strategist",
    href: "/contact",
    cta: "Work With Zoë | Contact",
    body: "Founder and Managing Director of Impact Zones FDI Advisory, leading greenfield SEZ development, investment attraction and institutional design in markets where the playbook doesn't exist yet. I turn ambitious economic visions into governance frameworks, regulatory structures and financial models that actually get built.",
  },
  {
    title: "Speaker",
    href: "/contact",
    cta: "Invite Zoë to Speak | Contact",
    body: "A sought-after voice on FDI, Special Economic Zones and cross-border investment, speaking at platforms including AIM Congress, the World Free Zones Organization, Financial Times events and BNEW Barcelona. I challenge the assumption that commercial returns and positive impact are a trade-off.",
  },
] as const;

export const EXPLORE = [
  {
    href: "/about",
    title: "About / Purpose",
    body: "The philosophy behind the work – Humanitarian Capitalism, purpose and leadership.",
    cta: "Learn more",
    image: "/photos/zoe-harries-impact-zones-bnew-fdi-panel.jpg",
    alt: "Zoë Harries of Impact Zones on a BNEW Barcelona panel on FDI and special economic zones",
    imageClass: "object-cover object-[center_42%]",
    imageAspect: "aspect-[16/9]",
  },
  {
    href: "/ideas",
    title: "Ideas & Influence",
    body: "Essays and speaking on FDI, SEZs and cross-border investment.",
    cta: "Read more",
    image: "/photos/zoe-harries-sez-investment-destination-planning.jpg",
    alt: "Zoë Harries reviewing an SEZ investment destination site plan",
    imageClass: "object-cover object-[center_40%]",
    imageAspect: "aspect-[16/9]",
  },
  {
    href: "/speaking",
    title: "Speaking",
    body: "Keynote themes and past engagements.",
    cta: "View themes",
    image: "/photos/zoe-harries-fdi-investment-networking-ime.jpg",
    alt: "Zoë Harries speaking on FDI and investment networking at IME",
    imageClass: "object-cover object-[center_35%]",
    imageAspect: "aspect-[16/9]",
  },
  {
    href: "/contact",
    title: "Contact",
    body: "Get in touch or book an engagement.",
    cta: "Get in touch",
    image: "/photos/zoe-harries-investment-amcham-jordan-speaking.jpg",
    alt: "Zoë Harries speaking on investment at the American Chamber of Commerce in Jordan",
    imageClass: "object-cover object-[20%_28%]",
    imageAspect: "aspect-[16/9]",
  },
] as const;

export const IDEAS_PHOTOS = [
  {
    src: "/photos/zoe-harries-wsw-language-of-investors-audience.jpg",
    alt: "Zoë Harries on the Language of Investors panel at the Women's Sharing Wealth Summit, powered by UBS",
  },
  {
    src: "/photos/zoe-harries-wsw-panel-speaking.jpg",
    alt: "Zoë Harries speaking on the Language of Investors panel at the Women's Sharing Wealth Summit",
  },
  {
    src: "/photos/zoe-harries-wsw-panel-discussion.jpg",
    alt: "Zoë Harries with fellow speakers on the Language of Investors panel",
  },
  {
    src: "/photos/zoe-harries-wsw-panel-from-audience.jpg",
    alt: "Zoë Harries speaking from the stage at the Language of Investors panel",
  },
  {
    src: "/photos/zoe-harries-wsw-panel-speaking-close.jpg",
    alt: "Zoë Harries speaking as founder of Impact Zones FDI Advisory",
  },
  {
    src: "/photos/zoe-harries-wsw-panel-with-moderator.jpg",
    alt: "Zoë Harries in conversation with the moderator on the Language of Investors panel",
  },
  {
    src: "/photos/zoe-harries-wsw-summit-group.jpg",
    alt: "Zoë Harries with participants at the Women's Sharing Wealth Summit",
  },
  {
    src: "/photos/zoe-harries-sez-investment-destination-planning.jpg",
    alt: "Zoë Harries of Impact Zones reviewing an SEZ investment destination plan",
  },
  {
    src: "/photos/zoe-harries-free-zones-fdi-panel-bosnia.jpg",
    alt: "Zoë Harries of Impact Zones on a free zones panel on attracting FDI and investment",
  },
  {
    src: "/photos/zoe-harries-fdi-investment-nyenrode-lecture.jpg",
    alt: "Zoë Harries lecturing on global FDI investment trends at Nyenrode",
  },
  {
    src: "/photos/zoe-harries-sez-kazakhstan-global-experiences-panel.jpg",
    alt: "Zoë Harries on a special economic zones panel in Kazakhstan",
  },
  {
    src: "/photos/zoe-harries-bnew-barcelona-fdi-panel.jpg",
    alt: "Zoë Harries on a BNEW Barcelona panel on FDI and investment",
  },
  {
    src: "/photos/zoe-harries-bnew-barcelona-fdi-sez.jpg",
    alt: "Zoë Harries of Impact Zones at BNEW Barcelona on FDI and SEZs",
  },
  {
    src: "/photos/zoe-harries-bnew-barcelona-investment-week.jpg",
    alt: "Zoë Harries at Barcelona New Economy Week with investment partners",
  },
  {
    src: "/photos/zoe-harries-world-free-zones-sez-fdi.jpg",
    alt: "Zoë Harries with the World Free Zones Organization on SEZs and FDI",
  },
  {
    src: "/photos/zoe-harries-fdi-sez-conference-dais.jpg",
    alt: "Zoë Harries on an FDI and special economic zones conference dais",
  },
  {
    src: "/photos/zoe-harries-fdi-investment-manufacturers-forum.jpg",
    alt: "Zoë Harries speaking on investment at a manufacturers forum",
  },
  {
    src: "/photos/zoe-harries-investment-executive-retreat-speaking.jpg",
    alt: "Zoë Harries speaking on investment at a global business executive retreat",
  },
  {
    src: "/photos/zoe-harries-impact-zones-destination-development.jpg",
    alt: "Zoë Harries of Impact Zones at an investment destination development event",
  },
  {
    src: "/photos/zoe-harries-free-zones-sez-panel.jpg",
    alt: "Zoë Harries on a free zones and SEZ panel discussion",
  },
  {
    src: "/photos/zoe-harries-fdi-investment-consulting.jpg",
    alt: "Zoë Harries presenting on FDI and investment consulting",
  },
  {
    src: "/photos/zoe-harries-fdi-investment-uae-agreement.jpg",
    alt: "Zoë Harries of Impact Zones at an FDI investment meeting in the UAE",
  },
  {
    src: "/photos/zoe-harries-impact-zones-fdi-investment-signing.jpg",
    alt: "Zoë Harries signing an FDI and investment agreement in the UAE",
  },
  {
    src: "/photos/zoe-harries-investment-masdar-zero-carbon.jpg",
    alt: "Zoë Harries at a Masdar investment signing on zero-carbon development",
  },
  {
    src: "/photos/zoe-harries-fdi-investment-masdar-delegation.jpg",
    alt: "Zoë Harries of Impact Zones with an FDI investment delegation at Masdar",
  },
  {
    src: "/photos/zoe-harries-impact-zones-masdar-cleantech-investment.jpg",
    alt: "Zoë Harries reviewing a Masdar cleantech investment destination model",
  },
  {
    src: "/photos/zoe-harries-impact-zones-investment-meeting.jpg",
    alt: "Zoë Harries of Impact Zones in an investment meeting",
  },
  {
    src: "/photos/zoe-harries-fdi-investment-delegation.jpg",
    alt: "Zoë Harries with an FDI and investment delegation",
  },
  {
    src: "/photos/zoe-harries-fdi-investment-diplomatic-meeting.jpg",
    alt: "Zoë Harries at a diplomatic FDI and investment meeting",
  },
  {
    src: "/photos/zoe-harries-fdi-investment-uae-dialogue.jpg",
    alt: "Zoë Harries in an investment dialogue in the UAE",
  },
  {
    src: "/photos/zoe-harries-sez-kazakhstan-investment-2018.jpg",
    alt: "Zoë Harries at a Kazakhstan special economic zones investment forum",
  },
  {
    src: "/photos/zoe-harries-investment-space-development.jpg",
    alt: "Zoë Harries at an investment and space development forum",
  },
  {
    src: "/photos/zoe-harries-sez-investment-industrial-site-visit.jpg",
    alt: "Zoë Harries of Impact Zones on an SEZ industrial investment site visit",
  },
] as const;

export const PRACTICE_AREAS = [
  "FDI",
  "Special Economic Zones",
  "Cross-Border Trade & Investment",
  "Supply Chains",
  "Investment Destinations",
] as const;

export const ESG = [
  {
    title: "Environmental",
    body: "Resource stewardship and future-proofing that makes a destination resilient, not just responsible.",
  },
  {
    title: "Social",
    body: "Empowerment, jobs and shared prosperity that make a location worth investing in for the long term.",
  },
  {
    title: "Governance",
    body: "The trust and institutional conditions that let capital and supply chains actually flow.",
  },
] as const;

export const PLACES = [
  "Netherlands",
  "Belgium",
  "South Africa",
  "UAE / Dubai",
  "Saudi Arabia",
  "Brunei",
  "Zürich",
] as const;

export const SUPERPOWERS = [
  "Visionary",
  "Opportunity Architect",
  "Catalyst",
  "Thought Leader",
  "Author & Keynote Speaker",
  "Developer",
  "Steward",
] as const;

export const LEADERSHIP_STEPS = [
  {
    title: "See",
    themes: "Futuristic, Learner, Input",
    body: "Spotting where a location, corridor or supply chain has untapped competitive potential, before the market consensus catches up.",
  },
  {
    title: "Connect",
    themes: "Arranger, Connectedness",
    body: "Governments, sovereign investors, developers, anchor tenants and supply chain partners – and an instinct for how they fit together into one investable proposition.",
  },
  {
    title: "Act",
    themes: "Activator, Self-Assurance",
    body: "Converting strategy into investor agreements and signed commitments, with the confidence to lead a greenfield mandate when there is no existing playbook.",
  },
  {
    title: "Develop",
    themes: "Developer, Positivity",
    body: "Building the teams, institutions and local capability that make a zone or destination self-sustaining, not just well-launched.",
  },
  {
    title: "Deliver",
    themes: "Achiever, Arranger",
    body: "Turning the strategy into governance frameworks, regulatory structures and financial models that actually get built and operated.",
  },
] as const;

export const CURIOSITIES = [
  "People",
  "Art",
  "Fashion",
  "Travel",
  "Nature",
  "Yoga",
  "Skiing",
  "Hiking",
  "Scuba diving",
  "Golf",
] as const;

export const SPEAKING_THEMES = [
  "Foreign Direct Investment & Location Competitiveness",
  "GCC, Europe & Asia Pacific Investment Corridors",
  "Special Economic Zones & Future Cities",
  "Economic Diversification",
  "Sustainable Investment & ESG Competitiveness",
  "AI & the Future of Investment Attraction",
  "Women in Economic Leadership",
] as const;

export const ENGAGEMENTS = [
  { event: "Annual Investment Meeting (AIM Congress)", location: "Dubai" },
  { event: "World Free Zones Organization", location: "Dubai" },
  { event: "Financial Times events", location: "International" },
  { event: "BNEW Barcelona", location: "Barcelona" },
  { event: "ESG Forum Athens", location: "Athens" },
] as const;

export const FEATURED_AT = [
  "AIM Congress",
  "World Free Zones Organization",
  "Financial Times",
  "BNEW Barcelona",
  "ESG Forum Athens",
] as const;

export const ESSAYS = [
  {
    title: "Competitiveness, not compliance",
    excerpt:
      "Why sustainability attracts investment only when it makes a location more competitive – and how to read ESG in an FDI and SEZ context.",
  },
  {
    title: "Designing investment ecosystems",
    excerpt:
      "The question is not whether investment can do good. It is how we design ecosystems in which doing good strengthens commercial performance.",
  },
  {
    title: "Corridors that actually compete",
    excerpt:
      "On greenfield economic cities, SEZs and the supply-chain relationships that determine whether a destination wins capital.",
  },
  {
    title: "Translating between worlds",
    excerpt:
      "Investors, governments and communities can want very different things from the same project. Alignment is the work.",
  },
] as const;
