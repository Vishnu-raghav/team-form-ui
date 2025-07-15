import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal, Button, Text } from "rizzui";
import "../App.css"
import { formSchema } from "../schema";
import { roles, warehouses } from "../data";
import EmailFieldArray from "./EmailFieldArray";
import SelectBox from "./SelectBox";

const defaultValues = {
  roles: "",
  warehouses: "",
  emails: [{ value: "" }],
};

const AddForm = ({ isOpen, onClose }) => {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    reset(defaultValues);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Add New Team Member"
      size="md"
      containerClass="max-w-lg w-full"
      className="!p-0 bg-white overflow-visible"
      closeOnOutsideClick={false}  
    >
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 p-6 bg-white rounded-lg"
        >
          <Text className="text-lg font-semibold">Team Details</Text>

          <div className="space-y-4">
            <SelectBox
              name="roles"
              label="Select Roles"
              options={roles}
              placeholder="Choose roles"
            />
            <SelectBox
              name="warehouses"
              label="Select Warehouses"
              options={warehouses}
              placeholder="Choose warehouses"
            />
            <EmailFieldArray />
          </div>

          <div className="pt-4 flex flex-col sm:flex-row justify-end gap-3 sm:gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button type="submit" className="w-full sm:w-auto">
              Submit
            </Button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default AddForm;
