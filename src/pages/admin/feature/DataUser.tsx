import FormModal from "@/components/element/FormModal";
import ModalsTable from "@/components/element/ModalsTable";
import DataTable from "@/components/element/TableData"
import { Admin, Auth } from "@/middlewares/api";
import { Store } from "@/store/store";
import { showToast } from "@/utils/alertUtils";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'phoneNumber', headerName: 'Phone', flex: 1 },
];

const DataUser = () => {
    const { token } = Store.getState();
    const [data, setData] = useState([])
    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);
    const initialValues = {
        name: '', password: '', email: '', phoneNumber: ''
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
            const response = await Admin.GetAllUser(token);
            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleAddUser = async (data : any) => {
        try {
            console.log('Data yang dikirim ke API:', data);
            const response = await Auth.Regis(data)

            if (response.status === 200) {
                GetData();
                showToast('success', 'berhasil menambahkan data user');
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        GetData();
    }, []);

    const validate = (values: any) => {
        const errors: any = {};
        if (!values.name) {
            errors.name = 'Name is required';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        }
        if (!values.phoneNumber) {
            errors.phoneNumber = 'No Handphone is required';
        }
        return errors;
    };


    return (
        <div className="flex flex-1 flex-col w-full gap-4  mb-10 font-poppins">
            <div className="h-14 w-full flex items-center justify-end">
                <ModalsTable icons={faAdd} title="Add new user" type="btn-table" >
                    <>
                        <h1>Add New User</h1>
                        <FormModal
                            initialValues={initialValues}
                            validate={validate}
                            onSubmit={handleAddUser}
                            fields={[
                                { title: "Name", name: "name", type: "text" },
                                { title: "Password", name: "password", type: "password" },
                                { title: "Email", name: "email", type: "email" },
                                { title: "Phone", name: "phoneNumber", type: "text" },
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

export default DataUser