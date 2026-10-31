import type { IconName } from "@/components/Icons";
import type { FaqItem } from "@/lib/site";

export const safetyHero = {
  eyebrow: "Safety",
  title: "Prepared with Care. Supported Throughout.",
  desc: "Student safety and wellbeing are central to the way Every Square Inch plans and coordinates educational journeys. Every programme is reviewed according to its destination, student age group, activities, season, travel conditions and the school's specific requirements. Our approach brings together advance preparation, responsible supplier coordination, clear supervision arrangements and responsive on-journey support.",
  primaryCta: "Discuss Your School's Requirements",
  primaryHref: "/contact?type=school_enquiry",
  secondaryCta: "Plan Your Journey",
  secondaryHref: "/contact?type=plan_your_journey",
} as const;

export const safetyApproach = {
  title: "Plan. Prepare. Support.",
  cards: [
    {
      title: "Plan",
      desc: "Advance planning with context-aware preparation and aligned school communication.",
      icon: "shield" as IconName,
    },
    {
      title: "Prepare",
      desc: "Clear pre-departure guidance for educators, families, and student participants.",
      icon: "clipboard" as IconName,
    },
    {
      title: "Support",
      desc: "Responsive on-journey coordination and escalation pathways for operational needs.",
      icon: "lifeBuoy" as IconName,
    },
  ],
} as const;

type BaseSection = {
  id: string;
  eyebrow: string;
  title: string;
  desc?: string;
  closing?: string;
  beforeList?: string;
  points?: readonly string[];
  subsections?: readonly { title: string; desc: string }[];
  parties?: readonly { title: string; desc: string }[];
  content?: string;
};

export type SafetySection = BaseSection & {
  id:
    | "before-the-journey"
    | "risk-aware-programme-planning"
    | "supervision-and-on-ground-coordination"
    | "medical-readiness"
    | "adventure-and-outdoor-activities"
    | "safeguarding-and-student-wellbeing"
    | "food-water-and-hygiene"
    | "communication-and-escalation"
    | "during-the-journey"
    | "shared-responsibility"
    | "important-note";
};

