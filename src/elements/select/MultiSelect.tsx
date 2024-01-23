import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { MultiSelect as MantineMultiSelect } from "@mantine/core";
import { IMultiSelect } from "../../types";

const MultiSelect: FC<IMultiSelect> = ({ label, name, data, props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
        return (
          <MantineMultiSelect
            ref={ref}
            label={label}
            data={data}
            value={value ?? []}
            placeholder={
              props?.placeholder
                ? props?.placeholder
                : label
                  ? `Select ${label}`
                  : "Select"
            }
            onChange={(newValue) => onChange(newValue)}
            error={error?.message}
            {...props}
          />
        );
      }}
    />
  );
};

export default MultiSelect;
