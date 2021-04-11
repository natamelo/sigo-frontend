import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  h2 {
    font-size: 26px;
    margin: 20px 0;
    text-align: center;
    small {
      font-size: 0.5em;
  }
`;

export const CustomTable = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  thead tr {
    background-color: #2865b5;
    color: #ffffff;
    text-align: left;
  }
  th td {
    padding: 12px 15px;
  }
  tbody tr {
    border-bottom: 1px solid #dddddd;
  }
  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  tbody tr:last-of-type {
    border-bottom: 2px solid #2865b5;
  }
  tr.active-row {
    font-weight: bold;
    color: #2865b5;
  }
`;