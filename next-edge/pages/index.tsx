import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div style={{ padding: "4rem" }}>
      <h1>Theo&apos;s Crappy Web Deployment Runtimes Benchmarks</h1>
      <h2>(Check console and refresh for timing history)</h2>
      <h2>
        <a style={{ color: "blue", textDecoration: "underline" }} href="/edge">
          NextJS Edge Version
        </a>
      </h2>
      <h2>
        <a
          style={{ color: "blue", textDecoration: "underline" }}
          href="/lambda"
        >
          NextJS Lambda Version
        </a>
      </h2>
      <h2>
        <a style={{ color: "blue", textDecoration: "underline" }} href="/cache">
          NextJS Cache/CDN Version
        </a>
      </h2>
      <h2>
        <a
          style={{ color: "blue", textDecoration: "underline" }}
          href="https://svelte-edge.vercel.app/"
        >
          Svelte Edge Version
        </a>
      </h2>
      <h2>
        <a
          style={{ color: "blue", textDecoration: "underline" }}
          href="https://t3-fresh-test.deno.dev/"
        >
          Fresh + Deno Deploy Version
        </a>
      </h2>
    </div>
  );
};

export default Home;

export const config = {
  unstable_runtimeJS: false,
  unstable_JsPreload: false,
};
