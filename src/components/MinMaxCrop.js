function findMaxAndMinProduction(data) { 
  //function to calculate the max and min crop per year
  let maxCrop = null;
  let minCrop = null;

  data.forEach((entry) => {
    const cropProduction = entry["Crop Production (UOM:t(Tonnes))"]===""?0:entry["Crop Production (UOM:t(Tonnes))"];
  //if "" we take it as 0 ,or else the crop production value
    if (typeof cropProduction === "number" && cropProduction !== null) {
      if (
        !maxCrop ||
        cropProduction > maxCrop["Crop Production (UOM:t(Tonnes))"]
      ) {
        maxCrop = entry;
      }
      if (
        !minCrop ||
        cropProduction < minCrop["Crop Production (UOM:t(Tonnes))"]
      ) {
        minCrop = entry;
      }
    }
  });

  return { maxCrop, minCrop };
}
export default findMaxAndMinProduction;
