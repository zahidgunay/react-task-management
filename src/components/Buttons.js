import {Button} from 'react-bootstrap'
import "../css/Style.css"
function Buttons(props){
    const {taskShow,setTaskShow,setShowCreate,showDelete} = props.showPrps
    const setDeleteButton = props.stateDelete
    const handleShow=()=>{
        if(taskShow){
            setTaskShow(false)
        }else{
            setTaskShow(true)
        }
    }
    const handleCreateShow=()=>setShowCreate(true)
  
    return(
        <div>
            <Button onClick={handleShow} className="sm">Show Task</Button>
            <Button onClick={handleCreateShow}  className="sm m-15">Create Task</Button>
            <Button variant="danger"  className="sm" disabled={showDelete} onClick={()=>setDeleteButton(true)}>Delete Task</Button>
        </div>
    )
}

export default Buttons