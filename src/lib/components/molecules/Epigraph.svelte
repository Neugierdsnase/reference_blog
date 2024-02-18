<script lang="ts">
export let content: string;
export let cite: string;
</script>

<div class="my-20">
  <blockquote class="my-12 ml-[1.5em] lg:ml-0">
    <p class="lg:w-[55%] mr-[40px] italic">{@html content}</p>
    <footer class="lg:w-[55%] text-[1.1rem] text-right">
      <cite class="italic">{@html cite}</cite>
    </footer>
  </blockquote>
</div>
