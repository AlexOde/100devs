
// // L1
// console.log('🥪 Synchronous 1')

// // L2
// setTimeout(_ => console.log(`🍅 Timeout 2`), 0)

// // L3
// Promise.resolve().then(_ => console.log('🍍 Promise'))

// // L4
// console.log('🥪 Syncronous 4')


// import fetch from 'node-fetch';

// const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');

// promise
//     .then(res = res.json())
//     .then(user => {
//         throw new Error('Oh shit');
//         return user;
//     })
//     .then(user => console.log('😍', user.title))
//     .catch(err => console.log('😭', err))

// console.log('🥪 Synchronous')

const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`)

// const codeBlocker = () => {

//     // let i = 0;
//     // while (i < 1000000000) { i++;}

//     // return '🐷 Billion loops are done ☠☠☠'

//     return Promise.resolve().then(v => {
//         let i = 0;
//         while (i < 1000000000) { i++; }
//         return '🐷 billion loops done';
//     })
// }

// log('test1')

// log(codeBlocker())

// log('test2')

const getFruit = async(name) => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    }

    

    return fruits[name];
}

// getFruit('peach').then(console.log)

// // Async + Await

const makeSmoothie = async() => {
    try {
        const a = await getFruit('pineapple');
        const b = await getFruit('strawberry');
        const smoothie = await Promise.all([a, b]);

        throw 'Broken!'
    
        return Promise.all([a, b]);
    } catch(err) {
        console.log(err)
    }
}

// makeSmoothie().then(log)

const fruits = ['peach', 'pineapple', 'strawberry'];


// NONONO
// const smoothie = fruits.map(async v => {
//     const emoji = await getFruit(v)
//     log(emoji)
//     return emoji
// })

const smoothie = fruits.map(v => getFruit(v))

const fruitLoop = async() => {

    for await (const emoji of smoothie)  {
        log(emoji)
    }

    // for (const f of fruits) {
    //     const emoji = await getFruit(f);
    //     log(emoji);
    // }
}

fruitLoop()


const fruitInspection = async() => {
    if (await getFruit('peach') === '🍑') {
        console.log('looks peachy!')
    }
}

fruitInspection()