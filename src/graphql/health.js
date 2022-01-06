import {gql} from "@apollo/client";

const GET_HEALTH_DIARY = gql`
    query getHealthDiary {
        getHealthDiary {
            userid
            date
            activities {
                bloodPressure {
                    sys
                    dia
                    pulse
                    time
                    timePeriod
                }
            }
        }
    }
`;

const SAVE_BLOOD_PRESSURE = gql`
    mutation saveBloodPressure(
        $date: String!
        $time: String!
        $sys: String!
        $dia: String!
        $pulse: String!
        $timePeriod: String!
    ) {
        saveBloodPressure(
            date: $date
            time: $time
            sys: $sys
            dia: $dia
            pulse: $pulse
            timePeriod: $timePeriod
        ) {
#            id
            date
            activities {
                bloodPressure {
                    sys
                    dia
                    pulse
                    time
                    timePeriod
                }
            }
        }
    }
`;

export {
    SAVE_BLOOD_PRESSURE,
    GET_HEALTH_DIARY
};
