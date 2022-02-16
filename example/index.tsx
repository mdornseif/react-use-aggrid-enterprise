/*
 * index.tsx
 *
 * Created by Dr. Maximillian Dornseif 2022-02-15
 * Copyright (c) 2022 Maximillian Dornseif
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { agGridDefaultOptions, useAgGrid } from '../src/';
import { GridOptions } from '@ag-grid-community/all-modules';
import { AgGridReact } from '@ag-grid-community/react';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';

// see also https://www.ag-grid.com/react-data-grid/getting-started/
const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 },
];

const LICENSE: string|undefined= import.meta?.env?.VITE_AGGRID_LICENSE_KEY
// for create-create=react-app
// const LICENSE = process?.env?.REACT_APP_AGGRID_LICENSE_KEY

const columnDefs = [{ field: 'make' }, { field: 'model' }, { field: 'price' }];

const App = () => {
  const { onGridReady, columnApi, api } = useAgGrid(LICENSE);
  const gridOptions: GridOptions = { ...agGridDefaultOptions };
  console.log(columnApi, api);
  return (
    <div>
      <h1>Test AG-Grid</h1>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          {...gridOptions}
          reactUi={true}
          rowData={rowData}
          columnDefs={columnDefs}
          onGridReady={onGridReady}
        />{' '}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
