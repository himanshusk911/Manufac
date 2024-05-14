import React, { useEffect, useState } from "react";
import dataSet from "../data/agroDataset.json";
import { Table } from "@mantine/core";
import extractYear from "./ExtractYear";
import findAverage from "./FindAverage";
import styles from "../styles/tableStyle.module.css"

///This is our AverageYield component which will display table of Average Yields and Cultivation
const AverageYieldCultivation = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    const updateTable = [];
    for (let year = 1950; year <= 2020; year++) {
      const dataForYear = dataSet.filter(
        (data) => extractYear(data.Year) === year //extractYear is function we have built to extact year ,
      );
     //Calling the findAverage function
      const { averageYield, averageCulti } = findAverage(dataForYear);
      updateTable.push({
        myYear: year,
        averageYield: averageYield,
        averageCulti: averageCulti,
      });
    }
    setTableData(updateTable);
  }, []);
  //For Table we're using Mantine
  const rows = tableData.map((element) => (
    <Table.Tr key={element.myYear}>
      <Table.Td className={styles.tableMain}>{element.myYear}</Table.Td>
      <Table.Td className={styles.tableMain}>{element.averageYield}</Table.Td>
      <Table.Td className={styles.tableMain}> {element.averageCulti}</Table.Td>
    </Table.Tr>
  ));
  return (
    <div>
         <h3>Average Yield And Cultivation</h3>
      <Table className={styles.tableMain}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th className={styles.tableMain}>Year</Table.Th>
            <Table.Th className={styles.tableMain}>Average Yield</Table.Th>
            <Table.Th className={styles.tableMain}>Average Cultivation</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
};

export default AverageYieldCultivation;
