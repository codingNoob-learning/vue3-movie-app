// 1207
// import { double } from './example'

// describe('그룹1', () => {
//     // 모든 테스트가 시작되기 전 한 번만 실행
//     beforeAll(() => {
//         console.log('beforeAll!')
//     })
//     // 모든 테스트가 끝나고 한 번만 실행
//     afterAll(() => {
//         console.log('afterAll!')
//     })

//     // 각각의 테스트가 시작하기 직전에 실행
//     // beforeEach() -> test('첫 테스트'...) -> beforeEach() ->test('인수가 숫자 데이터입니다.'...) -> beforeEach() -> test('인수가 없습니다')
//     beforeEach(() => {
//         console.log('beforeEach!')
//     })
//     // 각각의 테스트가 끝난 직후에 실행
//     afterEach(() => {
//         console.log('afterEach!')
//     })
//     test('첫 테스트', () => {
//         console.log('첫 테스트!')
//         expect(123).toBe(123)
//     })
    
//     test('인수가 숫자 데이터입니다.', () => {
//         console.log('인수가 숫자 데이터입니다.')
//         expect(double(3)).toBe(6)
//         expect(double(10)).toBe(20)
//     })
    
//     test('인수가 없습니다', () => {
//         console.log('인수가 없습니다.')
//         expect(double()).toBe(0)
//     })
// })

// 1208 - 1
// const userA = {
//     name: 'HEROPY',
//     age: 85
// }

// const userB = {
//     name: 'Neo',
//     age: 22
// }

// test('데이터가 일치해야 합니다.', () => {
//     expect(userA.age).toBe(85)
//     expect(userA).toEqual({
//         name: 'HEROPY',
//         age: 85
//     })
// })

// test('데이터가 일치하지 않아야 합니다.', () => {
//     expect(userB.name).not.toBe('HEROPY')
//     expect(userB).not.toBe(userA)
// })

// 1208 - 2
// import { asyncFn } from './example'

// describe('비동기 테스트', () => {
//     // test('Done', (done) => {
//     //     asyncFn().then(res => {
//     //         expect(res).toBe('Done')
//     //         done()
//     //     })
//     // })

//     // test('then', () => {
//     //     return asyncFn().then(res => {
//     //         expect(res).toBe('Done')
//     //     })
//     // })

//     // test('resolves', () => expect(asyncFn()).resolves.toBe('Done'))

//     test('async/await', async () => {
//         const res = await asyncFn()
//         expect(res).toBe('Done')
//     }, 7000)
// })

// 1208 - 3
// import * as example from './example'
// describe('비동기 테스트', () => {
//     test('async/await', async() => {
//         jest.spyOn(example, 'asyncFn').mockResolvedValue('Done')
//         const res = await example.asyncFn()
//         expect(res).toBe('Done')
//     }, 7000)
// })

// // 1208 - 4
// import axios from 'axios'
// import { fetchMovieTitle } from './example'

// // axios.get을 url을 통해서 받아오게 되면 서버를 통해서 받아오게 되는데
// // 테스트를 위해서 매번 서버를 통하는 것도 낭비가 되고
// // 만약 서버에 연결할 수 없는 상황이 되면 해당 데이터를 받아와서 핵심 기능을 테스트를 할 수 없기 때문에
// // 모의로 임의 데이터를 만들어서 해당 기능이 정상 작동할 수 있게 함.
// describe('비동기 테스트', () => {
//     test('영화 제목 변환', async () => {
//         axios.get = jest.fn(() => {
//             return new Promise(resolve => {
//                 resolve({
//                     data: {
//                         Title: 'Frozen II'
//                     }
//                 })
//             })
//         })
//         const title = await fetchMovieTitle()
//         expect(title).toBe('Frozen ii')
//     })
// })

// 1208 - 5
// import { mount } from '@vue/test-utils'
// import Example from './Example.vue'

// test('메시지를 변경합니다', async () => {
//     const wrapper = mount(Example)
//     // wrapper.vm === this
//     expect(wrapper.vm.msg).toBe('Hello Vue test utils!')
//     // 반응성 제공 안함
//     // wrapper.vm.msg = 'Hello HEROPY!'

//     // 비동기로 동작하고 반응성 제공함.
//     await wrapper.setData({
//         msg: 'Hello HEROPY!'
//     })
//     expect(wrapper.vm.msg).toBe('Hello HEROPY!')
//     expect(wrapper.find('div').text()).toBe('Hello HEROPY!')
// })