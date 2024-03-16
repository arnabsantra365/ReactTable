
//This could be used to display the tables and data using only Tanstack library


import { createColumnHelper } from "@tanstack/react-table";
const columnHelper = createColumnHelper();
import moment from 'moment';
export const colDef=[
    columnHelper.accessor('id', {
        header: 'ID', //It gives the heading
        cell: info => info.renderValue(), //it gives the values `fklah${logo}`
        filterVariant:'text'
    }),
    columnHelper.accessor('name', {
        header: 'Name',
        cell: info => info.renderValue(),
        filterVariant:'text'
    }),
    columnHelper.accessor('category', {

        header: 'Category',
        cell: info => info.renderValue(),
        filterVariant: 'multi-select',
    }),
    columnHelper.accessor('subcategory', {

        header: 'Subcategory',
        cell: info => info.renderValue(),

        filterVariant: 'multi-select',
    }),
    columnHelper.accessor('createdAt', {
        header: 'createdAt',
        Cell: ({ cell }) => moment(new Date(cell.getValue())).format('Do MMM YYYY, h:mm a'),
        filterVariant:'text'

        
    }),
    columnHelper.accessor('updatedAt', {
        header: 'updatedAt',
        Cell: ({ cell }) => moment(new Date(cell.getValue())).format('Do MMM YYYY, h:mm a'),
        filterVariant:'text'
    }),
    columnHelper.accessor('price', {
        header: 'price',
        // cell: info => info.renderValue(),
        Cell: ({ cell }) =>
          cell.getValue().toLocaleString('en-US', {
            style: 'currency',
            currency: 'INR',
          }),
          filterVariant: 'range-slider',
          filterFn: 'betweenInclusive', 
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
        filterVariant:'text',
        // cell: info => info.renderValue(),
        // Cell: ({ cell }) =>
        // cell.getValue().toLocaleString('en-US', {
        //   style: 'currency',
        //   currency: 'INR',
        // }
        // ),
 
    }),
  ];
