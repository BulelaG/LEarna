import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CoursesPage from './components/CoursesPage';
import CourseView from './components/CourseView';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/course/:id" component={CourseView} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
