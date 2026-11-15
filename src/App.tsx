import { useEffect } from "react";
import { siteTop } from "./site/siteTop";
import { siteMiddle } from "./site/siteMiddle";
import { siteBottom } from "./site/siteBottom";
// @ts-ignore
import { initSite } from "./site/siteScript.js";

const html = siteTop + siteMiddle + siteBottom;

export default function App() {
  useEffect(() => {
    initSite();
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
