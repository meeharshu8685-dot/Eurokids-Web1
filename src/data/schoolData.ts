import { 
  ProgramItem, 
  DayRoutineStep, 
  CampusFacility, 
  FacultyMember, 
  Testimonial, 
  NewsEvent, 
  GalleryImage, 
  BusRoute, 
  DownloadItem 
} from '../types';

export const SCHOOL_INFO = {
  name: "School Name",
  tagline: "A happy place where little minds grow.",
  address: "School Address",
  phone: "Phone Number",
  altPhone: "Alternative Phone",
  email: "Email Address",
  whatsapp: "WhatsApp Number",
  officeHours: "Office Timings",
  established: 2018,
  city: "City, State",
  mapsUrl: "https://maps.google.com",
  mapCoordinates: { lat: 26.2183, lng: 78.1828 },
  stats: [
    { label: "Experiential Learning", value: "Curriculum" },
    { label: "Campus Safety", value: "Premium" },
    { label: "Community", value: "Engaged" },
    { label: "Environment", value: "Eco-Friendly" },
  ]
};

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: "playgroup",
    name: "Playgroup",
    subtitle: "A gentle introduction to learning.",
    ageGroup: "Age Group Placeholder",
    timing: "Program Timing Placeholder",
    teacherRatio: "Low student-teacher ratio",
    description: "Our Playgroup environment is crafted as an extension of home — calm, tactile, and rich in natural materials. Toddlers explore sensory bins, soft movement spaces, music, and language immersion that gently builds confidence and emotional security.",
    keyOutcomes: [
      "Sensory-motor coordination through natural textures",
      "Early vocabulary building and rhyming fluency",
      "Cooperative play and gentle emotional regulation",
      "Gross motor milestones via soft obstacle courses"
    ],
    dailyHighlights: [
      "Sensory Exploration Corner",
      "Circle Time & Rhyme Symphony",
      "Mess-free Finger Painting",
      "Organic Fruit & Snack Break"
    ],
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
    badge: "First Steps",
    annualFee: "",
    termFee: ""
  },
  {
    id: "nursery",
    name: "Nursery",
    subtitle: "Unlocking Curiosity & Foundational Language",
    ageGroup: "Age Group Placeholder",
    timing: "Program Timing Placeholder",
    teacherRatio: "Low student-teacher ratio",
    description: "Nursery children engage in structured play, phonics foundations, inquiry-based storytelling, and mathematical sorting. Through Reggio Emilia inspired provocation tables, children lead their own learning journeys with guided mentorship.",
    keyOutcomes: [
      "Jolly Phonics foundation & pre-writing stroke mastery",
      "Number sense, shapes, and spatial reasoning",
      "Self-help skills including dining etiquette & tidying",
      "Nature investigation in our organic garden"
    ],
    dailyHighlights: [
      "Morning Mindfulness & Yoga Stretch",
      "Interactive Storytelling Nook",
      "Mathematical Sorting & Blocks",
      "Outdoor Mud Kitchen & Gardening"
    ],
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
    badge: "Exploration",
    annualFee: "",
    termFee: ""
  },
  {
    id: "junior-kg",
    name: "Junior KG",
    subtitle: "Igniting Creative Expression & Structured Logic",
    ageGroup: "Age Group Placeholder",
    timing: "Program Timing Placeholder",
    teacherRatio: "Low student-teacher ratio",
    description: "Junior KG introduces children to structured literacy, bilingual expression, hands-on scientific experimentation, and early numeracy. Children work in small collaborative groups to solve real-world problems through hands-on projects.",
    keyOutcomes: [
      "Blended phonics decoding & early three-letter reading",
      "Addition fundamentals & quantitative comparison",
      "Introductory STEM experiments (Sink/Float, Plant life cycle)",
      "Bilingual conversational fluency in English & Hindi"
    ],
    dailyHighlights: [
      "Junior STEM Lab Experiments",
      "Guided Journaling & Creative Drawing",
      "Rhythm, Percussion & Movement Studio",
      "Outdoor Athletics & Balance Track"
    ],
    image: "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=1200&auto=format&fit=crop",
    badge: "Creative Logic",
    annualFee: "",
    termFee: ""
  },
  {
    id: "senior-kg",
    name: "Senior KG",
    subtitle: "Empowering Independent Thinkers for Grade 1 Readiness",
    ageGroup: "Age Group Placeholder",
    timing: "Program Timing Placeholder",
    teacherRatio: "Low student-teacher ratio",
    description: "Senior KG prepares children for seamless transition into top CBSE, ICSE, and IB schools. Focus areas include fluent sentence reading, mathematical problem-solving, expressive public speaking, and digital literacy safety.",
    keyOutcomes: [
      "Fluent storybook reading & creative sentence composition",
      "Double-digit numeracy, pattern logic & time concepts",
      "Confidence in stage presentation & show-and-tell",
      "Critical thinking through inquiry-based research projects"
    ],
    dailyHighlights: [
      "Public Speaking & Drama Workshop",
      "Math Manipulatives & Logic Puzzles",
      "Art & Clay Studio Creation",
      "Graduation Capstone Project Prep"
    ],
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
    badge: "Grade 1 Ready",
    annualFee: "",
    termFee: ""
  },
  {
    id: "daycare",
    name: "Extended Daycare & Enrichment",
    subtitle: "A Safe, Warm Home Away from Home",
    ageGroup: "Age Group Placeholder",
    timing: "Program Timing Placeholder",
    teacherRatio: "Low student-teacher ratio",
    description: "Designed for working parents seeking an uncompromising care environment. Includes chef-prepared hot organic lunch, peaceful sleeping nooks with climate control, homework guidance, and evening hobby workshops.",
    keyOutcomes: [
      "Balanced rest cycles in peaceful, sanitized sleeping suites",
      "Supervised homework and reading time",
      "Enrichment activities: Chess, Karate, Classical Dance, Pottery",
      "Hot, nutritious, nutritionist-approved evening snacks"
    ],
    dailyHighlights: [
      "Hot Organic Lunch & Table Manner Coaching",
      "Peaceful Nap Hour in Soundproof Suite",
      "Evening Hobby Class Rotations",
      "Supervised Play & Story Circle"
    ],
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    badge: "Working Parent Care",
    annualFee: "",
    termFee: ""
  }
];

