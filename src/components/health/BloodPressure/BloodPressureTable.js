import { useQueryOnDemand } from "../../../utils/hooks/useQueryOnDemand";
import { useHealthDispatch, useHealthState } from "../../../context/health";
import { GET_HEALTH_DIARY } from "../../../graphql/health";

const BloodPressureTable = () => {
    const dispatch = useHealthDispatch();
    const { health } = useHealthState();
    useQueryOnDemand(GET_HEALTH_DIARY, health, dispatch, 'SET_HEALTH_DIARY')

    console.log(health, 'health');

    const processTable = () => {
        if (!health || !health.length)
            return ( <p>No data to display...</p> )

        return (
            <table>
                {health.map((healthDate, index) => {
                    if (healthDate.activities?.bloodPressure?.length) {

                        const background = index % 2 === 0 ? 'var(--app-grey)' : null;

                        return (
                            <tr className="blood-pressure-row" style={{ background }}>
                                    <td>{healthDate.date}</td>
                                {
                                    healthDate.activities.bloodPressure.map(bloodPressureRecord => {
                                        return (
                                            <td>BP: {bloodPressureRecord.sys} / {bloodPressureRecord.dia}</td>
                                        );
                                    })
                                }
                            </tr>
                        )
                    }
                })}
            </table>
        )
    }

    return (
        <>
            <h3>Blood Pressure</h3>
            { processTable() }
        </>
    );
}

export default BloodPressureTable;
