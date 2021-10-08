<template>
	<v-form>
		<h1>Connexion</h1>
		<div v-if="$store.state.users.is_login">
			<!-- LOGIN -->
		</div>
		<div v-else>
			<!-- NON LOGIN :/// -->
		</div>
		<div v-show="show_error" class="error-msg">Nom ou mot de passe incorrect</div>
		<v-container fluid>
			<v-text-field
				v-model="name_login"
				label="Nom d'utilisateur"
				required
			></v-text-field>

			<v-text-field
				v-model="password_login"
				:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
				:rules="[rules.required, rules.min]"
				:type="show1 ? 'text' : 'password'"
				name="input-10-1"
				label="Mot de passe"
				hint="At least 8 characters"
				counter
				@click:append="show1 = !show1"
			></v-text-field>

    		<v-btn class="mt-4" color="success" @click="login"> login </v-btn>
		</v-container>
	</v-form>
</template>

<script>
import { ACTIONS } from '~/store/users'

export default {
  	data: () => ({
		name_login: '',
		password_login: '',
		show1: false,
		show_error: false,
		rules: {
		required: value => !!value || 'Required.',
		// min: v => v.length >= 2 || 'Min 2 characters',
		emailMatch: () => (`The name and password you entered don't match`),
		},
	
  	}),
  methods: {
    login() {
		var tab_user  = this.$store.state.users;
		for (let i = 0; i < tab_user.users.length; i++) {
			// alert(this.name_login)
			if (tab_user.users[i].name === this.name_login && tab_user.users[i].password === this.password_login) {
				// alert('OUIIIIIIIIII')
				this.show_error = false
				this.$store.dispatch(ACTIONS.LOGIN_METHOD, {
					is_login: true,
					name_login: this.name_login,
				})
				this.$router.push('dashboard')
			}
			else {
				this.show_error = true
			}
		}
    },
  },
}
</script>


<style scoped>
	.error-msg {
		color: rgb(255, 61, 61);
		padding-top: 1rem
	}
</style>