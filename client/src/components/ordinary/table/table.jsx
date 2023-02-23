import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './table.css';

const Table = ({ rowData, columnDefs, defaultColDef }) => {
  return (
    <div className="ag-theme-alpine table">
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows
        rowSelection="multiple"
        defaultColGroupDef={defaultColDef}
      />
    </div>
  );
};

export default Table;
