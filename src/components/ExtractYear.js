function extractYear(yearString) {
  //this function is using regex to get the year
    const match = yearString.match(/\d{4}/);
    return match ? parseInt(match[0], 10) : 0;
  }

export default extractYear;