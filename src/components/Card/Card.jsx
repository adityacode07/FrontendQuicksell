import './Card.css';

function getRandomColor() {
  const letters = '0123456789ABCDE';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function Card({ data }) {
  const name = data.userName;
  const initials = name.split(' ').map((part) => part.charAt(0).toUpperCase()).join('');
  const randomColor = getRandomColor();

  return (
    <div className="card">
      <div className='header'>
        <div className='code-id'>
          {data.id}
        </div>
        <div className='pic' style={{ backgroundColor: randomColor }}>
          {initials}
        </div>
      </div>
      <div className='title'>
        {data.title}
      </div>
      <div className='footer'>
        <div className='mark'>
          !
        </div>
        <div className='featuretext'>
          ⬤ Feature Request
        </div>
      </div>
    </div>
  );
}
