import React from 'react';

import { BrowserRouter, Route, Routes, HashRouter, Navigate} from 'react-router-dom'

import About from '../about/About';
import Todo from '../todo/Todo';

function RoutesTodoApp() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/todos" element={<Todo />} />
          <Route path="/about" element={<About />} />
          <Route
          path="*"
          element={<Navigate to="/todos" replace />}
              />
        </Routes>
        
    </BrowserRouter>
  );
}

export default RoutesTodoApp;