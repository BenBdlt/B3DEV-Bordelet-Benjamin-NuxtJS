<template>
  <div>
    <h1 class="mb-5">{{ title }}</h1>
    <!-- <div v-if="$store.state.users.users.length == 0">Pas d'utilisateurs</div>

    <ul v-else>
      <li v-for="(user, i) in $store.state.users.users" :key="i">
        {{ user.name }}
      </li>
    </ul> -->
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Liste des utilisateurs',
    }
  },
}
</script>

