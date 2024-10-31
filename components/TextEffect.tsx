import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <div>
        <TypeAnimation
        sequence={[
            'product designer',
            1500,
            'ux/ui designer',
            1500,
            'web developer',
            1500,
            'software engineer',
            1500,
            'graphic designer',
            1500
        ]}
        speed={50}
        className='text-3xl bg-gradient-to-r from-orange-950 via-blue-900 to-green-800 text-transparent bg-clip-text font-bold lowercase'
        repeat={Infinity}
        />    
    </div>
  );
};

export default TextEffect