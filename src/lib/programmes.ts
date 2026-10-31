export type ProgrammeTheme = { title: string; desc: string };
export type ProgrammeFaq = { q: string; a: string };

export type ProgrammeDetail = {
  slug:
    | "educational-tours"
    | "international-educational-tours"
    | "stem-innovation-tours"
    | "cultural-exchange"
    | "adventure-leadership"
    | "wildlife-conservation"
    | "international-sports-camps"
    | "architecture-fine-arts";
  title: string;
  cardDesc: string;
  seoTitle: string;
  metaDescription: string;
  heroH1: string;
  heroSupportingCopy: string;
  heroImage: string;
  heroImageAlt: string;
  overview: string[];
  learningOutcomes: string[];
  highlights: string[];
  themes: ProgrammeTheme[];
  whoCanParticipate: string;
  wellbeing: string;
  faqs: ProgrammeFaq[];
};

export const programmesOverviewContent = {
  seoTitle: "School Educational Programmes | Every Square Inch",
  metaDescription:
    "Explore educational tours, international learning journeys, STEM tours, cultural exchange, adventure, wildlife, sports, architecture and fine arts programmes for schools.",
  heroH1: "Educational Programmes That Bring Learning to Life",
  heroSupportingCopy:
    "From heritage and science to adventure, culture, sport and the arts, our programmes are designed to turn the world into a purposeful learning environment.",
  heroPrimaryCta: "Find the Right Programme",
  heroSecondaryCta: "Request a Custom Proposal",
  portfolioHeading: "One portfolio. Many ways to learn.",
  portfolioIntro:
    "Students learn in different ways and schools pursue different goals. Some journeys deepen academic understanding. Others build independence, cultural awareness, creativity, teamwork or leadership. Our programme portfolio gives schools the flexibility to select a clear theme or combine complementary elements into a tailored learning journey.",
  selectionHeading: "How to select a programme",
  selectionSteps: [
    "Begin with the desired learning or student-development outcome.",
    "Consider age, duration, time of year and preferred level of challenge.",
    "Identify relevant curriculum links or co-curricular priorities.",
    "Discuss accessibility, dietary, pastoral and supervision requirements early.",
    "Choose a destination only after the purpose is clear.",
  ],
  customDesignHeading: "Custom programme design",
  customDesignText:
    "Programme categories are starting points, not rigid packages. We can combine themes, adapt pacing and develop a journey around the school's own objectives, subject priorities and group profile.",
  customDesignCta: "Request a Programme Consultation",
};

export const programmeDetailPageCopy = {
  heroPrimaryCta: "Request a Programme Proposal",
  heroSecondaryCta: "Speak with a Programme Specialist",
  overviewHeading: "Programme overview",
  learningOutcomesHeading: "Learning outcomes",
  highlightsHeading: "Programme highlights",
  midPageCtaHeading: "Ready to explore this programme for your school?",
  midPageCtaText:
    "Share your student age group and preferred dates, and we will help shape this programme around your school's objectives.",
  midPageCtaButton: "Request a Programme Proposal",
  themesHeading: "Possible themes and experiences",
  whoCanParticipateHeading: "Who can participate?",
  wellbeingHeading: "Student wellbeing and preparation",
  faqHeading: "Frequently asked questions",
  finalCtaText:
    "Tell us your student age group, preferred dates, learning objectives and destination interests. We will help shape a programme that is educationally meaningful and operationally realistic.",
  finalCtaButton: "Request a Custom Proposal",
};

