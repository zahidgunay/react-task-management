import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import axios from "axios";



function TaskTable(props) {
  const [selected, setSelected] = useState([])
  const { taskShow, setShowDelete,setShowUpdate } = props.showPrps
  const [taskData,setTaskData] = useState({})
  const {deleteButton,setDeleteButton} = props.stateDelete
  const setUpdateData = props.stateUpdate
  const deleteData=()=>{
    selected.map(async(rows)=>{
       await axios.delete("http://localhost:3001/tasks/"+rows)
        .then(()=>{
          setDeleteButton(false)
        })
       
    })

 }
  useEffect(()=>{
    const fetchData = async()=>{
        const response = await axios.get("http://localhost:3001/tasks")
        setTaskData(response.data)
       
    }
    fetchData()
    if(deleteButton){
      deleteData()
      
    }
   
  },[selected,deleteButton,taskShow])
 

  const columns = [{
    dataField: 'id',
    text: 'Task ID'
  }, {
    dataField: 'project_name',
    text: 'Project Name'
  }, {
    dataField: 'task_name',
    text: 'Task Name'
  },
  {
    dataField: 'status',
    text: 'Status'
  }

];
  const handleSelectAll = (select, row) => {
    const rowId = row.map(rows => rows.id)
    
    if (select) {
      setSelected(rowId)
      setShowDelete(false)

    } else {
      setSelected([])
      setShowDelete(true)
    }
  }

  const handleSelect = (row, select) => {

    if (select) {
   
      setSelected(arr => [...arr, row.id])
      setUpdateData(row)
      setShowUpdate(true)
      setShowDelete(false)

    } else {
      setUpdateData()
      const indi = selected.indexOf(row.id)
      if (indi > -1) {
        selected.splice(indi, 1);
        
      }
      !selected.length ? setShowDelete(true) : setShowDelete(false)

    }
  }

 
  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    selected: selected,
    onSelect: handleSelect,
    onSelectAll: handleSelectAll
  };

  return (
    <Collapse in={taskShow}>

      <div>
        <BootstrapTable
          keyField="id"
          data={taskData}
          columns={columns}
          striped
          hover
          condensed
          selectRow={selectRow}
          pagination={paginationFactory()}
        />
      </div>
    </Collapse>
  )
}

export default TaskTable