import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { RangeSlider as MantineRangeSlider } from "@mantine/core";
import { IRangeSlider } from "../../types";

const RangeSlider: FC<IRangeSlider> = ({ name, data, props, label }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <MantineRangeSlider
            ref={ref}
            value={value}
            label={label}
            onBlur={onBlur}
            onChange={(newValue) => onChange(newValue)}
            marks={data}
            {...props}
          />
        );
      }}
    />
  );
};

export default RangeSlider;
