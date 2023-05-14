import * as React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Data = {
  title: string;
  type: string;
};

const columnHelper = createColumnHelper<Data>();

const columns = [
  columnHelper.accessor((row) => row.title, {
    id: "title",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>title</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.type, {
    id: "type",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>type</span>,
    footer: (info) => info.column.id,
  }),
];

export default function BasicTable({ thisData }: any) {
 
  const [data, setData] = React.useState(thisData);
  const rerender = React.useReducer(() => ({}), {})[1];

  React.useEffect(() => {
    setData(thisData);
  }, [thisData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button>
    </div>
  );
}
