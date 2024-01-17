import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Box, Rating as MantineRating, Text } from "@mantine/core";
import { IRating } from "../../types";

const Rating: FC<IRating> = ({ name, label, labelProps, props }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <Box>
            {label && (
              <Text mb="sm" {...labelProps}>
                {label}
              </Text>
            )}
            <MantineRating
              ref={ref}
              value={value}
              onBlur={onBlur}
              onChange={(newValue) => onChange(newValue)}
              {...props}
            />
          </Box>
        );
      }}
    />
  );
};

export default Rating;
