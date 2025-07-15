
import { Controller, useFormContext } from "react-hook-form";
import { Select } from "rizzui";

const SelectBox = ({ name, label, options, placeholder }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const selectedOption =
          options.find((opt) => opt.value === field.value) || null;

        return (
          <Select
            {...field}
            label={label}
            placeholder={placeholder}
            options={options}
            value={selectedOption}
            onChange={(option) => field.onChange(option?.value || "")}
            error={errors?.[name]?.message}
            dropdownClassName="z-[9999]" 
            className="w-full"
          />
        );
      }}
    />
  );
};

export default SelectBox;