export const DAY_ROUTINE: DayRoutineStep[] = [
  {
    time: "Time Placeholder",
    title: "Warm Welcome",
    description: "Children are greeted individually by teachers with warm smiles, temperature checks, and gentle hand sanitization before entering their cozy classrooms.",
    category: "welcome",
    iconName: "Sun"
  },
  {
    time: "Time Placeholder",
    title: "Morning Circle & Mindfulness",
    description: "Greeting songs, calendar updates, weather station check, and gentle breathing exercises to ground focus for the day.",
    category: "learning",
    iconName: "Users"
  },
  {
    time: "Time Placeholder",
    title: "Guided Phonics & Math Learning",
    description: "Small group rotations utilizing tactile Montessori materials, letter tracing cards, and counting blocks with direct teacher feedback.",
    category: "learning",
    iconName: "BookOpen"
  },
  {
    time: "Time Placeholder",
    title: "Organic Snack & Social Etiquette",
    description: "Fresh seasonal fruits, dry fruits, and warm milk served in an elegant dining nook, teaching independence and polite table manners.",
    category: "nutrition",
    iconName: "Coffee"
  },
  {
    time: "Time Placeholder",
    title: "Outdoor Play & Green Exploration",
    description: "Rubberized play turf, sensory sand pits, splash streams, and cycling tracks designed for gross-motor freedom under close supervision.",
    category: "play",
    iconName: "Trees"
  },
  {
    time: "Time Placeholder",
    title: "Creative Arts, Music & STEM Lab",
    description: "Expressive sessions alternating daily between clay modeling, pottery, percussion rhythm, dramatic play, or junior scientific experiments.",
    category: "creativity",
    iconName: "Palette"
  },
  {
    time: "Time Placeholder",
    title: "Storytelling, Reflection & Departure",
    description: "Cozy carpet story hour, personal reflection on daily achievements, packing bags independently, and safe RFID pick-up.",
    category: "welcome",
    iconName: "Heart"
  }
];

