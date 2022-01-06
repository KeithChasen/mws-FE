import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { SAVE_BLOOD_PRESSURE } from "../../../graphql/health";

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
            .catch(err => console.log(
                err.graphQLErrors,
                // err.graphQLErrors[0].extensions.errors,
                'save blood pressure error'
            ))
    }

    console.log(
        bloodPressure,
        `${date.toLocaleString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' })}`,
        `${hours}:${minutes} ${time}`
    );

    return <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <DatePicker id="date" selected={date} onChange={date => setDate(date)} />
        <label htmlFor="time">Time:</label>

        <select
            name="hours"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
        >
            <option value="1">01</option>
            <option value="2">02</option>
            <option value="3">03</option>
            <option value="4">04</option>
            <option value="5">05</option>
            <option value="6">06</option>
            <option value="7">07</option>
            <option value="8">08</option>
            <option value="9">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
        </select>

        <select
            name="minutes"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
        >
            <option value="0">00</option>
            <option value="5">05</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="55">55</option>
        </select>

        <select
            name="time"
            onChange={(e) => setTime(e.target.value)}
        >
            <option value="am">AM</option>
            <option value="pm">PM</option>
        </select>

        <label htmlFor="sys">Sys:</label>
        <input
            type="text"
            id="sys"
            name="sys"
            placeholder='Sys 120...'
            value={bloodPressure.sys}
            onChange={e => setBloodPressure({...bloodPressure, [e.target.name] : e.target.value})}/>
        <label htmlFor="dia">Dia:</label>
        <input
            type="text"
            id="dia"
            name="dia"
            placeholder='Dia 80...'
            value={bloodPressure.dia}
            onChange={e => setBloodPressure({...bloodPressure, [e.target.name] : e.target.value })}/>
        <label htmlFor="pulse">Pulse:</label>
        <input
            type="text"
            id="pulse"
            name="pulse"
            placeholder='Pulse 60...'
            value={bloodPressure.pulse}
            onChange={e => setBloodPressure({...bloodPressure, [e.target.name] : e.target.value })}/>
        <button>Save</button>
    </form>
}

export default BloodPressure;
