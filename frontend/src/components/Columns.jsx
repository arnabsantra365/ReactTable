import { createColumnHelper } from "@tanstack/react-table";
const columnHelper = createColumnHelper();
import moment from 'moment';
export const colDef=[
    columnHelper.accessor('id', {
        header: 'ID', //It gives the heading
        cell: info => info.renderValue(), //it gives the values `fklah${logo}`
        // footer: info => info.column.id,
    }),
    columnHelper.accessor('name', {
        header: 'Name',
        cell: info => info.renderValue(),
        // footer: info => info.column.id,
    }),
    columnHelper.accessor('category', {
        accessorKey:'category',
        header: 'Category',
        cell: info => info.renderValue(),
        // footer: info => info.column.id,
        filterVariant: 'multi-select',
    }),
    columnHelper.accessor('subcategory', {
        accessorKey:'subcategory',
        header: 'Subcategory',
        cell: info => info.renderValue(),
        // footer: info => info.column.id,
        filterVariant: 'multi-select',
    }),
    columnHelper.accessor('createdAt', {
        header: 'createdAt',
        Cell: ({ cell }) => moment(new Date(cell.getValue())).format('Do MMM YYYY, h:mm a'),
        // accessorFn: (originalRow) => new Date(originalRow.createdAt),
        // filterVariant: 'time-range',
        // Cell: ({ cell }) => cell.getValue().toLocaleTimeString(),

        
    }),
    columnHelper.accessor('updatedAt', {
        header: 'updatedAt',
        Cell: ({ cell }) => moment(new Date(cell.getValue())).format('Do MMM YYYY, h:mm a'),
        // footer: info => info.column.id,
    }),
    columnHelper.accessor('price', {
        header: 'price',
        // cell: info => info.renderValue(),
        // footer: info => info.column.id,
        Cell: ({ cell }) =>
          cell.getValue().toLocaleString('en-US', {
            style: 'currency',
            currency: 'INR',
          }),
          filterVariant: 'range-slider',
          filterFn: 'betweenInclusive', // default (or between)
        muiFilterSliderProps: {
          marks: true,
          step: 1,
          valueLabelFormat: (value) =>
            value.toLocaleString('en-US', {
              style: 'currency',
              currency: 'INR',
            }),
        },
        
    }),
    columnHelper.accessor('sale_price', {
        header: 'sale_price',
        // cell: info => info.renderValue(),
        // Cell: ({ cell }) =>
        // cell.getValue().toLocaleString('en-US', {
        //   style: 'currency',
        //   currency: 'INR',
        // }
        // ),
 
    }),
  ];
