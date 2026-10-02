"use client";

import type { UseFormRegisterReturn } from "react-hook-form";

type HoneypotFieldProps = UseFormRegisterReturn;

export function HoneypotField({ name, ...registration }: HoneypotFieldProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
      style={{ position: "absolute", left: "-9999px" }}
    >
      <label htmlFor={name}>Company website</label>
      <input
        id={name}
        name={name}
        type="text"
        autoComplete="off"
        tabIndex={-1}
        {...registration}
      />
    </div>
  );
}
