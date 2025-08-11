<template>
	<div class="flex flex-row gap-1">
		<ResolutionIcon />
		<div class="flex flex-col">
			<span>{{ titleEn }}</span>
			<span class="text-xs text-gray-400">{{ titleFa }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import ResolutionIcon from './icons/ResolutionIcon.vue';

withDefaults(
	defineProps<{
		titleEn?: string;
		titleFa?: string;
	}>(),
	{
		titleEn: "title_en",
		titleFa: "title_fa",
	}
);
</script>
