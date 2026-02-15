
import { Member, Founder, Donor, NewsItem, StudentWork, AkshayaKosh, ExStudentBatch, ExManagementTeam, Martyr, BestPractice } from './types';
import { BookOpen, Cctv, MonitorPlay, Droplets, Trophy, Building2, BedDouble, GraduationCap } from 'lucide-react';

export const SCHOOL_NAME = "Argal Secondary School";
export const SCHOOL_ADDRESS = "Tarakhola-2, Argal, Baglung, Nepal";

// ==============================================================================
// BLOGGER API CONFIGURATION
// ==============================================================================
export const BLOGGER_CONFIG = {
  apiKey: "AIzaSyC_gk5YQ8iaP59-a4_2eSTMVN-jzGobHtE",
  blogId: "7906901514679037092"
};

// ==============================================================================
// BLOGGER LABELS
// ==============================================================================
export const BLOG_LABELS = {
  news: "News",
  notice: "Notice",
  creative: "Corner",
  fund: "Fund",
  history: "History",
  founders: "founders",
  success: "sucess",
  studentRecords: "StudentRecord",
  martyrs: "sahid",
  staff: "Staff",
  donors: "ChandaData",
  photos: "Photos",
  management: "SMC",
  exManagement: "ExManagement",
  leadership: "Massage",
  bestPractices: "Asal_Abhyas"
};

export const BLOG_URLS = {
  base: "https://argalss.blogspot.com",
  news: `https://argalss.blogspot.com/search/label/${BLOG_LABELS.news}`,
  notice: `https://argalss.blogspot.com/search/label/${BLOG_LABELS.notice}`,
  creative: `https://argalss.blogspot.com/search/label/${BLOG_LABELS.creative}`,
  fund: `https://argalss.blogspot.com/search/label/${BLOG_LABELS.fund}`,
  history: `https://argalss.blogspot.com/search/label/${BLOG_LABELS.history}`,
  founders: `https://argalss.blogspot.com/search/label/${BLOG_LABELS.founders}`,
  success: `https://argalss.blogspot.com/search/label/${BLOG_LABELS.success}`,
  donorsLabel: `https://argalss.blogspot.com/search/label/${BLOG_LABELS.donors}`,
  studentRecords: `https://argalss.blogspot.com/search/label/${BLOG_LABELS.studentRecords}`,
  staffSearch: `https://argalss.blogspot.com/search/label/${BLOG_LABELS.staff}`,
  sahid: `https://argalss.blogspot.com/search/label/${BLOG_LABELS.martyrs}`,
  photos: `https://argalss.blogspot.com/search/label/${BLOG_LABELS.photos}`,
  bestPractices: `https://argalss.blogspot.com/search/label/${BLOG_LABELS.bestPractices}`,
  
  // Specific Leadership Message Links
  chairmanMessage: "https://argalss.blogspot.com/2026/02/Massageadaksha.html",
  principalMessage: "https://argalss.blogspot.com/2026/02/massageHead.html",
  ptaMessage: "https://argalss.blogspot.com/2026/02/pta-message.html",

  // Directory Links
  staffDirectory: "https://argalss.blogspot.com/2026/02/staff.html",
  smcDirectory: "https://argalss.blogspot.com/2026/02/smc.html",
  ptaDirectory: "https://argalss.blogspot.com/2026/02/pta.html",

  // Legacy Links
  exPrincipal: "https://argalss.blogspot.com/2026/02/ex-principal.html",
  exChairman: "https://argalss.blogspot.com/2026/02/blog-post_16.html",
  exPta: "https://argalss.blogspot.com/2026/02/ex-pta.html"
};

