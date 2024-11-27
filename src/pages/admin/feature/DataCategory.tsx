import ModalsTable from "@/components/element/ModalsTable";
import DataTable from "@/components/element/TableData"
import { Category } from "@/middlewares/api";
import { Store } from "@/store/store";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const columns: GridColDef[] = [
    { field: 'nameCategory', headerName: 'Name', flex: 1 },
];

const DataCategory = () => {
    const { token } = Store.getState();
    const [data, setData] = useState([]);
    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

    const handleSelectionChange = (newSelection: GridRowSelectionModel) => {
        setRowSelectionModel(newSelection);
        if (newSelection.length === 1) {
            const selectedId = newSelection[0];
            console.log(selectedId);
        }
    };

    const GetData = async () => {
        try {
            const response = await Category.GetAllCategory(token);
            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        GetData();
    }, []);


    return (
        <div className="flex flex-1 flex-col w-full gap-4  mb-10 font-poppins">
            <div className="h-14 w-full flex items-center justify-end">
                <ModalsTable icons={faAdd} title="Add New Category" type="btn-table">
                    <>
                        <h1>Add New Category</h1>
                        
                    </>
                </ModalsTable>
            </div>
            <div className="w-full flex flex-1">
                <DataTable 
                    rows={data}
                    columns={columns}
                    onRowSelectionChange={handleSelectionChange}
                    rowSelectionModel={rowSelectionModel}
                />
            </div>
        </div>
    )
}

export default DataCategory