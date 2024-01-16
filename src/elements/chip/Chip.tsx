import React, { FC } from "react";
import { Chip as MantineChip } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";
import { IChip } from "../../types";

const Chip: FC<IChip> = ({ name, label, props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <MantineChip
            ref={ref}
            onBlur={onBlur}
            checked={Boolean(value)}
            onChange={(newValue) => onChange(newValue)}
            {...props}
          >
            {label}
          </MantineChip>
        );
      }}
    />
  );
};

export default Chip;
