import React, { useMemo, useState, useEffect } from 'react'
import { useTable } from 'react-table'

import { COLUMNS } from './colums'

const Table = () => {
    const [users, setUsers] = useState([])

    const fetchUserData = () => {
        fetch("https://mocki.io/v1/5ab1adcc-9f96-485a-9447-c0c90e2be801")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

    useEffect(() => {
        fetchUserData()
    }, [])
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => users, [users]);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data
        }
    )
    return (
        <div className='bg-gray-800 h-96 my-3 rounded-xl px-3 pt-3  lg:w-1/2 mx-2 overflow-y-scroll text-gray-400 ' >
            <div>
                
                <div className='text-xl text-yellow-600 flex  items-baseline '>
                    <i class="fi fi-rr-grid-alt"></i>
                    <h1 className='text-white text-2xl mx-2'>Employ Data </h1>
                </div>
            </div>
            <table {...getTableProps()} className='w-full text-sm text-left text-gray-500 overflow-y-scroll'>
                <thead className=' border-b border-gray-400'>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} className=''>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} className='px-6 py-3'>{column.render('Header')}</th>
                            ))}
                        </tr>))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()} className='border-b border-gray-400'>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()} className='px-6 py-3'>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table