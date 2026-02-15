export interface Member {
  id: string;
  name: string;
  designation: string;
  image: string;
  link?: string; // URL to the blog post/bio
}

export interface Founder {
  id: string;
  name: string;
  history: string;
  image: string;
  link?: string;
}

export interface Donor {
  id: string;
  name: string;
  address: string;
  amount: string;
  image?: string; // Added image for Top 10 donors
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
}

export interface StudentWork {
  id: string;
  studentName: string;
  class: string;
  title: string;
  content: string; 
  type: 'poem' | 'essay' | 'art';
}

export interface AkshayaKosh {
  id: string;
  fundName: string;
  founderName: string;
  amount: string;
  purpose?: string;
}

export interface ExStudentBatch {
  id: string;
  batchYear: string; 
  sheetLink?: string; // Link to the specific batch Google Sheet
  students: string[];
}

export interface ExManagementTeam {
  id: string;
  tenure: string; 
  members: Member[];
}

export interface Martyr {
  id: string;
  name: string;
  designation: string;
  dateOfMartyrdom: string;
  description: string;
  image: string;
  link?: string;
}

export interface BestPractice {
  id: string;
  title: string;
  description: string;
  iconName: 'sun' | 'flask' | 'trophy' | 'users' | 'heart'; 
}

export interface BlogPost {
  id: string;
  title: string;
  published: string;
  content: string;
  summary: string;
  link: string;
  thumbnail?: string;
  author: string;
}