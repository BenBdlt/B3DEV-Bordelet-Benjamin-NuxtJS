<template>
	<v-form
		ref="form"
		v-model="valid"
		lazy-validation
	>
		<h1>Enregistrer un nouvel utilisateur</h1>
		<v-container fluid>
			<v-text-field
			v-model="name"
			label="Nom d'utilisateur"
			required
			></v-text-field>

			<v-text-field v-model="email" 
			:rules="emailRules" label="E-mail" required></v-text-field>

		
			<v-text-field
				v-model="password"
				:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
				:rules="[rules.required, rules.min]"
				:type="show1 ? 'text' : 'password'"
				name="input-10-1"
				label="Mot de passe"
				hint="At least 3 characters"
				counter
				@click:append="show1 = !show1"
			></v-text-field>

			<v-btn class="mt-4" color="success" @click="add"> Add user </v-btn>
		</v-container>
	</v-form>
</template>

<script>
import { ACTIONS } from '~/store/users'

export default {
	data () {
		return {
			show1: false,
			name: '',
			email: '',
			emailRules: [
				v => !!v || 'E-mail is required',
				v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
			],
			password: '',
			rules: {
				required: value => !!value || 'Required.',
				min: v => v.length >= 3 || 'Min 3 characters',
				emailMatch: () => (`The email and password you entered don't match`),
			},
		}
	},
	methods: {
		add() {
		// console.log(this.name)
		// console.log(this.$store)
			if (this.$refs.form.validate()) {
				this.$store.dispatch(ACTIONS.ADD_USER_METHOD, {
				name: this.name,
				email: this.email,
				password: this.password,
				})	
			}
		},
	},
}
</script>
