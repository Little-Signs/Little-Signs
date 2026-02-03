import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { coursesAPI } from '../../services/api';

// Async thunks
export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async (filters = {}, { rejectWithValue }) => {
    try {
      const response = await coursesAPI.getAll(filters);
      return response.results || response;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Failed to fetch courses'
      );
    }
  }
);

export const fetchCourseById = createAsyncThunk(
  'courses/fetchCourseById',
  async (courseId, { rejectWithValue }) => {
    try {
      const course = await coursesAPI.getById(courseId);
      return course;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Failed to fetch course'
      );
    }
  }
);

// Initial state
const initialState = {
  courses: [],
  currentCourse: null,
  loading: false,
  error: null,
  filters: {
    featured: true,
    difficulty: '',
    minAge: '',
    maxAge: '',
  },
  pagination: {
    count: 0,
    next: null,
    previous: null,
  },
};

// Slice
const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearError: (state) => {
      state.error = null;
    },
    clearCurrentCourse: (state) => {
      state.currentCourse = null;
    },
    updateCourseInList: (state, action) => {
      const { id, updates } = action.payload;
      const index = state.courses.findIndex(course => course.id === id);
      if (index !== -1) {
        state.courses[index] = { ...state.courses[index], ...updates };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch courses
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = Array.isArray(action.payload) ? action.payload : [];
        state.error = null;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch course by ID
      .addCase(fetchCourseById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCourse = action.payload;
        state.error = null;
      })
      .addCase(fetchCourseById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilters, clearError, clearCurrentCourse, updateCourseInList } = coursesSlice.actions;
export default coursesSlice.reducer;
