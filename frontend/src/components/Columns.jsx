import { createColumnHelper } from "@tanstack/react-table";
const columnHelper = createColumnHelper();
export const colDef=[
    columnHelper.accessor('id', {
        header: 'ID⬆⬇', //It gives the heading
        cell: info => info.renderValue(), //it gives the values
        // footer: info => info.column.id,
    }),
    columnHelper.accessor('name', {
        header: 'Name⬆⬇',
        cell: info => info.renderValue(),
        // footer: info => info.column.id,
    }),
    columnHelper.accessor('category', {
        header: 'Category⬆⬇',
        cell: info => info.renderValue(),
        // footer: info => info.column.id,
    }),
    columnHelper.accessor('subcategory', {
        header: 'Subcategory⬆⬇',
        cell: info => info.renderValue(),
        // footer: info => info.column.id,
    }),
    columnHelper.accessor('createdAt', {
        header: 'createdAt⬆⬇',
        cell: info => info.renderValue(),
        // footer: info => info.column.id,
    }),
    columnHelper.accessor('updatedAt', {
        header: 'updatedAt⬆⬇',
        cell: info => info.renderValue(),
        // footer: info => info.column.id,
    }),
    columnHelper.accessor('price', {
        header: 'price⬆⬇',
        cell: info => info.renderValue(),
        // footer: info => info.column.id,
    }),
    columnHelper.accessor('sale_price', {
        header: 'sale_price⬆⬇',
        cell: info => info.renderValue(),
        // footer: info => info.column.id,
    }),
  ];
