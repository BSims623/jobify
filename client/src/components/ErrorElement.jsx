import { useRouteError } from "react-router-dom";

import React from 'react'

const ErrorElement = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <h4>There was an error...</h4>
    )
}

export default ErrorElement