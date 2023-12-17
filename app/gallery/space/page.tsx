export default function Page() {
  return (
    <div
      style={{
        perspective: '800px',
        height: '100vh',
        // paddingTop: '500px',
        position: 'relative',
        background: 'blue',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '200px',
          right: 0,
          width: '50%',
          height: '70vh',
          backgroundColor: 'green',
          transform: 'rotateY(-35deg) translateZ(-600px)',
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: '150px',
          left: 0,
          width: '35%',
          height: '75vh',
          backgroundColor: '#3498db',
          transform: 'rotateY(45deg)',
        }}
      ></div>
    </div>
  );
}
