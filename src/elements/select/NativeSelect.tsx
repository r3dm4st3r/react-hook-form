import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { NativeSelect as MantineNativeSelect } from "@mantine/core";
import { INativeSelect } from "../../types";

const NativeSelect: FC<INativeSelect> = ({ label, name, data, props }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <MantineNativeSelect
          ref={ref}
          label={label}
          data={data}
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
          }}
          error={error?.message}
          {...props}
        />
      )}
    />
  );
};

export default NativeSelect;
