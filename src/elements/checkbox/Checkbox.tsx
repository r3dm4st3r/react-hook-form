import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Checkbox as MantineCheckbox } from "@mantine/core";
import { ICheckbox } from "../../types";

const Checkbox: React.FC<ICheckbox> = ({ name, label, props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <MantineCheckbox
          ref={ref}
          onBlur={onBlur}
          label={label}
          checked={value}
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

export default Checkbox;
