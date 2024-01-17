import {
  CheckboxProps as MantineCheckboxProps,
  ChipGroupProps,
  ChipProps,
  ColorInputProps,
  ColorPickerProps,
  FileInputProps,
  JsonInputProps,
  NativeSelectProps as MantineNativeSelectProps,
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

interface IPassword extends IBaseForm {
  props?: Partial<PasswordInputProps>;
}

interface ISwitch extends IBaseForm {
  props?: Partial<MantineSwitchProps>;
}

interface ITextArea extends IBaseForm {
  props?: Partial<MantineTextareaProps>;
  placeholder?: string;
  disabled?: boolean;
}

interface ILabelValue {
  label: string;
  value: string;
}

interface IRadioGroup extends IBaseForm {
  props?: Partial<MantineRadioGroupProps>;
  options: ILabelValue[];
}

interface ISelect extends IBaseForm {
  data?: ILabelValue[];
  props?: Partial<MantineSelectProps>;
}

interface INativeSelect extends IBaseForm {
  data?: ILabelValue[];
  props?: Partial<MantineNativeSelectProps>;
}

interface ICheckbox extends IBaseForm {
  props?: Partial<MantineCheckboxProps>;
}

export interface IChip extends IBaseForm {
  props?: Partial<ChipProps>;
}

interface IChipGroup<T extends boolean> extends Omit<IBaseForm, "label"> {
  data: { label: string; value: string | number }[];
  inline?: boolean;
  props?: Partial<ChipGroupProps<T>>;
}

export interface IColorInput extends IBaseForm {
  props?: Partial<ColorInputProps>;
}

export interface IColorPicker extends Omit<IBaseForm, "label"> {
  props?: Partial<ColorPickerProps>;
}

export interface IFileInput<T extends boolean> extends IBaseForm {
  props?: Partial<FileInputProps>;
}

export interface IJsonInput extends IBaseForm {
  props?: Partial<JsonInputProps>;
}
