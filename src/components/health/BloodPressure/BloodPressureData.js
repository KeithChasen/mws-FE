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
                        <tr className="blood-pressure-row" style={{ background }}>
                            <td style={{ width: '10vw' }}>{bloodPressureItem.date}</td>
                            <td>
                                <table style={{ width: '100%'}}>
                                    <tr>
                                        <td style={{ width: '5%' }}>Morning</td>
                                        { processRowByTimePeriod(morningBloodPressure) }
                                    </tr>
                                    <tr>
                                        <td>Evening</td>
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
        <td style={{ width: '20%' }}>
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
