const BloodPressureData = ({ health }) => {
    const bloodPressure = health.map(healthRecord => ({
        date: healthRecord.date,
        bloodPressure: healthRecord.activities.bloodPressure
    }));

    return <>
        {
            bloodPressure.map((bloodPressureItem, index) => {
                if (bloodPressureItem.bloodPressure?.length) {

                    let morningBloodPressure = [];
                    let eveningBloodPressure = [];

                    bloodPressureItem.bloodPressure.map(bloodPressureRecord => {
                        if (bloodPressureRecord.timePeriod === 'am')
                            morningBloodPressure = [...morningBloodPressure, bloodPressureRecord];

                        if (bloodPressureRecord.timePeriod === 'pm')
                            eveningBloodPressure = [...eveningBloodPressure, bloodPressureRecord];
                    })

                    morningBloodPressure = addEmptyItemToBPArray(morningBloodPressure);
                    eveningBloodPressure = addEmptyItemToBPArray(eveningBloodPressure);

                    const background = index % 2 === 0 ? 'var(--app-grey)' : null;

                    return (
                        <tr className="bloodPressureRow" style={{ background }}>
                            <td className="bpDate">{bloodPressureItem.date}</td>
                            <td>
                                <table className='bpDateTable'>
                                    <tr className='bpDateTableRow'>
                                        <th>Morning</th>
                                        { processRowByTimePeriod(morningBloodPressure) }
                                    </tr>
                                    <tr>
                                        <th>Evening</th>
                                        { processRowByTimePeriod(eveningBloodPressure) }
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    )
                }
            })
        }
    </>
}

const processRowByTimePeriod = (timePeriodBloodPressure) => {
    return timePeriodBloodPressure.map(bp => (
        <td className="bpRowByTimePeriod">
            {`${bp.time ? bp.time : ''} ${bp.timePeriod ? bp.timePeriod : ''} BP: ${bp.sys ? bp.sys : ''}/${bp.dia ? bp.dia : ''} Pulse: ${bp.pulse ? bp.pulse : ''}`}
        </td>
    ))
}

const addEmptyItemToBPArray = (bpArray) => {
    if (bpArray.length < 4) {
        const itemsToAdd = 4 - bpArray.length;
        for (let i = 0; i<itemsToAdd; i++) {
            bpArray.push({});
        }
    }
    return bpArray;
}

export default BloodPressureData;
