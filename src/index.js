import h from './dom/h';
import patch from './dom/patch';


// 获取到真是的dom节点
let container = document.getElementById('container');

let btn = document.getElementById('btn');

// 虚拟节点

let vnode1 = h('ul', {}, [
  h('li', {key: 'a'}, 'a'),
  h('li', {key: 'b'}, 'b'),
  h('li', {key: 'c'}, 'c'),
  h('li', {key: 'd'}, 'd')
]);

// console.log(vnode1);

patch(container, vnode1);

let vnode2 = h('ul', {}, [
  h('li', { key: 'a' }, 'a'),
  h('li', { key: 'b' }, 'b'),
  h('li', { key: 'c' }, 'c'),
  h('li', { key: 'd' }, 'd'),
  h('li', { key: 'e' }, 'e')
  
]);

btn.onclick = function() {
  patch(vnode1, vnode2);
}
/* let vnode1 = h('div', {}, [
  h('h1', {}, '这个是旧的children')
]);

let vnode2 = h('div', {}, [
  h('h1', {}, '这个是新的children')
]); */

// console.log(container);
// console.log(vnode1);

// let vnode2 = h('ul', {}, [
//   h('li', {}, 'a'),
//   h('li', {}, 'b'),
//   h('li', {}, 'c'), 
//   h('li', {}, '笑死我了')
// ])
// patch(container, vnode2);
// console.log(vnode2);