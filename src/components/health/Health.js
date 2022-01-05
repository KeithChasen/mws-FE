import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";

const Health = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            Health
        </div>
    );
}

export default Health;
