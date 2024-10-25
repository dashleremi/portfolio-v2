import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <div>
        <TypeAnimation
        sequence={[
            'software engineer',
            1000,
            'frontend developer',
            1000,
            'ux/ui designer',
            1000,
            'web developer',
            1000,
            'graphic designer',
            1000
        ]}
        speed={80}
        className='text-8xl text-[#00000098] font-bold lowercase'
        repeat={Infinity}
        />    
    </div>
  );
};

export default TextEffect