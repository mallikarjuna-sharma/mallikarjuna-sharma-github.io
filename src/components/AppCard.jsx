import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const AppCard = (value) => {
    const { name, img, href ,duration } = value;
    return (
        <div className="col-md-6">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card-body">
                    <div className="row">
                    <h5 className="card-title col-lg-10 col-sm-12">{name} </h5>
                    <p className="col-sm-12 col-lg-2" style={{
                            fontStyle: "italic",
                            fontSize: "14px",
                            color: "#999",
                            lineHeight: "18px",
                            float: "right"}}> {duration} </p>
                    </div>
                    <hr />
                    <img src={img} style={{ height: 60, width: 60 }} className="mr-3" alt="..." />
                    <a
                        href={href}
                        target="_blank"
                    >
                        <button className="btn btn-outline-dark btn-icon-text">

                            <i className="material-icons">android</i>
                            <span className="d-inline-block text-left">
                                <small className="font-weight-light d-block">Get it on the</small>
                                    Google Play </span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};



export default AppCard;
