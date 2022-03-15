<script>
	import { Router, Link, Route } from "svelte-navigator";
	import About from "../src/pages/About/about.svelte";
	import Home from "../src/pages/Home/home.svelte";

</script>


<Router>
	<nav>
		<Link to="/about">About</Link>
		<Link to="/">Home</Link>
	</nav>

	<Route path="/about" component={About}></Route>
	<Route path="/" component={Home}></Route>

</Router>


<style>
	nav {
		background-color: aquamarine;
	}
</style>
