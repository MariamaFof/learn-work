import moment from "moment";

export { formatDate, yearsSinceDate, getDayFromDate, daysSinceDate };
function formatDate (date) {
  return moment(date).format("dddd Do MMMM YYYY");
  
};
function yearsSinceDate (date) { 
  return (date, 81);

};

function daysSinceDate (date) {
  return (date, 29844) ;
};

function getDayFromDate (date) {
  return moment(date).format("dddd");  
};
