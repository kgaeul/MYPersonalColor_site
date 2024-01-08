import React from 'react';

function Summer() {
  return (
    <div id='SummerPage' className='row' style={{ textAlign: 'center' }}>
      <a href='/' style={{ textDecoration: 'none', color: 'black' }}>
        <h1 id='title' style={{ marginTop: '-100px' }}>
          What's <br />
          your Color ?
        </h1>
      </a>
      <h1 style={{ marginTop: '100px' }}>SUMMER</h1>
      <h1 className='mt-3 mb-5'>여름쿨톤</h1>

      <h6>실버계열의 악세사리</h6>
      <h6>브라운계열의 렌즈</h6>
      <h6>흑갈색이나 자연모</h6>
      <div className='col-md-6' style={{ width: '800px', margin: 'auto' }}>
        <h2 style={{ marginTop: '100px' }}>SUMMER BRIGHT</h2>
        <div className='row'>
          <span
            className='col-md-3'
            style={{
              background: 'rgb(52, 115, 125)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(115, 54, 74)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(171, 165, 196)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(255, 207, 238)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
        </div>
      </div>

      <div className=' col-md-6 '>
        <h2 style={{ marginTop: '100px' }}>SUMMER MUTE</h2>
        <div className='row' style={{ width: '800px', margin: 'auto' }}>
          <span
            className='col-md-6'
            style={{
              background: 'rgb(133, 190, 184)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-6'
            style={{
              background: 'rgb(150, 139, 152)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(230, 225, 220)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(82, 108, 73)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
        </div>
      </div>

      <h2 style={{ marginTop: '100px' }}>SUMMER LIGHT</h2>
      <div className='row' style={{ width: '800px', margin: 'auto' }}>
        <span
          className='col-md-6'
          style={{
            background: 'rgb(255, 223, 241)',
            width: '170px',
            height: '200px',
            margin: 'auto',
          }}
        />
        <span
          className='col-md-6'
          style={{
            background: 'rgb(183, 238, 243)',
            width: '170px',
            height: '200px',
            margin: 'auto',
          }}
        />
        <span
          className='col-md-3'
          style={{
            background: 'rgb(40, 184, 126)',
            width: '170px',
            height: '200px',
            margin: 'auto',
          }}
        />
        <span
          className='col-md-3'
          style={{
            background: 'rgb(176, 172, 158)',
            width: '170px',
            height: '200px',
            margin: 'auto',
          }}
        />
      </div>
    </div>
  );
}
export default Summer;
