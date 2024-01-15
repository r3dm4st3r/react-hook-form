import {
  CheckboxProps as MantineCheckboxProps,
  PasswordInputProps,
  RadioGroupProps as MantineRadioGroupProps,
  SelectProps as MantineSelectProps,
  SwitchProps as MantineSwitchProps,
  TextareaProps as MantineTextareaProps,
  TextInputProps,
} from "@mantine/core";

export interface IBaseForm {
  name: string;
  label?: string;
}
export interface TextProps extends IBaseForm {
  props?: Partial<TextInputProps>;
}

export interface PasswordProps extends IBaseForm {
  props?: Partial<PasswordInputProps>;
}

export interface SwitchProps extends IBaseForm {
  props?: Partial<MantineSwitchProps>;
}

export interface TextAreaProps extends IBaseForm {
  props?: Partial<MantineTextareaProps>;
  placeholder?: string;
  disabled?: boolean;
}

export interface ILabelValue {
  label: string;
  value: string;
}

export interface RadioGroupProps extends IBaseForm {
  props?: Partial<MantineRadioGroupProps>;
  options: ILabelValue[];
}

export interface SelectProps extends IBaseForm {
  data?: ILabelValue[];
  props?: Partial<MantineSelectProps>;
}

export interface CheckboxProps extends IBaseForm {
  props?: Partial<MantineCheckboxProps>;
}
