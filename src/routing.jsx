import React, { useState } from "react";
import QuizMainPage from "./component/quiz-main-page";
import TeacherAuthPage from "./component/teacherAuthPage";
import StudentAuthPage from "./component/studentAuthPage";
import TeacherDashboard from "./component/teacherDashboard";
import AddStudent from "./component/add-student";
import StudentMarks from "./component/studentMarks";
// import TeacherQuizPage from './component/teacher-quiz-page'
import TeacherQuizQuestions from "./component/teacherQuizQuestions";
import StudentDashboard from "./component/studentDashboard";
import StudentQuizQuestions from "./component/studentQuizQuestions";
import "./assets/style.css";
import { Route } from "react-router";

export default function Routing() {
  const [question, setQuestion] = useState("");
  const [saveQuestion, setSaveQuestion] = useState([]);
  const [CopySaveQuestion, setCopySaveQuestion] = useState([]);
  let [isOpened, setIsOpened] = useState(false);
  let [count, setCount] = useState(0);
  let [userAnswer, setUserAnswer] = useState(0);

  let handleQuestion = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };

  let saveData = () => {
    let newData = question;
    let combineData = saveQuestion;
    combineData.push(newData);
    setSaveQuestion(combineData);
    setCopySaveQuestion(combineData);
    alert("Question Successfully Saved");
    setCount(0);
    setIsOpened(false);
    setUserAnswer(0);
    let inputFields = document.querySelectorAll("input");
    inputFields.forEach((ele) => {
      ele.value = "";
    });
  };

  let handleQuestions = (e) => {
    let newCount = count + 1;

    if (newCount < saveQuestion.length) {
      setCount(newCount);
    } else {
      alert("Quiz Ended");
    }
    setIsOpened(false);
  };
  console.log(userAnswer);

  let NextBtn = (e) => {
    let x = e.target.value;
    if (x === CopySaveQuestion[count].correctOption) {
      setUserAnswer(userAnswer + 1);
    }
    setIsOpened(true);
  };

  let submitBtn = () => {
    setSaveQuestion([]);
    alert("Your Quiz is Successfully Saved");
  };

  const [teacherId, setTeacherId] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");

  let getTeacherId = (e) => {
    setTeacherId(e.target.value);
  };

  let getTeacherPassword = (e) => {
    setTeacherPassword(e.target.value);
  };

  const [stdBasicInfo, setStdBasicInfo] = useState("");

  let getStdBasicInfo = (e) => {
    setStdBasicInfo({ ...stdBasicInfo, [e.target.name]: e.target.value });
  };

  const [stdMarks, setStdMarks] = useState("");

  let getStdMarks = (e) => {
    setStdMarks({ ...stdMarks, [e.target.name]: e.target.value });
  };

  const [combineData, setCombineData] = useState([]);

  let sumUpData = () => {
    let newData = { ...stdBasicInfo, ...stdMarks };
    let oldData = combineData;
    oldData.push(newData);
    setCombineData(oldData);
    alert("Data is Successfully Added");
  };

  const [studentId, setStudentId] = useState("");

  const [studentPassword, setStudentPassword] = useState("");

  let getStudentId = (e) => {
    setStudentId(e.target.value);
  };

  let getStudentPassword = (e) => {
    setStudentPassword(e.target.value);
  };

  const [filteredData, setFilteredData] = useState([]);

  let loginStudent = () => {
    let filterStudent = combineData.filter((ele) => {
      return ele.stdId == studentId && ele.stdPass == studentPassword;
    });

    setFilteredData(filterStudent);
  };

  console.log(filteredData);

  return (
    <div>
      <Route exact path="/">
        {/* <QuizMainPage/> */}
        <TeacherAuthPage
          getTeacherId={getTeacherId}
          getTeacherPassword={getTeacherPassword}
          teacherId={teacherId}
          teacherPassword={teacherPassword}
        />
      </Route>

      <Route path="/studentLogin">
        <StudentAuthPage
          filteredData={filteredData}
          loginStudent={loginStudent}
          getStudentId={getStudentId}
          getStudentPassword={getStudentPassword}
        />
      </Route>

      <Route path="/teacherDashboard">
        <TeacherDashboard />
      </Route>

      <Route path="/addStudent">
        <AddStudent getStdBasicInfo={getStdBasicInfo} />
      </Route>

      <Route path="/addMarks">
        <StudentMarks getStdMarks={getStdMarks} sumUpData={sumUpData} />
      </Route>

      <Route path="/quizQuestion">
        <TeacherQuizQuestions
          handleQuestion={handleQuestion}
          saveData={saveData}
        />
      </Route>

      <Route path="/studentDashboard">
        <StudentDashboard
          userAnswer={userAnswer}
          saveQuestion={saveQuestion}
          CopySaveQuestion={CopySaveQuestion}
        />
      </Route>

      <Route path="/studentQuizPage">
        <StudentQuizQuestions
          handleQuestions={handleQuestions}
          NextBtn={NextBtn}
          isOpened={isOpened}
          submitBtn={submitBtn}
          saveQuestion={saveQuestion}
          count={count}
        />
      </Route>
    </div>
  );
}
