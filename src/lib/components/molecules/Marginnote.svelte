<script lang="ts">
export let content: string;

let id = Math.random().toString(36).substring(7);
let checked = false;
</script>

<label for="mn-{id}"
       class="inline lg:hidden">&#8853;
</label>
<input bind:checked type="checkbox" id="mn-{id}" class="margin-toggle"/>
<span class:checked-styles={checked} class="hidden lg:block w-1/2 mt-[0.3rem] mb-0 text-[1.1rem] relative float-right clear-right mr-[-60%]">{content}</span>

<style lang="postcss">
.checked-styles {
			display: block;
			float: left;
			left: 1rem;
			clear: both;
			width: 95%;
			margin: 1rem 2.5%;
			position: relative;
		}
</style>
