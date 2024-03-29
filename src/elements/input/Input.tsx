import React, { FC } from "react";
import { TextInput } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";
import { InputProps } from "../../types";

const Input: FC<InputProps> = ({ name, label, props }) => {
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
          <TextInput
            ref={ref}
            label={label}
            placeholder={
              props?.placeholder ? props?.placeholder : `Enter ${label}`
            }
            error={error?.message}
            onBlur={onBlur}
            value={value}
            onChange={(newValue) => onChange(newValue)}
            autoComplete="off"
            {...props}
          />
        );
      }}
    />
  );
};

export default Input;
