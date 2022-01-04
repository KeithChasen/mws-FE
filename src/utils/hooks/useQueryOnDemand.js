import { useLazyQuery } from "@apollo/client";
import { useEffect } from "react";

export const useQueryOnDemand = (getItemsQuery, items, dispatch, type) => {
    const [getItems, { loading, data }] = useLazyQuery(getItemsQuery,{
        fetchPolicy: 'no-cache'
    });

    useEffect(() => {
        if (typeof items === 'undefined' || !items) {
            getItems()
        }
    },[items, getItems]);

    useEffect(() => {
        if (data) {
            dispatch({ type, payload: data })
        }
    }, [data, dispatch]);
}