export const safetyDetailedSections = [
  {
    id: "before-the-journey",
    eyebrow: "Before the Journey",
    title: "Preparation begins before students travel.",
    desc: "Every programme has different requirements. Our planning process may include the following, depending on the destination and programme scope:",
    points: [
      "Understanding the age group, number of students and accompanying educators",
      "Reviewing the proposed itinerary, travel time and programme intensity",
      "Identifying destination-specific considerations",
      "Coordinating student medical, dietary and accessibility information",
      "Reviewing accommodation, transport and activity arrangements",
      "Confirming emergency contacts and escalation responsibilities",
      "Sharing packing, clothing and documentation guidance",
      "Discussing supervision expectations with the school",
      "Preparing alternative arrangements where reasonably required",
      "Conducting pre-departure briefings for the school team",
    ],
    closing:
      "Final roles, responsibilities and programme arrangements are agreed with the school before departure.",
  },
  {
    id: "risk-aware-programme-planning",
    eyebrow: "Risk Aware Programme Planning",
    title: "Every programme is reviewed in context.",
    subsections: [
      {
        title: "Destination and Route Review",
        desc: "Travel duration, road conditions, weather, altitude, local infrastructure, accessibility and proximity to medical assistance are considered while designing the programme.",
      },
      {
        title: "Accommodation Review",
        desc: "Accommodation is selected with consideration for location, hygiene, group suitability, access control, room allocation, fire-safety provisions and the practical requirements of supervising a student group.",
      },
      {
        title: "Transport Coordination",
        desc: "Vehicles and transport providers are coordinated according to the agreed programme requirements. Route planning, driver documentation, vehicle suitability, movement schedules and rest requirements are reviewed where applicable.",
      },
      {
        title: "Activity Review",
        desc: "Activities are evaluated according to the age and readiness of participants, environmental conditions, provider capability, equipment requirements and applicable permissions.",
      },
      {
        title: "Contingency Planning",
        desc: "Weather, transport interruptions, destination closures, medical situations and other operational changes may require an itinerary to be modified. Alternative arrangements are considered wherever reasonably possible.",
      },
    ],
  },
  {
    id: "supervision-and-on-ground-coordination",
    eyebrow: "Supervision and On Ground Coordination",
    title: "Clear responsibilities support better journeys.",
    desc: "Student supervision is a shared responsibility involving the school's accompanying educators, Every Square Inch coordinators and relevant activity or service providers.",
    beforeList:
      "Before departure, the school and Every Square Inch should align on:",
    points: [
      "The number and responsibilities of accompanying educators",
      "Student groups and head-count procedures",
      "Rooming and movement arrangements",
      "Attendance and assembly points",
      "Behavioural expectations",
      "Medical and dietary information",
      "Student-specific support requirements",
      "Emergency contacts",
      "Communication and escalation responsibilities",
    ],
    closing:
      "Every Square Inch's on-ground team supports programme coordination, supplier communication, scheduled movement and operational requirements. School-appointed educators retain responsibility for student supervision, pastoral care and school-specific decisions unless otherwise agreed in writing.",
  },
  {
    id: "medical-readiness",
    eyebrow: "Medical Readiness",
    title: "Preparing for individual student needs.",
    desc: "Schools should provide accurate and current information about relevant medical conditions, allergies, medication, dietary requirements, mobility considerations and other student-support needs through the agreed process.",
    beforeList: "Depending on the programme, preparation may include:",
    points: [
      "Recording relevant medical and emergency information",
      "Identifying nearby hospitals or medical facilities",
      "Confirming how prescribed medication will be carried and administered",
      "Communicating dietary and allergy requirements to relevant providers",
      "Planning for altitude, climate, heat, cold or travel-related discomfort",
      "Establishing a process for contacting the school and parents or guardians when required",
    ],
    closing:
      "Every Square Inch does not replace qualified medical professionals. Medical decisions and treatment remain subject to the advice and availability of appropriately qualified healthcare providers.",
  },
  {
    id: "adventure-and-outdoor-activities",
    eyebrow: "Adventure and Outdoor Activities",
    title: "Challenge must be matched with preparation.",
    desc: "Adventure and outdoor activities require programme-specific consideration. Where such activities are included, planning may cover:",
    points: [
      "Age and participation criteria",
      "Student fitness and medical information",
      "Provider experience and relevant qualifications",
      "Equipment and protective gear",
      "Weather and terrain conditions",
      "Activity briefings and participant instructions",
      "Emergency procedures and evacuation considerations",
      "Alternative participation options where appropriate",
    ],
    closing:
      "Activities may be changed, postponed or cancelled when conditions are considered unsuitable. No outdoor or adventure activity should be represented as completely risk-free.",
  },
  {
    id: "safeguarding-and-student-wellbeing",
    eyebrow: "Safeguarding and Student Wellbeing",
    title: "Physical and emotional wellbeing both matter.",
    desc: "A successful student journey should provide an environment in which students feel respected, supported and able to seek help.",
    beforeList: "Our approach encourages:",
    points: [
      "Respectful and age-appropriate interactions",
      "Clear standards of conduct",
      "Appropriate boundaries between adults and students",
      "Sensitivity to privacy, dignity and individual needs",
      "Early communication of concerns",
      "Inclusive participation wherever reasonably possible",
      "Support for students experiencing anxiety, discomfort, fatigue or homesickness",
      "Responsible use of photographs and student information",
    ],
    closing:
      "Any safeguarding concern should be communicated immediately through the school's agreed safeguarding and escalation process. The school should identify its designated safeguarding contact before departure.",
  },
  {
    id: "food-water-and-hygiene",
    eyebrow: "Food, Water and Hygiene",
    title: "Everyday wellbeing requires consistent attention.",
    desc: "Meal and accommodation arrangements are coordinated according to the programme scope and information provided by the school.",
    beforeList: "Considerations may include:",
    points: [
      "Dietary requirements and declared food allergies",
      "Safe drinking-water availability",
      "Meal timings appropriate to the itinerary",
      "Basic hygiene standards",
      "Rest periods and hydration",
      "Clean and suitable student accommodation",
      "Access to washrooms during journeys and activities",
    ],
    closing:
      "Special requirements should be communicated during the planning stage so that their feasibility can be assessed and confirmed.",
  },
  {
    id: "communication-and-escalation",
    eyebrow: "Communication and Escalation",
    title: "Clear communication supports timely decisions.",
    desc: "Before departure, key contact details and communication responsibilities should be agreed between the school and Every Square Inch.",
    beforeList: "The communication structure may include:",
    points: [
      "A designated school programme leader",
      "An Every Square Inch programme contact",
      "On-ground coordinator contact details",
      "Supplier and accommodation contacts",
      "Emergency escalation contacts",
      "A process for informing school leadership",
      "A parent or guardian communication process managed by the school",
      "Incident recording and follow-up where required",
    ],
    closing:
      "Information concerning students should only be shared with authorised individuals and through the agreed communication process.",
  },
  {
    id: "during-the-journey",
    eyebrow: "During the Journey",
    title: "Continuous coordination from arrival to return.",
    desc: "During a programme, Every Square Inch's role may include:",
    points: [
      "Coordinating transport, accommodation and activity providers",
      "Supporting daily programme movement",
      "Monitoring changes in weather and operating conditions where relevant",
      "Communicating itinerary adjustments",
      "Supporting head-count and assembly routines alongside educators",
      "Escalating medical or operational concerns",
      "Coordinating alternative arrangements where reasonably possible",
      "Maintaining communication with the designated school representative",
    ],
    closing:
      "Specific support depends on the programme scope agreed with the school.",
  },
  {
    id: "shared-responsibility",
    eyebrow: "Shared Responsibility",
    title: "The strongest safety culture is collaborative.",
    desc: "Student travel works best when the organiser, school, educators, parents and students understand their responsibilities.",
    parties: [
      {
        title: "Every Square Inch",
        desc: "Plans and coordinates the agreed programme, suppliers, logistics and on-ground operational support.",
      },
      {
        title: "The School",
        desc: "Provides accurate participant information, appoints suitable accompanying educators, establishes supervision arrangements and communicates school policies and expectations.",
      },
      {
        title: "Parents and Guardians",
        desc: "Provide accurate medical and personal information, required consent and suitable preparation for the student.",
      },
      {
        title: "Students",
        desc: "Follow instructions, respect agreed conduct standards, remain with their assigned group and promptly report any concern or difficulty.",
      },
      {
        title: "Specialist Providers",
        desc: "Manage activities within their area of responsibility according to applicable procedures, conditions and participation requirements.",
      },
    ],
  },
  {
    id: "important-note",
    eyebrow: "",
    title: "",
    content:
      "Every educational journey involves factors that cannot be eliminated completely, including weather, traffic, health events, third-party operations and changing local conditions. Our responsibility is to plan carefully, coordinate responsibly, communicate clearly and respond appropriately. Programme arrangements, responsibilities, inclusions and specific procedures are confirmed through the relevant proposal and programme documentation.",
  },
] as const satisfies readonly SafetySection[];

