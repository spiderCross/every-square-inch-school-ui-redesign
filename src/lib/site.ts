import type { IconName } from "@/components/Icons";
import { programmeDetails } from "./programmes";
export {
  indiaLabels as indiaDestinations,
  internationalLabels as internationalDestinations,
} from "./destinations";

export type NavLink = { label: string; href: string };
export type Item = {
  id?: string;
  title: string;
  desc: string;
  href?: string;
  fileUrl?: string;
};
export type FaqItem = { q: string; a: string };
export type ResourceCategory = {
  id: string;
  title: string;
  desc: string;
  icon: IconName;
};
export type ResourceItem = {
  slug: string;
  title: string;
  desc: string;
  category: string;
  fileType: string;
  readingTime: string;
  versionDate: string;
  available: boolean;
  fileUrl: string;
};

export const company = {
  name: "Every Square Inch",
  tagline: "Learning Beyond the Textbook.",
  subTagline: "Learning Beyond the Textbook.",
  phone: "+91 98714 61664",
  phoneE164: "919871461664",
  whatsapp: "https://wa.me/919871461664",
  email: "info@everysquareinch.in",
  address:
    "Corporate Office: 2nd Floor, 203, 2-A/3, Kundan Mansion, Asaf Ali Road, Turkman Gate, New Delhi - 110002",
  extraAddress:
    "Branch Office: A-10, Time Building, IT Park, Sahastradhara Road, Dehradun - 248013",
  canonicalHost: "https://www.everysquareinchschools.com",
  socials: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/",
  },
};

export const navMain: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Why Us", href: "/why-every-square-inch" },
  { label: "Programmes", href: "/programmes" },
  { label: "Destinations", href: "/destinations" },
  { label: "Safety", href: "/safety-student-wellbeing" },
  { label: "Resources", href: "/resources" },
  { label: "Corporate", href: "/corporate" },
  { label: "Contact", href: "/contact" },
];

export const programmeLinks: NavLink[] = programmeDetails.map((item) => ({
  label: item.title,
  href: `/programmes/${item.slug}`,
}));

export const footerEssentials: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Safety and Risk Management", href: "/safety-student-wellbeing" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
];

export const footerLinks: NavLink[] = [
  ...footerEssentials,
  { label: "Why Us", href: "/why-every-square-inch" },
  { label: "Destinations", href: "/destinations" },
  { label: "Resources", href: "/resources" },
  { label: "Corporate", href: "/corporate" },
];

export const homeModules = {
  heroTitle: "Learning Beyond the Textbook.",
  heroSubTitle: "Every Square Inch is a Classroom.",
  heroDesc:
    "We design school learning journeys where travel supports educational outcomes through reflection, guided facilitation, and student wellbeing.",
  trustStrip: [
    "School-focused planning",
    "Learning-outcome orientation",
    "Student wellbeing at every stage",
  ],
  whoWeAre:
    "Every Square Inch is an educational travel partner for schools. We design programmes that connect curriculum, place-based learning, student agency, and responsible global exposure.",
  philosophyQuote:
    "Every destination has a lesson. Every journey has the power to shape a learner.",
  whyIntro:
    "Schools choose Every Square Inch for thoughtful programme design, educator collaboration, and transparent operations from planning through post-journey reflection.",
  framework: ["Explore", "Experience", "Reflect", "Apply", "Grow"],
};

export const esiAtAGlance: Array<{
  value: number;
  suffix: string;
  label: string;
  icon: IconName;
}> = [
  {
    value: 14,
    suffix: "+",
    label: "Years partnering with schools",
    icon: "sparkles",
  },
  {
    value: 250,
    suffix: "+",
    label: "Schools engaged across India",
    icon: "building",
  },
  {
    value: 50000,
    suffix: "+",
    label: "Students on learning journeys",
    icon: "users",
  },
  {
    value: 30,
    suffix: "+",
    label: "Destinations in India & abroad",
    icon: "globe",
  },
];

