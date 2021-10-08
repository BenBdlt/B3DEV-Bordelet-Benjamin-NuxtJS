export const ACTIONS = {
  ADD_USER_METHOD: 'users/addUser',
  LOGIN_METHOD: 'users/login',
  DISC_METHOD: 'users/disc'
}

export const state = () => ({
  users: [],
  is_login: false,
  current_user: [],
  cookieSession: {},     //TENTATIVE d'initialisation de cookie
  // emailSession: findEmail(cookieSession)
})

export const mutations = {
  ADD_USER: (state, data) => state.users.push(data),
  // LOGIN_USER: (state) => state.is_login = true,
  LOGIN_USER: (state, name_login) => state.current_user.push(name_login),
  CONFIRM_LOGIN: (state) => state.is_login = true,
  DISC_USER: (state) => state.current_user.splice(0, 1),
  STOP_LOGIN: (state) => state.is_login = false,
}

export const actions = {
  addUser({ commit }, data) {
    commit('ADD_USER', data)
  },
  login({ commit }, name_login) {
    commit('LOGIN_USER', name_login)
    // console.log('test');
    commit('CONFIRM_LOGIN')
    this.$cookies.set('cookieSession', name_login, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
  },
  disc({ commit }) {
    commit('DISC_USER')
    commit('STOP_LOGIN')
    this.$cookies.remove('cookieSession')
  }
}

export function findEmail(name) {        //EXPERIMENTATION : fctn pour trouver l'email correspondant au nom d'utilisateur ...
  for (let i = 0; i < ((state) => state.users.length); i++) {
    if ((state) => state.users[i].name === name) {
      return (state) => state.users[i].email
    }
  }
}
