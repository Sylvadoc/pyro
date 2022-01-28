import { Module } from 'vuex'
import { State, state } from '~/store/Hub/HubState'
import { RootState } from "~/store"
import { mutations } from '~/store/Hub/HubMutations'
import { actions } from '~/store/Hub/HubActions'
import { getters } from '~/store/Hub/HubGetters'

export const hubModule: Module<State, RootState> = {
    namespaced: true,
    state: () => state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}