export const FACILITIES: CampusFacility[] = [
  {
    id: "smart-classrooms",
    title: "Architectural Smart Classrooms",
    subtitle: "Abundant Natural Daylight & Eco-Friendly Woods",
    description: "Designed with non-toxic birchwood furniture, low-level open shelving, acoustic insulation, interactive smart displays, and soft warm ambient lighting.",
    image: "https://images.unsplash.com/photo-1503454537195-1dc534b36f61?q=80&w=1200&auto=format&fit=crop",
    features: ["Child-safe rounded edges", "Air purifying plants", "HEPA air filtration", "Ergonomic seating"],
    category: "classroom"
  },
  {
    id: "outdoor-play",
    title: "Outdoor Adventure & Nature Trails",
    subtitle: "Zero-Injury Soft Flooring & Organic Nature Trails",
    description: "Features European-standard non-toxic soft rubber flooring, timber climbing frames, sand exploration table, and a mini splash pad for summer fun.",
    image: "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=1200&auto=format&fit=crop",
    features: ["Impact-absorbing EPDM flooring", "Shaded canopy play", "Organic herbal garden", "Mini tricycle track"],
    category: "play"
  },
  {
    id: "sensory-library",
    title: "The Wonder Nook Library",
    subtitle: "A vast collection of children's literature",
    description: "A serene reading sanctuary featuring plush floor pillows, treehouse reading lofts, picture audiobooks, and touch-and-feel tactile encyclopedias.",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=1200&auto=format&fit=crop",
    features: ["International picture books", "Bilingual storytelling corner", "Audiobook listening pods", "Quiet reflection space"],
    category: "learning"
  },
  {
    id: "security-tech",
    title: "Comprehensive Security Systems",
    subtitle: "Ensuring child safety with modern technology",
    description: "Equipped with High-Definition CCTV cameras, RFID biometric gates, 24/7 armed security personnel, and strict visitor policies.",
    image: "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=1200&auto=format&fit=crop",
    features: ["Secure campus perimeter", "RFID student attendance tags", "Background-verified staff", "Panic alarm system"],
    category: "safety"
  },
  {
    id: "nutrition-dining",
    title: "Organic Kitchen & Dining Pavilion",
    subtitle: "Nutritionist-Designed Meals Freshly Prepared Daily",
    description: "Zero refined sugar, zero preservatives. Organic whole grains, farm-fresh milk, seasonal fruits, and customized meal plans for dietary allergies.",
    image: "https://images.unsplash.com/photo-1503454537195-1dc534b36f61?q=80&w=1200&auto=format&fit=crop",
    features: ["100% In-house organic kitchen", "Pediatric nutritionist approved", "Allergy management protocols", "Filtered RO water stations"],
    category: "health"
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    name: "Founder Name Placeholder",
    role: "Founder & Director of Pedagogy",
    qualification: "Qualifications Placeholder",
    experience: "Experience Placeholder",
    bio: "Passionate about creating environments where children retain their innate wonder. Dedicated to exceptional early brain development frameworks.",
    image: "https://images.unsplash.com/photo-1503454537195-1dc534b36f61?q=80&w=1200&auto=format&fit=crop",
    specialty: "Curriculum Design & Child Brain Mapping"
  },
  {
    name: "Principal Name Placeholder",
    role: "Principal & Head of School",
    qualification: "Qualifications Placeholder",
    experience: "Experience Placeholder",
    bio: "Specializes in emotional intelligence in early years, ensuring every child feels valued, safe, and encouraged to express themselves freely.",
    image: "https://images.unsplash.com/photo-1503454537195-1dc534b36f61?q=80&w=1200&auto=format&fit=crop",
    specialty: "Montessori Methodology & Emotional Safety"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    parentName: "Parent Name Placeholder",
    childNameAndGrade: "Parents of Child (Senior KG)",
    locality: "Locality Placeholder",
    quote: "This school is beautifully designed and maintains a very calm, nurturing environment. The teachers are incredible and our child has grown so confident. Highly recommend for any parent looking for a premium experience.",
    avatar: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop",
    rating: 5,
    date: "Date Placeholder"
  },
  {
    id: "t2",
    parentName: "Parent Name Placeholder",
    childNameAndGrade: "Parents of Child (Nursery)",
    locality: "Locality Placeholder",
    quote: "The focus on organic meals, natural wooden toys, and personalized attention makes this the best decision we made for our daughter's early years.",
    avatar: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
    rating: 5,
    date: "Date Placeholder"
  },
  {
    id: "t3",
    parentName: "Parent Name Placeholder",
    childNameAndGrade: "Parents of Child (Playgroup)",
    locality: "Locality Placeholder",
    quote: "The daycare facility is a godsend for working professionals. They provide a safe, loving environment with engaging activities. The transport bus is extremely reliable.",
    avatar: "https://images.unsplash.com/photo-1587691592099-24045742c181?q=80&w=1200&auto=format&fit=crop",
    rating: 5,
    date: "Date Placeholder"
  }
];

