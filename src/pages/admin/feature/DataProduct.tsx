import ModalsTable from "@/components/element/ModalsTable";
import DataTable from "@/components/element/TableData"
import { Category, Product } from "@/middlewares/api";
import { Store } from "@/store/store";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const columns: GridColDef[] = [
    {
        field: 'image',
        headerName: 'Image',
        flex: 1,
        renderCell: (params) => (
             <img
                src={params.value}
                alt={params.row.name}
                style={{ width: 50, height: 50, objectFit: 'cover', borderRadius: '4px' }}
            />
        ),
    },
    { field: 'nameProduct', headerName: 'Name', flex: 1 },
    { field: 'about', headerName: 'About', flex: 1 },
    { field: 'stoks', headerName: 'Stock', flex: 1 },
    { field: 'price', headerName: 'Price', flex: 1 },
    { field: 'nameCategory', headerName: 'Category', flex: 1 },
];

const DataProduct = () => {
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
            const response = await Product.GetAllProduct(token);
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
                <ModalsTable icons={faAdd} title="Add New Product" type="btn-table">
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

export default DataProduct