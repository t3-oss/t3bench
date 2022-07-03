<script context="module">
	import { dev, browser } from '$app/env';

	export const hydrate = dev;
	export const router = false;

	const performance = () => {
		if (browser) {
			const currentTime = new Date();
			// round trip time
			const fullTime = currentTime - window.performance.timing.requestStart;

			console.log('SVELTE REPORTS', fullTime);
			return fullTime;
		}

		return -1;
	};
</script>

<script>
	import '../app.css';
</script>

<svelte:head>
	<title>T3 Benchmarks Svelte + Vercel Edge</title>
	<meta name="description" content="HTML, dynamically rendered in a city near you" />
</svelte:head>

<main>
	<img
		src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
		style="width: 48px;"
		alt="svelte logo"
	/>
	<h1>Theo's Crappy Benchmark (Svelte On Vercel Edge)</h1>
	<h2>Svelte likes to override my script so check console for real #s</h2>
	<h2><span>Full request to render time (according to Svelte):{performance()}ms</span></h2>
	<h2><span>Full request to render time (according to Theo): <span id="overrideme" />ms</span></h2>
	<script>
		const currentTime = new Date();
		// round trip time
		const fullTime = currentTime - window.performance.timing.requestStart;
		document.getElementById('overrideme').innerHTML = fullTime;
		console.log('THEO REPORTS', fullTime);

		const times = JSON.parse(localStorage.getItem('svelte-edge-times-store')) ?? [];
		times.push(fullTime);
		localStorage.setItem('svelte-edge-times-store', JSON.stringify(times));
		console.table(times);
	</script>
</main>

<style>
	main {
		position: relative;
		width: 100vw;
		height: 100%;
		padding: 2.5rem;
		box-sizing: border-box;
	}
</style>
