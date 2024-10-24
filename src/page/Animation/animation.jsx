import React, { useState, useEffect } from 'react';
import './animation.css';

function Animation() {
  const [running, setRunning] = useState(false);
  const [ballType, setBallType] = useState('none');
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const fieldWidth = 600;
  const fieldHeight = 400;
  const ballSize = 70;
  const maxLeft = fieldWidth - ballSize - 2;
  const maxTop = fieldHeight - ballSize - 2;
  let spinInterval;

  const move = () => {
    let newX = x;
    let newY = y;

    if (goRight) {
      newX += 5;
      if (newX >= maxLeft) {
        setGoRight(false);
      }
    } else {
      newX -= 5;
      if (newX <= 0) {
        setGoRight(true);
      }
    }

    if (goDown) {
      newY += 5;
      if (newY >= maxTop) {
        setGoDown(false);
      }
    } else {
      newY -= 5;
      if (newY <= 0) {
        setGoDown(true);
      }
    }

    setX(newX);
    setY(newY);
  };

  const runClick = () => {
    setRunning(!running);
    if (!running) {
      setSpinInterval();
    } else {
      clearInterval(spinInterval);
    }
  };

  const setSpinInterval = () => {
    spinInterval = setInterval(spinBall, 3000);
  };

  const spinBall = () => {
    const ball = document.getElementById('ball');
    ball.classList.add('spin');
    setTimeout(() => {
      ball.classList.remove('spin');
    }, 1000);
  };

  useEffect(() => {
    if (running) {
      const intervalId = setInterval(() => {
        move();
      }, 25);

      return () => clearInterval(intervalId);
    }
  }, [x, y, running, goRight, goDown]);

  return (
    <div id="container">
      <div id="field" style={{ width: fieldWidth, height: fieldHeight, position: 'relative', border: '1px solid black' }}>
        <div
          id="ball"
          style={{
            width: ballSize,
            height: ballSize,
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
          }}
          className={ballType}
        ></div>
      </div>
      <div id="control">
        <button className="btn btn-success" onClick={runClick} id="run">
          <span className="bi bi-play-circle"></span>&nbsp;{running ? 'STOP' : 'RUN'}
        </button>
        <button className="btn btn-primary" onClick={() => setBallType('none')} id="none">None</button>
        <button className="btn btn-primary" onClick={() => setBallType('basketball')} id="basketball">Basketball</button>
        <button className="btn btn-primary" onClick={() => setBallType('volleyball')} id="volleyball">Volleyball</button>
        <button className="btn btn-primary" onClick={() => setBallType('dog')} id="dog">Dog</button>
        <button className="btn btn-primary" onClick={() => setBallType('cat')} id="cat">Cat</button>
        <button className="btn btn-primary" onClick={() => setBallType('me')} id="me">Me</button>
      </div>
    </div>
  );
}

export default Animation;
