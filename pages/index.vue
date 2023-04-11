<script setup lang="ts">
import { AllFilmsDocument } from '~/gql/generated/graphql';

const { data, pending, error } = useAsyncQuery(AllFilmsDocument);
</script>

<template>
	<div v-if="pending">Loading...</div>
	<div v-else-if="error">Oh no... {{ error }}</div>
	<div v-else>
		<ul v-if="data?.allFilms?.films">
			<template v-for="film in data.allFilms.films">
				<li v-if="film" :key="film.id">
					<NuxtLink :to="`/film/${film.id}`">{{ film.title }}</NuxtLink>
				</li>
			</template>
		</ul>
	</div>
</template>
