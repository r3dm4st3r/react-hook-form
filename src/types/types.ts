import {
  CheckboxProps as MantineCheckboxProps,
  PasswordInputProps,
  RadioGroupProps as MantineRadioGroupProps,
  SelectProps as MantineSelectProps,
  SwitchProps as MantineSwitchProps,
  TextareaProps as MantineTextareaProps,
  TextInputProps,
} from "@mantine/core";

interface IBaseForm {
  name: string;
  label?: string;
}
interface TextProps extends IBaseForm {
  props?: Partial<TextInputProps>;
}

interface PasswordProps extends IBaseForm {
  props?: Partial<PasswordInputProps>;
}

interface SwitchProps extends IBaseForm {
  props?: Partial<MantineSwitchProps>;
}

interface TextAreaProps extends IBaseForm {
  props?: Partial<MantineTextareaProps>;
  placeholder?: string;
  disabled?: boolean;
}

interface ILabelValue {
  label: string;
  value: string;
}

interface RadioGroupProps extends IBaseForm {
  props?: Partial<MantineRadioGroupProps>;
  options: ILabelValue[];
}

interface SelectProps extends IBaseForm {
  data?: ILabelValue[];
  props?: Partial<MantineSelectProps>;
}

interface CheckboxProps extends IBaseForm {
  props?: Partial<MantineCheckboxProps>;
}

export {
  IBaseForm,
  ILabelValue,
  TextProps,
  PasswordProps,
  TextAreaProps,
  CheckboxProps,
  RadioGroupProps,
  SelectProps,
  SwitchProps,
};
