import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FileInput as MantineFileInput } from "@mantine/core";
import { IFileInput } from "../../types";

const FileInput: FC<IFileInput<boolean>> = ({ name, label, props }) => {
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
          <MantineFileInput
            ref={ref}
            value={value}
            label={label}
            onBlur={onBlur}
            error={error?.message}
            placeholder={
              props?.placeholder ? props?.placeholder : `Upload ${label}`
            }
            onChange={(newValue) => onChange(newValue)}
            {...props}
          />
        );
      }}
    />
  );
};

export default FileInput;
