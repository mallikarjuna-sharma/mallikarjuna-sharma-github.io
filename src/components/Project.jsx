import React, { useState, useEffect, useCallback, useRef } from "react";
import "../App.css";
import Configs from "../editable-stuff/configurations.json";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ProjectCard from "./ProjectCard";
import AppCard from "./AppCard";
import WorkCard from "./WorkCard";
import fea from "../assets/fea1.png";
import ios from "../assets/ios.png";
import tictoe from "../assets/tictoe.png";
import MyProducts from "./MyProducts";

const androidappdetails = () => {
  let arr = [
    {
      img: fea,
      name: "Finite Element Analysis",
      href:
        "https://play.google.com/store/apps/details?id=my.fea.mallik.finiteelementanalysis&hl=en",
      duration: "2017",
    },
    {
      img: ios,
      name: "ios calculator",
      href:
        "https://play.google.com/store/apps/details?id=my.calculator.mallik.ioscalculator&hl=en",
      duration: "2017",
    },
    {
      img: tictoe,
      name: "tic tac toe",
      href:
        "https://play.google.com/store/apps/details?id=my.game.tictactoe&hl=en",
      duration: "2017",
    },
  ];

  return arr;
};

const workdetails = () => {
  let arr = [
    {
      duration: "2018/Dec - Present",
      name: "Infosys",
      href: "https://www.infosys.com/",
      jobrole: "Software Engineer",
      Highlights:
        "Developed admin and associate/student web application " +
        "In which admin gives questions for targeted associates and these questions are in turn answered by those associates." +
        "handled image/video/hotspot question types,complex logic for fetching questions,leaderboard data with various filters and more complex features",
    },
    {
      duration: "2018/Apr - Nov",
      name: "Shalom Infotech",
      href: "http://www.shalominfotech.com/",
      jobrole: "Jr. Mobile app developer",
      Highlights:
        "Developed,Maintained,Deployed various native android application",
    },
  ];

  return arr;
};

const myProducts = () => {
  let arr = [
    {
      duration: "2020/Apr",
      name: "Covid-19",
      web_href: "https://elastic-hugle-e08f29.netlify.app/",
      mobile_href:
        "https://drive.google.com/file/d/1ffwQq42aO7M8nnv-u-kOyDiIrC2t7Uv0/view?usp=sharing",
    },
    {
      duration: "2020/May",
      name: "Contacts-CRM",
      web_href: "https://mallik-crm-dashboard.netlify.app/",
      mobile_href:
        "https://drive.google.com/file/d/1F_QMsTiKeOv-GS0zaWZwgGOv5igdwI9Q/view",
    },
    {
      duration: "2020/May",
      name: "Bank Details-India",
      web_href: "https://banks-details.netlify.app/",
      mobile_href: false,
    },
  ];

  return arr;
};

const Project = () => {
  const [heading] = useState("Recent Projects");
  const [projectsArray, setProjectsArray] = useState([]);
  const [projectsLength] = useState(Configs.projectsLength);
  const [shalomProjects, setshalomProjects] = useState(false);
  const [shalomProjectsY, setshalomProjectsY] = useState(0);

  const handleRequest = useCallback(
    (e) => {
      axios
        .get(Configs.gitHubLink + Configs.gitHubUsername + Configs.gitHubQuerry)
        .then((response) => {
          // handle success
          // console.log(response.data.slice(0, 4));
          return setProjectsArray(response.data.slice(0, projectsLength));
        })
        .catch((error) => {
          // handle error
          setProjectsArray("failed");
          return console.error(error.message);
        })
        .finally(() => {
          // always executed
        });
    },
    [projectsLength]
  );

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  useEffect(() => {
    if (shalomProjects && shalomProjects.length > 0) {
      setshalomProjectsY(window.scrollY);
    }
  }, [shalomProjects]);

  return (
    <div id="projects" className="jumbotron jumbotron-fluid bg-transparent m-0">
      <div className="container container-fluid p-5">
        <a href="malik" />
        <div>
          <h1 className="display-4 pb-5">My Products</h1>
          <div className="row">
            {myProducts().map((project, index) => (
              <MyProducts
                key={index}
                id={"collapse" + index}
                web_href={project.web_href}
                mobile_href={project.mobile_href}
                name={project.name}
                duration={project.duration}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="display-4 pb-5">Work Experience</h1>
          <div className="row">
            {workdetails().map((project, index) => (
              <WorkCard
                key={index}
                id={"collapse" + index}
                name={project.name}
                href={project.href}
                name={project.name}
                setProject={(e) => {
                  setshalomProjects(e);
                  if (document.getElementById("shalom")) {
                    document.getElementById("shalom").style.visibility =
                      "visible";
                    setshalomProjectsY(window.scrollY);
                  }
                }}
                duration={project.duration}
                jobrole={project.jobrole}
                Highlights={project.Highlights}
              />
            ))}
          </div>
        </div>

        {projectsArray !== "failed" && (
          <div>
            <h1 className="display-4 pb-5">{heading}</h1>
            <div className="row">
              {projectsArray.map((project) => (
                <ProjectCard key={project.id} id={project.id} value={project} />
              ))}
            </div>
          </div>
        )}

        <h1 className="display-4 pb-5">My Apps</h1>
        <div className="row">
          {androidappdetails().map((project, index) => (
            <AppCard
              key={index}
              img={project.img}
              name={project.name}
              href={project.href}
              duration={project.duration}
            />
          ))}
        </div>
        {shalomProjects && (
          <div>
            <h1 className="display-4 pb-5">Client Apps</h1>
            <div className="row" id="shalom">
              {shalomProjects.map((project, index) => (
                <AppCard
                  key={index}
                  img={project.img}
                  name={project.name}
                  href={project.href}
                  duration={project.duration}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
