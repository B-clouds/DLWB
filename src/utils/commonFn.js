/* 防抖节流函数 */
let timeout = null // 创建一个标记用来存放定时器的返回值
let count = 0;
export function debounce(fn, wait = 1000, immediate = false) {
  return function () {
    const args = arguments;
    if (immediate) {
      if (count == 0) {
        fn.apply(this, arguments)
        count++;
      } else {
        if (timeout) {
          clearTimeout(timeout) // 每当用户输入的时候把前一个 setTimeout clear 掉 
        }
 
        timeout = setTimeout(() => {
          fn.apply(this, arguments)
        }, wait)
      }
    } else {
      if (timeout) {
        clearTimeout(timeout) // 每当用户输入的时候把前一个 setTimeout clear 掉 
      }
      timeout = setTimeout(() => {
        fn.apply(this, arguments)
      }, wait)
    }
 
  }()
}
 
 
let canRun = true;
let count1 = 0;
export function throttle(fn, wait = 1000, immediate = true) {
  return function () {
    if (immediate) {
      if (count1 == 0) {
        fn.apply(this, arguments);
        count1++;
      } else {
        if (canRun) {
          canRun = false
          setTimeout(function () {
            fn.apply(this, arguments)
            canRun = true
          }, wait);
        }
      }
    } else {
      if (!canRun) return
      canRun = false
      setTimeout(function () {
        fn.apply(this, arguments)
        canRun = true
      }, wait);
    }
 
  }()
}