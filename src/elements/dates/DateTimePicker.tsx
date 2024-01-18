import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { DateTimePicker as MantineDateTimePicker } from "@mantine/dates";
import { IDateTimePicker } from "../../types";

const DateTimePicker: FC<IDateTimePicker> = ({ name, label, props }) => {
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
          <MantineDateTimePicker
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

export default DateTimePicker;
