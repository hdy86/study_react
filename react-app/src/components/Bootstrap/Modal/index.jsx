import { useState } from "react";

// 장점1. modal 불러올 때마다 useState 선언 안해도 됨
// 장점2. 버튼코드와 모달코드가 가까운 곳에 있음

// activator :  어떤 element 를 누르면 모달을 띄울건지
// content :  어떤 modal 을 띄울건지
const Modal = ({ activator, content }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {activator(() => setShow(true))}
      {show && content(() => setShow(false))}
    </>
  );
};

export default Modal;
