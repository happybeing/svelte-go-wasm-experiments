import App from './App.svelte';
// import wasm from './greeting/Cargo.toml';

	if (!WebAssembly.instantiateStreaming) { // polyfill
		WebAssembly.instantiateStreaming = async (resp, importObject) => {
			const source = await (await resp).arrayBuffer();
			return await WebAssembly.instantiate(source, importObject);
		};
	}

	const go = new Go();
	let mod, inst;
	WebAssembly.instantiateStreaming(fetch("/build/test.wasm"), go.importObject).then((result) => {
		mod = result.module;
		inst = result.instance;
		document.getElementById("runButton").disabled = false;
	}).catch((err) => {
		console.error(err);
	});

	async function run() {
		console.clear();
		await go.run(inst);
		inst = await WebAssembly.instantiate(mod, go.importObject); // reset instance
	}

	async function test() {
		alert('what?');
		// console.clear();
		console.log("test - calling go.run(inst)");
		await go.run(inst);
		alert('say what again');
		console.log("test- returned");
		inst = await WebAssembly.instantiate(mod, go.importObject); // reset instance
	}

const init = async() => {
	// const greet = await wasm();

	const app = new App({
		target: document.body,
		props: {
			// greet: greet.greet()
			test: test
		}
	});
};

init();