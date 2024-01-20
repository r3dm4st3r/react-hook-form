import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { NumberInput as MantineNumberInput } from "@mantine/core";
import { INumberInput } from "../../types";

const NumberInput: FC<INumberInput> = ({ name, label, props }) => {
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
          <MantineNumberInput
            ref={ref}
            value={value}
            label={label}
            onBlur={onBlur}
            placeholder={
              props?.placeholder ? props?.placeholder : `Enter ${label}`
            }
            error={error?.message}
            onChange={(newValue) => onChange(newValue)}
            {...props}
          />
        );
      }}
    />
  );
};

export default NumberInput;
