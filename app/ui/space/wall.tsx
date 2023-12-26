'use client';
import { useState } from 'react';

export default function Wall() {
  const [isOpenFirstWall, setIsOpenFirstWall] = useState(false);
  const handleOpenWall = () => {
    setIsOpenFirstWall((prev) => !prev);
  };
  return (
    <div
      onClick={handleOpenWall}
      style={{
        position: 'absolute',
        left: 0,
        width: '35%',
        top: '10%',
        height: '75vh',
        backgroundColor: '#f8f8f8',
        transformOrigin: '0 0',
        transform: 'rotateY(45deg) translateZ(-40px)',
        boxShadow: '5px 50px 30px rgba(0, 0, 0, 0.1)',
        transition: 'all 1s',
        zIndex: 1,

        ...(isOpenFirstWall && {
          position: 'fixed',
          width: '100%',
          height: '100vh',
          top: 0,
          right: 0,
          transform: 'none',
        }),
      }}
    >
      <button>파일 업로드</button>ㅊ
    </div>
  );
}
