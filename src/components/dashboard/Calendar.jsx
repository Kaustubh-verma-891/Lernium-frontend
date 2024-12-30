import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/Calendar.css";

export default function StyledCalendar() {
    const [value, setValue] = useState(new Date());

    return (
        <div className="flex items-center justify-center rounded-lg bg-customCream">
            <div className="bg-c shadow-lg rounded-lg p-6">
                <Calendar
                    onChange={setValue}
                    value={value}
                    className="react-calendar"
                />
            </div>
        </div>
    );
}
