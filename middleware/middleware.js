export default function ({ store, route, redirect }) {
    
    const guest_routes = ['login', 'about']
    const private_routes = ['dashboard', 'about']

    if (!store.state.users.is_login) {
        if (guest_routes.includes(route.name)) {
            return
        }
    }

    if (!store.state.users.is_login) {
        if (!guest_routes.includes(route.name)) {
            return redirect('/login')
        }
    }

    if (store.state.users.is_login) {
        if (private_routes.includes(route.name)) {
            return
        }
    }

    if (store.state.users.is_login) {
        if (!private_routes.includes(route.name)) {
            return redirect('/dashboard')
        }
    }

    // for (let i = 0; i < guest_route_list.length; i++) {
    //     if ($nuxt.$route.path != guest_route_list) {
    //         if (store.state.is_login === false) {
    //             return redirect('/login')
    //         }
    //     }
    // }
}
  