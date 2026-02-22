import React, { useState } from "react";

function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you " + form.name + "! We will contact you soon.");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <div className="section">

            <h2>Contact & Registration</h2>

            <p>Email: info@summercamp2026.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Location: Bangalore, India</p>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className="btn">Submit</button>
            </form>

        </div>
    );
}

export default Contact;