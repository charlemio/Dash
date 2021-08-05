import {
  writable
} from 'svelte/store';

console.log('initializing dummy data');

const sum = arr => {
  return arr.reduce((a, b) => a + b, 0);
}

// chart data for each month
let reach = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let paidReach = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let organicReach = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// key figures
let totalReach = sum(reach);
let totalPaidReach = sum(paidReach);
let totalOrganicReach = sum(organicReach);

let data = {
  reach,
  paidReach,
  organicReach,
  totalReach,
  totalPaidReach,
  totalOrganicReach,
}

export const ReachData = writable(data);