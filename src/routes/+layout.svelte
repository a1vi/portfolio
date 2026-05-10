<script>
	import Navbar from '$lib/components/portfolio/Navbar.svelte';
	import StarLoader from '$lib/components/portfolio/StarLoader.svelte';
	import '../app.css';
	import { ModeWatcher, setMode } from 'mode-watcher';
	setMode('dark');

	let loading = true;

	function handleComplete() {
		loading = false;
	}
</script>

<ModeWatcher />

{#if loading}
	<StarLoader on:complete={handleComplete} />
{/if}

{#if !loading}
	<div
		class="relative mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24"
	>
		<slot />
		<Navbar />
	</div>
{/if}
