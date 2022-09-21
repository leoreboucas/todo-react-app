import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import Menu from '../template/Menu';
import RoutesTodoApp from './Routes';


function App(props) {
  return (
    <div className='container'>
      <Menu />
      <RoutesTodoApp />
    </div>
  );
}

export default App;
