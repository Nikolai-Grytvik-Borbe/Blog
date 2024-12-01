<script lang="ts">
    export let progress: number = 0;

    let width;
    $: width = progress
    
</script>

<div class="fixed bottom-2 w-full max-w-[700px]">
    <div class="rounded rounded-5xl outline outline-1 bg-white outline-gray-600 h-2 sm:ml-32 sm:mr-40 ml-20 mr-28">
        <div style="width: {width}%;" class="h-2 bg-black rounded rounded-r-5xl">
        </div>

    </div>
</div>