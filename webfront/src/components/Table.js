
import React from 'react';

const Table = ({ headers, data, onRowClick }) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} onClick={() => onRowClick(row)}>
            <td>{row.range}</td>
            <td>{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
