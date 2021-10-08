<template>
	<v-container>
		<h1 class="my-8">{{ title }}</h1>

		<h2>Mon profil</h2>
		<v-row class="profil">
			<v-avatar
			color="orange"
			size="50px"
			class="mr-8"
			>
			{{ $store.state.users.current_user[0].name_login.substring(0,2).toUpperCase() }}
			</v-avatar>
			<h1>{{ $store.state.users.current_user[0].name_login}}</h1>

			<!-- <h1>{{ $store.state.users.emailSession}}</h1> -->

			<v-btn class="btn-profil" color="" @click="disc"> deconnexion </v-btn>
		</v-row>

		<h2>Liste des utilisateurs :</h2>
		<div v-if="$store.state.users.users.length == 0">Pas d'utilisateurs</div>
		<v-simple-table dark v-else>
			<template v-slot:default>
				<thead>
					<tr>
						<th class="text-left">Avatar</th>
						<th class="text-left">Nom</th>
						<th class="text-left">Email</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(user, i) in $store.state.users.users" :key="i">
						<!-- <td>{{user.avatar}}</td> -->
						<td></td>
						<td>{{ user.name }}</td>
						<td>{{ user.email }}</td>
					</tr>
				</tbody>
			</template>
		</v-simple-table>
	</v-container>
</template>

<script>
import { ACTIONS } from '~/store/users'

export default {
  data() {
    return {
      title: 'Dashboard',
    }
  },
  methods: {
		disc() {
			this.$store.dispatch(ACTIONS.DISC_METHOD)
			this.$router.push('login')
		},
  }
//   middleware: 'middleware',
}
</script>
<style scoped>
	h2 {
		margin-bottom: 1.5rem;
	}
	.profil {
		margin: 1rem 0 3rem 2rem;
		display: block-ruby;
		width: 50%;
	}
	.btn-profil {
		margin-left: auto;
		background-color: rgb(250, 54, 54) !important;
	}
</style>