export const partnerSchools: {
  name: string;
  location?: string;
  logo: string;
}[] = [
  {
    name: "The Doon School",
    location: "Dehradun",
    logo: "04-the-doon-school.png",
  },
  {
    name: "Mayo College Girls' School",
    location: "Ajmer",
    logo: "05-mayo-college-girls-school.png",
  },
  {
    name: "The Lawrence School",
    location: "Ooty",
    logo: "09-the-lawrence-school-lovedale.png",
  },
  { name: "Delhi Public School", location: "Noida", logo: "10-dps-noida.png" },
  {
    name: "Delhi Public School",
    location: "Chandigarh",
    logo: "11-dps-chandigarh.png",
  },
  { name: "Delhi Public School", location: "Agra", logo: "12-dps-agra.png" },
  {
    name: "Delhi Public School",
    location: "Rajnagar",
    logo: "13-dps-rajnagar.png",
  },
  {
    name: "Delhi Public School",
    location: "Sector 122, Noida",
    logo: "14-dps-sector-122-noida.png",
  },
  {
    name: "Pathways World School",
    location: "Gurugram",
    logo: "15-pathways-world-school-gurgaon.png",
  },
  {
    name: "Sunbeam Group of Educational Institutions",
    location: "Varanasi",
    logo: "16-sunbeam-group-varanasi.png",
  },
  {
    name: "Apeejay Schools",
    location: "New Delhi",
    logo: "01-apeejay-noida.png",
  },
  {
    name: "Jermel Academy",
    location: "Siliguri",
    logo: "06-jermels-academy.png",
  },
  {
    name: "General Raj's School",
    location: "New Delhi",
    logo: "07-general-rajs-school.png",
  },
  {
    name: "Laxman Public School",
    location: "New Delhi",
    logo: "08-laxman-public-school.png",
  },
  { name: "Apeejay Schools", location: "Noida", logo: "01-apeejay-noida.png" },
  {
    name: "Tagore International School",
    location: "East of Kailash, New Delhi",
    logo: "02-tagore-international-eok.png",
  },
  {
    name: "Maxfort School",
    location: "Rohini, New Delhi",
    logo: "03-maxfort-rohini.png",
  },
];

export const programmeCards: Item[] = programmeDetails.map((item) => ({
  title: item.title,
  desc: item.cardDesc,
  href: `/programmes/${item.slug}`,
}));

export const whyChooseESI: Item[] = [
  {
    id: "01",
    title: "Learning-Oriented Design",
    desc: "Journeys are designed around meaningful experiences rather than a checklist of attractions, creating opportunities for observation, participation, discussion and reflection.",
  },
  {
    id: "02",
    title: "Structured Planning",
    desc: "From understanding the school’s requirements to programme design, logistics and pre-departure preparation, each journey follows a structured planning process.",
  },
  {
    id: "03",
    title: "Safety & Student Wellbeing",
    desc: "Student safety, supervision and wellbeing remain central to programme planning and execution.",
  },
  {
    id: "04",
    title: "Experienced Coordination",
    desc: "On-ground coordination helps manage student groups, suppliers, movement and day-to-day operational requirements throughout the journey.",
  },
  {
    id: "05",
    title: "Responsible Travel",
    desc: "Students are encouraged to engage respectfully with destinations, communities, cultures and natural environments.",
  },
  {
    id: "06",
    title: "Professional Execution",
    desc: "Transport, accommodation, activities, vendor coordination and operational support are brought together as one professionally managed programme.",
  },
];

export const safetyHighlights: Item[] = [
  {
    title: "Plan",
    desc: "Advance planning with context-aware preparation and aligned school communication.",
  },
  {
    title: "Prepare",
    desc: "Clear pre-departure guidance for educators, families, and student participants.",
  },
  {
    title: "Support",
    desc: "Responsive on-journey coordination and escalation pathways for operational needs.",
  },
];

export type ReviewStory = {
  quote: string;
  author: string;
  rating: number;
};

