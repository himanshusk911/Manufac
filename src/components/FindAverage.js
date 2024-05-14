function findAverage(data) {
  // Find the average yield and cultivation per year
  let totalYield = 0;
  let totalCulti = 0;
  let count = 0;
  data.forEach((entry) => {
    const yieldValue =
      entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] === ""
        ? 0
        : entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"];
    const cultiValue =
      entry["Area Under Cultivation (UOM:Ha(Hectares))"] === ""
        ? 0
        : entry["Area Under Cultivation (UOM:Ha(Hectares))"];
    totalYield += yieldValue;
    totalCulti += cultiValue;
    count++;
  });
  const averageYield = count > 0 ? (totalYield / count).toFixed(3) : 0; //toFixed is inbuilt function for taking upto only 3 values decimal
  const averageCulti = count > 0 ? (totalCulti / count).toFixed(3) : 0;

  return { averageYield, averageCulti };
}
export default findAverage;
