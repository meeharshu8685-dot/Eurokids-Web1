// Generic storage wrapper to simulate async backend calls
export const storageService = {
  async get<T>(key: string): Promise<T | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const item = localStorage.getItem(key);
        resolve(item ? JSON.parse(item) : null);
      }, 300); // Simulate network delay
    });
  },

  async set<T>(key: string, value: T): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem(key, JSON.stringify(value));
        resolve();
      }, 300);
    });
  },

  async remove(key: string): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.removeItem(key);
        resolve();
      }, 300);
    });
  }
};
