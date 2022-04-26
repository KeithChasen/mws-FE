import { gql } from "@apollo/client";

const GET_ACTIVITY_TYPE = gql`
    query getActivityTypes {
        getActivityTypes {
            id
            title
        }
    }
`;

const CREATE_ACTIVITY_TYPE = gql`
    mutation createActivityType(
        $title: String!
    ) {
        createActivityType(
            title: $title
        ) {
            id
            title
        }
    }
`;

export {
    GET_ACTIVITY_TYPE,
    CREATE_ACTIVITY_TYPE
};