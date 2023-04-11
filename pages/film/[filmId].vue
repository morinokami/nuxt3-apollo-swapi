<script setup lang="ts">
import { FilmDocument } from '~/gql/generated/graphql';

const route = useRoute();

const { filmId } = route.params;

const { data, pending, error } = useAsyncQuery(FilmDocument, {
	filmId,
});
</script>

<template>
	<div v-if="pending">Loading...</div>
	<div v-else-if="error">Oh no... {{ error }}</div>
	<div v-else>
		<div v-if="data?.film">
			<h2>{{ data.film.title }}</h2>
			<p>Directed by {{ data.film.director }}</p>
			<p>Released on {{ data.film.releaseDate }}</p>
			<p>Species:</p>
			<ul>
				<template v-for="species in data.film.speciesConnection?.species">
					<li v-if="species" :key="species.id">
						{{ species.name }} ({{ species.classification }}) from
						{{ species.homeworld ? species.homeworld.name : 'unknown' }}
					</li>
				</template>
			</ul>
		</div>
	</div>
</template>
