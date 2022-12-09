// 1207
// export function double(num) {
//     if (!num) {
//         return 0
//     }
//     return num * 2
// }

// 1208 - 2, 3
// export function asyncFn() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Done')
//         }, 6000)
//     })
// }

// 1208 - 4
// import axios from "axios";
// import _upperFirst from 'lodash/upperFirst'
// import _toLower from 'lodash/toLower'

// export async function fetchMovieTitle() {
//     const res = await axios.get('https://omdbapi.com?apikey=7035c60c&i=tt4520988')
//     return _upperFirst(_toLower(res.data.Title)) // Frozen II => Frozen ii
// }