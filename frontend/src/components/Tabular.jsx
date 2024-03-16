import React, { useState } from "react";
import {
  useMaterialReactTable,
  MaterialReactTable,
  MRT_TableContainer,
  MRT_TableHeadCellFilterContainer,
  MRT_GlobalFilterTextField,
  MRT_TableBodyCellValue,
  MRT_TablePagination,
  MRT_ExpandAllButton,
  
  flexRender,
} from "material-react-table";
import { Box, Paper, Stack, useMediaQuery } from "@mui/material";
import { colDef } from "./Columns";
import dataFetch from "../asset/data.json";

const Tabular = () => {
  const [btn, setBtn] = useState(true);
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const finalData = React.useMemo(() => dataFetch, []);
  const finalColumnDef = React.useMemo(() => colDef, []); //useMemo is a hook which reduces repetetive calculations,
  //if the state has not changed we don't need to calculate and return the old calculations
  
  const table = useMaterialReactTable({
    columns: finalColumnDef,
    data: finalData,

    displayColumnDefOptions: {
        'mrt-row-expand': {
          Header: () => (
            <Stack direction="row" alignItems="center">
              <MRT_ExpandAllButton table={table} />
              <Box>Groups</Box>
            </Stack>
          ),
          GroupedCell: ({ row, table }) => {
            const { grouping } = table.getState();
            return row.getValue(grouping[grouping.length - 1]);
          },
          enableResizing: true,
          muiTableBodyCellProps: ({ row }) => ({
            sx: (theme) => ({
              color:
                row.depth === 0
                  ? theme.palette.primary.main
                  : row.depth === 1
                    ? theme.palette.secondary.main
                    : undefined,
            }),
          }),
          size: 200,
        },
      },


    columnFilterDisplayMode: "custom", //we will render our own filtering UI
    enableFacetedValues: true,
    muiFilterTextFieldProps: ({ column }) => ({
      label: `Filter by ${column.columnDef.header}`,
    }),

    enableGrouping: true,
    // enableColumnResizing: true,
    groupedColumnMode: 'remove',

    initialState: {
        density: 'compact',
        expanded: true, //expand all groups by default
      grouping: ['category', 'subcategory'],
      pagination: { pageSize: 10, pageIndex: 0 },//sets the pagecount
      showGlobalFilter: false,//setting the search feature false first
      
    },
    //customize the MRT components
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 15],
    },
    paginationDisplayMode: "pages",
  });

  const showFilters = () => {
    setBtn((prev) => !prev);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* <MRT_GlobalFilterTextField table={table} /> */}
        
        
        <button onClick={showFilters}>Show</button>
      </Box>

      <Stack direction={isMobile ? "column-reverse" : "row"}>
        <MaterialReactTable table={table}  />
        <Paper>
          {!btn && (
            <Stack p="8px" gap="8px">
              {table.getLeafHeaders().map((header) => (
                <MRT_TableHeadCellFilterContainer
                  key={header.id}
                  header={header}
                  table={table}
                  in
                />
              ))}
            </Stack>
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
