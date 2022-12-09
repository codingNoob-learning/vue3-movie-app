import movieStore from '~/store/movie'
import _cloneDeep from 'lodash/cloneDeep'

describe('store/movie.js', () => {
    let store

    beforeEach(() => {
        store = _cloneDeep(movieStore)
        store.state - store.state()
        store.commit = (name, payload) => {
            store.mutations[name](store.state, payload)
        }
        store.dispatch = (name, payload) => {
            const context = {
                state: store.state,
                commit: store.commit,
                dispatch: store.dispatch
            }
            return store.actions[name](context, payload)
        }
    })

    test('영화 데이터를 초기화합니다.', () => {
        store.commit('updateState', {
            movie: [{ imdbID: '1' }],
            message: 'Hello world',
            loading: true
        })
        store.commit('resetMovies')
        expect(store.state.movies).toEqual([])
        expect(store.state.message).toBe('Search for the movie title!')
        expect(store.state.loading).toBe(false)
    })
})