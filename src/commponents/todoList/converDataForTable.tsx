export default async function ConvertDataForTable(data: [any]) {
  const newData: any = [];
  data?.map((item: any) =>
    newData.push({ title: item?.uomSymbol?.title, type: item?.uomType?.title })
  );
  return newData;
}
