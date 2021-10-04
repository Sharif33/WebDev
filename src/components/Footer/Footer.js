import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-primary">
                <div className="row row-cols-1 row-cols-md-3 m-2 g-4 px-4 text-white">
                    <div className="p-4">
                        <h4 className="border-bottom pb-2">Our Services</h4>
                        <ul>
                            <li>Our Team</li>
                            <li>Contact Us</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Terms and Services</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <h4 className="border-bottom pb-2">Our Services</h4>
                        <p>Eastern Housing, Dhaka, Bangladesh</p>
                        <p>info123@webdev.com</p>
                        <p>+880 123-456-789</p>
                        <p>+880 456-123-987</p>
                    </div>
                    <div className="p-4">
                        <h4 className="border-bottom pb-2">Subscribe</h4>
                        <div className="input-group input-group-lg">
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                            <span className="input-group-text btn-danger btn" id="inputGroup-sizing-lg">Subscribe</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;