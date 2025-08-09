<template>
	<button
		class="flex items-center justify-center rounded-sm"
		:class="{ 'bg-[#1B1C1F] p-2 w-10 h-10': menu }"
	>
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
defineProps<{
	menu?: boolean;
}>();
</script>
