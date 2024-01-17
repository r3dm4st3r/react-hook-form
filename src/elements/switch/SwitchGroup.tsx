import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Flex, Switch as MantineSwitch, Text } from "@mantine/core";
import { ISwitchGroup } from "../../types";

const SwitchGroup: FC<ISwitchGroup> = ({
  name,
  label,
  data,
  inline,
  props,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => {
        return (
          <>
            {label && (
              <Text fz="sm" mb="sm">
                {label}
              </Text>
            )}
            <MantineSwitch.Group
              value={value}
              onChange={(val) => onChange(val)}
              {...props}
            >
              <Flex direction={inline ? "row" : "column"} wrap="wrap" gap="xs">
                {data?.map((item, i) => {
                  return (
                    <MantineSwitch
                      key={i}
                      value={item.value}
                      label={item.label}
                    />
                  );
                })}
              </Flex>
            </MantineSwitch.Group>
          </>
        );
      }}
    />
  );
};

export default SwitchGroup;
