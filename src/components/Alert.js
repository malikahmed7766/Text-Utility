import React from 'react'

function Alert(props) {

    return (
        props.alert &&
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <p className="fw-bold mb-0"><strong className="text-uppercase">{props.alert.type}</strong> {props.alert.message}</p>
        </div>
    )
}

export default Alert