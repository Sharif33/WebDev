import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Course from '../Course/Course';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./eduweb.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    //view all Button 
    let history = useHistory();
    const handleClick = () => {
        history.push("/services");
    }
    return (
        <div className="bg-light">
            <div className="container">
                <h3 className="text-center border-bottom p-4 fw-bold">Top Wev Development Courses</h3>
                <div className="row row-cols-2 row-cols-md-4 m-2 g-4">
                    {
                        courses.slice(0, 4).map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>
                <div className="text-center mx-auto w-50">
                    <button className="border-0 p-2 rounded bg-dark px-4 text-white fw-bold" type="button" onClick={handleClick}>
                        View all <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Courses;