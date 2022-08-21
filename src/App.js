import BootstrapTable from 'react-bootstrap-table-next';
import TaskTable from './components/TaskTable'
function App() {
  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true
  };
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
  return (
    <div className="App">
      <TaskTable/>
    </div>
  );
}

export default App;
