<template>
	<button :class="{ 'bg-[#1B1C1F] p-3': menu }">
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
defineProps<{
	menu?: boolean;
}>();
</script>
