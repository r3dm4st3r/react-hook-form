import { TextInputProps } from "@mantine/core";

export interface InputTextI {
  name: string;
  label?: string;
  props?: Partial<TextInputProps>;
}
