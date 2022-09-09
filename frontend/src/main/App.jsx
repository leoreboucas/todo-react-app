import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import About from '../about/About';
import Menu from '../template/Menu';
import Todo from '../todo/Todo';

function App(props) {
  return (
    <div className='container'>
      <Menu />
      <Todo />
      <About />
    </div>
  );
}

export default App;
