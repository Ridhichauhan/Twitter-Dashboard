import { Chart, ArcElement, Tooltip, Legend, registerables } from "chart.js";
Chart.register(...registerables, ArcElement, Tooltip, Legend);

interface Statistics {
  id: string;
  heading: string;
  icon: string;
  number: string;
  body: string;
}
export const TweetsData: Statistics[] = [
  {
    id: "1",
    heading:"TWEETS DMS",
    icon: "bi bi-check-all",
    number:"0",
    body: "Time stamp data",
  },
  {
    id: "2",
    heading:"TOTAL ACKNOWLEDGE TWEETS",
    icon: "bi bi-clipboard2-check",
    number:"2",
    body: "Time stamp data",
  },
  {
    id: "3",
    heading: "TOTAL UNACKNOWLEDGE TWEETS",
    icon: "bi bi-send",
    number: "10",
    body: "Time stamp data",
  },
  {
    id: "4",
    heading: "TOTAL SENT TWEETS",
    icon: "bi bi-envelope-check",
    number: "44",
    body: "Time stamp data",
  },
  {
    id: "5",
    heading: "TOTAL UNSENT TWEETS",
    icon: "bi bi-envelope-dash",
    number: "12",
    body: "Time stamp data",
  },
];

interface TweetsData1 {
    id: string;
    heading: string;
    icon: string;
    number: string;
    body: string;
  }
  export const TweetsData1: Statistics[] = [
    {
      id: "1",
      heading:"TWEETS DMS",
      icon: "bi bi-check-all",
      number:"0",
      body: "Time stamp data",
    },
    {
      id: "2",
      heading:"TOTAL ACKNOWLEDGE DMS",
      icon: "bi bi-clipboard2-check",
      number:"2",
      body: "Time stamp data",
    },
    {
      id: "3",
      heading: "TOTAL UNACKNOWLEDGE DMS",
      icon: "bi bi-send",
      number: "10",
      body: "Time stamp data",
    },
    {
      id: "4",
      heading: "TOTAL SENT DMS",
      icon: "bi bi-envelope-check",
      number: "44",
      body: "Time stamp data",
    },
    {
      id: "5",
      heading: "TOTAL UNSENT DMS",
      icon: "bi bi-envelope-dash",
      number: "12",
      body: "Time stamp data",
    },
  ];
