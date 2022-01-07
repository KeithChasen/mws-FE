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
                        <div className="bloodPressureRow" style={{ background }}>
                            <div className="bpDate">{bloodPressureItem.date}</div> {/* 10% */}

                             <div className='bpDateTable'> {/* 90% */}
                                 <div className="timePartLabels">
                                     <div>Morning</div>
                                     <div>Evening</div>
                                 </div>

                                <div className='bpDateTableRow'>
                                    { processRowByTimePeriod(morningBloodPressure) }
                                    { processRowByTimePeriod(eveningBloodPressure) }
                                </div>
                             </div>
                        </div>
                    )
                }
            })
        }
    </>
}

const processRowByTimePeriod = (timePeriodBloodPressure) => {
    return timePeriodBloodPressure.map(bp => (
        <div className="bpRowByTimePeriod">
            {`${bp.time ? bp.time : ''} 
            ${bp.timePeriod ? bp.timePeriod : ''} 
            BP: ${bp.sys ? bp.sys : ''}/${bp.dia ? bp.dia : ''} 
            Pulse: ${bp.pulse ? bp.pulse : ''}`}
        </div>
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
