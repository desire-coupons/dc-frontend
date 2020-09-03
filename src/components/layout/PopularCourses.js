import React from "react";

function PopularCourses() {
  return (
    <div className="popular-courses container" style={{ marginTop: "2rem" }}>
      <h3 className="text-center" style={{ color: "#2a89ee", fontSize: 40 }}>
        Popular Courses for last 7 days
      </h3>
      <div className="container">
        <ul className="popular-courses-list">
          <li>
            <a href>Python for beginners – Learn all the basics of python</a>
          </li>
          <li>
            <a href>Automate the Boring Stuff with Python Programming</a>
          </li>
          <li>
            <a href>
              Zero to Hero in Microsoft Excel: Complete Excel guide 2020
            </a>
          </li>
          <li>
            <a href>HTML &amp; CSS – Certification Course for Beginners</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PopularCourses;
