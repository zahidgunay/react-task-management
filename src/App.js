import {useState} from 'react'
import TaskTable from './components/TaskTable'
import Buttons from './components/Buttons'
import CreateTask from './components/CreateTask';
import UpdateTask from './components/UpdateTask';
import "./css/Style.css"

function App() {
  const [taskShow, setTaskShow] = useState(false)
  const [showCreate,setShowCreate] = useState(false)
  const [showUpdate,setShowUpdate] = useState(false)
  const [showDelete,setShowDelete] = useState(true)
  const [deleteButton,setDeleteButton] = useState(false)
  const [updateData,setUpdateData] = useState()
  return (
    <div className="App m-15">
      <Buttons showPrps={{taskShow,setTaskShow,setShowCreate,showDelete}} stateDelete={setDeleteButton}/>
      <TaskTable showPrps={{taskShow,setShowDelete,setShowUpdate}} stateUpdate={setUpdateData} stateDelete={{deleteButton,setDeleteButton}}/>
      <CreateTask showPrps={{showCreate,setShowCreate,setTaskShow}}/>
      <UpdateTask showPrps={{showUpdate,setShowUpdate}} data={updateData}/>
    </div>
  );
}

export default App;
