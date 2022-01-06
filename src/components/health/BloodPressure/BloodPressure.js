import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import "react-datepicker/dist/react-datepicker.css";
import { SAVE_BLOOD_PRESSURE } from "../../../graphql/health";
import BloodPressureForm from "./BloodPressureForm";
import BloodPressureTable from "./BloodPressureTable";

const BloodPressure = () => {
    const [saveBloodPressure, { loading }] = useMutation(SAVE_BLOOD_PRESSURE);

    const [bloodPressure, setBloodPressure] = useState({
        sys: '',
        dia: '',
        pulse: ''
    })

    const [date, setDate] = useState(new Date())
    const [hours, setHours] = useState('10')
    const [minutes, setMinutes] = useState('00')
    const [time, setTime] = useState('am')

    const handleSubmit = e => {
        e.preventDefault();
        console.log('form submitted')

        if (!bloodPressure.sys || !bloodPressure.dia || !bloodPressure.pulse) {
            //todo: make better validation
            return;
        }

        const variables = {
            time: `${hours}:${minutes} ${time}`,
            date: `${date.toLocaleString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })}`,
            sys: bloodPressure.sys,
            dia: bloodPressure.dia,
            pulse: bloodPressure.pulse
        }

        saveBloodPressure({ variables })
            .then(res => console.log(res, 'save blood pressure res'))
            .catch(err => console.log(err, 'save blood pressure error'))
    }

    return (
        <>
            <BloodPressureTable />
            <BloodPressureForm
                {...{
                    handleSubmit,
                    date,
                    setDate,
                    hours,
                    setHours,
                    minutes,
                    setMinutes,
                    setTime,
                    bloodPressure,
                    setBloodPressure
                }}
            />
        </>
    )
}

export default BloodPressure;
