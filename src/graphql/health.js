import {gql} from "@apollo/client";

const SAVE_BLOOD_PRESSURE = gql`
    mutation saveBloodPressure(
        $date: String!
        $time: String!
        $sys: String!
        $dia: String!
        $pulse: String!
    ) {
        saveBloodPressure(
            date: $date
            time: $time
            sys: $sys
            dia: $dia
            pulse: $pulse
        ) {
#            id
            date
            activities {
                bloodPressure {
                    sys
                    dia
                    pulse
                    time
                }
            }
        }
    }
`;

export {
    SAVE_BLOOD_PRESSURE
};
