# useAgGrid

This makes it easy to use the AG-Grid API which is provided via something which is not "the react way".
It also provides some sensible defaults and can set the license key for you.

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

See [the example](https://github.com/mdornseif/react-use-aggrid-enterprise/blob/main/example/index.tsx) in the `example/` folder. 

## Providing the license

Without a license AG Grid displays a watermark. You can provide a license by calling `installLicense(license)` or by providing a license string to `useAgGrid(license)`. This has to be done once during execution.

It is suggested that you put your license key into a file called `.env`. Depending on your Toolchain it should be named `VITE_AGGRID_LICENSE_KEY` or `REACT_APP_AGGRID_LICENSE_KEY`.

For react you would use `const LICENSE = process?.env?.REACT_APP_AGGRID_LICENSE_KEY` to get the license key during build time. For vite it would be `import.meta?.env?.VITE_AGGRID_LICENSE_KEY`.

See [the example](https://github.com/mdornseif/react-use-aggrid-enterprise/blob/main/example/index.tsx).


## See also

* [AG-Grid](https://www.ag-grid.com)