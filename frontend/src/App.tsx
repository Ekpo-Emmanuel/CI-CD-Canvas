import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import SignIn from './components/Auth/sign-in';
import SignUp from './components/Auth/sign-up';
import PipelineList from './components/pipeline/PipelineList';
import PipelineDetails from './components/pipeline/PipelineDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/pipelines" element={<PipelineList />} />
        <Route path="/pipelines/:id" element={<PipelineDetails />} /> */}
      </Routes>
    </Router>
  );
};

export default App;