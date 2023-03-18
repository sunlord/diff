// vnode为新节点,就是要创建的节点
export default function createElement(vnode) {
  // 创建dom节点
  let domNode = document.createElement(vnode.sel);
  // 判断有没有子节点,children是不是为undefined
   if(vnode.children == undefined) {
    // 没有子节点
    domNode.innerText = vnode.text;
    // console.log(domNode.innerText);
   }else if(Array.isArray(vnode.children)){
    // 新的节点有children子节点,需要递归创建子节点
    for (let child of vnode.children) {
      let childDom = createElement(child);
      domNode.appendChild(childDom);
    }
   }
  //  补充elm属性
  vnode.elm = domNode;
  // console.log(domNode);

  return domNode;
}