export const homeReviews: ReviewStory[] = [
  {
    quote:
      "The journey design aligned beautifully with our school’s learning goals and gave students a clear sense of purpose from start to finish.",
    author: "Principal, School Partner",
    rating: 4.5,
  },
  {
    quote:
      "Students returned more curious, reflective, and confident in group collaboration after the experience.",
    author: "Academic Coordinator",
    rating: 5,
  },
  {
    quote:
      "Planning communication was clear and professional from briefing to completion, which made school coordination effortless.",
    author: "School Administrator",
    rating: 4,
  },
  {
    quote:
      "The programme balance between learning and engagement was excellent for our cohort and kept the experience meaningful throughout.",
    author: "Middle School Lead",
    rating: 3.5,
  },
  {
    quote:
      "Our teachers appreciated the structure, pacing, and reflection checkpoints built into the learning journey.",
    author: "Senior Educator",
    rating: 4.5,
  },
  {
    quote:
      "Destination learning tasks were practical and relevant to classroom objectives, making the trip feel academically grounded and exciting.",
    author: "Curriculum Head",
    rating: 4,
  },
  {
    quote:
      "Families valued updates and felt informed throughout the journey lifecycle, which made the whole experience more reassuring.",
    author: "Parent Committee Representative",
    rating: 3.5,
  },
  {
    quote:
      "The overall experience felt premium, safe, and purpose-led for students, with excellent attention to detail from planning to execution.",
    author: "Director, School Partner",
    rating: 5,
  },
];

export const homeFaqs: FaqItem[] = [
  {
    q: "How early should schools begin planning a programme?",
    a: "Planning timelines vary by scope and destination. Early planning supports better alignment with academic calendars and learning goals.",
  },
  {
    q: "Can programmes be aligned to curriculum objectives?",
    a: "Yes. Programmes are designed in consultation with schools to map activities and reflections to educational outcomes.",
  },
  {
    q: "Do you support both India and international programmes?",
    a: "Yes. We support domestic and international learning journeys based on school priorities and readiness.",
  },
  {
    q: "How is student wellbeing addressed during programmes?",
    a: "Student wellbeing is integrated through preparation, educator coordination, and continuous on-ground support.",
  },
  {
    q: "Can schools request custom learning themes?",
    a: "Yes. Themes can be tailored to school objectives, learner profiles, and programme duration.",
  },
  {
    q: "What happens after we submit an enquiry?",
    a: "Our team reviews your brief, connects for context, and proposes suitable programme options for refinement.",
  },
];

export const resourceCategories: ResourceCategory[] = [
  {
    id: "school-leaders",
    title: "For School Leaders",
    desc: "Planning timelines, approval considerations, programme briefs and proposal guidance.",
    icon: "building",
  },
  {
    id: "teachers",
    title: "For Teachers",
    desc: "Learning objectives, preparation ideas, reflection prompts and group-management resources.",
    icon: "graduationCap",
  },
  {
    id: "parents",
    title: "For Parents",
    desc: "What to expect, preparation, communication, packing and wellbeing guidance.",
    icon: "users",
  },
  {
    id: "students",
    title: "For Students",
    desc: "Journey readiness, responsible conduct, curiosity prompts and reflection tools.",
    icon: "backpack",
  },
  {
    id: "case-studies",
    title: "Case Studies",
    desc: "Verified examples showing objectives, programme design and learning outcomes.",
    icon: "bookOpen",
  },
];

