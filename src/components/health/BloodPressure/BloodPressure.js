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

    const [diaryDate, setDiaryDate] = useState(new Date())
    const [hours, setHours] = useState('10')
    const [minutes, setMinutes] = useState('00')
    const [timePeriod, setTimePeriod] = useState('am')

    const handleSubmit = e => {
        e.preventDefault();

        if (!bloodPressure.sys || !bloodPressure.dia || !bloodPressure.pulse) {
            //todo: make better validation
            return;
        }

        const { sys, dia, pulse } = bloodPressure;
        const time = `${hours}:${minutes}`;
        const date = `${diaryDate.toLocaleString(
            'en-US', 
            { 
                day: '2-digit',
                month: '2-digit', 
                year: 'numeric' 
            })
        }`;

        const variables = {
            time,
            timePeriod,
            date,
            sys,
            dia,
            pulse
        }

        saveBloodPressure({ variables })
            .then(res => {
              console.log(res, 'save blood pressure response')
            })
            .catch(err => console.log(err, 'save blood pressure error'))
    }

    return (
        <>
            <BloodPressureTable />
            <BloodPressureForm
                {...{
                    handleSubmit,
                    diaryDate,
                    setDiaryDate,
                    hours,
                    setHours,
                    minutes,
                    setMinutes,
                    setTimePeriod,
                    bloodPressure,
                    setBloodPressure
                }}
            />
        </>
    )
}

export default BloodPressure;
