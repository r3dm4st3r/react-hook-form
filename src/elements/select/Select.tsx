import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Select as MantineSelect } from "@mantine/core";
import { ISelect } from "../../types";

const Select: FC<ISelect> = ({ label, name, data, props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <MantineSelect
          ref={ref}
          label={label}
          data={data}
          value={value}
          placeholder={
            props?.placeholder ? props?.placeholder : `Select ${label}`
          }
          onChange={(newValue) => {
            onChange(newValue);
          }}
          error={error?.message}
          {...props}
        />
      )}
    />
  );
};

export default Select;
