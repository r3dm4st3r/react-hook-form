import React, { FC } from "react";
import { JsonInput as MantineJsonInput } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";
import { IJsonInput } from "../../types";

const JsonInput: FC<IJsonInput> = ({ name, label, props }) => {
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
          <MantineJsonInput
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

export default JsonInput;
