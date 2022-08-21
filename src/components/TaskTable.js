import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
function TaskTable(props) {
  const [selected, setSelected] = useState([])
  const { taskShow, showDelete, setShowDelete } = props.showPrps
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
      setShowDelete(false)

    } else {
      const indi = selected.indexOf(row.id)
      if (indi > -1) {
        selected.splice(indi, 1);
      }
    }
  }
//Burayı düzelt
  useEffect(() => {
    if(selected ==[]){
     console.log("naber")
    }
  });
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
          data={products}
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