"use client";

import * as React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function BackButton({ onClick, ...props }: Props) {
  return (
    <button
      type="button"
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;
        window.history.back();
      }}
      {...props}
    />
  );
}
