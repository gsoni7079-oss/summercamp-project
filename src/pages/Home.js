import React from "react";

function Home() {
    return (
        <div>

            <section className="hero">
                <h1>Welcome to The Ultimate Summer Adventure</h1>
                <p>
                    Experience fun, learning, leadership and lifelong friendships.
                    Join the most exciting summer camp of 2026!
                </p>
                <button className="btn">Enroll Now</button>
            </section>

            <section className="section">
                <h2>About Our Camp</h2>
                <p>
                    Our Summer Camp is designed to help children and teenagers develop
                    physical strength, creativity, leadership skills, and teamwork.
                    With expert mentors and safe environment, we ensure growth and fun together.
                </p>
            </section>

            <section className="features">
                <div className="feature-card">
                    <h3>🏕 Outdoor Adventures</h3>
                    <p>Trekking, camping, survival skills and nature exploration.</p>
                </div>

                <div className="feature-card">
                    <h3>⚽ Sports Excellence</h3>
                    <p>Professional coaching in football, cricket, basketball and more.</p>
                </div>

                <div className="feature-card">
                    <h3>🎨 Creativity Boost</h3>
                    <p>Music, dance, art, drama and personality development workshops.</p>
                </div>
            </section>

            <section className="section">
                <h2>Why Choose Us?</h2>
                <ul className="why-list">
                    <li>✔ Certified Coaches & Trainers</li>
                    <li>✔ Safe & Secure Environment</li>
                    <li>✔ Modern Sports Facilities</li>
                    <li>✔ Leadership Development Programs</li>
                    <li>✔ Fun + Learning Combination</li>
                </ul>
            </section>

        </div>
    );
}

export default Home;