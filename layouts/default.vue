<template>
    <section class="flex flex-col min-h-screen">
        <TheMenu />

        <main class="mb-10">
            <slot />
        </main>

        <footer></footer>
    </section>
</template>

<script setup lang="ts"></script>