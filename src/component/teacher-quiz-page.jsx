import React, { useState, useEffect } from "react";
import "../assets/style.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function TeacherQuizPage({ createQuiz }) {
  return (
    <div>
      <div className="container-fluid teacherDashboard quizDashboard">
        <div className="row">
          <div className="col-12">
            <h1 className="welcomH1 quizh1">Quiz Dashboard</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="quizContainer">
              <button className="newDiv" onClick={createQuiz} type="button">
                {" "}
                <i
                  className="fas fa-plus"
                  style={{ fontSize: "50px" }}
                ></i>{" "}
                <br />{" "}
                <span style={{ position: "relative", top: "1.5rem" }}>
                  Add a New Quiz
                </span>
              </button>
            </div>
          </div>
        </div>

        <Link to="teacherDashboard">
          <button type="button" className="addClickBtn">
            Back To Page
          </button>
        </Link>
      </div>
    </div>
  );
}
