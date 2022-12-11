import React from 'react';
import './index.css';
/**
 * 
 * @returns 
 * Renders a Modal component, controllable through events.

Define a keydownHandler that handles all keyboard events and calls onClose when the Esc key is pressed.
Use the useEffect() hook to add or remove the keydown event listener to the Document, calling keydownHandler for every event.
Add a styled <span> element that acts as a close button, calling onClose when clicked.
Use the isVisible prop passed down from the parent to determine if the modal should be displayed or not.
To use the component, import Modal only once and then display it by passing a boolean value to the isVisible attribute.
 */
export const Modal = ({ isVisible = false, title, content, footer, onClose }) => {
  const keydownHandler = ({key} : any) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  }
  // 数据获取，设置订阅以及手动更改 React 组件中的 DOM 都属于副作用。
  // 如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
  // useEffect 的设计是在同一个地方执行。如果你的 effect 返回一个函数，React 将会在执行清除操作时调用它：
  React.useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return document.removeEventListener('keydown', keydownHandler);
  });
  
  // Event 接口的 stopPropagation() 方法阻止捕获和冒泡阶段中当前事件的进一步传播。但是，它不能防止任何默认行为的发生；例如，对链接的点击仍会被处理。如果要停止这些行为，请参见 preventDefault() 方法，它可以阻止事件触发后默认动作的发生。它也不能阻止附加到相同元素的相同事件类型的其它事件处理器，如果要阻止这些处理器的运行，请参见 stopImmediatePropagation() 方法。

  return !isVisible ? null : (
    <div className="modal" onClick={onClose}>
      <div className='model-dialog' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <h3 className='modal-title'>{title}</h3>
          <span className='modal-close' onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content">{content}</div>
        </div>
        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  )
}