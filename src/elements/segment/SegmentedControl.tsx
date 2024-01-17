import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { SegmentedControl as MantineSegmentedControl } from "@mantine/core";
import { ISegmentedControl } from "../../types";

const SegmentedControl: FC<ISegmentedControl> = ({ name, data, props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <MantineSegmentedControl
            ref={ref}
            value={value}
            onBlur={onBlur}
            onChange={(newValue) => onChange(newValue)}
            data={data}
            {...props}
          />
        );
      }}
    />
  );
};

export default SegmentedControl;
