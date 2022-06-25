<script lang="ts">
	let hovered: boolean = false;
	const handleClick = (type: 'open' | 'close') => {
		hovered = !hovered;
	};
</script>

<div
	class={`
    rounded-full
    hover:border cursor-pointer 
    transition-all
    select-none bg-green-300 
    fixed ${
			hovered
				? 'right-0 bottom-0 rounded-none h-screen w-screen'
				: 'right-8 bottom-8 flex justify-center items-center h-16 w-16'
		}`}
>
	<span
		on:click={() => handleClick('open')}
		class={`
        flex justify-center items-center
        h-16 w-16
        fixed right-8 bottom-8
        hover:font-thin
        `}>{!hovered ? 'MENU' : 'CLOSE'}</span
	>
	<!-- {#if hovered}
		<div on:click={() => handleClick('close')} class="fixed top-8 right-8">CLOSE</div>
	{/if} -->
</div>
