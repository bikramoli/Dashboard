import SearchBox from "../../form/searchBox/SearchBox";
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
      </div>
      <div>
        <Table data={data} columns={columns} />
      </div>
    </>
  );
};
export default SubscriberDetail;
