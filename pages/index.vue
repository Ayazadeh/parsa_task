<template>
	<div>
		<section class="grid grid-cols-12 grid-rows-1 h-16 pt-4">
			<div class="col-span-11"></div>
			<div>
				<AppButton>
					بازگشت
					<ArrowLeftIcon />
				</AppButton>
			</div>
		</section>
		<section class="grid grid-cols-12 grid-rows-1 gap-1 h-16 pt-2">
			<div class="col-span-8 flex flex-row justify-between items-center">
				<MovieTitle :title-en="detail?.title_en" :title-fa="detail?.title_fa" />
				<div>
					<select class="button">
						<option value="1080">webdl - 1080p کیفیت</option>
					</select>
				</div>
			</div>
			<div class="col-span-4 flex flex-row items-center gap-2">
				<MovieRating :rate="detail?.imdb" />
				<AppButton>
					<FrameIcon />
				</AppButton>	
				<AppButton>
					<ShareIcon />
				</AppButton>
			</div>
		</section>
		<section class="overflow-hidden">
			<div class="grid grid-cols-12 gap-3">
				<!-- Video Player Section -->
				<div class="relative mx-auto col-span-8 h-[456px] w-full">
					<img
						v-if="detail?.poster"
						:src="detail?.poster"
						alt="poster"
						class="w-full"
					/>
					<div v-else class="w-full h-full flex items-center justify-center bg-gray-400/20">ویدیو</div>
				</div>

				<!-- Sidebar -->
				<aside class="relative col-span-4 h-[456px]">
					<EpisodeItem 
						v-for="movie in detail?.episodes"
						:key="movie.number"
						:title="movie.title"
						:poster="movie.poster"
					/>
				</aside>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { useMovieDetail } from "~/composables/movie/useMovieDetail";
import ArrowLeftIcon from "~/components/icons/ArrowLeftIcon.vue";
import ShareIcon from "~/components/icons/ShareIcon.vue";
import FrameIcon from "~/components/icons/FrameIcon.vue";

const { data: detail } = useMovieDetail(2501);
</script>
