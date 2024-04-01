<template>
	<v-app>
		<v-navigation-drawer app :mobile-breakpoint="768" v-model="drawer">
			<v-img
				class="pa-4 pt-7"
				src="nature.jpg"
				height="170"
				gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
			>
				<v-avatar size="70" class="mb-2 border">
					<img src="avatar.jpg" alt="user" />
				</v-avatar>
				<div class="white--text text-subtitle-1 font-weight-bold">
					Volodymyr Filon
				</div>
				<div class="white--text text-subtitle-2">@volodymyrfilon</div>
			</v-img>

			<v-list dense nav>
				<v-list-item v-for="item in items" :key="item.title" link :to="item.to">
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app color="primary" dark src="nature.jpg" prominent height="170">
			<template v-slot:img="{ props }">
				<v-img
					v-bind="props"
					gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
				></v-img>
			</template>

			<v-container class="header-container">
				<v-row>
					<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
					<v-spacer></v-spacer>
					<search />
				</v-row>
				<v-row>
					<v-toolbar-title class="text-h4 ml-4">
						{{ $store.state.appTitle }}
					</v-toolbar-title>
				</v-row>
				<v-row>
					<live-date-time />
				</v-row>
			</v-container>
		</v-app-bar>

		<v-main>
			<router-view></router-view>
			<snackbar />
		</v-main>
	</v-app>
</template>

<script>
export default {
	data: () => ({
		drawer: null,
		items: [
			{ title: 'Todo', icon: 'mdi-format-list-checks', to: '/' },
			{ title: 'About', icon: 'mdi-help-box', to: '/about' },
		],
	}),
	mounted() {
		this.$store.dispatch('getTasks')
	},
	components: {
		snackbar: require('@/components/Shared/Snackbar.vue').default,
		search: require('@/components/Tools/Search.vue').default,
		'live-date-time': require('@/components/Tools/LiveDateTime.vue').default,
	},
}
</script>

<style lang="scss">
.header-container {
	max-width: none !important;
}
</style>
