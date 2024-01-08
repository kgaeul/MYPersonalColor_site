import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Community() {
  const [content, setContent] = useState([]);

  const [newContent, setNewContent] = useState('');
  const [title, setTitle] = useState('');

  const addContent = () => {
    return <div></div>;
  };

  return (
    <div id='container'>
      <a href='/' style={{ textDecoration: 'none', color: 'black' }}>
        <h1 id='title' style={{ marginTop: '-100px' }}>
          What's <br />
          your Color ?
        </h1>
      </a>
      <h3 style={{ marginTop: '50px' }}>퍼뮤니티</h3>
      <h6>퍼스널컬러와 관련된 고민들이 이 곳 하나에 모였다!</h6>
      <form
        className='card'
        style={{ width: '800px', margin: 'auto', paddingTop: '40px' }}
      >
        <input
          type='text'
          value={newContent}
          style={{
            width: '400px',
            height: '30px',
            marginTop: '40px',
            textAlign: 'center',
            margin: 'auto',
          }}
          placeholder='제목을 입력해주세요'
        />
        <br />
        <div style={{ wisth: '1000px' }}>
          <input
            type='text'
            value=''
            style={{
              width: '700px',
              height: '100px',

              textAlign: 'center',
            }}
            placeholder='내용을 입력해주세요'
          />
          <br />
          <button
            onClick={addContent}
            className=' mt-2 mb-4 btn btn-primary'
            style={{ width: '100px', height: '40px' }}
          >
            작성하기
          </button>
        </div>
      </form>
    </div>
  );
}
export default Community;
