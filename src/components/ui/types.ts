// src/components/ui/types.ts
import { ReactNode, ButtonHTMLAttributes, HTMLAttributes, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";

export interface BaseProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  children?: ReactNode;
}

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
  children?: ReactNode;
}

export interface CardProps extends BaseProps {}
export interface CardHeaderProps extends BaseProps {}
export interface CardFooterProps extends BaseProps {}
export interface CardTitleProps extends BaseProps {}
export interface CardDescriptionProps extends BaseProps {}
export interface CardContentProps extends BaseProps {}

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  className?: string;
  children?: ReactNode;
}

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  children?: ReactNode;
}

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  children?: ReactNode;
}

export interface TableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  children?: ReactNode;
}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  className?: string;
  children?: ReactNode;
}

export interface TableHeadProps extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
  className?: string;
  children?: ReactNode;
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableDataCellElement> {
  className?: string;
  children?: ReactNode;
}

export interface TableCaptionProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children?: ReactNode;
}

export interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  children?: ReactNode;
  className?: string;
}

export interface SelectTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  value?: string;
  onClick?: () => void;
}

export interface SelectValueProps extends HTMLAttributes<HTMLSpanElement> {
  placeholder?: string;
  children?: ReactNode;
}

export interface SelectContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
}

export interface SelectItemProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  value?: string;
  selected?: boolean;
  onSelect?: () => void;
}