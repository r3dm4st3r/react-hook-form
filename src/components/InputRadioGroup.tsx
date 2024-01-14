import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Group, Radio, RadioGroup } from "@mantine/core";
import { InputRadioGroupProps } from "@r3dm4st3r/react-hook-form/types/index.type";

const RadioGroupInput: FC<InputRadioGroupProps> = ({
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
        <RadioGroup
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
                <Radio
                  key={i}
                  error={error?.message}
                  value={option.value}
                  label={option.label}
                />
              );
            })}
          </Group>
        </RadioGroup>
      )}
    />
  );
};

export default RadioGroupInput;
