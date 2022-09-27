import React from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'

import About from '../about/About';
import Todo from '../todo/Todo';

function RoutesTodoApp() {
  return (
    <Router>
        <Routes>
          <Route path="/todos" element={<Todo />} />
          <Route path="/about" element={<About />} />
          <Route
          path="*"
          element={<Navigate to="/todos" replace />}
              />
        </Routes>
        
    </Router>
  );
}

export default RoutesTodoApp;