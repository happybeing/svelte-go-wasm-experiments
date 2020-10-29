# Svelte + Go (WASM) App Template (EXPERIMENTAL)

This is a simple template for Svelte apps that integrates Go (WASM).

**Status:** experimental, not recommended for use yet

## Golang Version
This template is for use with go version go1.13.8 linux/amd64

If you have problems using a different version of go you may need to refresh the Go wasm support, using your Go compiler's `wasm_exec.html` and `wasm_exec.js`.

You can get copies of these files as follows:
```bash
cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" .
cp "$(go env GOROOT)/misc/wasm/wasm_exec.html" .
```

TODO: explain what to do with these files

## Prerequisites

* Node.js installed
* Golang installed

## Get Started

Clone the template and install the node_module dependencies:

```bash
git clone https://github.com/happybeing/svelte-go-wasm-template <app-name> 
cd <app-name>
npm install
```

**TODO:** update for scripts provided

...then start Rollup:

```bash
npm run dev
```

Navigate to localhost:5000. You should see your app running. Edit a Svelte component file in `src`, or the WASM component in `src/greeting/src`, save it, restart the dev server to recompile the WASM, and then reload your page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in `package.json` to include the option `--host 0.0.0.0`.

If you're using VSCode, we recommend installing the offical Svelte extension as well as the offical Golang extension. If you are using other editors, you may need to install a plugin in order to get syntax highlighting and intellisense for both Svelte and Golang.

## Building and running in production mode

To create an optimized version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses `sirv`, which is invluded in your `package.json`'s dependencies so that the app will work with you deploy to platforms like Heroku.

## Single-page app mode

By default, `sirv` will only respond to requests that match files in `public`. This is to maximize compatibility with static file servers, allowing you to deploy your app almost anywhere.

If you're building a single-page application (SPA) with multiple routes, `sirv` needs to be able to respond to requests for ANY path. You can make it so by editing the `start` command in `package.json`:

```bash
"start": "sirv public --single"
```

