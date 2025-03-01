// src/components/ui/table.tsx
import {
  TableProps,
  TableHeaderProps,
  TableBodyProps,
  TableFooterProps,
  TableRowProps,
  TableHeadProps,
  TableCellProps,
  TableCaptionProps
} from "./types";

const Table = ({ className = "", children, ...props }: TableProps) => (
  <div className="relative w-full overflow-auto">
    <table
      className={`w-full caption-bottom text-sm ${className}`}
      {...props}
    >
      {children}
    </table>
  </div>
);

const TableHeader = ({ className = "", children, ...props }: TableHeaderProps) => (
  <thead className={`border-b ${className}`} {...props}>
    {children}
  </thead>
);

const TableBody = ({ className = "", children, ...props }: TableBodyProps) => (
  <tbody
    className={`divide-y ${className}`}
    {...props}
  >
    {children}
  </tbody>
);

const TableFooter = ({ className = "", children, ...props }: TableFooterProps) => (
  <tfoot
    className={`bg-primary text-primary-foreground font-medium ${className}`}
    {...props}
  >
    {children}
  </tfoot>
);

const TableRow = ({ className = "", children, ...props }: TableRowProps) => (
  <tr
    className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className}`}
    {...props}
  >
    {children}
  </tr>
);

const TableHead = ({ className = "", children, ...props }: TableHeadProps) => (
  <th
    className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
    {...props}
  >
    {children}
  </th>
);

const TableCell = ({ className = "", children, ...props }: TableCellProps) => (
  <td
    className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}
    {...props}
  >
    {children}
  </td>
);

const TableCaption = ({ className = "", children, ...props }: TableCaptionProps) => (
  <caption
    className={`mt-4 text-sm text-muted-foreground ${className}`}
    {...props}
  >
    {children}
  </caption>
);

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};