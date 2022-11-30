import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

export default {
    // module
    namespaced: true,

    // data
    state: () => ({
        movies: [],
        message: '',
        loading: false
    }),

    // computed
    getters: {},

    // methods
    // 변이. state의 데이터 변경이 가능
    mutations: {
        updateState(state, payload) {
            // ['movies', 'message', 'loading']
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        resetMovies(state) {
            state.movies = []
        }
    },

    // 비동기 동작
    actions: {
        async searchMovies({ state, commit }, payload) {
            try {
                const res = await _fetchMovie({
                    ...payload,
                    page: 1
                })
                const { Search, totalResults } = res.data
                commit('updateState', {
                    // 중복으로 검색되는 id값 제거
                    movies: _uniqBy(Search, 'imdbID')
                })
                console.log(totalResults)           // Apply 버튼을 눌렀을 때 반환되는 총 결과값
                console.log(typeof totalResults)    // string
    
                const total = parseInt(totalResults, 10)    // string을 int로 변환
                const pageLength = Math.ceil(total / 10)    // ceil = 올림
    
                // 검색 결과값이 11이상일 때 리스트를 추가 요청 전송
                if (pageLength > 1) {
                    for(let page = 2; page <= pageLength; page += 1) {
                        if (page > (payload.number / 10)) break
                        const res = await _fetchMovie({
                            ...payload,
                            page
                        })
                        const { Search } = res.data;
                        commit('updateState', {
                            movies: [
                                ...state.movies,
                                // 중복으로 검색되는 id값 제거
                                ..._uniqBy(Search, 'imdbID')]
                        })
                    }
                }
            } catch (message) {
                commit('updateState', {
                    movie: [],
                    message: message
                })
            }
        }
    }
}

function _fetchMovie(payload) {
    const { title, type, year, page } = payload
    const OMDB_API_KEY = '7035c60c'
    const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`

    return new Promise((resolve, reject) => {
        axios.get(url)
            .then(res => {
                console.log(res)
                if (res.data.Error) {
                    reject(res.data.Error)
                }
                resolve(res)
            })
            .catch(err => {
                reject(err.message)
            })
    })
}