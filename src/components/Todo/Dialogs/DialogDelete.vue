<template>
	<v-dialog :value="true" max-width="400" persistent>
		<v-card prepend-icon="mdi-map-marker">
			<v-card-title class="headline">Delete task?</v-card-title>
			<v-card-text>Are you sure you want to delete this task?</v-card-text>

			<v-card-actions>
				<v-spacer></v-spacer>

				<v-btn @click="$emit('close')" text> No </v-btn>

				<v-btn
					@click="$store.dispatch('deleteTask', task.id)"
					text
					color="red darken-1"
				>
					Yes
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	props: ['task'],
}
</script>

<style></style>
