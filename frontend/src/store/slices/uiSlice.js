import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
  sidebarOpen: false,
  notifications: [],
  loading: {
    global: false,
    courses: false,
    auth: false,
  },
  modals: {
    courseDetail: false,
    enrollment: false,
    error: false,
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload;
    },
    setGlobalLoading: (state, action) => {
      state.loading.global = action.payload;
    },
    setCoursesLoading: (state, action) => {
      state.loading.courses = action.payload;
    },
    setAuthLoading: (state, action) => {
      state.loading.auth = action.payload;
    },
    openModal: (state, action) => {
      state.modals[action.payload] = true;
    },
    closeModal: (state, action) => {
      state.modals[action.payload] = false;
    },
    addNotification: (state, action) => {
      const notification = {
        id: Date.now(),
        type: 'info',
        ...action.payload,
      };
      state.notifications.push(notification);
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        notification => notification.id !== action.payload
      );
    },
    clearNotifications: (state) => {
      state.notifications = [];
    },
  },
});

export const {
  setTheme,
  toggleSidebar,
  setSidebarOpen,
  setGlobalLoading,
  setCoursesLoading,
  setAuthLoading,
  openModal,
  closeModal,
  addNotification,
  removeNotification,
  clearNotifications,
} = uiSlice.actions;

export default uiSlice.reducer;
