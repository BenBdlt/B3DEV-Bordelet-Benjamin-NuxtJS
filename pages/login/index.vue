<template>
	<div>
		<div v-if="register">
			<add-user-form />
			<div class="mt-10">
				<a @click="register = !register">Vous avez déjà un compte ?</a>
			</div>
		</div>
		<div v-else>
			<login-user-form />
			<div class="mt-10">
				<a @click="register = !register">Vous n'avez pas de compte ?</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		register: true,
  	}),
}
</script>
