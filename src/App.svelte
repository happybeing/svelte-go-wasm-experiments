<script>
	// export let greet;
	export let test;

	function test2(){
		console.log('App.svelte / test()');
		// alert('strange');
	}
</script>

<main>
	<h1>Test</h1>
	<!--<h1>{greet}!</h1>-->
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<button on:click={() => test()} id="runButton" enabled>Run</button>

	<!-- on:click={() => dataSourceUI = !dataSourceUI} -->
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>