export const TRANSLATIONS = {
  en: {
    nav: {
      home: 'Home',
      team: 'Our Team',
      history: 'History',
      founders: 'Founders',
      martyrs: 'Sahid Pana',
      news: 'News',
      creationCorner: 'Creation Corner',
      donors: 'Wall of Honor',
      akshayaKosh: 'Akshaya Kosh',
      staff: 'Principal & Staff',
      management: 'Management Committee',
      exManagement: 'Ex-Management & Tenure',
      exStudents: 'Ex-Students'
    },
    sectionTitles: {
      history: 'Our Heritage & Journey',
      founders: 'Visionary Founders',
      martyrs: 'In Eternal Memory',
      management: 'School Leadership',
      exManagement: 'Former Committees',
      staff: 'Our Faculty',
      donors: 'Wall of Honor',
      news: 'School Intelligence',
      creationCorner: 'Creative Pulse',
      akshayaKosh: 'Endowment Funds',
      exStudents: 'Alumni Directory',
      highlights: 'The Argal Advantage',
      successStories: 'Global Footprints',
      teamPreview: 'Leadership & Faculty',
      bestPractices: 'Excellence Initiatives',
      gallery: 'Visual Archive'
    },
    hero: {
      title: `Argal Secondary School`,
      subtitle: "Nurturing Wisdom, Character, and Innovation Since 2012 B.S. in the heart of Tarakhola.",
      cta: "Explore Our Updates"
    },
    footer: {
      about: "Legacy of Learning",
      contact: "Reach Out",
      connect: "Digital Presence",
      importantLinks: "Quick Links",
      rights: "All rights reserved.",
      designedBy: "Powered by"
    },
    common: {
      viewFullList: "Access Complete Wall (Live Data)",
      hideFullList: "Minimize Records",
      noticeTitle: "School Intelligence Stream",
      readMore: "Discover More"
    }
  },
  np: {
    nav: {
      home: 'गृहपृष्ठ',
      team: 'हाम्रो टोली',
      history: 'इतिहास',
      founders: 'संस्थापकहरु',
      martyrs: 'सहिद पाना',
      news: 'समाचार',
      creationCorner: 'सिर्जना कुना',
      donors: 'सम्मान स्तम्भ',
      akshayaKosh: 'अक्षय कोष',
      staff: 'प्रधानाध्यापक र कर्मचारी',
      management: 'व्यवस्थापन समिति',
      exManagement: 'पूर्व व्यवस्थापन समिति',
      exStudents: 'पूर्व विद्यार्थीहरु'
    },
    sectionTitles: {
      history: 'हाम्रो गौरवमय इतिहास',
      founders: 'हाम्रा संस्थापकहरु',
      martyrs: 'भावपूर्ण श्रद्धाञ्जली',
      management: 'विद्यालय व्यवस्थापन समिति',
      exManagement: 'पूर्व विद्यालय व्यवस्थापन समितिहरु',
      staff: 'शिक्षक तथा कर्मचारी',
      donors: 'चन्दादाता सम्मान',
      news: 'विद्यालय समाचार',
      creationCorner: 'सिर्जना कुना',
      akshayaKosh: 'अक्षय कोष विवरण',
      exStudents: 'पूर्व विद्यार्थी समूहहरु',
      highlights: 'हाम्रा विशेषताहरु',
      successStories: 'सफलताका कथाहरु',
      teamPreview: 'नेतृत्व र शिक्षकहरू',
      bestPractices: 'उत्कृष्ट अभ्यासहरू',
      gallery: 'तस्विर सङ्ग्रह'
    },
    hero: {
      title: `${SCHOOL_NAME}`,
      subtitle: "२०१२ साल देखि गुणस्तरीय शिक्षा र नैतिक मूल्य मार्फत भविष्यका पुस्तालाई सशक्त बनाउँदै।",
      cta: "ताजा अपडेटहरू"
    },
    footer: {
      about: "हाम्रो बारेमा",
      contact: "सम्पर्क विवरण",
      connect: "हामीसँग जोडिनुहोस्",
      importantLinks: "महत्वपूर्ण लिङ्कहरू",
      rights: "सर्वाधिकार सुरक्षित।",
      designedBy: "डिजाइन"
    },
    common: {
      viewFullList: "पूर्ण विवरण हेर्नुहोस्",
      hideFullList: "विवरण लुकाउनुहोस्",
      noticeTitle: "सूचना प्रवाह",
      readMore: "थप पढ्नुहोस्"
    }
  }
};

export const NOTICES: string[] = [
  "Admission Open for the academic session 2081 - Secure your future today.",
];

export const HIGHLIGHTS = [
  { icon: BookOpen, title: "Modern Library", description: "Vast collection of academic and research literature." },
  { icon: Cctv, title: "Surveillance", description: "Safety-first environment with 24/7 web camera monitoring." },
  { icon: MonitorPlay, title: "Digital Learning", description: "Smart classrooms integrated with global learning resources." },
  { icon: Droplets, title: "Pure Water", description: "Advanced multi-stage RO water filtration systems." },
  { icon: Trophy, title: "Elite Sports", description: "Comprehensive sports programs for holistic development." },
  { icon: Building2, title: "Safe School", description: "Earthquake-resistant modern architecture ensuring safety." },
  { icon: BedDouble, title: "Hostel Life", description: "Healthy organic food and residency managed by the local community." },
  { icon: GraduationCap, title: "Expert Faculty", description: "Dedicated educators with decades of combined experience." },
];

export const BEST_PRACTICES: BestPractice[] = [
  { id: 'bp1', title: 'Friday ECA', description: 'Weekly extra-curricular activities ranging from sports to literature.', iconName: 'trophy' },
  { id: 'bp2', title: 'Student Banking', description: 'Promoting financial literacy through a mini-banking system managed by students.', iconName: 'heart' },
  { id: 'bp3', title: 'Zero Waste Campus', description: 'Institutional commitment to sustainable waste management and organic gardening.', iconName: 'sun' }
];

// Managed purely through Blogger labels
export const MANAGEMENT_COMMITTEE: Member[] = [];
export const STAFF_MEMBERS: Member[] = [];
export const FOUNDERS: Founder[] = []; 
export const MARTYRS_DATA: Martyr[] = [];
export const AKSHAYA_KOSH_DATA: AkshayaKosh[] = []; 
export const NEWS_UPDATES: NewsItem[] = []; 
export const STUDENT_WORKS: StudentWork[] = []; 
export const EX_STUDENTS_DATA: ExStudentBatch[] = [];
export const EX_MANAGEMENT_DATA: ExManagementTeam[] = [];
