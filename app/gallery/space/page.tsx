// 'use client';
import Wall from '@/app/ui/space/wall';
import bg from '@/public/space/bg.jpg';

export default function Page() {
  return (
    <div
      style={{
        perspective: '800px',
        height: '100vh',
        position: 'relative',
        paddingTop: '10%',
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover', // 이미지를 화면에 꽉 차게 설정
        backgroundPosition: 'center center', // 이미지를 가운데로 정렬
      }}
    >
      <Wall />
      {/* <div
        onClick={handleFirstWall}
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
      ></div> */}
      <div
        style={{
          position: 'absolute',
          right: '-50%',
          width: '110%',
          height: '73vh',
          transformOrigin: 'right',
          backgroundColor: '#f8f8f8',
          transform: 'rotateY(0deg) translateZ(-950px)',
          boxShadow: '5px 20px 30px rgba(0, 0, 0, 0.1)',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          right: '-50%',
          width: '70%',
          height: '73vh',
          backgroundColor: '#f8f8f8',
          transform: 'rotateY(-30deg) translateZ(-800px)',
          boxShadow: '5px 10px 25px rgba(0, 0, 0, 0.1)',
        }}
      ></div>
    </div>
  );
}
