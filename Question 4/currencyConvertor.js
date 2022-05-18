const currencyConvertor = (amount) => {
  const USD = (amount / 6.05).toFixed(2);
  const GBP = (USD * 0.73).toFixed(2);
  const CAD = (USD * 1.26).toFixed(2);
  const CNY = (USD * 6.46).toFixed(2);
  const GHS = (amount * 1).toFixed(2);

  return { USD, GBP, CAD, CNY, GHS };
};
