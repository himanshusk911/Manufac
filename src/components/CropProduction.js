import React, { useState, useEffect } from "react";
import { Table } from "@mantine/core";
import dataSet from "../data/agroDataset.json";
import extractYear from "./ExtractYear";
import findMaxAndMinProduction from "./MinMaxCrop";
import styles from "../styles/tableStyle.module.css";
//This will display our table for Max and Min Crop
const CropProduction = () => {
  let [tableData, setTableData] = useState([]);

  useEffect(() => {
    const updatedTableData = [];
    for (let year = 1950; year <= 2020; year++) {
      const dataForYear = dataSet.filter(
        (data) => extractYear(data.Year) === year //extractYear is function we have built to extact year ,
      );
      //here we are calling findMaxAndMinProduction method
      const { minCrop, maxCrop } = findMaxAndMinProduction(dataForYear);
      updatedTableData.push({
        myyear: year,
        yearMinCrop: minCrop["Crop Name"],
        yearMaxCrop: maxCrop["Crop Name"],
      });
    }
    setTableData(updatedTableData);
  }, []);
  const rows = tableData.map((element) => (
    <Table.Tr key={element.myyear}>
      <Table.Td className={styles.tableMain}>{element.myyear}</Table.Td>
      <Table.Td className={styles.tableMain}>{element.yearMinCrop}</Table.Td>
      <Table.Td className={styles.tableMain}>{element.yearMaxCrop}</Table.Td>
    </Table.Tr>
  ));
  return (
    <div>
       <h3>Max And Min Crop</h3>
      <Table className={styles.tableMain}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th className={styles.tableMain}>Year</Table.Th>
            <Table.Th className={styles.tableMain}>Min Crop</Table.Th>
            <Table.Th className={styles.tableMain}>Max Crop</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};

export default CropProduction;
