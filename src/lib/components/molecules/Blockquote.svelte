<script lang="ts">
export let content: string;
export let cite: string;
</script>

  <blockquote class="ml-[1.5em] lg:ml-0 text-[1.4rem]">
    <p class="lg:w-[55%] mr-[40px]">{@html content}</p>
    <footer class="lg:w-[55%] text-[1.1rem] text-right">
      <cite class="italic">{@html cite}</cite>
    </footer>
  </blockquote>
