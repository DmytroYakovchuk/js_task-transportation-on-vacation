/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sumPaid = 0;
  const oneDay = 40;
  const returnMoneyThreeDays = 20;
  const returnMoneySevenDays = 50;

  if (days <= 2) {
    sumPaid = oneDay * days;
  }

  if (days >= 3 && days < 7) {
    sumPaid = oneDay * days - returnMoneyThreeDays;
  }

  if (days >= 7) {
    sumPaid = oneDay * days - returnMoneySevenDays;
  }

  return sumPaid;
}

module.exports = calculateRentalCost;
