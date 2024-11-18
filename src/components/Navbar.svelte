<script lang="ts">
    import { onMount } from 'svelte';

	import NGB from './icons/NGB.svelte';
    import Hamburger from './icons/Hamburger.svelte';
    import Cross from './icons/Cross.svelte';

    export let color_mode = "black";

    let size = 24;
    let toggle_hamburger = false;
    let color_bg = color_mode === "black" ? "bg-black" : "bg-white";
    let color_text = color_mode === "black" ? "text-white" : "text-black";

    let scrolled = false;
    let lastScrollY = 0;
    onMount(() => {
        function handleScroll() {
            const currentScrollY = window.scrollY;

            // Toggle shadow based on whether the user is scrolling up or down
            scrolled = currentScrollY > 10 || lastScrollY > 10;
            lastScrollY = currentScrollY;
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<style>
    .shadow-on-scroll {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.9); /* Outside shadow */
        background-color: rgb(255, 255, 255);
    }

    .navbar {
        transition: box-shadow 0.5s ease-in-out, background-color 2s ease-in-out; 
    }
</style>


<div class="block md:hidden">
  <!-- Mobile Navbar -->
    <div class="fixed w-full">
        <div class="flex justify-between h-12 m-4 px-4 items-center rounded-2xl border border-gray-700 navbar {scrolled ? 'shadow-on-scroll' : ''}">
            <div><a href="https://nikolai.vip/" target="_blank" ><NGB color_mode={color_mode}/></a></div>
            <button on:click={() => toggle_hamburger = !toggle_hamburger}>
                <Hamburger size={size} color_mode={color_mode}/>
            </button>
        </div>
    </div>
    {#if toggle_hamburger}
        <div class="{color_bg} {color_text} fixed top-0 right-0 h-full w-72 z-50 shadow-lg border-l border-gray-700">
            <button
                on:click={() => toggle_hamburger = !toggle_hamburger} class="p-4 text-white absolute top-0 right-0">
                <Cross size={size} color_mode={color_mode} />
            </button>

            <ul class="pt-20 pl-6">
                <a href="/" on:click={() => toggle_hamburger = !toggle_hamburger}>
                    <div class="py-4 hover:opacity-90 transition-all">Home</div>
                </a>
                <div class="pr-6">
                    <hr>
                </div>
                <a href="https://nikolai.vip/about/" target="_blank" >
                    <div class="py-4 hover:opacity-90 transition-all">Contact</div>
                </a>
            </ul>
        </div>
    {/if}

</div>

<div class="hidden md:block">
  <!-- Desktop Navbar -->
    <div class="fixed max-w-[1140px] w-full">
        <div class="flex justify-between h-12 m-4 px-4 items-center rounded-2xl border border-gray-700 navbar {scrolled ? 'shadow-on-scroll' : ''}">
            <div class="hover:opacity-90 transition-all cursor-pointer">
                <a href="https://nikolai.vip/" target="_blank" >
                    <NGB color_mode={color_mode}/>
                </a>
            </div>
            <div class="flex items-center gap-8 text-md">
                <div class="hover:opacity-90 transition-all"><a href="/">Home</a></div>
                <div class="hover:opacity-90 transition-all"><a target="_blank" href="https://nikolai.vip/about/">Contact</a></div>
            </div>
        </div>
    </div>
</div>