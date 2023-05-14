import { useState, useEffect } from "react";
import { data } from "./data.js";
import Table from "./table.js";
import ConvertDataForTable from "./converDataForTable";

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

  return <Table thisData={thisData} />;
}
