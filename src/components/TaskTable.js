import BootstrapTable from 'react-bootstrap-table-next';
import {useState} from 'react'
function TaskTable(){
    const [selected, setSelected] = useState([])
  
      const products = [
        { id: 0, name: "Item name 0", price: 2100 },
        { id: 1, name: "Item name 1", price: 2101 },
        { id: 2, name: "Item name 2", price: 2102 },
        { id: 3, name: "Item name 3", price: 2103 }
      ];
      
      const columns = [{
        dataField: 'id',
        text: 'Product ID'
      }, {
        dataField: 'name',
        text: 'Product Name'
      }, {
        dataField: 'price',
        text: 'Product Price'
      }];
const handleSelectAll=(select,row)=>{
  const rowId = row.map(rows=>rows.id)
  if(select){
    setSelected(rowId)

  }else{
    setSelected([])
  }
}

 const handleSelect = (row,select)=>{
    console.log(row.id+" " + select)
    if(select){
        
        setSelected(arr=>[...arr,row.id])
 console.log(selected)

        
    }else{
        const indi = selected.indexOf(row.id)
        if (indi > -1) { 
            selected.splice(indi, 1); 
          }
        console.log(selected)

    }
 }
 console.log(selected)
  
 const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    selected :selected,
    onSelect: handleSelect,
    onSelectAll:handleSelectAll
  };

    return(
        <BootstrapTable
        keyField="id"
        data={products}
        columns={ columns }
        striped
        hover
        condensed
        selectRow={selectRow}
       
      />
    )
}

export default TaskTable