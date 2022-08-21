import axios from 'axios'
import {Modal,Form,Button} from 'react-bootstrap'
import {useState} from 'react'
function CreateTask(props){
    const {showCreate,setShowCreate} = props.showPrps
    const [formId,setFormId] = useState()
    const [formProject,setFormProject] = useState()
    const [formTaskName,setFormTaskName] = useState()
    const [formStatus,setFormStatus] = useState("Not Started")
    const handleClose = ()=> setShowCreate(false)

    const postData=async()=>{
      const data ={id:formId,project_name:formProject,task_name:formTaskName,status:formStatus}
        await axios.post("http://localhost:3001/tasks/",data)
          .then(()=>{
        
          handleClose()
          
        })
          
    }
    return(
        
      <Modal show={showCreate} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formId">
         <Form.Label>ID</Form.Label>
         <Form.Control type="number"  onChange={(e)=>setFormId(e.target.value)} placeholder="Enter ID" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProjectName">
            <Form.Label>Project Name</Form.Label>
            <Form.Control onChange={(e)=>setFormProject(e.target.value)} placeholder="Enter Project Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTaskName">
            <Form.Label>Task Name</Form.Label>
            <Form.Control  onChange={(e)=>setFormTaskName(e.target.value)} placeholder="Enter Task Name" />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <br></br>
        <Form.Select disabled  onChange={(e)=>setFormStatus(e.target.value)}>
          
          <option>Not Started</option>
        </Form.Select>
      </Form.Group>
        </Form>



      </Modal.Body>
      <Modal.Footer>
        
        <Button variant="primary" onClick={postData}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
    )

}

export default CreateTask