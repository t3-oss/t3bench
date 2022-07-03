import type { NextPage } from "next";
import { Benchmarker } from "../components/benchmarker";

const Home: NextPage = () => {
  return <Benchmarker>Cache</Benchmarker>;
};

export default Home;

export const getStaticProps = () => {
  return { props: { message: new Date().toString() } };
};

export const config = {
  unstable_runtimeJS: false,
};
