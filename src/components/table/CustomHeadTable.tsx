import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useTranslations } from "next-intl";

export interface TableHeadCellInterface {
  id: string;
  label: string;
  align: "left" | "center" | "right" | "justify" | "inherit" | undefined;
  width?: string;
  hidden?: boolean;
}

interface CustomHeadTableProps {
  checkHeadCell?: boolean;
  headCells: TableHeadCellInterface[];
}

export function CustomHeadTable({
  checkHeadCell = false,
  headCells,
}: Readonly<CustomHeadTableProps>) {
  const t = useTranslations();

  return (
    <TableHead>
      <TableRow>
        {checkHeadCell && <TableCell padding="checkbox" />}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            width={headCell.width}
            hidden={headCell.hidden}
          >
            {t(headCell.label)}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
