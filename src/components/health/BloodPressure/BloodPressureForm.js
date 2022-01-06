import DatePicker from "react-datepicker";
import React from "react";

const BloodPressureForm = ({
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
}) => {
    return <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <DatePicker id="date" selected={diaryDate} onChange={date => setDiaryDate(date)} />
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
            onChange={(e) => setTimePeriod(e.target.value)}
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

export default BloodPressureForm;
