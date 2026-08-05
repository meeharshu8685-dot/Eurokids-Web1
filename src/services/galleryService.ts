import { storageService } from './storageService';

export interface GalleryItem {
  id: string;
  url: string;
  filename: string;
  size: number;
  uploadDate: string;
}

const STORAGE_KEY = 'admin_gallery';

export const galleryService = {
  async getImages(): Promise<GalleryItem[]> {
    const images = await storageService.get<GalleryItem[]>(STORAGE_KEY);
    return images || [];
  },

  async uploadImage(file: File): Promise<GalleryItem> {
    // In a real app, you would upload the file to Firebase Storage here
    // and get the download URL. For localStorage, we read as base64.
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64Url = e.target?.result as string;
        const newItem: GalleryItem = {
          id: Date.now().toString() + Math.random().toString(36).substring(7),
          url: base64Url,
          filename: file.name,
          size: file.size,
          uploadDate: new Date().toISOString()
        };
        
        const existing = await this.getImages();
        await storageService.set(STORAGE_KEY, [newItem, ...existing]);
        resolve(newItem);
      };
      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsDataURL(file);
    });
  },

  async deleteImage(id: string): Promise<void> {
    const existing = await this.getImages();
    const updated = existing.filter(img => img.id !== id);
    await storageService.set(STORAGE_KEY, updated);
  }
};
