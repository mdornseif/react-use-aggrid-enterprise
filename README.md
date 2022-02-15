# useAgGrid

This makes it easy to use the AG-Grid API which is provided via something which is not "the react way". It also provides some sensible defaults and sets the license key for you.

Put your License Key as `VITE_AGGRID_LICENSE_KEY` or `REACT_APP_AGGRID_LICENSE_KEY` into `.env`/

Then something like this should provide you with an working with AG-Grid:

```js
import { useAgGrid } from '../src/'
import { AgGridReact, agGridDefaultOptions } from '@ag-grid-community/react'
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css'

const Component = () => {
  const { onGridReady, columnApi, api } = useAgGrid()
  console.log(columnApi, api);
  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact
          {...agGridDefaultOptions}
          reactUi={true}
          rowData={rowData}
          columnDefs={columnDefs}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  )
}
```

See the Example in the `example/` folder. 

# See also

* [AG-Grid](https://www.ag-grid.com)