import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Checkbox } from "@mantine/core";
import { InputCheckboxProps } from "@r3dm4st3r/react-hook-form/types/index.type";

const InputCheckBox: React.FC<InputCheckboxProps> = ({
  name,
  label,
  props,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <Checkbox
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

export default InputCheckBox;
