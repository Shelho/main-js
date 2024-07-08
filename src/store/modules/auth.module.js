import axios from 'axios'
import { error } from '../../utils/error'

const TOKEN_KEY = 'jwt-token'

export default {
    namespaced: 'true',
    state() {
        return {
            token: localStorage.getItem(TOKEN_KEY)
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem(TOKEN_KEY, token)
        },
        logout(state) {
            state.token = null
            localStorage.removeItem(TOKEN_KEY)
        },
    },
    actions: {
        async login({ commit, dispatch }, payload) {
            try {
                const myReq = { ...payload, returnSecureToken: true }
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_APP_FB_KEY}`
                const { data } = await axios.post(url, myReq)
                commit('setToken', data.idToken)
                commit('clearMessage', null, { rott: true })
            } catch (e) {
                dispatch('setMessage', {
                    value: error(e.response.data.error.message),
                    type: 'danger'
                }, { root: true })
            }

        }
    },
    getters: {
        token(state) {
            return state.token
        },
        isAuthenticadet(_, getters) {
            return !!getters.token
        }
    }
}