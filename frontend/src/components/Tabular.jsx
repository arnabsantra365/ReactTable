import React, { useState } from "react";
import {
  useMaterialReactTable,
  MaterialReactTable,
} from "material-react-table";
import { Box, Stack,Paper,Tooltip,useMediaQuery } from '@mui/material';
import { colDef } from "./Columns";
import dataFetch from "../asset/data.json";
import Sidebars from "./Sidebars";


const Tabular = () => {
  const [btn, setBtn] = useState(true);
  const isMobile = useMediaQuery("(max-width: 740px)");
  const finalData = React.useMemo(() => dataFetch, []);
  const finalColumnDef = React.useMemo(() => colDef, []); //useMemo is a hook which reduces repetetive calculations,
  //if the state has not changed we don't need to calculate and return the old calculations
  
  const table = useMaterialReactTable({
    columns: finalColumnDef,
    data: finalData,

    columnFilterDisplayMode: "custom", //we will render our own filtering UI
    enableFacetedValues: true,
    muiFilterTextFieldProps: ({ column }) => ({
      label: `Filter by ${column.columnDef.header}`,
    }),
    
    enableGrouping: true,
    // enableColumnResizing: true,
    groupedColumnMode: 'reorder',
    // enableColumnFilterModes: true,
    initialState: {
        showColumnFilters: true,
        density: 'compact',
        expanded: true, //expand all groups by default
    //   grouping: ['category', 'subcategory'],
      pagination: { pageSize: 10, pageIndex: 0 },//sets the pagecount
      showGlobalFilter: false,//setting the search feature false first
      
    },
    //customize the MRT components
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 15],
    },
    paginationDisplayMode: "pages",
    enableFilters:false, // disables the filter button
    paginateExpandedRows:true,

    renderTopToolbarCustomActions:() => 
    (<div>
            <Tooltip title="Can only be used when ungrouped and not fullscreened">
            <button onClick={showFilters}>Filters</button>
            </Tooltip>
          </div>),
  });

  const showFilters = () => {
    setBtn((prev) => !prev);
  };

  return (
    <>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <MRT_GlobalFilterTextField table={table} />  
      </Box> */}

      <Stack direction={isMobile ? "column-reverse" : "row"}>
        <MaterialReactTable table={table}  />
        <Paper>
          {!btn && (
            <Sidebars table={table}/>
          )}
        </Paper>
      </Stack>
      {/* <Box>
        <MRT_TablePagination table={table} />
      </Box> */}
    </>
  );
};
export default Tabular;