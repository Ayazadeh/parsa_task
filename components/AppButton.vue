<template>
	<button
		class="flex items-center justify-center rounded-sm h-12"
		:class="{
			'bg-[#1B1C1F] p-2 w-12': menu,
			'bg-[#242629] py-3 px-4': !menu,
		}"
	>
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
defineProps<{
	menu?: boolean;
}>();
</script>
