/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Content from "../Components/contents.tsx";

const getReusedData = () => {
  const startedAt = new Date();

  console.log("Server rendered at", startedAt);

  return {
    startedAt: startedAt.getTime(),
  };
};

import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const data = await getReusedData();
    return ctx.render(data);
  },
};

export default function Home(props: any) {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Content {...props.data} />
    </div>
  );
}
