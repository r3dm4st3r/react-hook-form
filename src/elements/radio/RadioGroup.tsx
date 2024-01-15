import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Group,
  Radio as MantineRadio,
  RadioGroup as MantineRadioGroup,
} from "@mantine/core";
import { RadioGroupProps } from "../../types";

const RadioGroup: FC<RadioGroupProps> = ({
  name,
  label = "",
  props,
  options,
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
        <MantineRadioGroup
          {...props}
          ref={ref}
          label={label}
          onBlur={onBlur}
          value={value}
          onChange={(va) => onChange(va)}
        >
          <Group
            mt="xs"
            className={`${props?.role === "radio" && "flex-col items-start"}`}
          >
            {options.map((option, i) => {
              return (
                <MantineRadio
                  key={i}
                  error={error?.message}
                  value={option.value}
                  label={option.label}
                />
              );
            })}
          </Group>
        </MantineRadioGroup>
      )}
    />
  );
};

export default RadioGroup;
