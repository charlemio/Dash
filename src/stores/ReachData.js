import {
  writable
} from 'svelte/store';

console.log('initializing dummy data');

const sum = arr => {
  return arr.reduce((a, b) => a + b, 0);
}

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// chart data for each month
let reach = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let paidReach = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let organicReach = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// key figures
let totalReach = sum(reach);
let totalPaidReach = sum(paidReach);
let totalOrganicReach = sum(organicReach);

let data = [
  {
    label: 'Reach',
    data: reach,
  },
  {
    label: 'Paid Reach',
    data: paidReach,
  },
  {
    label: 'Organic Reach',
    data: organicReach,
  },
];

export { months, totalReach, totalPaidReach, totalOrganicReach };
export const reachData = writable(data);
export const activeTimeSpan = writable('daily');