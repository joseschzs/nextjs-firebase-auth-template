import { TablePagination } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

interface PaginationWithEventsProps {
  totalRows: number;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function PaginationWithEvents({
  totalRows,
  currentPage,
  itemsPerPage,
  onPageChange,
  onRowsPerPageChange,
}: Readonly<PaginationWithEventsProps>) {
  const t = useTranslations();

  return (
    <TablePagination
      sx={{
        ".MuiToolbar-root": {
          paddingX: "8px",
          fontSize: "12px",
        },
        ".MuiTablePagination-toolbar": {
          minHeight: 56,
        },
        ".MuiTablePagination-select": {
          py: 0.5,
          px: 1,
          borderColor: "neutral.400",
          borderRadius: 2,
          fontSize: 12,
        },
        ".MuiTablePagination-selectLabel": {
          fontSize: 12,
        },
        ".MuiTablePagination-displayedRows": {
          fontSize: 12,
        },
        ".MuiTablePagination-actions": {
          ml: 4.5,
          display: "flex",
          columnGap: 1,
        },
      }}
      slotProps={{
        select: {
          variant: "outlined",
        },
      }}
      disabled={totalRows === 0}
      rowsPerPageOptions={[
        5,
        10,
        20,
        40,
        { value: -1, label: t("Pagination.all") },
      ]}
      component="div"
      count={totalRows}
      rowsPerPage={itemsPerPage}
      page={currentPage}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
      labelRowsPerPage={t("Pagination.rows_per_page")}
      labelDisplayedRows={({ from, to, count }) =>
        `${from}-${to} ${t("Pagination.of")} ${count !== -1 ? count : `${t("Pagination.more_than")} ${to}`}`
      }
      getItemAriaLabel={(type: string) =>
        type === "previous"
          ? t("Pagination.go_to_previous_page")
          : t("Pagination.go_to_next_page")
      }
    />
  );
}
