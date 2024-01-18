import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  DatePickerInput as MantineDatePickerInput,
  DatePickerInputProps,
} from "@mantine/dates";
import { IDatePickerInput } from "../../types";

const DatePickerInput: FC<IDatePickerInput<DatePickerInputProps["type"]>> = ({
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
      }) => {
        return (
          <MantineDatePickerInput
            ref={ref}
            label={label}
            placeholder={
              props?.placeholder ? props?.placeholder : `Select ${label}`
            }
            error={error?.message}
            onBlur={onBlur}
            value={value}
            onChange={(newValue) => onChange(newValue)}
            {...props}
          />
        );
      }}
    />
  );
};

export default DatePickerInput;
