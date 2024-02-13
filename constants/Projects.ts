import {
  covidTracker,
  docsClone,
  expenseTracker,
  googleClone,
  huluClone,
  store,
} from "@/public/assets/images";
import { StaticImageData } from "next/image";

interface Project {
  src: StaticImageData;
  title: string;
  link: string;
  description: string;
}

// Storing Social Links inside Array
export const projects: Project[] = [
  {
    src: covidTracker,
    title: "Covid-19 Tracker",
    link: "https://marty-s-covid-19-tracker.web.app/",
    description:
      "I built this app during the 2020 pandemic for the sake of both learning and recruitment purposes.",
  },
  {
    src: expenseTracker,
    title: " Expense Tracker",
    link: "https://marty-expense-tracker.netlify.app/",
    description:
      "I built this app during the for the sake of both learning a little bit about Fin-Tech and recruitment purposes.",
  },
  {
    src: huluClone,
    title: "Hulu Clone",
    link: "https://hulu-clone-26be37l4b-marty-jr-95.vercel.app/",
    description:
      "I built this app for the sake of both learning and recruitment purposes.",
  },
  {
    src: googleClone,
    title: "Google Clone",
    link: "https://google-2-0-clone.vercel.app/",
    description:
      "I built this app for the sake of both learning and recruitment purposes.",
  },
  {
    src: docsClone,
    title: " Google Docs Clone",
    link: "https://google-docs-clone-kpzjc2iaw-marty-jr-95.vercel.app/",
    description:
      "I built this app for the sake of both learning and recruitment purposes.",
  },
  {
    src: store,
    title: "E-Commerce UI Store",
    link: "https://martos-store.netlify.app/",
    description:
      "I built this app for the sake of both learning and recruitment purposes.",
  },
];
