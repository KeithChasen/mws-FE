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
                {health.map(healthDate => {
                    if (healthDate.activities?.bloodPressure?.length) {
                        return (
                            <tr>
                                TR
                                {
                                    healthDate.activities.bloodPressure.map(bloodPressureRecord => {
                                        return (
                                            <td>Blood Pressure Record</td>
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
