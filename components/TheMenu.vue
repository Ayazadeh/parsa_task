<template>
	<div
		class="flex flex-row items-center justify-between bg-[#242629] z-40 h-12"
	>
		<section class="flex flex-row items-center">
			<AppButton class="lg:hidden block" @click="toggleMenu">
				<HamburgerIcon />
			</AppButton>
			<div
				class="invisible opacity-0 top-10 inset-x-0 h-0 bg-base-100 flex flex-col text-center absolute mt-3 rounded-box border shadow-lg lg:flex lg:flex-row lg:items-center lg:visible lg:opacity-100 lg:relative lg:border-none lg:rounded-none lg:shadow-none lg:mt-0 lg:inset-0"
			>
				<router-link to="/" class="w-full lg:w-auto py-3 pr-4 cursor-pointer">
					<img src="~/assets/images/logo.png" class="w-28 h-10" />
				</router-link>
				<router-link
					v-for="(item, index) in menuItems"
					:key="`menu-${index}`"
					:to="item.to"
					class="w-full lg:w-auto py-3 pr-4 cursor-pointer"
				>
					{{ item.title }}
				</router-link>
			</div>
		</section>
		<section class="flex flex-row items-center gap-1">
			<ArrowLeftIcon />
			<AppButton menu>
				<NotificationIcon />
			</AppButton>
			<AppButton menu>
				<SaveMinusIcon />
			</AppButton>
			<AppButton menu>
				<SearchIcon />
			</AppButton>
			<AppButton menu>
				<ProfileIcon />
			</AppButton>
		</section>
	</div>
</template>

<script setup lang="ts">
import HamburgerIcon from "./icons/HamburgerIcon.vue";
import ArrowLeftIcon from "./icons/ArrowLeftIcon.vue";
import ProfileIcon from "./icons/ProfileIcon.vue";
import NotificationIcon from "./icons/NotificationIcon.vue";
import SearchIcon from "./icons/SearchIcon.vue";
import SaveMinusIcon from "./icons/SaveMinusIcon.vue";
import AppButton from "./AppButton.vue";

const menuItems = [
	{
		title: "دسته بند‌ی‌ها",
		to: "/",
	},
	{
		title: "فیلم",
		to: "/",
	},
	{
		title: "سریال",
		to: "/",
	},
	{
		title: "بازیگران",
		to: "/",
	},
	{
		title: "جدیدترین دوبله‌ها",
		to: "/",
	},
];

const toggleMenu = () => {};
</script>