export const safetyFaqs = [
  {
    q: "How does Every Square Inch assess safety for a programme?",
    a: "Each programme is reviewed according to the destination, activities, student age group, season, transport, accommodation, local conditions and information supplied by the school. The level and type of review depend on the programme.",
  },
  {
    q: "What medical information should the school provide?",
    a: "The school should provide relevant information regarding medical conditions, allergies, prescribed medication, dietary requirements, mobility considerations and other support needs through the agreed confidential process.",
  },
  {
    q: "Who supervises students during the journey?",
    a: "Student supervision is shared between school-appointed educators, Every Square Inch coordinators and relevant specialist providers. Exact responsibilities and supervision arrangements should be agreed before departure.",
  },
  {
    q: "What happens if the itinerary must change?",
    a: "Weather, transport, local restrictions, health considerations or other operational circumstances may require changes. Every Square Inch coordinates with the school and relevant providers to identify an appropriate alternative wherever reasonably possible.",
  },
  {
    q: "How are adventure activities managed?",
    a: "Adventure activities are considered according to student age, readiness, weather, terrain, equipment and provider capability. Participation requirements and specific procedures are reviewed according to the activity.",
  },
  {
    q: "How are parents informed during an emergency?",
    a: "Communication normally follows the agreed school escalation structure. Every Square Inch communicates with the designated school representative, while parent or guardian communication is generally managed by the school unless another process has been agreed.",
  },
  {
    q: "Can programmes accommodate dietary or accessibility requirements?",
    a: "Requirements should be disclosed at the planning stage. Every Square Inch will assess them with the relevant providers and confirm what can reasonably be accommodated.",
  },
  {
    q: "Does Every Square Inch guarantee a risk-free journey?",
    a: "No travel or activity can be described as completely risk-free. Every Square Inch focuses on responsible planning, preparation, coordination, communication and appropriate response.",
  },
] as const satisfies readonly FaqItem[];

export const safetyFinalCta = {
  title: "Discuss your school's safety and wellbeing expectations.",
  desc: "Share your student profile, destination, proposed activities and specific requirements. Our team will review the programme context and discuss suitable planning and support arrangements.",
  primaryCta: "Discuss Your School's Requirements",
  primaryHref: "/contact?type=school_enquiry",
  secondaryCta: "Plan Your Journey",
  secondaryHref: "/contact?type=plan_your_journey",
} as const;
