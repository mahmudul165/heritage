const getError = (err) =>
  err.res && err.res.data && err.res.data.message
    ? err.res.data.message
    : err.message;

export { getError };
