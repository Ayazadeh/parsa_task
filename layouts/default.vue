<template>
	<section class="flex flex-col min-h-screen">
		<TheMenu class="px-32" />

		<main class="mb-10 px-32">
			<slot />
		</main>

		<footer></footer>
	</section>
</template>

<script setup lang="ts"></script>
