import "./Style.css";
import React from "react";
import CardWrapper from "../wrapper/CardWrapper";

const Table = (props) => {
  const { data, columns } = props;

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
    </CardWrapper>
  );
};

export default Table;
