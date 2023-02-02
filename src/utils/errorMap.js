const errorMap = { // usei como base o store manager 
    EMPTY_TOKEN: 401,
    INVALID_TOKEN: 401,
  };
  
  const mapError = (type) => errorMap[type] || 500;

  module.exports = {
    errorMap,
    mapError,
  };