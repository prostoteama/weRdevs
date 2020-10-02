export const prevDays = (firstDayIndex, prevLastDay) => {
  let arr = [];
  for (let x = firstDayIndex; x > 0; x--) {
    arr.push(prevLastDay - x + 1);
  }
  return arr;
};

export const currDays = (lastDay) => {
  let arr = [];
  for (let i = 1; i <= lastDay; i++) {
    arr.push(i)
  }
  return arr;
};

export const nextMonthDays = (nextDays) => {
  let arr = [];
  for (let j = 1; j <= nextDays; j++) {
    arr.push(j)
  }
  return arr;
};
