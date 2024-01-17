import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Box, PinInput as MantinePinInput, Text } from "@mantine/core";
import { IPinInput } from "../../types";

const PinInput: FC<IPinInput> = ({ name, label, labelProps, props }) => {
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
          <Box className="pin-input">
            {label && (
              <Text mb="sm" {...labelProps}>
                {label}
              </Text>
            )}
            <MantinePinInput
              ref={ref}
              value={value}
              onBlur={onBlur}
              error={!!error?.message}
              onChange={(newValue) => onChange(newValue)}
              {...props}
            />
            {error?.message && (
              <Text c="red" fz="sm">
                {error?.message}
              </Text>
            )}
          </Box>
        );
      }}
    />
  );
};

export default PinInput;
