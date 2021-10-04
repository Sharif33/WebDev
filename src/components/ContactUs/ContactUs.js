import React from 'react';

const ContactUs = () => {
    return (
        <div className="bg-light">
            <h1>Contact Us</h1>

            <div>
                <div class="container overflow-hidden mb-5">
                    <div class="row gy-4 text-white fs-5">
                        <div class="col-6">
                            <div class="p-4 rounded-3 bg-danger"><h4>+880 123-456-789</h4><p className="text-light">Free Suporte!</p></div>
                        </div>
                        <div class="col-6">
                            <div class="p-4 rounded-3 bg-primary">Custom column padding</div>
                        </div>
                        <div class="col-6">
                            <div class="p-4 rounded-3 bg-success">Custom column padding</div>
                        </div>
                        <div class="col-6">
                            <div class="p-4 rounded-3 bg-warning">Custom column padding</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container p-3 w-50 mx-auto border rounded-3 bg-white">
                <div class="">
                    <label for="exampleFormControlInput1" class="form-label"></label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                </div>
                <div class="mb-3 ">
                    <label for="exampleFormControlInput1" class="form-label"></label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className="btn btn-danger">Send Messege</button>
            </div>
        </div>
    );
};

export default ContactUs;