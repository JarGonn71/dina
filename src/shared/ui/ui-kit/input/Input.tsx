import styles from "./Input.module.css";
import {useEffect, useRef, DetailedHTMLProps, HTMLAttributes, forwardRef, ForwardedRef, useCallback, FocusEvent, useState} from "react";
import classNames from "classnames";
import {boolean} from "yup";

export interface TypeInput extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
  name: string;
  isFocus?: boolean;
  type?: string;
  error?: string;
}

export const Input = forwardRef((
  { className, name, type, error, ...props }: TypeInput, ref: ForwardedRef<HTMLInputElement>
) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const onFocus = useCallback((event: FocusEvent<HTMLInputElement>) => {
    setIsFocus(true);
  }, []);

  const onBlur = useCallback((event: FocusEvent<HTMLInputElement>) => {
    setIsFocus(false);
  }, []);

  const refBorder = useRef<HTMLDivElement>(null);
  const refLabel = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    if ( refBorder.current && refLabel.current ) {
      const width = refLabel.current.clientWidth;
      refBorder.current.style.width = width + "px";
    }
  }, [refLabel]);
  return (
    <div className="relative">
      <input
        className="text-black peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-400 dark:placeholder:text-neutral-400 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        name={name}
        type={type}
        ref={ref}
        onFocus={onFocus}
        onBlur={onBlur}
        {...props}
      />
      <label
        ref={refLabel}
        className={classNames("text-black pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-neutral-200", {"!text-primary": isFocus })}
      >Email address</label>
      <div className="group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none">
        <div
          className={classNames("pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem] group-data-[te-input-focused]:border-r-0 group-data-[te-input-state-active]:border-r-0 border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary", {"!border-primary": isFocus })}></div>
        <div
          ref={refBorder}
          className={classNames("pointer-events-none border border-solid box-border bg-transparent  duration-100 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0 group-data-[te-input-focused]:border-x-0 group-data-[te-input-state-active]:border-x-0  group-data-[te-input-focused]:border-solid group-data-[te-input-state-active]:border-solid group-data-[te-input-state-active]:border-t-transparent dark:border-neutral-600 group-data-[te-input-focused]:shadow-[0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary", {"border-t-0 !border-primary": isFocus })}></div>
        <div
          className={classNames("pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem] group-data-[te-input-focused]:border-l-0 group-data-[te-input-state-active]:border-l-0 border-neutral-300 dark:border-neutral-600 group-data-[te-input-focused]:shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] group-data-[te-input-focused]:border-primary", {"!border-primary": isFocus})}></div>
      </div>
    </div>
  );
});

Input.displayName = "FormInput";