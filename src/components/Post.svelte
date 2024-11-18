<script lang="ts">
    export let title: string;
    export let description: string;
    export let date: string;
    export let link: string;
</script>

<a href={`/post/${link}`}>
    <div class="border-t py-4 border-gray-500 hover:cursor-pointer">
        <h1 class="text-3xl font-bold">{title}</h1>
        <p class="text-sm mb-2">{date}</p>
        <p class="mb-4">{description}</p>
    </div>
</a>