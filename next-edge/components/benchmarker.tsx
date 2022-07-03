export const Benchmarker: React.FC<{ children: string }> = ({ children }) => {
  return (
    <div style={{ padding: "4rem" }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
        style={{ width: "64px", marginTop: "2rem" }}
        alt="NextJS logo"
      />
      <h1>Theo&apos;s Crappy Benchmark (NextJS On Vercel {children})</h1>

      <h2>
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
      console.log(\`THEO REPORTS ON ${children}\`, fullTime);
      document.getElementById(\`overrideme\`).innerHTML = fullTime;
      const times = JSON.parse(localStorage.getItem(\`${children}store\`)) ?? [];
      times.push(fullTime);
      localStorage.setItem(\`${children}store\`, JSON.stringify(times));
      console.table(times);
        `}
      </script>
    </div>
  );
};
