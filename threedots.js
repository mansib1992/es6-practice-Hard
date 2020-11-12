const ages = [12, 45, 56, 67];
const ages2 = [45, 56, 67];
const ages3 = [452, 561, 678];
const allAges = [...ages, ...ages2, 12, ...ages3];
console.log(allAges);

const takaPoisa = [56, 34, 67, 134, 346, 4567, 23, 7895];
const maximum = Math.max(...takaPoisa);
console.log(maximum);