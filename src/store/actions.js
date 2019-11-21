import { INCREASE_COUNT, DECREASE_COUNT } from './mutation-types';

export default {
    increment({
        commit, 
        state
    }) {
        commit(INCREASE_COUNT, state)
    },
    decrement({
        commit,
        state
    }) {
        commit(DECREASE_COUNT, state)
    }
}