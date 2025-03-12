import React from "react";
import imgCourse from "../assets/img/course-image.jpeg";
import { Calendar } from "@phosphor-icons/react";

function Courses() {
  return (
    <section className="courses">
      <h2>الدورات</h2>
      <div className="container">
        <MainCourse />

        {Array.from({ length: 9 }, (_, i) => (
          <CourseCard key={i} courseNumber={`course-${i + 1}`} />
        ))}
      </div>
    </section>
  );
}

function MainCourse() {
  return (
    <div data-aos="zoom-in-up" className="main-course">
      <div>
        <span>فئة 1</span>
        <h3>أساسيات طب الأسنان</h3>
        <div>
          <span className="material-symbols-rounded">calendar_month</span>
          <span>9 شهور</span>
        </div>
      </div>
    </div>
  );
}

function CourseCard({ courseNumber }) {
  return (
    <div className={`course ${courseNumber}`}>
      <div className="image-course">
        <img src={imgCourse} alt="دورة طب الأسنان" />
      </div>
      <div className="course-content">
        <span>فئة 1</span>
        <h4>تقنيات العلاج الجراحي في طب الأسنان</h4>
        <div>
          <span>9</span>
          <span className="material-symbols-rounded">
            <Calendar size={32} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Courses;
