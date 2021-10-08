<template>
	<v-container
		class="mt-10"	
	>
		<v-row>
			<v-avatar
			color="orange"
			size="50px"
			class="mr-8"
			>
			O.O
			</v-avatar>
			<h1>Profil de l'utilisateur {{ slug }}</h1>
		</v-row>
	</v-container>
</template>
<script>
export default {
  data: () => ({
    slug: '',
  }),
  mounted() {
    console.log(this.$route.params['slug'])
    this.slug = this.$route.params['slug']
  },
}
</script>
