import React from "react";

import Table from "../../Components/common/Table";

const data = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Person ${i + 1}`,
  age: Math.floor(Math.random() * 50) + 18, 
  section: ["A", "B", "C"][Math.floor(Math.random() * 3)], 
}));
const headers = ["ID", "Name", "Age", "Section", "Action"];

const List = () => {
  return (
    <>
      <Table data={data} headers={headers} />
    </>
  );
};

export default List;
