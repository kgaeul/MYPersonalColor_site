import React from 'react';

function Autumn() {
  return (
    <div id='AutumnPage' className='row' style={{ textAlign: 'center' }}>
      <a href='/' style={{ textDecoration: 'none', color: 'black' }}>
        <h1 id='title' style={{ marginTop: '-100px' }}>
          What's <br />
          your Color ?
        </h1>
      </a>
      <h1 style={{ marginTop: '100px' }}>AUTUMN</h1>
      <h1 className='mt-3 mb-5'>가을웜톤</h1>

      <h6>골드계열의 악세사리</h6>
      <h6>브라운계열의 렌즈</h6>
      <h6>흑갈색이나 어두운 염색모</h6>
      <div className='col-md-6' style={{ width: '800px', margin: 'auto' }}>
        <h2 style={{ marginTop: '100px' }}>AUTUMN DEEP</h2>
        <div className='row'>
          <span
            className='col-md-3'
            style={{
              background: 'rgb(124, 47, 132)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(20, 111, 117)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(111, 117, 20)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(188, 164, 105)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
        </div>
      </div>

      <div className=' col-md-6 '>
        <h2 style={{ marginTop: '100px' }}>AUTUMN TRUE</h2>
        <div className='row' style={{ width: '800px', margin: 'auto' }}>
          <span
            className='col-md-6'
            style={{
              background: 'rgb(224, 18, 60)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-6'
            style={{
              background: 'rgb(211, 94, 1)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(7, 123, 0)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(91, 140, 169)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
        </div>
      </div>

      <h2 style={{ marginTop: '100px' }}>AUTUMN MUTE</h2>
      <div className='row' style={{ width: '800px', margin: 'auto' }}>
        <span
          className='col-md-6'
          style={{
            background: 'rgb(233, 179, 190)',
            width: '170px',
            height: '200px',
            margin: 'auto',
          }}
        />
        <span
          className='col-md-6'
          style={{
            background: 'rgb(233, 190, 179)',
            width: '170px',
            height: '200px',
            margin: 'auto',
          }}
        />
        <span
          className='col-md-3'
          style={{
            background: 'rgb(135, 159, 166)',
            width: '170px',
            height: '200px',
            margin: 'auto',
          }}
        />
        <span
          className='col-md-3'
          style={{
            background: 'rgb(160, 166, 135)',
            width: '170px',
            height: '200px',
            margin: 'auto',
          }}
        />
      </div>
    </div>
  );
}
export default Autumn;
