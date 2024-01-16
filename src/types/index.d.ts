import {
  CheckboxProps as MantineCheckboxProps,
  ChipGroupProps,
  ChipProps,
  ColorInputProps,
  ColorPickerProps,
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
interface InputProps extends IBaseForm {
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

export interface IChip extends IBaseForm {
  props?: Partial<ChipProps>;
}

interface IChipGroup<T extends boolean> extends Omit<IBaseForm, "label"> {
  data: { label: string; value: string | number }[];
  multiple?: boolean;
  inline?: boolean;
  props?: Partial<ChipGroupProps<T>>;
}

export interface IColorInput extends IBaseForm {
  props?: Partial<ColorInputProps>;
}

export interface IColorPicker extends Omit<IBaseForm, "label"> {
  props?: Partial<ColorPickerProps>;
}
