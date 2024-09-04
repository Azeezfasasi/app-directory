import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
    return (
        <>
        <div className="message-box">
            <h1>404</h1>
            <p>Page not found</p>
            <div className="buttons-con">
            <div className="action-link-wrap">
                <a onclick="history.back(-1)" className="link-button link-back-button">
                Go Back
                </a>
                <Link to="/">Go to Home Page</Link>
                {/* <a href="" className="link-button">
                Go to Home Page
                </a> */}
            </div>
            </div>
        </div>
        </>
    )
}

export default PageNotFound