import { Form, Formik } from "formik";
import InputFormik from "@/components/element/InputFormik";

type Field = {
    name: string;
    title: string;
    type: string;
};

interface FormModalProps {
    initialValues: Record<string, any>;
    validate: (values: Record<string, any>) => Record<string, string>;
    onSubmit: (values: any, actions: { resetForm: () => void }) => void;
    fields: Field[];
}

const FormModal: React.FC<FormModalProps> = ({ 
    initialValues, 
    validate, 
    onSubmit, 
    fields 
}) => {

    return (
        <Formik<Record<string, any>>
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
        >
            {({ errors }) => (
                <Form className="flex flex-col gap-2">
                    {fields.map((field) => (
                        <div key={field.name}>
                            <InputFormik title={field.title} name={field.name} type={field.type} />
                            {typeof errors[field.name] === 'string' && (
                                <div className="text-red-500 text-[10px]">{errors[field.name] as string}</div>
                            )}

                        </div>
                    ))}
                    <button type="submit" className="w-full h-10 bg-primary-color hover:bg-hover-color rounded my-5 text-white">
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default FormModal;
