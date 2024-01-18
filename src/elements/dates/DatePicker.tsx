import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  DatePicker as MantineDatePicker,
  DatePickerProps,
} from "@mantine/dates";
import { IDatePicker } from "../../types";

const DatePicker: FC<IDatePicker<DatePickerProps["type"]>> = ({
  name,
  props,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <MantineDatePicker
            ref={ref}
            onBlur={onBlur}
            value={value}
            onChange={(val) => onChange(val)}
            {...props}
          />
        );
      }}
    />
  );
};

export default DatePicker;
