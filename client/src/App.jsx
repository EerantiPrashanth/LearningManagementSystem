import React from "react";

import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ChangePassword from "./Pages/Password/ChangePassword"
import ForgotPassword from "./Pages/Password/ForgotPassword";
import ResetPassword from "./Pages/Password/ResetPassword";
import CourseList from "./Pages/Course/CourseList";
import Contact from "./Pages/Contact";
import Denied from "./Pages/Denied";
import CourseDescription from "./Pages/Course/CourseDescription";

import RequireAuth from "./Components/auth/RequireAuth";
import CreateCourse from "./Pages/Course/CreateCourse";
import Profile from "./Pages/User/Profile";
import DisplayLecture from "./Pages/Dashboard/DisplayLecture";
import AddLecture from "./Pages/Dashboard/AddLecture";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<AboutUs />} />
        <Route path="/denied" element={<AboutUs />} />

        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route
          path="/user/profile/reset-password"
          element={<ForgotPassword />}
        /> */}
        {/* <Route
          path="/user/profile/reset-password/:resetToken"
          element={<ResetPassword />}
        /> */}

        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/description" element={<CourseDescription />} />

        {/* <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}> */}
          <Route path="/course/create" element={<CreateCourse />} />
          <Route path="/course/addlecture" element={<AddLecture />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        {/* </Route> */}

        {/* <Route element={<RequireAuth allowedRoles={["USER", "ADMIN"]} />}> */}
          <Route path="/user/profile" element={<Profile />} />
          {/* <Route
            path="/user/profile/change-password"
            element={<ChangePassword />}
          /> */}
          <Route path="/course/displaylectures" element={<DisplayLecture />} />
        {/* </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
