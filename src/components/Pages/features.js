import React, { useEffect, useState, useRef } from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';
const Features = () => {
    const [rowData, setrowData] = useState([])
    const gridRef = useRef(null)
    useEffect(() => {
        axios.get('https://www.ag-grid.com/example-assets/row-data.json')
            .then((res) => {
                let data = res.data
                console.log(data)
                setrowData(data)
            })
    }, [])
    const onButtonClick = (e) => {
        const selectedNodes = gridRef.current.api.getSelectedNodes()
        const selectedData = selectedNodes.map(node => node.data);
        const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model}`).join(', ')
        alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }
    // const rowData = [
    //     {make: "Toyota", model: "Celica", price: 35000},
    //     {make: "Ford", model: "Mondeo", price: 32000},
    //     {make: "Porsche", model: "Boxter", price: 72000}
    // ];

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
            <button className="bg-indigo-600  text-white py-2 px-6 rounded-full text-xl mt-4 " onClick={onButtonClick}>Get selected rows</button>
            <AgGridReact ref={gridRef}
                rowData={rowData} rowSelection="multiple" className="mt-5">
                {/* <AgGridColumn field="make" sortable={true} filter={true}></AgGridColumn> */}
                <AgGridColumn field="make" sortable={true} filter={true} checkboxSelection={true}></AgGridColumn>
                <AgGridColumn field="model" sortable={true} filter={true}></AgGridColumn>
                <AgGridColumn field="price" sortable={true} filter={true}></AgGridColumn>
            </AgGridReact>
        </div>
    );
}

export default Features
