import { columns } from "./columns";
import { DataTable } from "./data-table";
import { DataTableItemsProps } from "./DataTableItems.types";

export const DataTableItems = (props: DataTableItemsProps) => {
  const { elements } = props;
  return (
    <div className="p-10">
      <DataTable columns={columns} data={elements} />
    </div>
  );
};
