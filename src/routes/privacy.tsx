import { createFileRoute } from "@tanstack/react-router";
import App from "../App";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy policy | Your Career Story" },
      { name: "description", content: "Privacy policy for Your Career Story." },
      { property: "og:title", content: "Privacy policy | Your Career Story" },
      { property: "og:description", content: "Privacy policy for Your Career Story." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: App,
});