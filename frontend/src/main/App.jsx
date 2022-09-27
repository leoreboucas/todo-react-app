import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import Menu from '../template/Menu';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Todo from '../todo/Todo';
import About from '../about/About';


function App(props) {
  return (
    <div className='container'>
      <Router>
        <Menu />
        <Routes>
          <Route path="/todos" element={<Todo />} />
          <Route path="/about" element={<About />} />
          <Route
          path="*"
          element={<Navigate to="/todos" replace />}
              />
        </Routes>
        
    </Router>

    </div>
  );
}

export default App;
