import { GetterTree } from 'vuex'
import { State } from '~/store/Hub/HubState'
import { RootState } from '~/store'

export enum GetterTypes {
    GET_TOTO = 'toto'
}

export type Getters = {
    [GetterTypes.GET_TOTO]: (state: State) => boolean
}

export const getters: GetterTree<State, RootState> & Getters = {
    toto: state => state.toto
}
