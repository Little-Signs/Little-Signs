// Redux Store Selectors
export const selectCourses = (state) => state.courses.courses;
export const selectCoursesLoading = (state) => state.courses.loading;
export const selectCoursesError = (state) => state.courses.error;
export const selectCurrentCourse = (state) => state.courses.currentCourse;
export const selectCoursesFilters = (state) => state.courses.filters;

// UI Selectors
export const selectTheme = (state) => state.ui.theme;
export const selectSidebarOpen = (state) => state.ui.sidebarOpen;
export const selectNotifications = (state) => state.ui.notifications;
export const selectGlobalLoading = (state) => state.ui.loading.global;
export const selectModals = (state) => state.ui.modals;
