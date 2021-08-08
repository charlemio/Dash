import {
  writable
} from 'svelte/store';

let data = {
  age: [{
      color: '#fd209a',
      label: '< 15',
      value: 21000,
      percentage: '27%',
    },
    {
      color: '#237ef9',
      label: '20 - 35',
      value: 64000,
      percentage: '40%',
    },
    {
      color: '#2ad989',
      label: '40 - 50',
      value: 18000,
      percentage: '16%',
    },
    {
      color: '#6a41fd',
      label: '> 50',
      value: 5000,
      percentage: '8%',
    },
  ],
  gender: [{
      label: 'Male',
      value: 73440,
    },
    {
      label: 'Female',
      value: 41040,
    },
    {
      label: 'Other',
      value: 12960,
    },
  ]
}
export const demographicData = writable(data);