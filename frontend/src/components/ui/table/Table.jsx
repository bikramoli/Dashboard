import "./Style.css";
import React from "react";
import CardWrapper from "../wrapper/CardWrapper";
import Pagination from "../pagination/Pagination";

const Table = (props) => {
  const { data, columns, nPages, currentPage, setCurrentPage } = props;

  const getCaps = (head, field) => {
    if (head) return head.toUpperCase();
    return field.toUpperCase();
  };

  return (
    <CardWrapper>
      <div className="table">
        <table>
          <thead>
            <tr>
              {columns &&
                columns.map((head, index) => (
                  <th key={index} scope="col">
                    {getCaps(head.header, head.field)}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((row, index) => (
                <tr key={index}>
                  {columns.map((col, index) => (
                    <td key={index}>{row[col.field]}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </CardWrapper>
  );
};

export default Table;
