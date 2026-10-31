export type DestinationTheme = {
  title: string;
  desc: string;
};

export type DestinationCard = {
  id: string;
  location: string;
  ageRange: string;
  themes: string[];
  duration: string;
  season: string;
  relatedProgrammes: { title: string; href: string }[];
};

export const indiaLabels: string[] = [
  "Rajasthan",
  "Kerala",
  "Ladakh",
  "Delhi–Agra",
  "North East India",
];

export const internationalLabels: string[] = [
  "Singapore",
  "Malaysia",
  "Japan",
  "United Kingdom",
  "Europe",
];

export const destinationsContent = {
  seoTitle:
    "Educational Tour Destinations in India & Abroad | Every Square Inch",
  metaDescription:
    "Explore educational destinations in India and internationally for history, science, culture, wildlife, innovation, adventure, sport, architecture and the arts.",
  heroH1: "Every Destination Has a Lesson",
  heroSupportingCopy:
    "Discover places selected for what students can learn, experience and understand there.",
  heroPrimaryCta: "Find a Destination",
  heroSecondaryCta: "Request Recommendations",
  selectionHeading: "How we select destinations",
  selectionBody:
    "We consider educational relevance, age suitability, travel time, season, accommodation, access, safety, activity quality, group movement and opportunities for meaningful engagement. A destination should support a coherent learning journey rather than simply offer a long list of attractions.",
  themesHeading: "Explore by learning theme",
  indiaHeading: "India journeys",
  indiaBody:
    "India offers exceptional depth for educational travel: layered history, ecological diversity, scientific institutions, living traditions, regional languages, distinctive architecture and rapidly changing cities. Programmes should help students understand connections between place, people, environment and time rather than present India as a collection of isolated attractions.",
  indiaLabels,
  internationalHeading: "International journeys",
  internationalBody:
    "International destinations can broaden perspective through new cultures, institutions, public systems, landscapes and global learning environments. Selection should consider the age group, travel duration, documentation, budget, season, educational value and the balance between structured learning and adaptation time.",
  internationalLabels,
  cardsHeading: "Destination cards",
  cardsNote:
    "Detailed destination cards are being finalised by our programme team. Share your objectives and we will recommend suitable, currently deliverable destinations for your school.",
  fieldHeadings: {
    location: "Location",
    age: "Best-fit age group / grade range",
    themes: "Learning themes",
    duration: "Indicative duration",
    season: "Seasonal notes",
    related: "Related programmes",
  },
  needHelpHeading: "Need help choosing?",
  needHelpBody:
    "The right destination depends on the learning objective, student age, available time, season and desired level of challenge. Share these details and we will recommend suitable options rather than defaulting to the most familiar location.",
  needHelpCta: "Request Destination Recommendations",
  faqs: [
    {
      q: "Do you recommend destinations or does the school choose?",
      a: "We recommend destinations based on the school's learning objective, student age, available time, season and the level of challenge being sought.",
    },
    {
      q: "Can programmes combine India and international destinations?",
      a: "Yes, where the learning agenda, budget, documentation and timeline support a combined journey.",
    },
    {
      q: "Can destinations be adapted for accessibility?",
      a: "Most destinations can be adjusted. Accessibility, dietary, pastoral and supervision needs should be discussed early so that suitable locations and providers are selected.",
    },
    {
      q: "Are prices fixed on destination cards?",
      a: "No. Cost depends on group profile, travel period, duration, accommodation level and requested activities. Indicative detail is shared after an enquiry, not as a fixed price on the website.",
    },
    {
      q: "How early should schools begin planning a destination?",
      a: "Planning timelines vary. Early planning supports better availability of preferred dates, accommodation and learning venues.",
    },
  ],
};

export const destinationThemes: DestinationTheme[] = [
  {
    title: "History and Heritage",
    desc: "Cities, monuments, museums, archaeological sites and living traditions.",
  },
  {
    title: "Science and Innovation",
    desc: "Research institutions, science centres, technology environments and applied-learning facilities.",
  },
  {
    title: "Nature and Conservation",
    desc: "Forests, wetlands, mountains, coastal ecosystems and biodiversity landscapes.",
  },
  {
    title: "Culture and Society",
    desc: "Communities, languages, arts, food, crafts and civic life.",
  },
  {
    title: "Adventure and Leadership",
    desc: "Age-appropriate landscapes and facilities for outdoor learning.",
  },
  {
    title: "Architecture and Arts",
    desc: "Heritage, contemporary design, museums, studios and creative practice.",
  },
  {
    title: "Sport and Performance",
    desc: "Coaching environments, camps, venues and cultural exposure.",
  },
];

/**
 * Destination cards are only included once the programme team confirms that
 * each destination is currently deliverable. This collection is intentionally
 * empty until approval — the Destination Cards section renders a notice
 * instead of cards in that case.
 */
export const destinationCards: DestinationCard[] = [];