export const LATEST_NEWS: NewsEvent[] = [
  {
    id: "news-1",
    title: "News Event Placeholder 1",
    category: "Admission",
    date: "Date Placeholder",
    excerpt: "Event excerpt placeholder. Book a guided campus visit with our pedagogy experts.",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "news-2",
    title: "News Event Placeholder 2",
    category: "Event",
    date: "Date Placeholder",
    excerpt: "Event excerpt placeholder describing recent creative activities.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "news-3",
    title: "News Event Placeholder 3",
    category: "Celebration",
    date: "Date Placeholder",
    excerpt: "Event excerpt placeholder highlighting community engagement and cultural celebrations.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1200&auto=format&fit=crop"
  }
];

export const BUS_ROUTES_GWALIOR: BusRoute[] = [
  {
    routeNumber: "Route 1",
    areaName: "Area Name Placeholder",
    stops: ["Stop 1", "Stop 2", "Stop 3"],
    pickupTime: "Pickup Time",
    dropTime: "Drop Time",
    supervisorPhone: "Phone Placeholder"
  },
  {
    routeNumber: "Route 2",
    areaName: "Area Name Placeholder",
    stops: ["Stop 1", "Stop 2", "Stop 3"],
    pickupTime: "Pickup Time",
    dropTime: "Drop Time",
    supervisorPhone: "Phone Placeholder"
  }
];

export const DOWNLOADS_LIST: DownloadItem[] = [
  {
    id: "d1",
    title: "Academic Calendar Placeholder",
    category: "Calendar",
    fileSize: "1.4 MB",
    date: "Date Placeholder",
    downloadUrl: "#"
  },
  {
    id: "d2",
    title: "School Prospectus Placeholder",
    category: "Circular",
    fileSize: "3.2 MB",
    date: "Date Placeholder",
    downloadUrl: "#"
  }
];

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: "g1",
    title: "Architectural Exterior",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1503454537195-1dc534b36f61?q=80&w=1200&auto=format&fit=crop",
    caption: "Designed with natural birchwood and beautiful outdoor spaces."
  },
  {
    id: "g2",
    title: "Montessori Tactile Discovery",
    category: "Classrooms",
    image: "https://images.unsplash.com/photo-1503454537195-1dc534b36f61?q=80&w=1200&auto=format&fit=crop",
    caption: "Children engaging in self-directed sensory exploration with natural materials."
  },
  {
    id: "g3",
    title: "STEM & Science Exploration",
    category: "Events",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200&auto=format&fit=crop",
    caption: "Hands-on experiments with guided mentorship."
  },
  {
    id: "g4",
    title: "Storytelling Nook",
    category: "Classrooms",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=1200&auto=format&fit=crop",
    caption: "Quiet cozy carpet time encouraging a lifelong love for books and imagination."
  }
];

export const ADMISSION_FAQS = [
  {
    question: "What is the entry age criteria for Playgroup and Nursery?",
    answer: "Please contact our admissions office to discuss the ideal age and program fit for your child. We conduct gentle, informal interactions to ensure readiness."
  },
  {
    question: "How does the school ensure child safety and staff background verification?",
    answer: "All teaching faculty and support staff undergo mandatory verification and background checks. Our campus features secure gate control, constant supervision, and pediatric first-aid certified staff."
  },
  {
    question: "What is the fee payment schedule and are there any hidden charges?",
    answer: "We follow a transparent policy. Please contact our admissions desk to request the complete fee structure and details on our inclusions."
  },
  {
    question: "What food is provided at the school and how are dietary allergies handled?",
    answer: "We provide high-quality, nutritious mid-morning snacks prepared fresh in our sanitized kitchen. Customized alternatives are prepared for children with specific dietary sensitivities."
  },
  {
    question: "Do you offer school bus transport?",
    answer: "Yes, our transport system covers major surrounding areas. Each vehicle is equipped with safety measures and dedicated supervision."
  }
];

