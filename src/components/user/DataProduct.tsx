import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faPen, faPrint, faTrash } from "@fortawesome/free-solid-svg-icons";
import { GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import DataTable from "../TableData";
import NavBottom from "./NavBottom";
import ModalsTable from "./ModalsTable";
import { Formik, Form } from "formik";
import InputFormik from "../InpuFormik";
import { showConfirmDialog, showDialog, showToast } from "@/utils/alertUtils";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ImageFormik from "../ImageFormik";
import { Product } from "@/middlewares/api-product";
import { SelectCategory } from "../SelectCategory";

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
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'description', headerName: 'Description', flex: 1 },
    { field: 'price', headerName: 'Price', flex: 1 },
    { field: 'category', headerName: 'Category', flex: 1 },
];

const DataProduct = () => {
    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);
    const [initialValues, setInitialValues] = useState({
        name: '',
        description: '',
        image: null,
        price: '',
        categoryId: ''
    });
    const [data, setData] = useState([]);
    const token = useSelector((state: RootState) => state.auth.token);

    const GetData = async () => {
        try {
            const response = await Product.GetAllProducts();
            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const GetProductById = async (id: any) => {
        try {
            const response = await Product.GetProductById(id);
            const product = response.data.data[0];
            setInitialValues({
                name: product.name || '',
                description: product.description || '',
                image: null,
                price: product.price || null,
                categoryId: product.categoryId || ''
            });
        } catch (error) {
            console.log("Error fetching product data:", error);
        }
    };

    const DeleteProduct = async (id: any) => {
        try {
            const response = await Product.DeleteProduct(id);
            return response.status === 200;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetData();
    }, []);

    const addData = async (data: typeof initialValues) => {
        try {
            const response = await Product.CreateProduct(data, token);
            if (response.status === 200) {
                showToast('success', 'Data added successfully');
                GetData();
                setRowSelectionModel([]);
            }
        } catch (error: any) {
            if (error.response.status === 401) {
                showDialog('error', 'Duplicate Entry', 'The email is already registered');
            } else {
                showDialog('error', 'Server Error', 'Server error occurred');
                console.log(error);
            }
        }
    };

    const updateData = async (data: any) => {
        try {
            const selectedId = rowSelectionModel[0];
            const payload = {
                name: data.name || '',
                description: data.description || '',
                image: data.image || null,
                price: data.price || null,
                categoryId: data.categoryId || ''
            };
            const response = await Product.UpdateProduct(selectedId, payload);
            if (response.status === 200) {
                GetData();
                showToast('success', 'Data updated successfully');
                setRowSelectionModel([]);
            }
        } catch (error) {
            console.log("Error:", error);
        }
    };

    const handleSelectionChange = (newSelection: GridRowSelectionModel) => {
        setRowSelectionModel(newSelection);
        if (newSelection.length === 1) {
            GetProductById(newSelection[0]);
        }
    };

    const handleClearSelection = () => {
        setRowSelectionModel([]);
        setInitialValues({
            name: '',
            description: '',
            image: null,
            price: '',
            categoryId: ''
        });
    };

    const validate = (values: any) => {
        const errors: any = {};
        if (!values.name) {
            errors.name = 'Name is required';
        }
        if (!values.description) {
            errors.description = 'Description is required';
        }
        if (!values.image) {
            errors.image = 'Image is required';
        }
        if (!values.price) {
            errors.price = 'Price is required';
        }
        return errors;
    };

    const handleDelete = async () => {
        const isConfirmed = await showConfirmDialog('Delete Confirmation', 'Are you sure you want to delete selected items?');
        if (!isConfirmed) return;

        try {
            const deleteResults = await Promise.all(rowSelectionModel.map(async (id) => {
                return await DeleteProduct(id);
            }));

            if (deleteResults.includes(true)) {
                showToast('success', 'Data deleted successfully');
                GetData();
            } else {
                showDialog('error', 'Deletion Failed', 'No data was deleted');
            }

            handleClearSelection();
        } catch (error) {
            console.log("Error during deletion:", error);
            showDialog('error', 'Deletion Failed', 'An error occurred while deleting data');
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="w-full h-20 md:h-10 flex items-center justify-end md:flex-row flex-col px-4 my-4 gap-3">
                <ModalsTable icons={faAdd} title="New Food" type="btn-table">
                    <>
                        <p className="font-semibold">Add New Product</p>
                        <Formik
                            enableReinitialize={true}
                            initialValues={initialValues}
                            validate={validate}
                            onSubmit={(values, { resetForm }) => {
                                resetForm();
                                addData(values);
                                console.log(values)
                            }}
                        >
                            {({ errors }) => (
                                <Form className="flex flex-col gap-2">
                                    <ImageFormik name="image" />
                                    {errors.image && <div className="text-red-500 text-xs">{errors.image}</div>}
                                    <InputFormik title="Name" name="name" type="text" />
                                    {errors.name && <div className="text-red-500 text-xs">{errors.name}</div>}
                                    <InputFormik title="Description" name="description" type="text" />
                                    {errors.description && <div className="text-red-500 text-xs">{errors.description}</div>}
                                    <InputFormik title="Price" name="price" type="text" />
                                    {errors.price && <div className="text-red-500 text-xs">{errors.price}</div>}
                                    <SelectCategory />
                                    <button type="submit" className="w-full h-10 bg-blue-500 rounded my-5 text-white">Add</button>
                                </Form>
                            )}
                        </Formik>
                    </>
                </ModalsTable>
            </div>

            <div className="w-full flex-1 overflow-auto" style={{ maxHeight: '710px' }}>
                <DataTable 
                    rows={data}
                    columns={columns}
                    onRowSelectionChange={handleSelectionChange}
                    rowSelectionModel={rowSelectionModel}
                />
            </div>


            {rowSelectionModel.length > 0 && (
                <NavBottom
                    selectedItemsCount={rowSelectionModel.length}
                    onClearSelection={handleClearSelection}
                >
                    {rowSelectionModel.length === 1 && (
                        <ModalsTable icons={faPen} title="Edit">
                            <>
                                <p>Update Product</p>
                                <Formik
                                    enableReinitialize={true}
                                    initialValues={initialValues}
                                    validate={validate}
                                    onSubmit={(values, { resetForm }) => {
                                        resetForm();
                                        updateData(values);
                                        console.log(values);
                                    }}
                                >
                                    <Form className="flex flex-col gap-2">
                                        <ImageFormik name="image" />
                                        <InputFormik title="Name" name="name" type="text" />
                                        <InputFormik title="Price" name="price" type="text" />
                                        <InputFormik title="Description" name="description" type="text" />
                                        <SelectCategory  />
                                        <button type="submit" className="w-full h-10 bg-blue-500 rounded my-5 text-white">Update</button>
                                    </Form>
                                </Formik>
                            </>
                        </ModalsTable>
                    )}
                    <div className="px-4 gap-3 h-8 rounded-full bg-[#5d5c72] text-white flex items-center justify-center text-sm cursor-pointer font-medium hover:opacity-70">
                        <FontAwesomeIcon icon={faPrint} />
                        <p>Print</p>
                    </div>
                    <div 
                        onClick={handleDelete}
                        className="px-4 gap-3 h-8 rounded-full bg-red-800 text-white flex items-center justify-center text-sm cursor-pointer font-medium hover:opacity-70"
                    >
                        <FontAwesomeIcon icon={faTrash} />
                        <p>Delete</p>
                    </div>
                </NavBottom>
            )}
        </div>
    );
};

export default DataProduct;
