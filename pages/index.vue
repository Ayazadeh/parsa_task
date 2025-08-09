<template>
	<div>
		<section class="flex flex-row items-center justify-between h-16 pt-4">
			<div class="flex-1"></div>
			<div>
				<AppButton>
					بازگشت
					<ArrowLeftIcon />
				</AppButton>
			</div>
		</section>
		<section class="flex flex-row items-center justify-between h-16">
			<div class="flex flex-row items-center gap-2">
				<ResolutionIcon />
				<div class="flex flex-col">
					<span>{{ detail?.title_en }}</span>
					<span class="text-xs text-gray-400">{{ detail?.title_fa }}</span>
				</div>
			</div>
			<div>
				<AppButton>
					  webdl - 1080p کیفیت 
				</AppButton>
			</div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</section>
		<section class="flex flex-row items-center">
			<!-- Video Player Section -->
			<main class="flex-1 p-4">
				<div
					class="w-full aspect-video bg-gray-700 flex items-center justify-center"
				>
					<!-- Placeholder for video player -->
					<p class="text-gray-400">Video Player Placeholder (2:26 / 8:04)</p>
				</div>
			</main>

			<!-- Sidebar -->
			<aside class="w-64 bg-gray-800 p-4 overflow-y-auto">
				<div
					v-for="movie in movies"
					:key="movie.title"
					class="mb-4 flex items-center"
				>
					<img :src="movie.image" class="w-16 h-24 object-cover mr-2" />
					<div>
						<p class="text-sm font-semibold">{{ movie.title }}</p>
						<p class="text-xs text-gray-400">{{ movie.quality }}</p>
						<div class="flex items-center text-yellow-400 text-xs">
							<span>★</span> <span>{{ movie.rating }}</span> / 10
						</div>
					</div>
				</div>
			</aside>
		</section>
	</div>
</template>

<script setup lang="ts">
import { useMovieDetail } from "~/composables/movie/useMovieDetail";
import ArrowLeftIcon from "~/components/icons/ArrowLeftIcon.vue";
import ResolutionIcon from "~/components/icons/ResolutionIcon.vue";

const { data: detail } = useMovieDetail(2501);

const movies = [
	{
		title: "El Camino",
		image: "~/assets/images/el-camino.jpg", // Replace with actual image path
		quality: "1080p - WebDL",
		rating: 6.5,
	},
	{
		title: "Love Lies Bleeding 2024",
		image: "~/assets/images/love-lies-bleeding.jpg", // Replace with actual image path
		quality: "1080p - WebDL",
		rating: 6.5,
	},
	{
		title: "Another Movie",
		image: "~/assets/images/another-movie.jpg", // Replace with actual image path
		quality: "1080p - WebDL",
		rating: 6.5,
	},
];
</script>
