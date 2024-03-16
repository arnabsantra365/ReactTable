import React from "react";
import { useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_ExpandAllButton,
} from 'material-react-table';
import { Box, Stack } from '@mui/material';
import { colDef } from "./Columns";
import dataFetch from "../asset/data.json";

const Grouping = () => {
    const finalData = React.useMemo(() => dataFetch, []);
  const finalColumnDef = React.useMemo(() => colDef, []);

  const table = useMaterialReactTable({
    columns:finalColumnDef,
    data:finalData,
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

      },
    },
    enableGrouping: true,
    enableColumnResizing: true,
    groupedColumnMode: 'remove',
    initialState: {
      density: 'compact',
      expanded: true, //expand all groups by default
      grouping: ['category', 'subcategory'], //an array of columns to group by by default (can be multiple)
      pagination: { pageIndex: 0, pageSize: 10 },
      
    },
  });

  return <MaterialReactTable table={table} />;
};

export default Grouping;