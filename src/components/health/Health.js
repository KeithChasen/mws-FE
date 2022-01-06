import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import { BloodPressure } from "./BloodPressure";

const Health = () => {
    const { user } = useContext(AuthContext);
    const [activity, setActivity] = useState("bloodPressure")

    const processActivityForm = () => {
        if (activity === "bloodPressure")
            return <BloodPressure />
    }

    return (
        <div>
            <h1>Health</h1>
            <div>Table</div>
            <div>
                Form
                <form>
                    <select name="activity" id="activity">
                        <option value="bloodPressure">Blood Pressure</option>
                    </select>
                </form>
                { processActivityForm() }
            </div>
        </div>
    );
}

export default Health;
