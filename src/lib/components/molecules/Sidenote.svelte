<script lang="ts">
export let content: string = "";
export let isInsideBlockQuote: boolean = false;

let id = Math.random().toString(36).substring(7);
let checked = false;
</script>

<label for={id} class="cursor-pointer lg:cursor-auto after:relative after:font-[et-book-roman-old-style] after:text-[1rem] after:top-[-0.5rem] after:left-[0.1rem]" class:-mr-[82%]={isInsideBlockQuote} class:min-w-[59%]={isInsideBlockQuote} class:text-left={isInsideBlockQuote}>
</label>

<input type="checkbox" bind:checked {id} class="margin-toggle"/>

<span class:checked-styles={checked} class="hidden lg:block w-1/2 mt-[0.3rem] mb-0 text-[1.1rem] relative float-right clear-right mr-[-60%] before:relative before:font-[et-book-roman-old-style] before:text-[1rem] top-[-0.5rem]">{content}</span>

<style lang="postcss">
label {
  counter-increment: sidenote-counter;
}

label::after {
  content: counter(sidenote-counter);
}

span::before {
  content: counter(sidenote-counter) ' ';
}

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
