import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Select } from "@mantine/core";
import { InputSelectProps } from "@r3dm4st3r/react-hook-form/types/index.type";

const InputSelect: FC<InputSelectProps> = ({ label, name, data, props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <Select
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

export default InputSelect;