export const programmeDetails: ProgrammeDetail[] = [
  {
    slug: "educational-tours",
    title: "Educational Tours",
    cardDesc:
      "Curriculum-connected journeys that translate classroom themes into lived learning experiences.",
    seoTitle: "Educational Tours for Schools | Every Square Inch",
    metaDescription:
      "Curriculum-connected educational tours for schools across history, science, geography, culture and society, designed around meaningful learning and student wellbeing.",
    heroH1: "Where Classroom Learning Meets Real Life",
    heroSupportingCopy:
      "Curriculum-connected journeys that help students experience ideas, places and stories beyond the textbook.",
    heroImage: "/Educational Tours.png",
    heroImageAlt:
      "Students exploring a historic palace during an educational tour",
    overview: [
      "Educational tours create a bridge between knowledge and experience. Students may understand a historical event differently when they stand within its setting, recognise scientific principles through observation or see the relationships between geography, livelihoods and culture in a real community.",
      "Our educational tours are structured around clear themes, suitable pacing and opportunities for participation and reflection. The programme can support classroom subjects, interdisciplinary projects or broader student-development goals.",
    ],
    learningOutcomes: [
      "Connect classroom concepts with real places and situations.",
      "Strengthen observation, questioning and critical thinking.",
      "Develop communication, collaboration and confidence.",
      "Build awareness of history, culture, geography, science and society.",
      "Encourage responsible behaviour and respect for shared spaces.",
    ],
    highlights: [
      "Teacher-informed programme planning.",
      "Visits selected for relevance rather than popularity alone.",
      "Age-appropriate facilitation and learning prompts.",
      "Balanced schedules with time for rest and reflection.",
      "Optional pre-journey and post-journey activity ideas.",
    ],
    themes: [
      {
        title: "History and heritage",
        desc: "Monuments, museums, archives, archaeological sites and living traditions.",
      },
      {
        title: "Science and environment",
        desc: "Science centres, field observations, biodiversity sites and applied-learning facilities.",
      },
      {
        title: "Geography and society",
        desc: "Landscapes, settlements, local economies, communities and resource use.",
      },
      {
        title: "Civics and citizenship",
        desc: "Public institutions, social initiatives and community-based learning.",
      },
      {
        title: "Interdisciplinary journeys",
        desc: "Programmes combining multiple subjects around one destination or question.",
      },
    ],
    whoCanParticipate:
      "Suitable for primary, middle and senior-school groups. Content, pace and complexity should be adapted to the age group and the school's learning goals.",
    wellbeing:
      "Preparation may include packing guidance, medical and dietary information, conduct expectations, teacher roles and age-appropriate briefings. Activity suitability and destination conditions should be reviewed for each group.",
    faqs: [
      {
        q: "Can the programme connect with our curriculum?",
        a: "Yes. Share the subject themes, grade level and desired outcomes so that relevant visits and activities can be prioritised.",
      },
      {
        q: "Can we customise the duration?",
        a: "Yes. The scope can be adapted to available dates, travel time and the depth of experience required.",
      },
      {
        q: "Will students receive worksheets?",
        a: "Optional learning prompts or reflection resources can be discussed. These should support the journey without making it feel like a classroom assignment throughout.",
      },
      {
        q: "Can the tour include more than one subject?",
        a: "Yes. Many destinations are ideal for interdisciplinary programmes linking history, geography, science, art, culture and citizenship.",
      },
    ],
  },
  {
    slug: "international-educational-tours",
    title: "International Educational Tours",
    cardDesc:
      "Cross-border programmes that build cultural fluency, independence, and global perspective.",
    seoTitle: "International Educational Tours for Schools | Every Square Inch",
    metaDescription:
      "International school tours that combine global exposure, educational visits, culture and purposeful student learning with thoughtful planning and care.",
    heroH1: "The World Is Waiting to Teach",
    heroSupportingCopy:
      "Global journeys that broaden perspective, deepen cultural understanding and help students see learning in an international context.",
    heroImage: "/International Educational Tour.png",
    heroImageAlt: "Students on an international educational journey",
    overview: [
      "International educational travel gives students opportunities to engage with different cultures, institutions, ideas and ways of life. When thoughtfully designed, it can strengthen independence, adaptability and global awareness while extending academic learning.",
      "Our role is to help schools create a coherent programme rather than a crowded checklist. We consider destination relevance, travel practicality, student readiness, documentation timelines, cultural preparation and the learning value of each visit.",
    ],
    learningOutcomes: [
      "Build global awareness and cultural sensitivity.",
      "Develop independence, adaptability and responsible decision-making.",
      "Experience international approaches to education, innovation, heritage or society.",
      "Strengthen communication and collaboration in unfamiliar settings.",
      "Encourage students to reflect on similarities, differences and shared global challenges.",
    ],
    highlights: [
      "Purpose-led destination selection.",
      "Balanced itinerary with learning, culture and appropriate downtime.",
      "Pre-departure guidance for students, teachers and parents.",
      "Support for agreed documentation and planning workflows.",
      "Opportunities for institutional, cultural or expert interaction where available.",
    ],
    themes: [
      {
        title: "Global cities and society",
        desc: "Urban systems, history, public spaces, design and contemporary culture.",
      },
      {
        title: "Science and innovation",
        desc: "Universities, museums, research centres, technology districts and exhibitions.",
      },
      {
        title: "History and heritage",
        desc: "World heritage sites, museums and locations connected with major historical themes.",
      },
      {
        title: "Arts and culture",
        desc: "Performance, architecture, visual culture, language and creative practice.",
      },
      {
        title: "Sustainability and global citizenship",
        desc: "Environmental initiatives, civic ideas and international perspectives.",
      },
    ],
    whoCanParticipate:
      "Best suited to students who are ready for longer travel, greater independence and cultural adaptation. Age suitability depends on destination, programme intensity and school policy.",
    wellbeing:
      "International programmes require additional preparation for passports, visas, insurance, medical information, currency, communication, baggage and cultural expectations. Requirements vary by destination and must be verified before confirmation.",
    faqs: [
      {
        q: "Do you assist with visa documentation?",
        a: "The scope of visa support should be defined for each programme. Final decisions and processing timelines remain with the relevant authorities.",
      },
      {
        q: "How far in advance should schools plan?",
        a: "International programmes should begin well in advance to allow time for permissions, passports, visa processes, bookings and parent communication.",
      },
      {
        q: "Can the programme include school or university visits?",
        a: "Where appropriate and available, institutional interactions may be requested. They remain subject to host approval and scheduling.",
      },
      {
        q: "How are meals and dietary needs handled?",
        a: "Dietary requirements should be collected early. Availability varies by destination, so expectations and alternatives must be communicated clearly.",
      },
    ],
  },
  {
    slug: "stem-innovation-tours",
    title: "STEM & Innovation Tours",
    cardDesc:
      "Hands-on exposure to science, research, design thinking, and innovation ecosystems.",
    seoTitle: "STEM & Innovation Tours for Schools | Every Square Inch",
    metaDescription:
      "Hands-on STEM and innovation tours for schools featuring science, technology, engineering, design, research and future-focused learning experiences.",
    heroH1: "From Curiosity to Possibility",
    heroSupportingCopy:
      "Experiences that help students see how science, technology, engineering and mathematics shape the world around them.",
    heroImage: "/STEM Innovation.jpeg",
    heroImageAlt: "Students engaged in a STEM innovation workshop",
    overview: [
      "STEM learning becomes especially powerful when students encounter ideas in action. A concept from the classroom can take on new meaning inside a science centre, manufacturing facility, observatory, research institution, design studio or innovation ecosystem.",
      "Our STEM and Innovation programmes are designed to encourage questions, problem-solving and interdisciplinary thinking. The focus is not only on technology, but on how people identify challenges, test ideas, learn from failure and create solutions.",
    ],
    learningOutcomes: [
      "Connect STEM concepts with real applications.",
      "Encourage enquiry, experimentation and evidence-based thinking.",
      "Develop problem-solving, collaboration and design awareness.",
      "Expose students to emerging fields and diverse career pathways.",
      "Promote responsible discussion about technology and society.",
    ],
    highlights: [
      "Visits to science, research, engineering or innovation environments.",
      "Hands-on workshops where suitable and available.",
      "Interaction with practitioners, educators or facilitators.",
      "Challenges that encourage teamwork and creative thinking.",
      "Reflection on ethical, environmental and social implications.",
    ],
    themes: [
      {
        title: "Science in action",
        desc: "Museums, laboratories, observatories, planetariums and field-science experiences.",
      },
      {
        title: "Engineering and design",
        desc: "Structures, transport systems, manufacturing, robotics and design thinking.",
      },
      {
        title: "Digital futures",
        desc: "Computing, artificial intelligence, data, media and responsible technology.",
      },
      {
        title: "Space and astronomy",
        desc: "Space science, observation, exploration and related technologies.",
      },
      {
        title: "Sustainability innovation",
        desc: "Renewable energy, water, waste, climate solutions and circular design.",
      },
    ],
    whoCanParticipate:
      "Programmes can be adapted for upper-primary, middle and senior-school students. Complexity, terminology and workshop demands should match the age group.",
    wellbeing:
      "Some facilities have strict access, clothing, identification or conduct requirements. Schools should receive specific instructions before departure. Workshops must be reviewed for age suitability and physical or technical risks.",
    faqs: [
      {
        q: "Is this only for science-stream students?",
        a: "No. Innovation is interdisciplinary and may be relevant to design, geography, economics, environmental studies, arts and social science students.",
      },
      {
        q: "Are facility visits guaranteed?",
        a: "Specialist facilities are subject to approval, operational schedules and security policies. Alternatives should be planned where access may change.",
      },
      {
        q: "Can students build or test something?",
        a: "Hands-on workshops can be included where suitable providers and safe, age-appropriate formats are available.",
      },
      {
        q: "Can the tour include career exposure?",
        a: "Yes. Programmes can highlight roles, skills and educational pathways connected with relevant fields.",
      },
    ],
  },
  {
    slug: "cultural-exchange",
    title: "Cultural Exchange Programmes",
    cardDesc:
      "Meaningful intercultural interactions designed to expand empathy and world understanding.",
    seoTitle: "Cultural Exchange Programmes for Schools | Every Square Inch",
    metaDescription:
      "Cultural exchange programmes that help school students build empathy, communication, global awareness and respect through meaningful interaction and shared learning.",
    heroH1: "Understanding Begins with Connection",
    heroSupportingCopy:
      "Meaningful encounters that help students listen, communicate and see the world through more than one perspective.",
    heroImage: "/Cultural exchange Program.png",
    heroImageAlt: "Students participating in a cultural exchange activity",
    overview: [
      "Cultural exchange is most valuable when it goes beyond observation. Students should have opportunities to interact, ask respectful questions, share their own experiences and recognise both differences and common ground.",
      "Our programmes may include school interactions, community engagement, language and arts experiences, collaborative activities or host-led learning. The structure should always respect local context, safeguard students and avoid turning culture into a performance for visitors.",
    ],
    learningOutcomes: [
      "Build empathy and intercultural understanding.",
      "Develop respectful communication and listening.",
      "Increase confidence in unfamiliar social settings.",
      "Challenge stereotypes through authentic interaction.",
      "Encourage reflection on identity, community and global citizenship.",
    ],
    highlights: [
      "Facilitated interaction rather than passive viewing.",
      "Clear cultural and behavioural preparation.",
      "Collaborative projects or workshops where feasible.",
      "Responsible photography and consent practices.",
      "Reflection before, during and after the exchange.",
    ],
    themes: [
      {
        title: "School-to-school interaction",
        desc: "Shared classes, projects, presentations, sport or cultural activities.",
      },
      {
        title: "Language and communication",
        desc: "Language exposure, storytelling and practical communication.",
      },
      {
        title: "Arts and traditions",
        desc: "Music, dance, craft, food, festivals and creative expression.",
      },
      {
        title: "Community and daily life",
        desc: "Understanding how people live, learn and work in different contexts.",
      },
      {
        title: "Global citizenship",
        desc: "Exploring shared challenges, responsibilities and opportunities for cooperation.",
      },
    ],
    whoCanParticipate:
      "Suitable for students who can participate respectfully in group interaction. Programme structure should reflect age, language ability, confidence and safeguarding needs.",
    wellbeing:
      "Cultural preparation is essential. Students should understand respectful conduct, photography rules, dress expectations, gifts, language differences and the importance of avoiding stereotypes. Any home-stay element requires enhanced safeguarding and explicit school approval.",
    faqs: [
      {
        q: "Does cultural exchange require a home stay?",
        a: "No. Exchange can take place through school visits, workshops, shared projects and hosted activities without home accommodation.",
      },
      {
        q: "Can students present their own culture?",
        a: "Yes. Reciprocal sharing often makes interaction more meaningful when it is planned sensitively.",
      },
      {
        q: "What if there is a language barrier?",
        a: "Facilitators, visual activities and collaborative tasks can support interaction. Expectations should match the group's language comfort.",
      },
      {
        q: "How do you avoid token cultural activities?",
        a: "The programme should prioritise context, dialogue and participation rather than isolated performances or superficial photo opportunities.",
      },
    ],
  },
  {
    slug: "adventure-leadership",
    title: "Adventure & Leadership Programmes",
    cardDesc:
      "Challenge-based outdoor experiences that support teamwork, resilience, and leadership growth.",
    seoTitle:
      "Adventure & Leadership Programmes for Schools | Every Square Inch",
    metaDescription:
      "Age-appropriate school adventure and leadership programmes that build teamwork, resilience, communication, confidence and responsible decision-making.",
    heroH1: "Growth Begins Just Beyond the Familiar",
    heroSupportingCopy:
      "Thoughtfully supported challenges that help students discover resilience, teamwork and confidence.",
    heroImage: "/Adventure and leadership.png",
    heroImageAlt: "Students on an adventure leadership programme",
    overview: [
      "Adventure becomes educational when challenge is matched with preparation, support and reflection. The goal is not to push students recklessly, but to help them attempt something unfamiliar, make decisions, support peers and understand their own responses.",
      "Programmes may include outdoor skills, team challenges, trekking, camping, navigation, problem-solving or environmental learning. Activities must be selected according to age, location, season, provider capability and the group's physical and emotional readiness.",
    ],
    learningOutcomes: [
      "Build confidence through achievable challenge.",
      "Strengthen communication and teamwork.",
      "Develop resilience, patience and decision-making.",
      "Encourage responsibility for self, peers and the environment.",
      "Create opportunities for leadership and reflection.",
    ],
    highlights: [
      "Progressive, age-appropriate challenge.",
      "Qualified activity providers where required.",
      "Clear equipment, clothing and fitness guidance.",
      "Team-based tasks with structured reflection.",
      "Respect for weather, terrain and environmental limits.",
    ],
    themes: [
      {
        title: "Team-building challenges",
        desc: "Communication, trust, planning and collaborative problem-solving.",
      },
      {
        title: "Outdoor living",
        desc: "Camping routines, organisation, responsibility and low-impact practices.",
      },
      {
        title: "Navigation and exploration",
        desc: "Map skills, route awareness and decision-making.",
      },
      {
        title: "Trekking and nature immersion",
        desc: "Endurance, observation and respect for landscapes.",
      },
      {
        title: "Leadership labs",
        desc: "Rotating roles, peer support and guided reflection on leadership choices.",
      },
    ],
    whoCanParticipate:
      "Suitable for age groups determined by the activity and provider. Schools should consider fitness, medical conditions, prior experience, accessibility and student confidence.",
    wellbeing:
      "Adventure activities require specific risk assessments, trained providers, suitable equipment, weather monitoring, emergency protocols and clear participation criteria. No activity should be described as risk-free. Alternative participation should be considered where appropriate.",
    faqs: [
      {
        q: "Do students need prior experience?",
        a: "Many activities can be introductory, but requirements vary. The programme should clearly state any expected fitness or technical preparation.",
      },
      {
        q: "What happens in poor weather?",
        a: "Weather contingencies and alternative activities should be agreed in advance. Safety decisions must take priority over itinerary commitments.",
      },
      {
        q: "Can students opt out of an activity?",
        a: "Participation policies should be agreed with the school. Where possible, respectful alternatives should be considered without undermining group safety.",
      },
      {
        q: "How is leadership taught?",
        a: "Students learn through roles, decisions, teamwork and reflection rather than through lectures alone.",
      },
    ],
  },
  {
    slug: "wildlife-conservation",
    title: "Wildlife & Conservation",
    cardDesc:
      "Ecology-led learning journeys focused on biodiversity, sustainability, and responsible travel practice.",
    seoTitle: "Wildlife & Conservation Tours for Schools | Every Square Inch",
    metaDescription:
      "School wildlife and conservation programmes focused on biodiversity, ecosystems, field observation, environmental responsibility and responsible nature travel.",
    heroH1: "Observe. Understand. Protect.",
    heroSupportingCopy:
      "Field-based experiences that help students appreciate biodiversity and their responsibility towards the natural world.",
    heroImage: "/Wildlife and convservation.png",
    heroImageAlt: "Students observing wildlife during a conservation programme",
    overview: [
      "Wildlife learning should encourage patience, observation and respect. The most meaningful experience may not be a dramatic sighting, but understanding how habitats function, how species interact and how conservation choices affect communities and ecosystems.",
      "Our programmes can combine guided nature interpretation, field observation, conservation education, habitat study and responsible discussion about human-wildlife relationships. Ethical practice and realistic expectations are essential.",
    ],
    learningOutcomes: [
      "Understand ecosystems, biodiversity and interdependence.",
      "Develop observation, patience and field-note skills.",
      "Explore conservation challenges and possible responses.",
      "Recognise the role of local communities and responsible tourism.",
      "Build respect for wildlife, habitats and protected-area rules.",
    ],
    highlights: [
      "Expert-guided nature interpretation where available.",
      "Responsible viewing practices and realistic sighting expectations.",
      "Habitat, species and conservation context.",
      "Field observation and reflection activities.",
      "Strong emphasis on low-impact behaviour.",
    ],
    themes: [
      {
        title: "Forest and habitat ecology",
        desc: "Food webs, vegetation, adaptation and ecosystem relationships.",
      },
      {
        title: "Birding and field observation",
        desc: "Identification, behaviour, migration and patient observation.",
      },
      {
        title: "Conservation in practice",
        desc: "Protected areas, research, rescue, restoration and community roles.",
      },
      {
        title: "Human-wildlife relationships",
        desc: "Livelihoods, conflict, coexistence and shared landscapes.",
      },
      {
        title: "Environmental responsibility",
        desc: "Waste, water, consumption, climate and responsible visitor behaviour.",
      },
    ],
    whoCanParticipate:
      "Suitable for multiple age groups with adapted walking distances, observation tools and conceptual depth. Early starts, weather and terrain should be considered.",
    wellbeing:
      "Wildlife programmes require strict adherence to park rules, safe distance, vehicle limits, noise discipline and guide instructions. Sightings cannot be guaranteed. Medical needs, allergies, heat, cold, insects and terrain should be planned for.",
    faqs: [
      {
        q: "Will students definitely see specific animals?",
        a: "No ethical programme should guarantee wildlife sightings. The learning value should include habitats, ecology and conservation, not only sightings.",
      },
      {
        q: "Can students conduct fieldwork?",
        a: "Age-appropriate observation logs, biodiversity surveys or guided activities may be included where permitted.",
      },
      {
        q: "How do you ensure responsible wildlife viewing?",
        a: "Programmes should follow local regulations, guide instructions, distance requirements and low-noise, low-impact practices.",
      },
      {
        q: "Can conservation experts interact with students?",
        a: "Where available, expert sessions may be requested, subject to schedules and institutional approval.",
      },
    ],
  },
  {
    slug: "international-sports-camps",
    title: "International Sports Camps",
    cardDesc:
      "Sports-focused learning environments combining coaching, discipline, and intercultural exchange.",
    seoTitle: "International Sports Camps for Schools | Every Square Inch",
    metaDescription:
      "International sports camps for school students combining structured coaching, teamwork, discipline, cultural exposure and age-appropriate travel experiences.",
    heroH1: "Train with Purpose. Compete with Character.",
    heroSupportingCopy:
      "International sporting experiences that develop skill, discipline, teamwork and cultural awareness.",
    heroImage: "/International sports camp.png",
    heroImageAlt: "Students at an international sports camp",
    overview: [
      "Sport creates a powerful learning environment. Students experience preparation, feedback, teamwork, pressure, responsibility and the discipline of repeated practice. International exposure can add new coaching perspectives, facilities, competition formats and cultural learning.",
      "Our sports programmes should be designed around the student profile and the school's objectives. They may focus on development, exposure, friendly competition or a balanced combination of sport and educational travel.",
    ],
    learningOutcomes: [
      "Improve sport-specific understanding and discipline.",
      "Develop teamwork, communication and resilience.",
      "Experience different coaching environments and sporting cultures.",
      "Strengthen respect, fair play and personal responsibility.",
      "Build confidence through structured practice and feedback.",
    ],
    highlights: [
      "Coaching or camp formats subject to provider availability.",
      "Training load suited to age and ability.",
      "Recovery, hydration and nutrition planning.",
      "Optional friendly matches or observation experiences.",
      "Cultural and educational elements beyond sport.",
    ],
    themes: [
      {
        title: "Football",
        desc: "Technical skills, team shape, conditioning and match awareness.",
      },
      {
        title: "Tennis",
        desc: "Footwork, technique, tactical thinking and individual discipline.",
      },
      {
        title: "Badminton",
        desc: "Movement, coordination, strategy and speed.",
      },
      {
        title: "Multi-sport development",
        desc: "Broader physical literacy, teamwork and exposure.",
      },
      {
        title: "Sport and culture",
        desc: "Training combined with stadium, institution or cultural visits.",
      },
    ],
    whoCanParticipate:
      "Suitable for students according to sport, ability and camp requirements. Programmes should clearly distinguish recreational, developmental and performance levels.",
    wellbeing:
      "Sports camps require medical information, fitness expectations, injury protocols, hydration, rest, appropriate equipment and qualified coaching. Travel schedules should not compromise safe training loads. Safeguarding standards must be verified with host providers.",
    faqs: [
      {
        q: "Do students need to be elite athletes?",
        a: "Not necessarily. Programmes may be designed for development, exposure or performance groups, but ability requirements must be clear.",
      },
      {
        q: "Can more than one sport be included?",
        a: "Yes, where facilities, coaching and scheduling allow.",
      },
      {
        q: "Are competitions guaranteed?",
        a: "Matches or tournaments are subject to host confirmation, rules, availability and suitable opposition.",
      },
      {
        q: "Can parents travel with the group?",
        a: "Any parent accompaniment model should be agreed with the school and integrated into supervision and logistics planning.",
      },
    ],
  },
  {
    slug: "architecture-fine-arts",
    title: "Architecture & Fine Arts",
    cardDesc:
      "Built-environment and arts immersion experiences that deepen observation and creative expression.",
    seoTitle: "Architecture & Fine Arts Tours for Schools | Every Square Inch",
    metaDescription:
      "Architecture and fine arts programmes for schools exploring design, built heritage, visual culture, museums, creative practice and artistic observation.",
    heroH1: "See Differently. Create Thoughtfully.",
    heroSupportingCopy:
      "Journeys that help students understand how ideas, culture, materials and human needs shape art and the built environment.",
    heroImage: "/Articture and Fine Art.png",
    heroImageAlt:
      "Students exploring architecture and fine arts on a learning journey",
    overview: [
      "Architecture and fine arts programmes invite students to slow down, observe carefully and interpret what they see. Buildings reveal decisions about space, climate, technology, power and culture. Artworks reveal materials, movements, identities and ideas.",
      "Our programmes can combine heritage, contemporary practice, museums, sketching, design workshops and interaction with practitioners. The purpose is not only to collect references, but to develop visual literacy, curiosity and creative confidence.",
    ],
    learningOutcomes: [
      "Strengthen observation and visual analysis.",
      "Understand relationships between design, culture and context.",
      "Explore materials, techniques and creative processes.",
      "Develop sketching, documentation and interpretation skills.",
      "Connect creative practice with wider social and environmental questions.",
    ],
    highlights: [
      "Architecture walks and guided visual interpretation.",
      "Museum, gallery and studio learning.",
      "Sketching or design exercises where permitted.",
      "Heritage and contemporary comparisons.",
      "Interaction with artists, designers or educators where available.",
    ],
    themes: [
      {
        title: "Built heritage",
        desc: "Architecture, craft, conservation and historical context.",
      },
      {
        title: "Contemporary architecture",
        desc: "Urban design, public space, sustainability and new materials.",
      },
      {
        title: "Fine arts and museums",
        desc: "Collections, movements, interpretation and curatorial thinking.",
      },
      {
        title: "Craft and making",
        desc: "Materials, process, local knowledge and design continuity.",
      },
      {
        title: "Creative practice",
        desc: "Sketching, photography, visual journals and collaborative design tasks.",
      },
    ],
    whoCanParticipate:
      "Suitable for students from middle school onwards, with depth adjusted for general learners, art students or architecture-focused groups.",
    wellbeing:
      "Museums and heritage sites may have rules on photography, sketching materials, bags and group size. Workshop tools and materials should be age-appropriate. Outdoor walks require weather, traffic and accessibility planning.",
    faqs: [
      {
        q: "Is this only for art students?",
        a: "No. Architecture and visual culture connect with history, geography, sustainability, mathematics, sociology and design.",
      },
      {
        q: "Can students sketch during visits?",
        a: "Often yes, subject to venue rules. Materials and group positioning should be planned in advance.",
      },
      {
        q: "Can the programme include professional interaction?",
        a: "Artist, architect, curator or craft-practitioner sessions may be requested, subject to availability.",
      },
      {
        q: "Can students produce a final project?",
        a: "Yes. A visual journal, design response, exhibition or presentation can extend learning after the journey.",
      },
    ],
  },
];

export const programmeBySlug = Object.fromEntries(
  programmeDetails.map((item) => [item.slug, item]),
) as Record<ProgrammeDetail["slug"], ProgrammeDetail>;
