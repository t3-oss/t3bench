import type { NextPage } from "next";
import { Benchmarker } from "../components/benchmarker";

const Home: NextPage = () => {
  return <Benchmarker>Lambda</Benchmarker>;
};

export default Home;

export const getServerSideProps = () => {
  return { props: { message: new Date().toString() } };
};

export const config = {
  runtime: "nodejs",
  unstable_runtimeJS: false,
};
