import react from "react";
import "./index.css";

type Props = {
  src?: string;
  title?: string;
};

export default function CellIcon(props: Props) {
  return <img className="cellIcon" src={props?.src} title={props?.title} />;
}


