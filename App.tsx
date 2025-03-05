import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import CourseCreationWizard from './CourseCreationWizard';

/*
  App.tsx
  -------
  This file sets up routing for the application.
  - The home route ("/") renders the HomePage component.
  - The "/course-creation" route renders the CourseCreationWizard component.
  
  This ensures that when users click on the "Start Course Creation" button on the home page,
  they are routed to the Course Creation Wizard for a guided, step-by-step experience.
*/
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course-creation" element={<CourseCreationWizard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
