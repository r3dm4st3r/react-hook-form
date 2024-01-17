import React, { FC, useRef } from "react";
import { PasswordInput } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";
import { IPassword } from "../../types";

const Password: FC<IPassword> = ({ name, label, props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => {
        return (
          <PasswordInput
            ref={inputRef}
            withAsterisk
            label={label}
            placeholder={
              props?.placeholder ? props?.placeholder : `Enter ${label}`
            }
            error={error?.message}
            onBlur={onBlur}
            value={value}
            onChange={(newValue) => onChange(newValue)}
            autoComplete="off"
            {...props}
          />
        );
      }}
    />
  );
};

export default Password;
