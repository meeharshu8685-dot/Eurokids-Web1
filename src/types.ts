export type PageView = 
  | 'home' 
  | 'about' 
  | 'programs' 
  | 'admissions' 
  | 'campus' 
  | 'activities' 
  | 'gallery' 
  | 'feedbacks'
  | 'contact';

export interface ProgramItem {
  id: string;
  name: string;
  subtitle: string;
  ageGroup: string;
  timing: string;
  teacherRatio: string;
  description: string;
  keyOutcomes: string[];
  dailyHighlights: string[];
  image: string;
  badge: string;
  annualFee: string;
  termFee: string;
}

export interface DayRoutineStep {
  time: string;
  title: string;
  description: string;
  category: 'welcome' | 'learning' | 'play' | 'nutrition' | 'creativity';
  iconName: string;
}

export interface CampusFacility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  category: 'classroom' | 'play' | 'learning' | 'safety' | 'health';
}

export interface FacultyMember {
  name: string;
  role: string;
  qualification: string;
  experience: string;
  bio: string;
  image: string;
  specialty: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  childNameAndGrade: string;
  locality: string;
  quote: string;
  avatar: string;
  rating: number;
  date: string;
}

export interface NewsEvent {
  id: string;
  title: string;
  category: 'Event' | 'Admission' | 'Celebration' | 'Workshop';
  date: string;
  excerpt: string;
  image: string;
  fullContent?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Campus' | 'Classrooms' | 'Events' | 'Sports' | 'Arts';
  image: string;
  caption: string;
}

export interface BusRoute {
  routeNumber: string;
  areaName: string;
  stops: string[];
  pickupTime: string;
  dropTime: string;
  supervisorPhone: string;
}

export interface DownloadItem {
  id: string;
  title: string;
  category: 'Calendar' | 'Circular' | 'Syllabus' | 'Forms' | 'Menu';
  fileSize: string;
  date: string;
  downloadUrl: string;
}

export interface VisitFormData {
  parentName: string;
  phone: string;
  email: string;
  childName: string;
  childAgeMonths: string;
  programInterest: string;
  preferredDate: string;
  preferredTimeSlot: string;
  notes: string;
}

export interface EnquiryFormData {
  parentName: string;
  phone: string;
  email: string;
  locality: string;
  childAgeGroup: string;
  message: string;
}
