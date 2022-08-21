
import axios from 'axios'
import {Modal,Form,Button} from 'react-bootstrap'
import {useState} from 'react'
function UpdateTask(props){
    const {showUpdate,setShowUpdate} = props.showPrps
    const updateData = props.data || ""
    
    
    const [projectName,setProjectName] = useState(updateData.project_name)
    const [taskName,setTaskName] = useState( updateData.task_name)
    const [status,setStatus] = useState()
    const handleClose =()=>setShowUpdate(false)
    const putData=async()=>{
        const data = {id:updateData.id, project_name:projectName, task_name:taskName, status:status}
        await axios.put("http://localhost:3001/tasks/"+updateData.id,data)
        .then(()=>{
            handleClose()
            
        })
    }
    return(
        
        <Modal show={showUpdate} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="formId">
           <Form.Label>ID</Form.Label>
           <Form.Control type="number"  value={updateData.id}   placeholder="Enter ID" disabled/>
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formProjectName">
              <Form.Label>Project Name</Form.Label>
              <Form.Control value={projectName}  onChange={(e)=>setProjectName(e.target.value)} placeholder="Enter Project Name" />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formTaskName">
              <Form.Label>Task Name</Form.Label>
              <Form.Control  value={taskName}  onChange={(e)=>setTaskName(e.target.value)} placeholder="Enter Task Name" />
          </Form.Group>
  
          <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>
          <br></br>
          <Form.Select  onChange={(e)=>setStatus(e.target.value)}>
            
            <option>Not Started</option>
            <option>In Progress</option>
            <option>Overdue</option>
            <option>Finished</option>
           

          </Form.Select>
        </Form.Group>
          </Form>
  
  
  
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={putData}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      )
  
}

export default UpdateTask