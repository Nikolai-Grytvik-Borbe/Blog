<script lang="ts">
	import Post from "../components/Post.svelte";



</script>
<div class="flex w-full justify-center px-4 pt-20">
    <div class="w-full max-w-[800px] pt-14">
        <div>
            <p class="mb-10">Hi! This is my blog. I have a lot of ideas, and like to have somewhere to write them down and make them "official". So this is it.</p>
            <Post title="What is the correct choice?" description="A surprising strategy for solving multiple choice exercises." date="2024-12-01" link="correct_choice"/>
            <Post title="Thoughts on Learning" description="How do we learn, and how do we think we learn?" date="2024-11-18" link="thoughts_on_learning"/>
            <Post title="A Morning, A Day, and A Night" description="A tragic war story." date="2020-xx-xx" link="a_morning_a_day_a_night"/>
            <Post title='# shortification on "learning"' description="Ideas about learning, by Andrej Karpathy." date="2024-02-10" link="a_shortification_on_learning"/>
        </div>
    </div>


</div>