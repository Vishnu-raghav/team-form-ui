import { useFormContext, useFieldArray } from "react-hook-form";
import { Input, Button } from "rizzui";

const EmailFieldArray = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "emails",
  });

  return (
    <div>
      <label className="block font-medium mb-1">Emails</label>
      {fields.map((field, index) => (
        <div key={field.id} className="flex gap-2 mb-2">
          <Input
            {...register(`emails.${index}.value`)}
            placeholder="Enter email"
            error={errors.emails?.[index]?.value?.message}
          />
          {fields.length > 1 && (
            <Button type="button" color="danger" onClick={() => remove(index)}>
              Remove
            </Button>
          )}
        </div>
      ))}

      <Button type="button" onClick={() => append({ value: "" })}>
        Add Email
      </Button>
    </div>
  );
};

export default EmailFieldArray;
