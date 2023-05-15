import React from "react";
import { styled } from "styled-components";

type Props = {
  type?: "text" | "number" | "date" | "list";
  placeholder?: string;
  value?: any;
  onChange: (value: any) => any;
  debounce: number;
};

export default function FilterInput({ ...props }: Props) {
  const [value, setValue] = React.useState<any>("");

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      props.onChange(value);
    }, props?.debounce);
    return () => clearTimeout(timeout);
  }, [value]);

  switch (props.type) {
    case "number":
      return (
        <NumberFillter
          {...props}
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          type={props.type}
          placeholder={props?.placeholder}
        />
      );
    case "date":
      return (
        <DateFillter
          {...props}
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          type={props.type}
          placeholder={props?.placeholder}
        />
      );
    case "list":
      return (
        <ListFillter
          {...props}
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          type={props.type}
          placeholder={props?.placeholder}
        />
      );
    default:
      return (
        <TextFillter
          {...props}
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          type={props.type}
          placeholder={props?.placeholder}
        />
      );
  }
}

const TextFillter = styled.input`
  color: red;
`;
const NumberFillter = styled.input`
  color: red;
`;
const DateFillter = styled.input`
  color: red;
`;
const ListFillter = styled.input`
  color: red;
`;
