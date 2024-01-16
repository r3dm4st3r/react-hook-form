import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ColorPicker as MantineColorPicker } from "@mantine/core";
import { IColorPicker } from "../../types";

const ColorPicker: FC<IColorPicker> = ({ name, props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <MantineColorPicker
            ref={ref}
            value={value}
            onBlur={onBlur}
            onChange={(newValue) => onChange(newValue)}
            {...props}
          />
        );
      }}
    />
  );
};

export default ColorPicker;
