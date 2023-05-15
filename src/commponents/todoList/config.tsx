//field-type:text|number|date|list

export const config = {
  feildList: [
    {
      name: "title",
      type: "text",
      headerPosition: "left",
      icon: true,
      check: true,
    },
    {
      name: "type",
      type: "list",
      headerPosition: "left",
      icon: true,
      check: false,
    },
  ],
  headerPosition: "left", //'right'||'center'||'left'
};
