import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login.jsx'
import Registration from './Components/Registration.jsx'
import Quizzes from './Components/Quizzes.jsx'
import CreateQuiz from './Components/CreateQuiz.jsx'
import JoinPage from './Components/JoinPage.jsx'
import Lobby from './Components/Lobby.jsx'
import PassRandomQuizDasboard from './Components/PassRandomQuizDashboard.jsx';
import PassRandomQuizSetup from './Components/PassRandomQuizSetup.jsx';
import PassRandomQuiz from './Components/PassRandomQuiz.jsx';
import PassRandomQuizResults from './Components/PassRandomQuizResults.jsx';

function App () {
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/join-page" element={<JoinPage />} />
          <Route path="/lobby/:code" element={<Lobby/>}/> 
          <Route path="/pass-random-quiz" element={<PassRandomQuizDasboard />} />
          <Route path="/random-quiz-setup" element={<PassRandomQuizSetup/>} />
          <Route path="/random-quiz" element={<PassRandomQuiz />} />
          <Route path="/random-results" element={<PassRandomQuizResults />} />
          <Route path="/create-quiz" element={<CreateQuiz />}/>

        </Routes>
      </div>
    </Router>

    </>
  );
};

export default App;



