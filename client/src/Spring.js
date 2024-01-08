import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

function Spring() {
  return (
    <div id='SpringPage' className='row' style={{ textAlign: 'center' }}>
      <a href='/' style={{ textDecoration: 'none', color: 'black' }}>
        <h1 id='title' style={{ marginTop: '-100px' }}>
          What's <br />
          your Color ?
        </h1>
      </a>
      <h1 style={{ marginTop: '100px' }}>Spring</h1>
      <h1 className='mt-3 mb-5'>봄웜</h1>

      <h6>로즈골드계열의 악세사리</h6>
      <h6>브라운계열의 렌즈</h6>
      <h6>흑갈색이나 밝은 염색모</h6>
      <div className='col-md-6' style={{ width: '800px', margin: 'auto' }}>
        <h2 style={{ marginTop: '100px' }}>SPRING BRIGHT</h2>
        <div className='row'>
          <span
            className='col-md-3'
            style={{
              background: 'rgb(242, 217, 205)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(17, 190, 81)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(253, 235, 162)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(250, 189, 180)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
        </div>
      </div>

      <div className=' col-md-6 '>
        <h2 style={{ marginTop: '100px' }}>SPRING TRUE</h2>
        <div className='row' style={{ width: '800px', margin: 'auto' }}>
          <span
            className='col-md-6'
            style={{
              background: 'rgb(100, 71, 61)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-6'
            style={{
              background: 'rgb(253, 193, 133)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(255, 221, 123)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
          <span
            className='col-md-3'
            style={{
              background: 'rgb(99, 218, 201)',
              width: '170px',
              height: '200px',
              margin: 'auto',
            }}
          />
        </div>
      </div>

      <h2 style={{ marginTop: '100px' }}>SPRING LIGHT</h2>
      <div className='row' style={{ width: '800px', margin: 'auto' }}>
        <span
          className='col-md-6'
          style={{
            background: 'rgb(252, 212, 207)',
            width: '170px',
            height: '200px',
            margin: 'auto',
          }}
        />
        <span
          className='col-md-6'
          style={{
            background: 'rgb(219, 252, 207)',
            width: '170px',
            height: '200px',
            margin: 'auto',
          }}
        />
        <span
          className='col-md-3'
          style={{
            background: 'rgb(248, 250, 202)',
            width: '170px',
            height: '200px',
            margin: 'auto',
          }}
        />
        <span
          className='col-md-3'
          style={{
            background: 'rgb(255, 239, 201)',
            width: '170px',
            height: '200px',
            margin: 'auto',
          }}
        />
      </div>
    </div>
  );
}
export default Spring;
