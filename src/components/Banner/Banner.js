import React from 'react';
import { useHistory } from 'react-router';
import './Bannar.css'


const Banner = () => {
    let history = useHistory();
    const handleClick = () => {
        history.push("/services");
    }
    return (
        <div className="background">
            <div className="text-center pt-3">
                <h1 className="font-web fw-bold text-warning"> <span className=" border-bottom border-info">Web</span><span className="text-info border-top  border-warning mt-2">Dev</span></h1>
                <small className="text-info">To increase your Web Development Skills.</small>
            </div>
            <div className="text-center text-white p-5">
                <div className="p-4">
                    <h1 className="fw-bold">Find The Best Trainers and Build Your Future</h1>
                    <small>Each aspect of creating websites and applications entails a unique set of skills. WebDev offers a host of courses to bring you up to speed on modern front-end, back-end, and fullstack web development practices and skills.</small>
                </div>
                <div className="d-flex justify-content-center p-4">
                    <button className="btn btn-outline-light p-2 w-25 rounded-pill fs-4 m-3 fw-bold" type="button" onClick={handleClick}>Quick View <i className="far fa-eye"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;