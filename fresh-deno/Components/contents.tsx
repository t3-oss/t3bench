/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Content() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <img
        src="https://fresh.deno.dev/logo.svg"
        style={{ width: "64px", marginTop: "2rem" }}
        alt="Fresh Logo"
      />
      <h1 className={tw`text-2xl`}>
        Theo&apos;s Crappy Benchmark (Fresh On DenoDeploy)
      </h1>

      <h2 className={tw`text-xl`}>
        <span>
          Full request to render time (according to Theo):{" "}
          <span id="overrideme" />
          ms
        </span>
      </h2>
      <script>
        {`
      const currentTime = new Date(); // round trip time
      const fullTime = currentTime - window.performance.timing.requestStart;
      console.log(\`THEO REPORTS ON Fresh\`, fullTime);
      document.getElementById(\`overrideme\`).innerHTML = fullTime;
      const times = JSON.parse(localStorage.getItem(\`fresh-store\`)) ?? [];
      times.push(fullTime);
      localStorage.setItem(\`fresh-store\`, JSON.stringify(times));
      console.table(times);
        `}
      </script>
    </div>
  );
}
