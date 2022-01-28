import { createStore } from 'vuex'
import { hubModule } from '~/store/Hub/HubModule'
import { State } from '~/store/Hub/HubState'
import { ActionTypes as HubActions } from '~/store/Hub/HubActions'
import { GetterTypes as HubGetters } from '~/store/Hub/HubGetters'

export enum Modules {
    HUB = 'hub'
}

const store = createStore({
    modules: {
        [Modules.HUB]: hubModule
    }
});

export type RootState = State
export { HubActions, HubGetters }
export default store