<template>
	<div class="flex flex-row items-center gap-2" dir="ltr">
		<div class="flex flex-row items-center gap-1">
			<img
				src="assets/images/imdb.png"
				alt="imdb"
				class="w-[24px] h-[24px] rounded-[2px]"
			/>
			<span class="text-xl font-bold"> {{ rate ?? 0 }} </span>/10
		</div>
		<div class="flex flex-row gap-1">
			<StarIcon />
			<StarIcon />
			<StarIcon />
			<StarIcon />
			<StarIcon />
		</div>
	</div>
</template>

<script setup lang="ts">
import StarIcon from "~/components/icons/StarIcon.vue";

defineProps<{
	rate?: number;
}>();
</script>
