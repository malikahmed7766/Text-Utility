import React from 'react'
function About() {

    return (
        <>
            <div className="container-fluid">
                <div className="d-flex flex-column align-items-center justify-content-center bg-body-secondary rounded-3 p-3">
                    <div className="mt-4 mb-3">
                        <i className="bi display-3 bi-person-circle"></i>
                    </div>
                    <div className="text-center mt-2">
                        <h1 className="display-5 text-body-emphasis fw-semibold">About This React App</h1>
                        <p className="col-md-8 mx-auto fs-5 text-text-secondary">
                            This is a custom jumbotron featuring an SVG image at the top, some longer text that wraps early thanks to a
                            responsive class, and a customized call to action.
                        </p>
                    </div>
                    <hr />
                    <div className="d-grid d-md-flex gap-1 mt-2">
                        <button className="btn btn-primary btn-lg rounded-pill" type="button">Call to action</button>
                        <button className="btn btn-outline-secondary btn-lg rounded-pill" type="button">Secondary link</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About