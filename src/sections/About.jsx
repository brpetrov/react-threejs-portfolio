import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button';

const About = () => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('brpetrov@outlook.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };
  return (
    <section className='c-space'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='/assets/grid1.png'
              alt='grid-1'
              className='w-full sm:h-[276px] h-fit object-contain'
            />
            <div className='grid-headtext'>
              <p>Hi again</p>
              <p className='grid-subtext'>
                With 5 years of experience, I have honed my skills in fronted
                and backend development.
              </p>
            </div>
          </div>
        </div>
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img
              src='/assets/grid_2.png'
              alt='grid-2'
              className='w-full sm:w-[276px] sm:m-auto h-fit object-contain'
            />
            <div className='grid-headtext'>
              <p>Web & Mobile Apps</p>
              <p className='grid-subtext'>
                Seamless experiences across desktop, tablet and mobile.
              </p>
            </div>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-4'>
          <div className='grid-container'>
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
              <Globe
                height={326}
                width={326}
                backgroundColor='rgba(0, 0, 0, 0)'
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
                bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
              />
            </div>
            <div>
              <p className='grid-headtext'>
                I’m very flexible with time zone communications & locations
              </p>
              <p className='grid-subtext'>
                I&apos;m based in Leeds, UK and open to remote work worldwide.
              </p>
              <Button name='Contact Me' isBeam containerClass='w-full mt-10' />
            </div>
          </div>
        </div>
        <div className='xl:col-span-2 xl:row-span-3 '>
          <div className='grid-container'>
            <img
              src='/assets/grid3.png'
              alt='grid-3'
              className='w-full sm:h-[266px] h-fit object-contain'
            />
            <div>
              <p className='grid-headtext'>My passion for coding</p>
              <p className='grid-subtext'>
                I love solving probles and building things through code.
              </p>
            </div>
          </div>
        </div>
        <div className='xl:col-span-1 xl:row-span-2'>
          <div className='grid-container'>
            <img
              src='assets/grid4.png'
              alt='grid-4'
              className='w-full md:h-[186px] sm:h-[276px] h-fit object-cover sm:object-top'
            />

            <div className='space-y-2'>
              <p className='grid-subtext text-center'>Contact me</p>
              <div className='copy-container' onClick={handleCopy}>
                <img
                  src={isCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                  alt='copy'
                />
                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>
                  brpetrov@outlook.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
