<template>
	<div>
		<v-menu>
			<template v-slot:activator="{ on, attrs }">
				<v-btn v-bind="attrs" color="primary" icon v-on="on">
					<v-icon>mdi-dots-vertical</v-icon></v-btn
				>
			</template>

			<v-list>
				<v-list-item
					v-for="(item, index) in items"
					:key="index"
					@click="handleClick(index)"
				>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>

		<dialog-delete
			v-if="dialogs.delete"
			:task="task"
			@close="dialogs.delete = false"
		/>
	</div>
</template>

<script>
export default {
	props: ['task'],
	data: () => ({
		items: [
			{
				title: 'Edit',
				icon: 'mdi-pencil',
				click() {},
			},
			{
				title: 'Due date',
				icon: 'mdi-calendar',
				click() {},
			},
			{
				title: 'Delete',
				icon: 'mdi-delete',
				click() {
					this.dialogs.delete = true
				},
			},
		],
		dialogs: {
			delete: false,
		},
	}),
	methods: {
		handleClick(index) {
			this.items[index].click.call(this)
		},
	},
	components: {
		'dialog-delete': require('@/components/Todo/Dialogs/DialogDelete.vue')
			.default,
	},
}
</script>

<style></style>
