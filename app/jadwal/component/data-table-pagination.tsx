import { Table } from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationFirst, PaginationLink, PaginationLast } from "@/components/ui/pagination";
interface DataTablePaginationProps<TData> {
  table: Table<TData>
}

export function DataTablePagination<TData>({
  table
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between px-2 my-2">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium">Rows per page</p>
        <Select
          value={`${table.getState().pagination.pageSize}`}
          onValueChange={(value) => {
            table.setPageSize(Number(value))
          }}
        >
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={table.getState().pagination.pageSize} />
          </SelectTrigger>
          <SelectContent side="top">
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-sm font-medium"> from  {table.getFilteredRowModel().rows.length} Rows </p>

      </div>
      <div className="flex w-[100px]  items-center justify-end text-sm font-medium">
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </div>
      <div className="flex items-center space-x-2">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationFirst onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()} />
            </PaginationItem>
            <PaginationItem className="space-x-1">
              <PaginationLink className={cn(table.getCanPreviousPage() ? "" : 'hidden')}
                onClick={() => table.previousPage()}>
                {table.getState().pagination.pageIndex}
              </PaginationLink>
              <PaginationLink
                disabled={true}>
                {table.getState().pagination.pageIndex + 1}
              </PaginationLink>
              <PaginationLink className={cn(table.getCanNextPage() ? "" : 'hidden')}
                onClick={() => table.nextPage()}>
                {table.getState().pagination.pageIndex + 2}
              </PaginationLink>

            </PaginationItem>
            <PaginationItem>
              <PaginationLast onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()} />
            </PaginationItem>
          </PaginationContent >
        </Pagination>
      </div>
    </div >
  )
}