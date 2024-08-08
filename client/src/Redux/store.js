import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./Slices/AuthSlice";
import CourseSliceReducer from "./Slices/CourseSlice";
import LectureSliceReducer from "./Slices/LectureSlice";

const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
    course: CourseSliceReducer,
    lecture: LectureSliceReducer,
  },
  devTools: true,
});

export default store;
