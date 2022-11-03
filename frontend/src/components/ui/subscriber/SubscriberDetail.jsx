import { useState } from "react";
import SearchBox from "../../form/searchBox/SearchBox";
import Pagination from "../pagination/Pagination";
import Table from "../table/Table";

const columns = [
  { field: "id", header: "id" },
  { field: "fullname", header: "fullname" },
  { field: "email", header: "email" },
  { field: "username", header: "username" },
  { field: "country", header: "country" },
  { field: "status", header: "status" },
  { field: "join_date", header: "join_date" },
  { field: "action", header: "action" },
];

const SubscriberDetail = () => {
  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  var data = [];

  columns?.map((list, index) =>
    data.push({
      id: index + 1,
      fullname: "bbuig",
      email: "jkgg",
      username: "sdfghjkl",
      country: "fgkn",
      status: "fghiljm",
      join_date: "2345678",
      action: "uyiguhijo",
    })
  );
  return (
    <>
      <div class="filters">
        <SearchBox />
        <Table
          data={data}
          columns={columns}
          nPages={10}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};
export default SubscriberDetail;
