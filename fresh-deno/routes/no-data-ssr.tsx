/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const getReusedData = () => ({
  startedAt: new Date().getTime(),
});

import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const data = await getReusedData();
    return ctx.render(data);
  },
};

export default function Home() {
  return <div class={tw`p-4 mx-auto max-w-screen-md`}>Old page pls ignore</div>;
}
