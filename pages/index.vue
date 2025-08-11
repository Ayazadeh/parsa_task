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
		<section class="grid grid-cols-12 grid-rows-1 gap-1 h-16">
			<div class="col-span-8 flex flex-row justify-between items-center">
				<MovieTitle :title-en="detail?.title_en" :title-fa="detail?.title_fa" />
				<div>
					<AppButton> webdl - 1080p کیفیت </AppButton>
				</div>
			</div>
			<div class="col-span-4 flex flex-row items-center">
				<div class="flex flex-row items-center" dir="ltr">
					<img
						src="assets/images/imdb.png"
						alt="imdb"
						class="w-[24px] h-[24px] rounded-[2px]"
					/>
					<span class="text-xl font-bold">
						{{ detail?.imdb }} </span
					>/10
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarIcon />
					<StarIcon />
				</div>
				<AppButton>
					<FrameIcon />
				</AppButton>
				<AppButton class="w-[24px] h-[24px]">
					<ShareIcon />
				</AppButton>
			</div>
		</section>
		<section class="overflow-hidden">
			<div class="grid grid-cols-12 gap-3">
				<!-- Video Player Section -->
				<div class="relative mx-auto col-span-8 h-[456px] w-full">
					<img
						:src="detail?.poster"
						alt="poster"
						v-if="detail?.poster"
						class="w-full"
					/>
					<div class="w-full h-full bg-gray-400/20">loading...</div>
				</div>

				<!-- Sidebar -->
				<aside class="relative col-span-3 h-[456px]">
					<div
						v-for="movie in detail?.episodes"
						:key="movie.title"
						class="mb-4 flex items-center"
					>
						<img :src="movie.poster" class="w-16 h-24 object-cover mr-2" />
						<div>
							<p class="text-sm font-semibold">{{ movie.title }}</p>
							<p class="text-xs text-gray-400">{{ movie.quality }}</p>
							<div class="flex items-center text-yellow-400 text-xs">
								<span>★</span> <span>{{ movie.rating }}</span> / 10
							</div>
						</div>
					</div>
				</aside>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { useMovieDetail } from "~/composables/movie/useMovieDetail";
import ArrowLeftIcon from "~/components/icons/ArrowLeftIcon.vue";
import StarIcon from "~/components/icons/StarIcon.vue";
import ShareIcon from "~/components/icons/ShareIcon.vue";
import FrameIcon from "~/components/icons/FrameIcon.vue";

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
