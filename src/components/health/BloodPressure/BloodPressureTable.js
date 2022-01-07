import { useQueryOnDemand } from "../../../utils/hooks/useQueryOnDemand";
import { useHealthDispatch, useHealthState } from "../../../context/health";
import { GET_HEALTH_DIARY } from "../../../graphql/health";
import BloodPressureData from "./BloodPressureData";
import { BloodPressureStyledTable } from "../../../elements/Health/BloodPressure/Table";

const BloodPressureTable = () => {
    const dispatch = useHealthDispatch();
    const { health } = useHealthState();
    useQueryOnDemand(GET_HEALTH_DIARY, health, dispatch, 'SET_HEALTH_DIARY')

    const processTable = () => {
        if (!health || !health.length)
            return ( <p>No data to display...</p> )

        return (
            <BloodPressureStyledTable>
                <BloodPressureData health={health} />
            </BloodPressureStyledTable>
        )
    }

    return (
        <>
            { processTable() }
        </>
    );
}

export default BloodPressureTable;
