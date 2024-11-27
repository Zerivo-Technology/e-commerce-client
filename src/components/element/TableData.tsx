// components/DataTable.tsx
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { Paper } from "@mui/material";

interface DataTableProps {
  columns: GridColDef[];
  rows: any[];
  onRowSelectionChange: (selection: GridRowSelectionModel) => void;
  rowSelectionModel: GridRowSelectionModel;
}

const DataTable = ({ columns, rows, onRowSelectionChange, rowSelectionModel }: DataTableProps) => {
  return (
    <Paper sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        onRowSelectionModelChange={onRowSelectionChange}
        rowSelectionModel={rowSelectionModel}
      />
    </Paper>
  );
};

export default DataTable;
