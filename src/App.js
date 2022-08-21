import {useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import TaskTable from './components/TaskTable'
import Buttons from './components/Buttons'
import CreateTask from './components/CreateTask';
function App() {
  const [taskShow, setTaskShow] = useState(false)
  const [showCreate,setShowCreate] = useState(false)
  const [showDelete,setShowDelete] = useState(true)
  return (
    <div className="App">
      <Buttons showPrps={{taskShow,setTaskShow,setShowCreate,showDelete}}/>
      <TaskTable showPrps={{taskShow,showDelete,setShowDelete}}/>
      <CreateTask showPrps={{showCreate,setShowCreate}}/>
    </div>
  );
}

export default App;
