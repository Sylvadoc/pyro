import { GetterTree } from 'vuex'
import { State } from '~/store/Hub/HubState'
import { RootState } from '~/store'

export enum GetterTypes {
    GET_TOTO = 'toto',
    GET_TEXT = 'text'
}

export type Getters = {
    [GetterTypes.GET_TOTO]: (state: State)=> boolean,
    [GetterTypes.GET_TEXT]: (state: State)=> string
}

export const getters: GetterTree<State, RootState> & Getters = {
    toto: state => state.toto,
    text: state => state.text
}
