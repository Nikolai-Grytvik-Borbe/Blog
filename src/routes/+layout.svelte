<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	let { children } = $props();
</script>


<div class="max-w-[1140px] mx-auto">
	<Navbar color_mode="white"/>
	{@render children()}

</div>