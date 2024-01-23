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
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => {
        return (
          <MantineMultiSelect
            ref={ref}
            label={label}
            placeholder={
              props?.placeholder
                ? props?.placeholder
                : label
                  ? `Select ${label}`
                  : "Select"
            }
            error={error?.message}
            onBlur={onBlur}
            value={value}
            data={data}
            hidePickedOptions
            onChange={(newValue) => onChange(newValue)}
            {...props}
          />
        );
      }}
    />
  );
};

export default MultiSelect;
