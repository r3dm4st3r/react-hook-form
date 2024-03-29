import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Textarea as MantineTextarea } from "@mantine/core";
import { ITextArea } from "../../types";

const Textarea: React.FC<ITextArea> = ({
  name,
  placeholder,
  label,
  props,
  disabled,
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
        <MantineTextarea
          ref={ref}
          label={label}
          onBlur={onBlur}
          value={value}
          disabled={disabled}
          onChange={(newValue) => {
            onChange(newValue);
          }}
          autosize
          placeholder={placeholder ? placeholder : `Enter ${label}`}
          error={error?.message}
          {...props}
        />
      )}
    />
  );
};

export default Textarea;
