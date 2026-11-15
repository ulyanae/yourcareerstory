import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your Career Story" },
      { name: "description", content: "Your Career Story, coming soon" },
      { property: "og:title", content: "Your Career Story" },
      { property: "og:description", content: "Your Career Story, coming soon" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return <p>Your Career Story, coming soon</p>;
}
