import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const Form = () => {
    const [activities, setActivities] = useState([]);
    const [currentActivity, setActivity] = useState('');
    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState('createActivity')

    const renderForm = () => {
        if (mode === 'createActivity')
            return <div>Create Activity Form</div>;
        if (mode === 'activities')
            return <div>
                    Activities Form
                    <DatePicker id="date" selected={date} onChange={date => setDate(date)} />
                </div>;
    }

    return <div>
        <div>
            <button onClick={() => setMode('createActivity')}>Create</button>
            <button onClick={() => setMode('activities')}>Activities</button>
        </div>
        { renderForm() }
    </div>
}

export default Form;
