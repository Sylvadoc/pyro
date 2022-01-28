import { State } from '~/store/Hub/HubState'
import { MutationTree } from 'vuex';

export enum MutationTypes {
    SET_TOTO = 'SET_TOTO',
}

export type Mutations<S = State> = {
    [MutationTypes.SET_TOTO]: (state: S, payload: boolean) => void
}

export const mutations: MutationTree<State> & Mutations = {
    SET_TOTO: (state, payload) => {
        state.toto = payload;
    }
}
