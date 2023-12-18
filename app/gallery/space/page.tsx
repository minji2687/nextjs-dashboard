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
      {/* <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '-1000%',
          width: '10000%',
          height: '10000%',
          border: '1px solid black',
          backgroundColor: 'grey',
          transformOrigin: 'bottom right',
          transform: 'rotateX(100deg) translateZ(0px)',
        }}
      ></div> */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          width: '35%',
          height: '75vh',
          border: '1px solid black',
          backgroundColor: 'white',
          transformOrigin: '0 0',
          transform: 'rotateY(45deg) translateZ(-40px)',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          right: '-50%',
          width: '110%',
          height: '73vh',
          border: '1px solid black',
          transformOrigin: 'right',
          backgroundColor: 'white',
          transform: 'rotateY(0deg) translateZ(-950px)',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          right: '-50%',
          width: '70%',
          height: '73vh',
          border: '1px solid black',
          backgroundColor: 'white',
          transform: 'rotateY(-30deg) translateZ(-800px)',
        }}
      ></div>

      {/* <div class="floor-ceiling ceiling"></div> */}
    </div>
  );
}
