import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Switch } from "@mantine/core";
import { InputSwitchProps } from "@r3dm4st3r/react-hook-form/types/index.type";

const InputSwitch: React.FC<InputSwitchProps> = ({ name, label, props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <Switch
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

export default InputSwitch;
