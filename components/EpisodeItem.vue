<template>
	<div class="mb-4 flex items-center">
		<img v-if="poster" :src="poster" class="w-16 h-24 object-cover mr-2" />
		<div
			v-else
			class="w-16 h-24 mr-2 bg-gray-400/20 flex items-center justify-center"
		>
			اپیزود
		</div>
		<div>
			<p class="text-sm font-semibold">{{ title ?? "title" }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	poster?: string;
	title?: string;
}>();
</script>
