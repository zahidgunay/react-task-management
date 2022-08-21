import {Modal,Form,Button} from 'react-bootstrap'

function CreateTask(props){
    const {showCreate,setShowCreate} = props.showPrps
    const handleClose = ()=> setShowCreate(false)
    return(
        
      <Modal show={showCreate} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formId">
         <Form.Label>ID</Form.Label>
         <Form.Control type="number" placeholder="Enter ID" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProjectName">
            <Form.Label>Project Name</Form.Label>
            <Form.Control  placeholder="Enter Project Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formTaskName">
            <Form.Label>Task Name</Form.Label>
            <Form.Control  placeholder="Enter Task Name" />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <br></br>
        <Form.Select disabled>
          
          <option>Not Started</option>
        </Form.Select>
      </Form.Group>
        </Form>



      </Modal.Body>
      <Modal.Footer>
        
        <Button variant="primary" onClick={()=>alert("oluşturuldu")}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
    )
}

export default CreateTask