import { INCREASE_COUNT, DECREASE_COUNT } from './mutation-types';
export default {
    [INCREASE_COUNT](state) {
        state.count++
    },

    [DECREASE_COUNT](state) {
        state.count--
    }
}