import React, { FC } from "react";
import { TextInput } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";
import { InputTextI } from "@r3dm4st3r/react-hook-form/types/index.type";

const InputText: FC<InputTextI> = ({ name, label, props }) => {
  const { control } = useFormContext();
  if (!control) {
    throw new Error(
      "React Hook Form context not found. Make sure you are using components within a Form component.",
    );
  }

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

export default InputText;
