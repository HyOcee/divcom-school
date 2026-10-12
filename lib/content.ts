/**
 * All website copy lives here so it can be edited in one place.
 *
 * Anything marked PLACEHOLDER is sample text and should be replaced with
 * the school's real information before the site goes live.
 *
 * Photos: put image files in /public/images and set the matching `src`
 * (e.g. src: "/images/hero.jpg"). Any photo without a `src` shows a
 * branded placeholder instead.
 */

export type PhotoSlot = {
  src?: string;
  alt: string;
};

/**
 * PREVIEW MODE — while the site is unfinished: search engines are told not to list it,
 * and a "Preview" strip shows at the top of every page. Set to `false` at launch.
 */
export const PREVIEW_MODE = true;

export const school = {
  name: "DIVCOM Nursery & Primary School",
  shortName: "DIVCOM",
  founded: 2011,
  motto: "Moral Empowerment & Sustainability",
  address: {
    line1: "75, Efunlaruja Street",
    line2: "Ori-Okuta, Ikorodu",
    city: "Lagos State, Nigeria",
  },
  phone: "+234 708 668 7105",
  phoneHref: "tel:+2347086687105",
  whatsapp: "2347086687105",
  // Official email not ready yet. Once it is, set it here and it will appear across the site.
  email: "",
  // PLACEHOLDER — replace "#" with the school's real social media links
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
  },
  mapQuery: "75 Efunlaruja Street, Ori-Okuta, Ikorodu, Lagos, Nigeria",
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${school.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

// `children` are the sections within each page; they appear in the menu panel and the page header.
export const nav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Head Teacher's Welcome", href: "/about#welcome" },
      { label: "Our Staff", href: "/about#staff" },
      { label: "Facilities", href: "/about#facilities" },
      { label: "Achievements", href: "/about#achievements" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Class Levels", href: "/academics#levels" },
      { label: "Subjects", href: "/academics#subjects" },
      { label: "After-School Care", href: "/academics#after-school" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Apply Now", href: "/admissions#apply" },
      { label: "FAQs", href: "/admissions#faqs" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "News & Events", href: "/news", children: [{ label: "School Calendar", href: "/news#calendar" }] },
  { label: "Contact", href: "/contact", children: [{ label: "Book a Visit", href: "/contact#visit" }] },
];

export const navSections = (href: string) => nav.find((item) => item.href === href)?.children ?? [];

export const photos = {
  hero: { alt: "Smiling DIVCOM pupils in the school compound" } as PhotoSlot,
  welcome: { alt: "Pupils reading together in the library" } as PhotoSlot,
  headTeacher: { alt: "Portrait of the Head Teacher" } as PhotoSlot,
  aboutHero: { alt: "The DIVCOM school building" } as PhotoSlot,
  academicsHero: { alt: "A teacher helping pupils in class" } as PhotoSlot,
  admissionsHero: { alt: "Parents and pupils on a school tour" } as PhotoSlot,
  french: { alt: "Pupils during a French lesson" } as PhotoSlot,
  music: { alt: "Pupils playing musical instruments" } as PhotoSlot,
  afterSchool: { alt: "Pupils doing activities during after-school care" } as PhotoSlot,
  visit: { alt: "The school entrance" } as PhotoSlot,
};

// PLACEHOLDER — replace with the official mission and vision when ready
export const mission =
  "To provide a safe, loving and stimulating environment where every child is known, nurtured and inspired to reach their full potential — academically, morally and socially.";
export const vision =
  "To raise confident, God-fearing, well-rounded children who lead with integrity and make a positive difference in their communities and the world.";

export const values = [
  {
    title: "Excellence",
    text: "We set high expectations and help every child take pride in doing their very best.",
    icon: "Award",
  },
  {
    title: "Integrity",
    text: "Honesty, respect and good character are taught, modelled and celebrated every day.",
    icon: "ShieldCheck",
  },
  {
    title: "Care",
    text: "Small classes and attentive teachers mean every child is known by name and by need.",
    icon: "HeartHandshake",
  },
  {
    title: "Curiosity",
    text: "We nurture a love of learning through play, discovery, questions and creativity.",
    icon: "Sparkles",
  },
] as const;

export const stats = [
  { value: "{years}+", label: "Years nurturing young minds" },
  { value: "8", label: "Class levels, Nursery to Basic 5" }, // PLACEHOLDER count — check
  { value: "1:15", label: "Teacher-to-pupil ratio" }, // PLACEHOLDER
  { value: "100%", label: "Common Entrance success rate" }, // PLACEHOLDER
];

export const headTeacher = {
  // PLACEHOLDER
  name: "Mrs. Adebola Okonkwo",
  role: "Head Teacher",
  shortQuote:
    "Every child who walks through our gates is a gift. Our promise is to know them, love them and help them discover just how much they can achieve.",
  letter: [
    "Welcome to DIVCOM Nursery & Primary School. Since 2011, we have had the joy of partnering with families in Ikorodu and beyond to give children a strong, happy start to their education.",
    "We believe the early years are the foundation of everything. That is why our classrooms are warm and well-resourced, our teachers are caring and qualified, and our curriculum balances strong academics with creativity, character and play.",
    "From a child's first day in Nursery to their final year in Basic 5, we celebrate every milestone — the first word read, the first song performed, the first French sentence spoken with confidence.",
    "I warmly invite you to visit us, meet our team and see DIVCOM in action. We would love to welcome your family.",
  ],
};

export const staff = [
  // PLACEHOLDER — replace with real staff names, roles and photos
  { name: "Mrs. Adebola Okonkwo", role: "Head Teacher", photo: { alt: "Head Teacher" } as PhotoSlot },
  { name: "Mr. Chinedu Eze", role: "Deputy Head (Academics)", photo: { alt: "Deputy Head" } as PhotoSlot },
  { name: "Mrs. Funmilayo Adeyemi", role: "Head of Early Years", photo: { alt: "Head of Early Years" } as PhotoSlot },
  { name: "Mlle. Grace Amadi", role: "French Teacher", photo: { alt: "French Teacher" } as PhotoSlot },
  { name: "Mr. Tunde Bakare", role: "Music Director", photo: { alt: "Music Director" } as PhotoSlot },
  { name: "Mrs. Ngozi Okafor", role: "Pastoral Care Lead", photo: { alt: "Pastoral Care Lead" } as PhotoSlot },
];

export const classLevels = [
  // PLACEHOLDER ages — adjust to the school's actual admission ages
  {
    stage: "Early Years",
    name: "Nursery",
    classes: ["Nursery 1", "Nursery 2"],
    ages: "Ages 2 – 4",
    text: "A gentle, play-based start where little ones build confidence, language, early numbers and friendships in a safe and loving space.",
    tone: "pink" as const,
  },
  {
    stage: "Foundation",
    name: "Kindergarten",
    classes: ["KG"],
    ages: "Ages 4 – 5",
    text: "Structured, joyful learning that prepares children for primary school — phonics, reading, writing, number work and discovery.",
    tone: "blue" as const,
  },
  {
    stage: "Primary",
    name: "Basic 1 – 5",
    classes: ["Basic 1", "Basic 2", "Basic 3", "Basic 4", "Basic 5"],
    ages: "Ages 5 – 10",
    text: "A broad, rigorous curriculum that builds strong foundations in every subject and prepares pupils for Common Entrance and secondary school.",
    tone: "mix" as const,
  },
];

export const subjects = [
  { name: "English Language", icon: "BookOpen" },
  { name: "Mathematics", icon: "Calculator" },
  { name: "Basic Science & Technology", icon: "FlaskConical" },
  { name: "French", icon: "Languages" },
  { name: "Music", icon: "Music" },
  { name: "Computer Studies (ICT)", icon: "Monitor" },
  { name: "Social Studies", icon: "Globe2" },
  { name: "Civic Education", icon: "Landmark" },
  { name: "Cultural & Creative Arts", icon: "Palette" },
  { name: "Physical & Health Education", icon: "Dumbbell" },
  { name: "Religious Studies (CRS / IRS)", icon: "BookHeart" },
  { name: "Nigerian Language (Yoruba)", icon: "MessagesSquare" },
  { name: "Phonics & Handwriting", icon: "PenLine" },
  { name: "Verbal & Quantitative Reasoning", icon: "Brain" },
  { name: "Agricultural Science", icon: "Sprout" },
  { name: "Home Economics", icon: "CookingPot" },
] as const;

export const facilities = [
  { title: "Bright, Airy Classrooms", text: "Spacious, well-ventilated classrooms with child-friendly furniture and learning displays.", icon: "School" },
  { title: "Library & Reading Corner", text: "A growing collection of storybooks and reference books to build a lifelong love of reading.", icon: "Library" },
  { title: "ICT Lab", text: "Computers for hands-on digital literacy, typing and introductory coding lessons.", icon: "Laptop" },
  { title: "Safe Playground", text: "Secure outdoor play equipment for healthy, active and happy break times.", icon: "TreePalm" },
  { title: "Music Room", text: "Instruments and space for singing, rhythm and performance practice.", icon: "Piano" },
  { title: "School Bus Service", text: "Reliable pick-up and drop-off routes around Ikorodu with trained attendants.", icon: "Bus" },
  { title: "Sick Bay", text: "A dedicated sick bay with first-aid trained staff for pupils' health and comfort.", icon: "Stethoscope" },
  { title: "CCTV & Secure Gate", text: "CCTV monitoring and controlled access so parents have total peace of mind.", icon: "Cctv" },
] as const;

export const testimonials = [
  // PLACEHOLDER — replace with real parent testimonials (with permission)
  {
    quote:
      "My daughter started at DIVCOM in Nursery 1 and she has blossomed. The teachers genuinely care, and she comes home every day excited to tell us what she learned.",
    name: "Mrs. Folake A.",
    detail: "Parent, Basic 3",
  },
  {
    quote:
      "We were impressed by how quickly our son began reading. The phonics programme is excellent and the school communicates with parents so well.",
    name: "Mr. & Mrs. Obi",
    detail: "Parents, KG",
  },
  {
    quote:
      "DIVCOM prepared our first child brilliantly for Common Entrance. Now our second child is there too — that says it all.",
    name: "Mr. Kunle B.",
    detail: "Parent, Basic 5 & Nursery 2",
  },
  {
    quote:
      "The French and music lessons are a wonderful bonus. My son sings French songs around the house and performed at the end-of-year concert!",
    name: "Mrs. Amaka E.",
    detail: "Parent, Basic 2",
  },
];

export const achievements = [
  // PLACEHOLDER
  { year: "2025", title: "100% Common Entrance Pass", text: "Every Basic 5 pupil gained admission into their chosen secondary schools." },
  { year: "2025", title: "Ikorodu Inter-School Spelling Bee", text: "First place in the Lower Primary category." },
  { year: "2024", title: "Lagos State Mathematics Olympiad", text: "Two pupils reached the state final round." },
  { year: "2024", title: "Best Cultural Day Presentation", text: "Recognised at the zonal schools' cultural festival." },
  { year: "2023", title: "Inter-School Sports Festival", text: "Gold medals in the 4×100m relay and sack race." },
  { year: "2022", title: "Young Readers' Award", text: "Pupils completed over 2,000 books in the reading challenge." },
];

export const admissionSteps = [
  // PLACEHOLDER — adjust to the school's actual process
  { title: "Enquire", text: "Fill in the enquiry form, call or send us a WhatsApp message. We'll answer your questions and share our admissions pack." },
  { title: "Visit the School", text: "Book a tour to see our classrooms and facilities, meet our teachers and get a feel for life at DIVCOM." },
  { title: "Collect & Submit Forms", text: "Complete the application form and return it with the required documents listed below." },
  { title: "Assessment & Interaction", text: "Your child spends a relaxed session with our teachers so we can understand how best to support them." },
  { title: "Offer & Resumption", text: "Successful families receive an offer letter, complete registration and get ready for their first day!" },
];

export const ageGuide = [
  // PLACEHOLDER
  { level: "Nursery 1", age: "2 years by September" },
  { level: "Nursery 2", age: "3 years by September" },
  { level: "KG", age: "4 years by September" },
  { level: "Basic 1", age: "5 years by September" },
  { level: "Basic 2 – 5", age: "Based on age and assessment" },
];

export const requiredDocuments = [
  // PLACEHOLDER
  "Completed application form",
  "Copy of the child's birth certificate",
  "Four recent passport photographs of the child",
  "Immunisation / health record",
  "Last school report (for Basic 1 – 5 applicants)",
  "Transfer letter from previous school (where applicable)",
];

export const faqs = [
  // PLACEHOLDER
  {
    q: "When can my child start?",
    a: "Our main intake is in September, but we welcome new pupils at the start of every term, subject to space in the class.",
  },
  {
    q: "How much are the school fees?",
    a: "Please contact us directly for current fee information. We're happy to talk you through everything included and answer any questions.",
  },
  {
    q: "Do you offer after-school care?",
    a: "Yes. Our supervised after-school care gives working parents flexibility, with homework support, reading and fun activities.",
  },
  {
    q: "Is there a school bus?",
    a: "Yes, we run a school bus service on routes around Ikorodu. Contact us to check whether your area is covered.",
  },
  {
    q: "Which curriculum do you follow?",
    a: "We follow the Nigerian national curriculum, enriched with French, Music, ICT, phonics and reasoning to give children a broad, well-rounded education.",
  },
  {
    q: "Can I visit before applying?",
    a: "Absolutely — we encourage it. Send us a WhatsApp message or call to book a visit at a time that suits you.",
  },
];

export type NewsItem = {
  slug: string;
  title: string;
  date: string; // ISO date
  category: "News" | "Event" | "Achievement";
  excerpt: string;
  body: string[];
  photo: PhotoSlot;
};

export const news: NewsItem[] = [
  // PLACEHOLDER — replace with real school news
  {
    slug: "inter-house-sports-2026",
    title: "Inter-House Sports Day 2026: A Day of Colour and Courage",
    date: "2026-03-14",
    category: "Event",
    excerpt: "Pink House and Blue House battled it out in a thrilling afternoon of races, relays and cheering.",
    body: [
      "Parents, pupils and staff gathered on a bright Saturday morning for our annual Inter-House Sports Day. From the Nursery sack race to the Basic 5 relay finals, every event was full of energy and sportsmanship.",
      "After a closely fought competition, Blue House was crowned overall champion, with Pink House taking the trophy for best march past. Congratulations to every athlete who took part!",
      "A big thank you to our parents for their wonderful support and to our PE department for organising such a memorable day.",
    ],
    photo: { alt: "Pupils racing on sports day" },
  },
  {
    slug: "graduation-2026",
    title: "Celebrating Our KG and Basic 5 Graduands",
    date: "2026-07-18",
    category: "Event",
    excerpt: "Caps, gowns and proud families as we celebrated the class of 2026.",
    body: [
      "Our 2026 graduation ceremony was a joyful celebration of our KG pupils moving up to primary school and our Basic 5 pupils heading to secondary school.",
      "The programme featured songs, a French recitation, a drama presentation and the presentation of awards for academic excellence, good conduct and leadership.",
      "We are so proud of each graduand and wish them every success in the next stage of their journey.",
    ],
    photo: { alt: "Graduands in caps and gowns" },
  },
  {
    slug: "common-entrance-results",
    title: "Outstanding Common Entrance Results",
    date: "2026-06-02",
    category: "Achievement",
    excerpt: "Every Basic 5 pupil secured admission to their chosen secondary school.",
    body: [
      "We are delighted to share that all of our Basic 5 pupils passed the National Common Entrance Examination and gained admission to their preferred secondary schools.",
      "This result reflects the hard work of our pupils, the dedication of our teachers and the steady support of our parents. Well done, everyone!",
    ],
    photo: { alt: "Pupils celebrating results" },
  },
  {
    slug: "cultural-day",
    title: "Cultural Day: Celebrating the Richness of Nigeria",
    date: "2025-11-21",
    category: "Event",
    excerpt: "Pupils dressed in traditional attire, shared food and performed dances from across Nigeria.",
    body: [
      "Cultural Day was a vibrant celebration of Nigeria's diversity. Each class represented a different ethnic group, presenting traditional dress, food, songs and dances.",
      "Pupils learned greetings in Yoruba, Igbo, Hausa and other languages — and our French club even added a little international flavour!",
    ],
    photo: { alt: "Pupils in traditional Nigerian attire" },
  },
  {
    slug: "christmas-carol-concert",
    title: "Christmas Carol Concert and End-of-Year Party",
    date: "2025-12-12",
    category: "Event",
    excerpt: "Our choir and music pupils filled the hall with festive cheer.",
    body: [
      "Our music department led a beautiful carol service featuring the school choir, recorder ensemble and percussion group.",
      "The celebration ended with a visit from Father Christmas and a party for all pupils. Merry Christmas from all of us at DIVCOM!",
    ],
    photo: { alt: "School choir performing" },
  },
  {
    slug: "reading-week",
    title: "Reading Week Inspires a New Generation of Book Lovers",
    date: "2025-10-06",
    category: "News",
    excerpt: "Dress-up days, guest readers and a book fair made Reading Week a huge success.",
    body: [
      "During Reading Week, pupils came dressed as their favourite book characters, enjoyed stories from guest readers and browsed our school book fair.",
      "Thank you to all the parents who volunteered to read to our classes — the children loved it!",
    ],
    photo: { alt: "Pupils dressed as book characters" },
  },
];

export const latestNews = () => [...news].sort((a, b) => b.date.localeCompare(a.date));

export const calendar = [
  // PLACEHOLDER — replace with the official term dates
  {
    term: "First Term 2026/2027",
    items: [
      { date: "Mon 14 Sep 2026", event: "Resumption for all pupils" },
      { date: "Fri 2 Oct 2026", event: "Independence Day celebration" },
      { date: "26 – 30 Oct 2026", event: "Mid-term break" },
      { date: "Fri 20 Nov 2026", event: "Cultural Day" },
      { date: "Fri 11 Dec 2026", event: "Carol concert & end-of-term party" },
      { date: "Fri 18 Dec 2026", event: "Term ends" },
    ],
  },
  {
    term: "Second Term 2026/2027",
    items: [
      { date: "Mon 11 Jan 2027", event: "Resumption" },
      { date: "15 – 19 Feb 2027", event: "Mid-term break" },
      { date: "Sat 13 Mar 2027", event: "Inter-House Sports Day" },
      { date: "Fri 2 Apr 2027", event: "Term ends" },
    ],
  },
  {
    term: "Third Term 2026/2027",
    items: [
      { date: "Mon 26 Apr 2027", event: "Resumption" },
      { date: "Mon 27 May 2027", event: "Children's Day celebration" },
      { date: "31 May – 4 Jun 2027", event: "Mid-term break" },
      { date: "Sat 17 Jul 2027", event: "Graduation & prize-giving day" },
      { date: "Fri 23 Jul 2027", event: "Term ends" },
    ],
  },
];

export const galleryCategories = ["All", "Classroom", "Events", "Sports", "Arts & Music", "Facilities"] as const;

export const gallery: { category: Exclude<(typeof galleryCategories)[number], "All">; photo: PhotoSlot }[] = [
  // Add photos here: { category: "Events", photo: { src: "/images/gallery/xyz.jpg", alt: "..." } }
  { category: "Classroom", photo: { alt: "Nursery pupils at a learning table" } },
  { category: "Events", photo: { alt: "Graduation day" } },
  { category: "Sports", photo: { alt: "Relay race on sports day" } },
  { category: "Arts & Music", photo: { alt: "Pupils playing keyboard" } },
  { category: "Facilities", photo: { alt: "The school library" } },
  { category: "Classroom", photo: { alt: "Basic 3 science experiment" } },
  { category: "Events", photo: { alt: "Cultural Day parade" } },
  { category: "Arts & Music", photo: { alt: "School choir" } },
  { category: "Facilities", photo: { alt: "ICT lab" } },
  { category: "Sports", photo: { alt: "March past by Pink House" } },
  { category: "Classroom", photo: { alt: "French lesson" } },
  { category: "Events", photo: { alt: "Christmas carol concert" } },
  { category: "Facilities", photo: { alt: "Playground" } },
  { category: "Arts & Music", photo: { alt: "Art and craft display" } },
  { category: "Classroom", photo: { alt: "KG reading circle" } },
  { category: "Sports", photo: { alt: "Football practice" } },
];

export const coCurricular = [
  "Choir & Recorder Club",
  "French Club",
  "Coding & Robotics Club",
  "Art & Craft Club",
  "Taekwondo",
  "Debate & Public Speaking",
  "Football & Athletics",
  "Cookery Club",
];
