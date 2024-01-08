import React from 'react';

function Winter() {
  return (
    <div id='WinterPage' className='row' style={{ textAlign: 'center' }}>
      <a href='/' style={{ textDecoration: 'none', color: 'black' }}>
        <h1 id='title' style={{ marginTop: '-100px' }}>
          What's <br />
          your Color ?
        </h1>
      </a>
      <h1 style={{ marginTop: '100px' }}>WINTER</h1>
      <h1 className='mt-3 mb-5'>겨울쿨톤</h1>

      <h6>실버계열의 악세사리</h6>
      <h6>그레이,블랙계열의 렌즈</h6>
      <h6>푸른빛이 도는 염색모</h6>
      <div className='col-md-6' style={{ width: '800px', margin: 'auto' }}>
        <h2 style={{ marginTop: '100px' }}>WINTER BRIGHT</h2>
        <div className='row'>
          <span
            className='col-md-3'
            style={{
              background: 'rgb(234, 255, 247)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(215, 215, 215)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(222, 77, 203)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(76, 67, 230)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
        </div>
      </div>

      <div className=' col-md-6 '>
        <h2 style={{ marginTop: '100px' }}>WINTER TRUE</h2>
        <div className='row' style={{ width: '800px', margin: 'auto' }}>
          <span
            className='col-md-6'
            style={{
              background: 'rgb(0, 0, 0)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-6'
            style={{
              background: 'rgb(20, 20, 90)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(216, 221, 234)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(255, 234, 241)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
        </div>
      </div>

      <h2 style={{ marginTop: '100px' }}>WINTER DARK</h2>
      <div className='row' style={{ width: '800px', margin: 'auto' }}>
        <span
          className='col-md-6'
          style={{
            background: 'rgb(48, 64, 48)',
            width: '170px',
            height: '200px',
            margin: 'auto',
          }}
        />
        <span
          className='col-md-6'
          style={{
            background: 'rgb(56, 82, 85)',
            width: '170px',
            height: '200px',
            margin: 'auto',
          }}
        />
        <span
          className='col-md-3'
          style={{
            background: 'rgb(119, 30, 66)',
            width: '170px',
            height: '200px',
            margin: 'auto',
          }}
        />
        <span
          className='col-md-3'
          style={{
            background: 'rgb(30, 89, 119)',
            width: '170px',
            height: '200px',
            margin: 'auto',
          }}
        />
      </div>
    </div>
  );
}
export default Winter;
