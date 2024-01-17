import { Controller, useFormContext } from "react-hook-form";
import { Slider as MantineSlider, Text } from "@mantine/core";
import React, { FC } from "react";
import { ISlider } from "../../types";

const Slider: FC<ISlider> = ({ name, data, props, label, labelProps }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <>
            {label && (
              <Text size="sm" mb="sm" {...labelProps}>
                {label}
              </Text>
            )}
            <MantineSlider
              ref={ref}
              value={value}
              label={(value) => `${value}`}
              onBlur={onBlur}
              onChange={(newValue) => onChange(newValue)}
              marks={data}
              {...props}
            />
          </>
        );
      }}
    />
  );
};

export default Slider;
