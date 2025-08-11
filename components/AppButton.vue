<template>
	<button
		class="flex items-center justify-center cursor-pointer"
		:class="{
			'buttonMenu': menu,
			'button': !menu,
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
