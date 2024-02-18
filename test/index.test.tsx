import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { AgGridReact } from '@ag-grid-community/react'
import { GridOptions } from '@ag-grid-community/core'
import { useAgGrid, agGridDefaultOptions } from '../lib/useAgGrid'

const LICENSE: string | undefined = import.meta?.env?.VITE_AGGRID_LICENSE_KEY

const App = () => {
  const { onGridReady } = useAgGrid(LICENSE)
  const gridOptions: GridOptions = { ...agGridDefaultOptions }
  return (
    <div>
      <h1>Test AG-Grid</h1>
      <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
        <AgGridReact {...gridOptions} rowData={[]} columnDefs={[]} onGridReady={onGridReady} />{' '}
      </div>
    </div>
  )
}

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
