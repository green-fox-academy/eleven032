setTimeout(() => {
  console.log('timer1')

  Promise.resolve().then(function () {
    console.log('promise1')
  })
}, 0)

setTimeout(() => {
  console.log('timer2')

  Promise.resolve().then(function () {
    console.log('promise2')
  })
}, 0)



function 定外卖() {
  return new Promise(async (resolve, reject) => {
    let result = await 做饭()
    if (result == '菜烧好了')
      resolve('我们的外卖正在给您派送了')
    else
      reject('不好意思，我们菜烧糊了，您再等一会')
  })
}

async function 做饭() {
  return Math.random() > 0.5 ? '菜烧好了' : '菜烧糊了'
}

定外卖()
  .then(res => console.log(res))
  .catch(res => console.log(res))