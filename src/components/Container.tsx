import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ContainerProps<TElement extends ElementType> = {
  as?: TElement;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<TElement>, "as" | "children" | "className">;

export function Container<TElement extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: ContainerProps<TElement>) {
  const Component = as ?? "div";
  const classNames = ["container", className].filter(Boolean).join(" ");

  return (
    <Component className={classNames} {...props}>
      {children}
    </Component>
  );
}
