<script lang="ts">
    let date = "2024-12-01";
    let title = "What is the correct choice?";
</script>

<h1 class="text-3xl font-bold mb-1">
    {title}
</h1>
<p class="text-sm mb-4">
    {date}
</p>

<!-- POST -->
<div class="outline outline-black outline-1 rounded-lg">
    <img src="/multiple_choice.png" alt="multiple choice example">
</div>
<div class="py-2"></div>
<p>
    So I got this problem on a test recently, don't worry if you can't solve it, I couldn't either at the time. But I thought for a while,
    and started to realize that I wasnt't even thinking about the problem anymore, I was thinking: "What is the optimal way to guess the correct answer?"

    The common idea, and idea even taught to students, is to pick on row and check every box. This will guarantee that you get one correct,
    so everyone should do this, right?
</p>
<div class="py-2"></div>
<p>
    Well, actually, no. If you think about it, yes you will get one correct, but at the same time you also guarantee that you will only get one correct.
    So your expected value is 1. A better way to think about it is like this: What strategy will give me the highest expected value?
</p>
<div class="py-2"></div>
<p>
    Let's assume that you have absolutely no idea and have to guess. If you guess at random, your expected value will still be 1,
</p>
<div class="py-6 px-20">
    <img src="/chance_win_per_guess.png" alt="chance of win">
</div>
<p>
    So your expected value is still 1, meaning that, probabilistically speaking, it doesn’t matter what you do. If you pick at random, you will
    have a chance of getting more than one correct, but with the risk of getting none correct. If you pick one row and check every box, you will
    get one correct, but you will never get more than one correct. You can go either way, the probability will be the same.
</p>
<div class="py-2"></div>

<p>
    So next time, I should just focus on the exam instead of daydreaming.
</p>
<div class="py-2"></div>

