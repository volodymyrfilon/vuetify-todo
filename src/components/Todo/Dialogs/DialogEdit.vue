<template>
	<v-dialog :value="true" max-width="400" persistent>
		<v-card prepend-icon="mdi-map-marker">
			<v-card-title class="headline">Edit task?</v-card-title>
			<v-card-text
				>Edit the title of a task:
				<v-text-field v-model="taskTitle" @keyup.enter="saveTask" />
			</v-card-text>

			<v-card-actions>
				<v-spacer></v-spacer>

				<v-btn @click="$emit('close')" text> Cancel </v-btn>

				<v-btn @click="saveTask" text color="primary darken-1"> Save </v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	props: ['task'],
	data() {
		return {
			taskTitle: null,
		}
	},
	methods: {
		saveTask() {
			let payload = {
				id: this.task.id,
				title: this.taskTitle,
			}
			this.$store.commit('updateTaskTitle', payload)
			this.$emit('close')
		},
	},
	mounted() {
		this.taskTitle = this.task.title
	},
}
</script>

<style></style>
