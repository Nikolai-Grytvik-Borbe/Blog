<script lang="ts">
    export let title: string;
    export let description: string;
    export let date: string;
    export let link: string;
</script>

<a href={`/post/${link}`}>
    <div class="border-t py-4 border-gray-500 hover:cursor-pointer">
        <div class="flex justify-between items-center">
            <h1 class="text-3xl font-bold mb-4">{title}</h1>
            <p class="text-sm">{date}</p>
        </div>
        <p class="mb-4">{description}</p>
    </div>
</a>