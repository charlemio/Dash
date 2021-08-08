import { writable } from 'svelte/store';

let data = [
  {
    icon: '../static/FacebookIcon.svg',
    label: 'Facebook',
    value: 23857,
    percentage: '+27%',
  },
  {
    icon: '../static/InstagramIcon.svg',
    label: 'Instagram',
    value: 16372,
    percentage: '+18%',
  },
  {
    icon: '../static/LinkedInIcon.svg',
    label: 'LinkedIn',
    value: 2837,
    percentage: '+3%',
  },
  {
    icon: '../static/YouTubeIcon.svg',
    label: 'YouTube',
    value: 45893,
    percentage: '+52%',
  },
];

export const topChannelsData = writable(data);