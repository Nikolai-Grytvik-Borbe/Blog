<script lang="ts">
	import { onMount } from 'svelte';
    import ReadingProgress from '../../components/icons/ReadingProgress.svelte';

    let progress: number;
    function updateScroll() {
        const max_height = document.documentElement.scrollHeight;
        const scrollY = window.scrollY;
        const viewPort_height = window.innerHeight;
        const distance_from_bottom = max_height - (scrollY + viewPort_height);

        progress = ((max_height - distance_from_bottom) / max_height) * 100;
    }

    onMount(() => {
        window.addEventListener("scroll", updateScroll);
        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    })
</script>

<div class="flex w-full justify-center pt-14">
    <div class="w-full max-w-[1000px] px-4 pt-14 pb-14 text-lg">
        <ReadingProgress progress={progress} />
        <slot />
    </div>

</div>