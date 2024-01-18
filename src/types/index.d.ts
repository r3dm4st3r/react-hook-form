import {
  CheckboxProps as MantineCheckboxProps,
  ChipGroupProps,
  ChipProps,
  ColorInputProps,
  ColorPickerProps,
  FileInputProps,
  JsonInputProps,
  NativeSelectProps,
  NumberInputProps,
  PasswordInputProps,
  PinInputProps,
  RadioGroupProps,
  RangeSliderProps,
  RatingProps,
  SegmentedControlProps,
  SelectProps,
  SliderProps,
  SwitchGroupProps,
  SwitchProps,
  TextareaProps,
  TextInputProps,
  TextProps,
} from "@mantine/core";
import { ReactNode } from "react";
import {
  DateInputProps,
  DatePickerInputProps,
  DatePickerProps,
  DateTimePickerProps,
} from "@mantine/dates";

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
  props?: Partial<SwitchProps>;
}

interface ISwitchGroup extends IBaseForm {
  data: { label: string; value: string }[];
  inline?: boolean;
  props?: Partial<SwitchGroupProps>;
}

interface ITextArea extends IBaseForm {
  props?: Partial<TextareaProps>;
  placeholder?: string;
  disabled?: boolean;
}

interface ILabelValue {
  label: string;
  value: string;
}

interface IRadioGroup extends IBaseForm {
  props?: Partial<RadioGroupProps>;
  options: ILabelValue[];
}

interface ISelect extends IBaseForm {
  data?: ILabelValue[];
  props?: Partial<SelectProps>;
}

interface INativeSelect extends IBaseForm {
  data?: ILabelValue[];
  props?: Partial<NativeSelectProps>;
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

export interface INumberInput extends IBaseForm {
  props?: Partial<NumberInputProps>;
}

export interface IPinInput extends IBaseForm {
  labelProps?: Partial<TextProps>;
  props?: Partial<PinInputProps>;
}

export interface IRating extends IBaseForm {
  labelProps?: Partial<TextProps>;
  props?: Partial<RatingProps>;
}

interface ISegmentedControl extends Omit<IBaseForm, "label"> {
  data: { label: string | ReactNode; value: string }[];
  props?: Partial<SegmentedControlProps>;
}

interface ISlider extends IBaseForm {
  data: { value: number }[];
  labelProps?: Partial<TextProps>;
  props?: Partial<SliderProps>;
}

interface IRangeSlider extends IBaseForm {
  data: { label: string; value: number }[];
  props?: Partial<RangeSliderProps>;
}

interface IDateInput extends IBaseForm {
  props?: Partial<DateInputProps>;
}

interface IDateTimePicker extends IBaseForm {
  props?: Partial<DateTimePickerProps>;
}

interface IDatePicker<T extends DatePickerProps["type"]>
  extends Omit<IBaseForm, "label"> {
  props?: Partial<DatePickerProps<T>>;
}

interface IDatePickerInput<T extends DatePickerInputProps["type"]>
  extends IBaseForm {
  props?: Partial<DatePickerInputProps<T>>;
}
