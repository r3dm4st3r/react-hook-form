import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ColorInput as MantineColorInput } from "@mantine/core";
import { IColorInput } from "../../types";

const ColorInput: FC<IColorInput> = ({ name, props, label }) => {
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
          <MantineColorInput
            ref={ref}
            value={value}
            label={label}
            onBlur={onBlur}
            error={error?.message}
            onChange={(newValue) => onChange(newValue)}
            {...props}
          />
        );
      }}
    />
  );
};

export default ColorInput;
