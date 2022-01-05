import React from "react";

const BloodPressure = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log('form submitted')
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Sys 120...'/>
        <input type="text" placeholder='Dia 80...'/>
        <input type="text" placeholder='Pulse 60...'/>
        <button>Save</button>
    </form>
}

export default BloodPressure;
