import { createFileRoute } from "@tanstack/react-router";
import App from "../App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Interview Coaching for Non-Native English Speakers | Your Career Story" },
      { name: "description", content: "Online interview coaching in English for non-native speakers applying for jobs in the Netherlands, Germany and across Europe. Practise out loud before the real thing." },
      { property: "og:title", content: "Interview Coaching for Non-Native English Speakers | Your Career Story" },
      { property: "og:description", content: "Online interview coaching in English for non-native speakers applying for jobs in the Netherlands, Germany and across Europe. Practise out loud before the real thing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: App,
});
