import { Router } from "express";
const router = Router();
import { getAllCourses, getLecturesByCourseId, createCourse, updateCourse, removeCourse, addLectureToCourseById, deleteCourseLecture, updateCourseLecture } from '../controllers/course.controller.js'
import { isLoggedIn, authorisedRoles, authorizeSubscriber } from "../middleware/auth.middleware.js";
import upload from "../middleware/multer.middleware.js"; 

router.route('/')
    .get(getAllCourses)
    .post(createCourse)                     //isLoggedIn, authorisedRoles('ADMIN'), upload.single("thumbnail"), 
    .delete(deleteCourseLecture)           //isLoggedIn, authorisedRoles('ADMIN'), 
    .put(updateCourseLecture)             //isLoggedIn, authorisedRoles('ADMIN'), upload.single("lecture"),

router.route('/:id')
    .get(getLecturesByCourseId)        //isLoggedIn, authorizeSubscriber, 
    .put( updateCourse)               //isLoggedIn, authorisedRoles("ADMIN"), upload.single("thumbnail"),
    .delete(removeCourse)            //isLoggedIn, authorisedRoles('ADMIN'), 
    .post( addLectureToCourseById); //isLoggedIn, authorisedRoles("ADMIN"), upload.single("lecture"),

export default router