import { storageService } from './storageService';

export interface Feedback {
  id: string;
  parentName: string;
  phone: string;
  email: string;
  rating: number;
  feedback: string;
  date: string;
}

const STORAGE_KEY = 'admin_feedback';

const INITIAL_DATA: Feedback[] = [
  {
    id: 'f1',
    parentName: 'Neha Sharma',
    phone: '9876543210',
    email: 'neha@example.com',
    rating: 5,
    feedback: 'The school is beautifully run and feels incredibly warm and secure.',
    date: new Date(Date.now() - 86400000 * 2).toISOString()
  },
  {
    id: 'f2',
    parentName: 'Rajesh Dixit',
    phone: '8765432109',
    email: 'rajesh@example.com',
    rating: 4,
    feedback: 'We love the focus on simple, healthy snacks and the cozy story library.',
    date: new Date(Date.now() - 86400000 * 5).toISOString()
  }
];

export const feedbackService = {
  async getAll(): Promise<Feedback[]> {
    let data = await storageService.get<Feedback[]>(STORAGE_KEY);
    if (!data) {
      await storageService.set(STORAGE_KEY, INITIAL_DATA);
      data = INITIAL_DATA;
    }
    return data;
  },

  async delete(id: string): Promise<void> {
    const existing = await this.getAll();
    const updated = existing.filter(f => f.id !== id);
    await storageService.set(STORAGE_KEY, updated);
  }
};
