import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const coursesAPI = {
  getAll: async (filters = {}) => {
    const params = new URLSearchParams();
    
    if (filters.difficulty) {
      params.append('difficulty', filters.difficulty);
    }
    if (filters.minAge) {
      params.append('min_age', filters.minAge);
    }
    if (filters.maxAge) {
      params.append('max_age', filters.maxAge);
    }
    if (filters.featured !== undefined) {
      params.append('featured', filters.featured.toString());
    }
    
    const response = await api.get(`/courses/?${params.toString()}`);
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/courses/${id}/`);
    return response.data;
  },

  getLessons: async (courseId) => {
    const response = await api.get(`/courses/${courseId}/lessons/`);
    return response.data;
  },

  getProxyImage: async (imageUrl) => {
    const response = await api.get('/proxy-image/', {
      params: { url: imageUrl },
      responseType: 'blob'
    });
    return URL.createObjectURL(response.data);
  }
};

export const signsAPI = {
  getAll: async (filters = {}) => {
    const params = new URLSearchParams();
    
    if (filters.category) {
      params.append('category', filters.category);
    }
    if (filters.difficulty) {
      params.append('difficulty', filters.difficulty);
    }
    if (filters.search) {
      params.append('search', filters.search);
    }
    
    const response = await api.get(`/signs/?${params.toString()}`);
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/signs/${id}/`);
    return response.data;
  }
};

export const categoriesAPI = {
  getAll: async () => {
    const response = await api.get('/sign-categories/');
    return response.data;
  }
};

export const difficultyLevelsAPI = {
  getAll: async () => {
    const response = await api.get('/difficulty-levels/');
    return response.data;
  }
};

export const contactAPI = {
  submit: async (formData) => {
    const response = await api.post('/communication/contact/', formData);
    return response.data;
  }
};

export const teamAPI = {
  getAll: async () => {
    const response = await api.get('/team/');
    return response.data;
  }
};

export default api;
