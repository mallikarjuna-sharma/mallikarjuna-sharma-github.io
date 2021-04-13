import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React , { useState } from "react";

import Rotary from '../assets/rotary.png'
import mHealth from '../assets/mhealth.png'

const shalomappdetails = () => {
    let arr = [{
      img: mHealth,
      name: "mHealth",
      href: 'https://play.google.com/store/apps/details?id=com.saieshinfosolutions.itc.doctor_app&hl=en',
      duration: "2018",
    }, {
      img: Rotary,
      name: "Rotary",
      href: 'https://play.google.com/store/apps/details?id=com.shalominfotech.rotaryInstitute&hl=en',
      duration: "2018",
    }];
  
    return arr;
  }


const WorkCard = (value) => {
    const { name, id, duration, href, jobrole, Highlights,setProject } = value;
    const [openHide,setOpenHide] = useState(false);

    return (
        <div className="col-md-6 draggable" draggable="true" >
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <div className="card-body" style={{padding:"2%"}}>

                    <div className="row">
                        <a
                            className="card-title col-lg-8 col-sm-12"
                            href={href}
                            style={{ fontSize: 18 }}
                            target="_blank"
                        >
                            {name}
                        </a>

                        <p className="col-sm-12 col-lg-4" style={{
                            fontStyle: "italic",
                            fontSize: "14px",
                            color: "#999",
                            lineHeight: "18px",
                            float: "right",
                            padding: 0
                        }}> {duration}
                        </p>

                    </div>

                    <p style={{
                        fontSize: "16px",
                        color: "#999",
                        lineHeight: "18px",
                        float: "left"
                    }}> {jobrole}
                    </p>

                    <div id="accordion" className="accordion">
                        <button className="btn btn-link col-lg-12 col-sm-12 shimmer  collapsed" type="button"
                            style={{ color: "rgba(148,148,148,.98)" }}
                            data-toggle="collapse" data-target={"#" + id}
                            onClick={e => setOpenHide(!openHide) }
                            aria-expanded="true" aria-controls={id}>
                            View Highlights
                        </button>
                        <div id={id} className="collapse" data-parent="#accordion">
                            <hr />
                            <div className="card-body">
                                {Highlights?.split ('\n').map ((item, i) => <p key={i}>{item}</p>)}
                            </div>

                            {(id === 'collapse1') &&
                                <a className="btn btn-link col-lg-12 col-sm-12"
                                    type="button"
                                    href="#shalom"
                                    onClick={e =>   {setProject(openHide ? shalomappdetails : false);  }  }
                                    style={{ color: "rgba(148,148,148,.98)" }}
                                >
                                    View projects
                                </a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};



export default WorkCard;
