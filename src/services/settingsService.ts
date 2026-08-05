import { storageService } from './storageService';

export interface SchoolSettings {
  schoolName: string;
  address: string;
  phone: string;
  email: string;
  whatsappNumber: string;
  principalName: string;
  heroTitle: string;
  heroSubtitle: string;
}

const STORAGE_KEY = 'admin_settings';

const DEFAULT_SETTINGS: SchoolSettings = {
  schoolName: 'EuroKids Gwalior',
  address: 'City Centre, Gwalior, MP',
  phone: '+91 98765 43210',
  email: 'admissions@eurokidsgwalior.com',
  whatsappNumber: '+91 83686 76500',
  principalName: 'Mrs. Harsha Gupta',
  heroTitle: 'A warm place for little minds to grow.',
  heroSubtitle: 'Admissions open for 2026'
};

export const settingsService = {
  async getSettings(): Promise<SchoolSettings> {
    const data = await storageService.get<SchoolSettings>(STORAGE_KEY);
    return data || DEFAULT_SETTINGS;
  },

  async updateSettings(settings: SchoolSettings): Promise<void> {
    await storageService.set(STORAGE_KEY, settings);
  }
};
