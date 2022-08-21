import {Button} from 'react-bootstrap'

function Buttons(props){
    const {taskShow,setTaskShow,setShowCreate,showDelete} = props.showPrps
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
            <Button onClick={handleShow}>Show Task</Button>
            <Button onClick={handleCreateShow}>Create Task</Button>
            <Button variant="danger" disabled={showDelete}>Delete Task</Button>
        </div>
    )
}

export default Buttons