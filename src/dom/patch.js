// oldVnode 旧的节点
// newVnode 新的节点
import vnode from "./vnode";
import patchVnode from './patchVnode';
import createElement from "./createElement";
export default function(oldVnode, newVnode) {
  // 如果oldVnode没有sel,就证明是非虚拟节点,(让其变成虚拟节点)
  if (oldVnode.sel == undefined) {
    // console.log(oldVnode.tagName.toLowerCase());
    oldVnode = vnode(
      oldVnode.tagName.toLowerCase(), // sel
      {}, //data
      [],
      undefined,
      oldVnode
    )
    // console.log(oldVnode);
  }
  // 判断旧的虚拟节点和新的虚拟节点,是不是同一个节点
  if (oldVnode.sel === newVnode.sel) {
    // 判断条件就复杂很多了
    patchVnode(oldVnode, newVnode);

  } else {
    // 不是同一个节点,则暴力删除就得节点,创建插入新的节点
    // 把新的虚拟节点创建为dom节点
    let newVnodeElm = createElement(newVnode);
    // 获取旧的虚拟节点,elm就是真正的节点
    let oldVnodeElm = oldVnode.elm;
    // 创建新的节点
    if(newVnodeElm) {
      oldVnodeElm.parentNode.insertBefore(newVnodeElm, oldVnodeElm);
    }

    // 删除旧节点
    oldVnodeElm.parentNode.removeChild(oldVnodeElm);
  }
}