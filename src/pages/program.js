import React from "react";

function Programs() {
    return (
        <div className="section">

            <h2>Our Summer Programs</h2>

            <div className="program-card">
                <h3>⚽ Sports Training Camp</h3>
                <p><strong>Duration:</strong> 4 Weeks</p>
                <p><strong>Age Group:</strong> 10 – 18 Years</p>
                <p>
                    Includes football, cricket, basketball, fitness training, endurance
                    sessions and inter-camp tournaments.
                </p>
            </div>

            <div className="program-card">
                <h3>🎨 Creative Arts Camp</h3>
                <p><strong>Duration:</strong> 3 Weeks</p>
                <p><strong>Age Group:</strong> 8 – 16 Years</p>
                <p>
                    Art workshops, dance classes, music sessions, drama performances
                    and talent showcase events.
                </p>
            </div>

            <div className="program-card">
                <h3>🏕 Adventure & Leadership Camp</h3>
                <p><strong>Duration:</strong> 2 Weeks</p>
                <p><strong>Age Group:</strong> 12 – 18 Years</p>
                <p>
                    Trekking, night camping, obstacle challenges, teamwork games
                    and leadership skill training.
                </p>
            </div>

            <h2>Daily Schedule</h2>

            <ul className="schedule">
                <li>08:00 AM – Morning Exercise</li>
                <li>09:00 AM – Sports / Activity Sessions</li>
                <li>12:00 PM – Lunch Break</li>
                <li>01:00 PM – Creative Workshops</li>
                <li>04:00 PM – Group Activities</li>
                <li>06:00 PM – Reflection & Closing</li>
            </ul>

        </div>
    );
}

export default Programs;