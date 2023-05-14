import { useState, useEffect } from "react";
import { data } from "./data.js";
import BasicTable from "./basicTable.tsx/basicTable.js";
import ConvertDataForTable from "./converDataForTable";
import FilTable from "./FilTable/filTable.js";

type Props = {
  data: Array<any>;
};

export default function TodoList(props: Props) {
  const [thisData, setThisData] = useState<any>([]);

  async function makeData(params: any) {
    const newData = await ConvertDataForTable(params);
    setThisData(newData);
  }
  useEffect(() => {
    makeData(data);
  }, []);

  return <FilTable thisData={thisData} />;
  return <BasicTable thisData={thisData} />;
}
