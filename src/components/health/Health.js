import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import { BloodPressure } from "./BloodPressure";
import { FormWrapper, HealthWrapper } from "../../elements/Health/Health";

const Health = () => {
    const { user } = useContext(AuthContext);
    const [activity, setActivity] = useState("bloodPressure")

    const processActivityForm = () => {
        if (activity === "bloodPressure")
            return <BloodPressure />
    }

    return (
        <HealthWrapper>
            <h1>Health</h1>
            <FormWrapper>
                <form>
                    <label htmlFor="activity">Select Activity:</label>
                    <select name="activity" id="activity">
                        <option value="bloodPressure">Blood Pressure</option>
                    </select>
                </form>
            </FormWrapper>
            { processActivityForm() }
        </HealthWrapper>
    );
}

export default Health;
