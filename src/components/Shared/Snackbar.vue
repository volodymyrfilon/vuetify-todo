<template>
	<v-snackbar v-model="$store.state.snackbar.show">
		{{ $store.state.snackbar.text }}

		<template v-slot:action="{ attrs }">
			<v-btn
				class="pink--text"
				text
				v-bind="attrs"
				@click="$store.state.snackbar.show = false"
			>
				Close
			</v-btn>
		</template>
	</v-snackbar>
</template>

<script>
export default {}
</script>

<style></style>
