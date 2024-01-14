import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Textarea } from "@mantine/core";
import { InputTextAreaProps } from "@r3dm4st3r/react-hook-form/types/index.type";

const InputTextArea: React.FC<InputTextAreaProps> = ({
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
        <Textarea
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

export default InputTextArea;
