<script lang="ts">
	const showCaseData = [
		{
			name: 'Button',
			url: 'https://badhan-abhishek.github.io/running-border-btn/index',
			image: '/button.png'
		}
	];
</script>

<div class="w-2/3">
	<div class="text-2xl pb-3">Showcase</div>
	<div class="mx-auto">
		<div class="grid grid-cols-2 gap-20">
			{#each showCaseData as showcase}
				<a
					href={showcase.url}
					class="relative group border rounded-xl overflow-hidden shadow-xl shadow-black"
					target="_blank"
					rel="noreferrer"
				>
					<div
						class="absolute hidden group-hover:flex h-full w-full bg-[#ffffff99] bg-blur-lg text-black"
					>
						<span class="grid place-items-center z-10 w-full"> {showcase.name} </span>
					</div>
					<img src={showcase.image} alt="Running Border Button" />
				</a>
			{/each}
		</div>
	</div>
</div>
