import * as React from "react";
import { styled } from "styled-components";
import "./index.css";

type Props = {
  checked?: boolean;
  onChange?: (value: boolean) => boolean;
  visibility?: boolean;
};

export default function CheckRowTable(props: Props) {
  const [value, setValue] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (props.checked) setValue(props.checked);
  }, [props.checked]);
  const handelonChange = (e: any) => {
    if (props.onChange) props.onChange(e.target.checked);
    setValue(e.target.checked);
  };
  return (
    <ThisCheckBox
      className={`${value ? "visible " : "hidden "} checkBox`}
      type="checkbox"
      value={value}
      onChange={handelonChange}
    />
  );
}

const ThisCheckBox = styled.input``;
