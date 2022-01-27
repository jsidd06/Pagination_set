import React, { useState } from "react";
import { Input } from "reactstrap";
import data from "../Data/data";
import Pagination from "./Pagination";
function Home() {
  const [search, setSearch] = useState("");
  const [currentItem, setCurrentItem] = useState(null);
  return (
    <div>
      <Pagination
        items={data}
        itemsPerPage={3}
        setCurrentItem={setCurrentItem}
      />
      <Input
        placeholder="...Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      {currentItem &&
        currentItem
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => {
            return (
              <div key={item.id}>
                <h1>{item.name}</h1>
                <h2>{item.price}</h2>
              </div>
            );
          })}
    </div>
  );
}

export default Home;
