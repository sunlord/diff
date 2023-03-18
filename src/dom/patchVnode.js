import createElement from "./createElement"
import updateChildren from "./updateChildren";
export default function patchVnode(oldVnode, newVnode) {

  // 判断新节点有没有children
  if (newVnode.children === undefined) { //新节点没有子节点
    // 新节点的文本和旧节点的文本是不是一样的
    if (newVnode.text !== oldVnode.text) {
      oldVnode.elm.innerText = newVnode.text
    }
  } else { //新节点有子节点
    // 新节点有子节点,旧的节点也有
    if (oldVnode.children !== undefined && oldVnode.children.length > 0) {
      // 这个是最复杂的情况,diff算法的核心.

      updateChildren(oldVnode.elm, oldVnode.children, newVnode.children);

    } else { //新的有,旧的没有子节点
      // 把旧的节点内容清空
      oldVnode.elm.innerHTML = '';
      // 遍历新的子节点,创建dom元素,添加到页面中
      for (let child of newVnode.children) {
        let childDom = createElement(child);
        oldVnode.elm.appendChild(childDom);
      }
    }
  }


}