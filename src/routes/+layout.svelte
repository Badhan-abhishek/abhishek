<script>
	import '../app.css';
	import { inject } from '@vercel/analytics';

	inject({ mode: 'production' });
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;200;300;400&display=swap');
	</style>
</svelte:head>

<slot />

<style>
	* {
		font-family: 'IBM Plex Mono', monospace;
	}
</style>
