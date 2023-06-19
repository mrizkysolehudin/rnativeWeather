import moment from 'moment';

const FormatDate = date => {
  const formatted = moment(date).format('DD-MM-YY');

  return formatted;
};

export default FormatDate;
