import './App.css';
import Table from './Components/Table/senateTable.js';

function App() {
  return (
    <div className="header">
        <h1>Senate $$ Watcher</h1>
        <span className="sr-only">Loading Senate Stock Data...</span>
        <div className="spinner-border" role="status" id="loading"></div>
        <div className="table">
            <table id="senators">
              <Table />
            </table>
        </div>
    </div>
  );
}

export default App;
