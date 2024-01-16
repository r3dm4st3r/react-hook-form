import React, { FC } from "react";
import { Chip as MantineChip, Flex } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";
import { IChipGroup } from "../../types";

const ChipGroup: FC<IChipGroup<boolean>> = ({
  name,
  data = [],
  inline = true,
  props,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => {
        return (
          <MantineChip.Group
            value={props?.multiple ? value : String(value)}
            onChange={(val) => onChange(val)}
            {...props}
          >
            <Flex direction={inline ? "row" : "column"} wrap="wrap" gap="xs">
              {data?.map((item, i) => {
                return (
                  <MantineChip key={i} value={item.value}>
                    {item.value}
                  </MantineChip>
                );
              })}
            </Flex>
          </MantineChip.Group>
        );
      }}
    />
  );
};

export default ChipGroup;
