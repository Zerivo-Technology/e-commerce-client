import FormModal from "@/components/element/FormModal";
import ModalsTable from "@/components/element/ModalsTable";
import DataTable from "@/components/element/TableData"
import { Category } from "@/middlewares/api";
import { Store } from "@/store/store";
import { showConfirmDialog, showDialog, showToast } from "@/utils/alertUtils";
import { faAdd, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const columns: GridColDef[] = [
    { field: 'nameCategory', headerName: 'Name', flex: 1 },
];

const DataCategory = () => {
    const { token } = Store.getState();
    const [data, setData] = useState([]);
    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);
    const initialValues = {
        nameCategory : ''
    }

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

    const CreateData = async (data : any) => {
        try {
            const response = await Category.CreateCategory(data, token);

            if (response.status === 200) {
                showToast('success', 'Berhasil menambahkan category');
                GetData();

            }
        } catch (error) {
            console.log(error);
        }
    }

    const DeleteData = async (ids: string[]) => {
        try {
            // Hapus data secara paralel untuk efisiensi
            await Promise.all(
                ids.map(async (id) => {
                    await Category.DeleteCategory(id, token); // API Delete per ID
                })
            );
    
            showToast('success', 'Berhasil menghapus kategori yang dipilih.');
            GetData(); // Refresh data setelah dihapus
            setRowSelectionModel([]); // Reset selection
        } catch (error) {
            console.log(error);
            showToast('error', 'Gagal menghapus kategori');
        }
    };

    useEffect(() => {
        GetData();
    }, []);

    const validate = (values: any) => {
        const errors: any = {};
        if (!values.nameCategory) {
            errors.nameCategory = 'Name Category is required';
        }
        return errors;
    };

    const handleDelete =  async () => {
        if (rowSelectionModel.length === 0) {
            showDialog('error', 'Error', "Pilih salah satu data")
        } else {
            const confirmed = await showConfirmDialog(
                'Konfirmasi',
                `Apakah Anda yakin ingin menghapus ${rowSelectionModel.length} kategori?`
            );

            if (confirmed) {
                await DeleteData(rowSelectionModel as string[]);
            }
        }
    }

    // const UpdateData = async (id: any, data: any) => {
    //     try {
    //         const response = await Category.UpdateCategory(id, data, token);
    //         if (response.status === 200) {
    //             showToast('success', 'Berhasil memperbarui kategori');
    //             GetData();
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         showToast('error', 'Gagal memperbarui kategori');
    //     }
    // };

    const handleAdd = async (values: any, { resetForm }: { resetForm: () => void }) => {
        try {
            await CreateData(values);  
            resetForm();  
        } catch (error) {
            console.log(error);
        }
    };

    

    return (
        <div className="flex flex-1 flex-col w-full gap-4  mb-10 font-poppins">
            <div className="h-14 w-full flex items-center justify-end gap-2">
                <div 
                    onClick={handleDelete}
                    className="h-10 w-10 bg-primary-color rounded hover:bg-hover-color cursor-pointer flex items-center justify-center text-white text-sm">
                    <FontAwesomeIcon icon={faTrash} />
                </div>
                <div className="h-10 w-10 bg-primary-color rounded hover:bg-hover-color cursor-pointer flex items-center justify-center text-white text-sm">
                    <FontAwesomeIcon icon={faPen} />
                </div>

                <ModalsTable icons={faAdd} title="Add New Category" type="btn-table">
                    <>
                        <h1>Add New Category</h1>
                        <FormModal 
                            initialValues={initialValues}
                            validate={validate}
                            onSubmit={handleAdd}
                            fields={[
                                { title: "Name Category", name: "nameCategory", type: "text" },
                            ]}
                        />
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