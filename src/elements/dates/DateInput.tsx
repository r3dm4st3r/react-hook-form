import React, { FC } from "react";
import { DateInput as MantineDateInput } from "@mantine/dates";
import { Controller, useFormContext } from "react-hook-form";
import { IDateInput } from "../../types";

const DateInput: FC<IDateInput> = ({ name, label, props }) => {
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
          <MantineDateInput
            ref={ref}
            label={label}
            placeholder={
              props?.placeholder ? props?.placeholder : `Select ${label}`
            }
            error={error?.message}
            onBlur={onBlur}
            value={value ? new Date(value) : null}
            onChange={(newValue) => onChange(newValue)}
            autoComplete="off"
            {...props}
          />
        );
      }}
    />
  );
};

export default DateInput;