export const resources: ResourceItem[] = [
  {
    slug: "school-educational-tour-planning-checklist",
    title: "School Educational Tour Planning Checklist",
    desc: "A structured planning checklist covering timelines, approvals, budgets and stakeholder communication.",
    category: "school-leaders",
    fileType: "PDF",
    readingTime: "8 min read",
    versionDate: "August 2026",
    available: true,
    fileUrl: "/resources/01 Tour Planning Check list.pdf",
  },
  {
    slug: "parent-information-guide",
    title: "Parent Information Guide",
    desc: "What to expect, how to prepare, communication norms and wellbeing guidance for families.",
    category: "parents",
    fileType: "PDF",
    readingTime: "6 min read",
    versionDate: "August 2026",
    available: true,
    fileUrl: "/resources/02 Parent Information Guide.pdf",
  },
  {
    slug: "student-packing-and-preparation-checklist",
    title: "Student Packing and Preparation Checklist",
    desc: "Practical student-facing guidance for packing, conduct and journey readiness.",
    category: "students",
    fileType: "PDF",
    readingTime: "4 min read",
    versionDate: "August 2026",
    available: true,
    fileUrl: "/resources/03 Student Packing and Preparation Checklist.pdf",
  },
  {
    slug: "teacher-pre-departure-briefing-template",
    title: "Teacher Pre-Departure Briefing Template",
    desc: "A briefing template to align accompanying teachers on objectives, supervision and escalation paths.",
    category: "teachers",
    fileType: "PDF",
    readingTime: "7 min read",
    versionDate: "August 2026",
    available: true,
    fileUrl: "/resources/04 Teacher Pre Departure Briefing Template.pdf",
  },
  {
    slug: "post-journey-reflection-prompts",
    title: "Post-Journey Reflection Prompts",
    desc: "Reflection prompts to extend learning after the journey has concluded.",
    category: "teachers",
    fileType: "PDF",
    readingTime: "5 min read",
    versionDate: "August 2026",
    available: true,
    fileUrl: "/resources/05 Post Journey Reflection Prompts.pdf",
  },
  {
    slug: "how-to-choose-the-right-programme-and-destination",
    title: "How to Choose the Right Programme and Destination",
    desc: "A short guide to choosing a programme and destination aligned with school objectives and learner profile.",
    category: "school-leaders",
    fileType: "PDF",
    readingTime: "5 min read",
    versionDate: "August 2026",
    available: true,
    fileUrl:
      "/resources/06 How to Choose the Right Programme and Destination.pdf",
  },
];

export const resourcesFaqs: FaqItem[] = [
  {
    q: "Can school leaders use these resources for internal approvals?",
    a: "Yes. Each resource is designed to support school planning, approvals and stakeholder communication.",
  },
  {
    q: "Are downloadable resources free to use?",
    a: "Listed launch resources are offered as free downloads. High-value resources may use a short lead-capture form.",
  },
  {
    q: "Will more resources be added over time?",
    a: "Yes. Additional resources will be published progressively, with version dates clearly indicated.",
  },
  {
    q: "How can we request a resource not listed here?",
    a: "Use the planning consultation enquiry and we will guide you to relevant materials or prepare one to suit.",
  },
];

export const howWeWork: Item[] = [
  {
    id: "01",
    title: "Understand",
    desc: "We start with the school. Understand learning objectives, student profile, destination preferences, programme expectations and practical requirements.",
  },
  {
    id: "02",
    title: "Design",
    desc: "Build the journey around its purpose. Develop the programme structure, itinerary, experiences and activities around the school's requirements.",
  },
  {
    id: "03",
    title: "Plan",
    desc: "Bring the details together. Coordinate accommodation, transport, activities, vendors, pre-trip requirements and relevant safety considerations.",
  },
  {
    id: "04",
    title: "Execute",
    desc: "Manage the journey on ground. Structured coordination and supervision help keep programme movement and operational requirements organised throughout the journey.",
  },
  {
    id: "05",
    title: "Experience & Reflect",
    desc: "Turn the journey into learning. Students are encouraged to participate, observe and connect their experiences with a broader understanding of the destination and themselves.",
  },
];

export const operationalHighlights: Item[] = [
  {
    title: "Pre-Trip Planning",
    desc: "Preparation before the journey begins.",
  },
  {
    title: "Vendor Coordination",
    desc: "Working with programme partners and service providers.",
  },
  {
    title: "Experienced Coordinators",
    desc: "On-ground support for programme execution.",
  },
  {
    title: "Medical Support Coordination",
    desc: "Coordination of medical support requirements when needed.",
  },
  {
    title: "Emergency Communication Systems",
    desc: "Communication processes to support programme management.",
  },
  {
    title: "Real-Time Operational Monitoring",
    desc: "Ongoing oversight while programmes are underway.",
  },
];
