import { createFileRoute } from "@tanstack/react-router";
import App from "../App";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and cancellation | Your Career Story" },
      { name: "description", content: "Terms and cancellation policy for Your Career Story." },
      { property: "og:title", content: "Terms and cancellation | Your Career Story" },
      { property: "og:description", content: "Terms and cancellation policy for Your Career Story." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: App,
});