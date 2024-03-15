import React from "react";
import { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { colDef } from "./Columns";
import dataFetch from "../asset/data.json";

const baseTable = () => {
  const [sorting, setSorting] = useState([]);
  const[isfilter,setisFilter]=useState('');
  const finalData = React.useMemo(() => dataFetch, []);
  const finalColumnDef = React.useMemo(() => colDef, []); //useMemo is a hook which reduces repetetive calculations, 
  //if the state has not changed we don't need to calculate and return the old calculations
  const table = useReactTable({
    data:finalData,
    columns: finalColumnDef,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      sorting,
      globalFilter:isfilter,
    },
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setisFilter,
  });
  return (
    <div className="w3-container">
      <input type="text" value={isfilter} onChange={(e)=>setisFilter(e.target.value)}/>
      <table className="w3-table-all w3-card-4 w3-hoverable">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} 
                    onClick={header.column.getToggleSortingHandler()}>
                      {header.isPlaceholder
                        ? null
                        : <div>
                          {
                            flexRender(
                              header.column.columnDef.header,//.colum.columDef is the syntax
                              header.getContext()
                              
                            )
                          }
                          {
                        { asc: "", desc: "" }[
                          header.column.getIsSorted() ?? null
                        ]
                      }
                        </div>
                        }
                           
                    </th>
                  );
                })}
              </tr>
              
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default baseTable;
