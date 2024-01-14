import { TextInputProps } from "@mantine/core";

export interface InputTextProps {
  name: string;
  label?: string;
  props?: Partial<TextInputProps>;
}
