import { useState, useEffect } from "react";
import { mockData } from "./data.tsx";
import BasicTable from "./basicTable.tsx/basicTable.js";
import ConvertDataForTable from "./converDataForTable";
import FilTable from "./FilTable/filTable.js";

type Props = {
  data: Array<any>;
};

export default function TodoList({ data = mockData }: Props) {
  const [thisData, setThisData] = useState<any>([]);

  async function makeData(params: any) {
    const newData = await ConvertDataForTable(params);
    setThisData(newData);
  }

  useEffect(() => {
    makeData(data);
  }, [data]);

  return <FilTable thisData={thisData} />;
  return <BasicTable thisData={thisData} />;
}
