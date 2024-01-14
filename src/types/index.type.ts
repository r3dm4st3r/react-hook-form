import {
  CheckboxProps,
  PasswordInputProps,
  RadioGroupProps,
  SelectProps,
  SwitchProps,
  TextareaProps,
  TextInputProps,
} from "@mantine/core";

export interface IBaseForm {
  name: string;
  label?: string;
}
export interface InputTextProps extends IBaseForm {
  props?: Partial<TextInputProps>;
}

export interface InputPasswordProps extends IBaseForm {
  props?: Partial<PasswordInputProps>;
}

export interface InputSwitchProps extends IBaseForm {
  props?: Partial<SwitchProps>;
}

export interface InputTextAreaProps extends IBaseForm {
  props?: TextareaProps;
  placeholder?: string;
  disabled?: boolean;
}

export interface ILabelValue {
  label: string;
  value: string;
}

export interface InputRadioGroupProps extends IBaseForm {
  props?: Partial<RadioGroupProps>;
  options: ILabelValue[];
}

export interface InputSelectProps extends IBaseForm {
  data?: ILabelValue[];
  props?: Partial<SelectProps>;
}

export interface InputCheckboxProps extends IBaseForm {
  props?: CheckboxProps;
}
