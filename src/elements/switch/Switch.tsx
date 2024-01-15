import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Switch as MantineSwitch } from "@mantine/core";
import { SwitchProps } from "../../types";

const Switch: React.FC<SwitchProps> = ({ name, label, props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <MantineSwitch
          ref={ref}
          onBlur={onBlur}
          label={label}
          checked={value}
          onChange={(newValue) => {
            onChange(newValue);
          }}
          error={error?.message}
          {...props}
        />
      )}
    />
  );
};

export default Switch;
