import { useState, useEffect } from "react";
import { mockData } from "./data.tsx";
import { config } from "./config.tsx";

import BasicTable from "./basicTable.tsx/basicTable.js";
import ConvertDataForTable from "./converDataForTable";
import Table from "./table/table.tsx";
import Input from "./input/index";

type Props = {
  data: Array<any>;
};

export default function TodoList({ data = mockData }: Props) {
  const [thisData, setThisData] = useState<any>([]);
  const [searchText, setSearchText] = useState<string>("");

  async function makeData(params: any) {
    const newData = await ConvertDataForTable(params);
    setThisData(newData);
  }

  useEffect(() => {
    makeData(data);
  }, [data]);

  const handelSerchText = (value: any) => {
    setSearchText(value);
  };

  return (
    <>
      <Input
        className="p-2 font-lg shadow border border-block"
        placeholder="Search all columns..."
        onChange={handelSerchText}
        value={searchText}
      />
      <Table thisData={thisData} config={config} searchText={searchText} />;
    </>
  );
  return <BasicTable thisData={thisData} />;
}
