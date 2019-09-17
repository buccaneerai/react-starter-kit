import moment from 'moment';

const formatDate = function formatDate(date) {
  return moment(date).format('MM/DD/YY');
};

export default formatDate;
