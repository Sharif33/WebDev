import React from 'react';

const Course = (props) => {
    const { image, courses, instructor, title, star, rating, time, duration, price, contact } = props.course;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt="" />
                    <div className="p-4">
                        <h6 className="text-secondary">{courses}</h6>
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="fw-bold"> {star}.0 <span className="text-warning"><i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i></span> ({rating})
                            </small>
                            <button className="btn btn-outline-secondary rounded-circle" title="Add to wishlist"><i className="far fa-heart"></i></button>
                        </div>

                        <h5 className="text-dark">{title}</h5>
                        <div className="d-flex justify-content-between">
                            <p className="text-secondary"><i className="fas fa-user-alt"></i> {instructor}</p>
                            <p className="text-secondary"><i className="fas fa-phone-alt"></i> {contact}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h4 className="text-danger fw-bold">${price}</h4>
                            <button className="btn btn-outline-danger" title="Add to cart"><i className="fas fa-cart-plus"></i></button>

                        </div>

                    </div>
                    <div className="border-top">
                        <div className="d-flex justify-content-between">
                            <p className="text-secondary p-2 bg-light m-2 w-50 text-center rounded-3"><i className="far fa-calendar-alt"></i> : {duration} months</p>
                            <p className="text-white p-2 bg-danger m-2 w-50 text-center rounded-3"><i className="far fa-clock"></i> : {time} hours</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Course;