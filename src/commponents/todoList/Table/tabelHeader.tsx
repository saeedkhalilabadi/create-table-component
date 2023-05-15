import React from "react";

type Props = {
  children: any;
};

export default function TableHeader(props: Props) {
  return <div {...props}>{props.children}</div>;
}
