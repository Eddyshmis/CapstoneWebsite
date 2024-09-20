import React, { ReactNode } from 'react'
import Table from 'react-bootstrap/Table';

interface TableProps{
    tableHead:string[];
    children:ReactNode;
    
}

const Tables = ({tableHead,children}:TableProps) => {
  return (
    <Table>
        <thead>
            <tr>
                {tableHead.map((item)=>(<th>{item}</th>))}
            </tr>
        </thead>
        <tbody>
            {children}
        </tbody>
    </Table>
  )
}

export default Tables