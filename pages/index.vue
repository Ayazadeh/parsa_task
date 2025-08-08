<template>
    <div>
        {{ data }}
        <br>
        {{ detail }}
    </div>
</template>

<script setup lang="ts">
import { useMovieList } from '~/composables/movie/useMovie';
import { useMovieDetail } from '~/composables/movie/useMovieDetail';

const { data, pending } = useMovieList();

const { data: detail } = useMovieDetail(2501);
</script>