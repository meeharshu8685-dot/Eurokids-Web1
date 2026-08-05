import { storageService } from './storageService';

export interface Enquiry {
  id: string;
  parentName: string;
  studentName: string;
  className: string;
  phone: string;
  email: string;
  message: string;
  date: string;
}

const STORAGE_KEY = 'admin_enquiries';

const INITIAL_DATA: Enquiry[] = [
  {
    id: 'e1',
    parentName: 'Rahul Verma',
    studentName: 'Ayaan Verma',
    className: 'Playgroup',
    phone: '9123456780',
    email: 'rahul@example.com',
    message: 'Looking for admission for my 2 year old.',
    date: new Date(Date.now() - 86400000 * 1).toISOString()
  }
];

export const enquiryService = {
  async getAll(): Promise<Enquiry[]> {
    let data = await storageService.get<Enquiry[]>(STORAGE_KEY);
    if (!data) {
      await storageService.set(STORAGE_KEY, INITIAL_DATA);
      data = INITIAL_DATA;
    }
    return data;
  },

  async delete(id: string): Promise<void> {
    const existing = await this.getAll();
    const updated = existing.filter(e => e.id !== id);
    await storageService.set(STORAGE_KEY, updated);
  }
};
