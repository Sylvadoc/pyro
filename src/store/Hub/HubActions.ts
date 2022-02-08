import { ActionContext, ActionTree } from 'vuex'
import { State } from '~/store/Hub/HubState'
import { RootState } from '~/store'
import { MutationTypes } from '~/store/Hub/HubMutations'

export enum ActionTypes {
    TOTO = 'TOTO'
}

export type Actions = {
    [ActionTypes.TOTO]: (context: ActionContext<State, RootState>)=> void
}

export const actions: ActionTree<State, RootState> & Actions = {
    [ActionTypes.TOTO]: ({ commit }) => commit(MutationTypes.SET_TOTO, true)
}
