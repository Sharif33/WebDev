import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./eduweb.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div className="container">
            <h1 className="text-center">Top Wev Development Courses</h1>
            <div className="row row-cols-2 row-cols-md-4 m-2 g-4">
                {
                    courses.slice(0, 4).map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;