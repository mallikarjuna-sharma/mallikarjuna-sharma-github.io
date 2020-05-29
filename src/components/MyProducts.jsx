import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Iframe from "react-iframe";

const MyProducts = (value) => {
  const { name, id, duration, web_href, mobile_href, Highlights } = value;

  const getHightlights = (id) => {
    switch (id) {
      case "collapse0":
        return "https://drive.google.com/file/d/1q9j7R5TDIbnScH3mds00y7a4D79ON7T0/preview";
      case "collapse1":
        return "https://drive.google.com/file/d/1kCXIGOOA5uK1Sz8whLecL_L0BPugXR3l/preview";
      case "collapse2":
        return "https://docs.google.com/document/d/1t6SQMgaHOfnvIuzoqKRr3FPCEMI0QnsRbExzaKJUyqI/preview";
    }
  };

  return (
    <div className="col-md-6">
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <div className="row">
            <a
              className="card-title col-lg-8 col-sm-12"
              href={web_href}
              style={{ fontSize: 18 }}
              target="_blank"
            >
              {name}
            </a>

            <p
              className="col-sm-12 col-lg-4"
              style={{
                fontStyle: "italic",
                fontSize: "14px",
                color: "#999",
                lineHeight: "18px",
                float: "right",
              }}
            >
              {" "}
              {duration}
            </p>
          </div>

          <a
            href={web_href}
            target="_blank"
            className="btn btn-outline-secondary mr-3 mt-3"
          >
            <i class="fas fa-globe-asia"></i>Web App
          </a>

          {mobile_href ? (
            <a
              href={mobile_href}
              target="_blank"
              className="btn btn-outline-secondary mt-3 "
            >
              <i class="fab fa-android"></i>Mobile App
            </a>
          ) : null}

          <br />
          <br />

          <div id="accordion" className="accordion">
            <button
              className="btn btn-link col-lg-12 col-sm-12 shimmer  collapsed"
              type="button"
              style={{ color: "rgba(148,148,148,.98)" }}
              data-toggle="collapse"
              data-target={"#" + id}
              onClick={(e) => {
                var iframe = document.getElementById("myId");
                iframe.src = getHightlights(id);
              }}
              data-toggle="modal"
              data-target="#myModal"
              aria-expanded="true"
              aria-controls={id}
            >
              View Highlights
            </button>

            <div class="modal fade" id="myModal" style={{ marginTop: "2%" }}>
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header" className="d-lg-none d-xl-block">
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                  </div>

                  <div class="modal-body" style={{ padding: 0 }}>
                    <Iframe width="100%" height="700px" id="myId" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
