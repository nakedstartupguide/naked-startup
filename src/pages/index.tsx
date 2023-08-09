import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "./components/hero";
import Fundraising from "./components/fundraising";
import Signup from "./components/signup";


export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description= {siteConfig.tagline}      
    >
      <main>
        <Hero/>
        <Fundraising />
        <Signup />
      </main>
    </Layout>
  );
}
