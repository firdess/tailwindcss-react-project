import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Cart from '../components/Cart'
import ChooseButton from '../components/ChooseButton'
import Comment from '../components/Comment'
import Connection from '../components/Connection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Rewiev from '../components/Rewiev'
import people from '../slideData'

export default function Home({ buttonText }) {
  const [users, setUsers] = useState(people);
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % users.length)
  }

  const handleNext = () => {
    setActiveIndex(prevIndex => ((prevIndex - 1) + users.length) % users.length)
  }
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prevIndex) =>
  //       prevIndex === users.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 5000); // Slider geçiş hızı, 5000ms = 5 saniye

  //   return () => clearInterval(interval);
  // }, [users.length]);

  return (
    <div className='w-full h-full wrapper mx-auto my-0'>
      <Header />
      <div className='section  relative   h-[650px] mt-[7px]'>
        <div className='w-full h-[650px] absolute backgroundImg  '>
        </div>
        <div className='absolute right-0 top-0 w-[55%] '>
          <img src='../images/imagefull.png' className='rounded-[37px] h-[650px] filter object-cover object-right' />
        </div>
        <div className='w-[620px] mt-[176px] ml-[80px] text-blackTitle absolute'>
          <h1 className='mb-[28px] font-black text-[48px] w-[620px] font-displayFont leading-[64px] tracking-[0.96px]'>Get Bussiness
            &nbsp;  &nbsp;  &nbsp;
            Solutions with<span className='tracking-[1.04px] text-[52px]'> TheFirm.</span></h1>
          <p className='mb-[32px] text-[18px] w-[450px] font-textFont font-normal leading-[32px] tracking-[0.36px]'>Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been
            the industrys standard dummy.</p>
          <Button buttonText="Get in Touch" backgroundColor="bg-[#FACA10]" />
        </div>
      </div>
      <div className='section w-full px-[55px] text-center mt-[100px] mb-[107px]'>
        <h2 className='subtitle pb-[50px]'> Our <span className='line'>partner</span></h2>
        <div className='flex justify-between items-center'>
          <div className='w-[50px] h-[50px] rounded-full bg-[#F6F6F6] flex items-center justify-center cursor-pointer hover:bg-[#FBFBFB] hover:shadow-[0px_10px_20px_0px_rgba(5,5,5,0.08)]'>
            <button><img src='../images/left-arrow.svg' /></button>
          </div>
          <div className='grid grid-cols-4 items-center gap-[59px]'>
            <div className='logo-box hover:bg-[#FBFBFB] hover:shadow-[0px_10px_20px_0px_rgba(5,5,5,0.08)]'>
              <img src='../images/logomcr.png' />
            </div>
            <div className='logo-box hover-box '>
              <img src='../images/logogoogle.png' />
            </div>
            <div className='logo-box hover:bg-[#FBFBFB] hover:shadow-[0px_10px_20px_0px_rgba(5,5,5,0.08)]'>
              <img src='../images/logofirefox.png' />
            </div>
            <div className='logo-box hover:bg-[#FBFBFB] hover:shadow-[0px_10px_20px_0px_rgba(5,5,5,0.08)]'>
              <img src='../images/logosafari.png' />
            </div>
          </div>
          <div className='w-[50px] h-[50px] rounded-full bg-[#F6F6F6] flex items-center justify-center cursor-pointer hover:bg-[#FBFBFB] hover:shadow-[0px_10px_20px_0px_rgba(5,5,5,0.08)]'>
            <button><img src='../images/rightarrow.svg' /></button>
          </div>
        </div>
      </div>
      <div className='section   bg-[#FBFBFB] flex justify-between px-[81px] py-[89px] mb-[100px] '>
        <div className='w-[583px] pt-[7px]'>
          <h2 className='subtitle'>Frustration of <span className='line'>Clients</span></h2>
          <p className='textType'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
          <ul className='pl-[29px] pt-[26px] flex flex-col gap-[10px]'>
            <li className='flex gap-[10px] items-center'>
              <img src='./images/question.svg' />
              <p className='textType'>Loren rasion gravida auem is bibenua tase</p>
            </li>
            <li className='flex gap-[10px] items-center'>
              <img src='./images/question.svg' />
              <p className='textType'>Lorem Ipsum is simply dummy text of the.</p>
            </li>
            <li className='flex gap-[10px] items-center'>
              <img src='./images/question.svg' />
              <p className='textType'>Printing and typesetting industry. Lorem Ipsum</p>
            </li>
            <li className='flex gap-[10px] items-center'>
              <img src='./images/question.svg' />
              <p className='textType'>When an unknown printer took a galley of type and scrambled it</p>
            </li>
          </ul>
        </div>
        <div className='relative w-[580px] h-[413px] '>
          <div className='absolute top-[-10px] left-3'>
            <img src='./images/question.png' />
          </div>
          <div className='w-[64px] h-[64px] rounded-full bg-[#FACA10] absolute bottom-[80px] left-[0px]'></div>
          <div className='absolute top-0 right-[-20px] '>
            <img src='./images/table.png' />
          </div>
          <div className='absolute bottom-[-60px] left-[-60px]'>
            <img src='./images/list.png' />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className='section container px-[80px] flex justify-between mb-[100px]'>
        <div className='cardlist text-center relative w-[656px] h-[777px]'>
          <div className='z-10 relative flex justify-center items-center gap-[18px] h-full'>
            <div>
              <img src='./images/Vector.svg' className='opacity-5' />
            </div>
            <div>  <img src='./images/f.svg' className='opacity-5' /></div>
          </div>
          <div className='card absolute top-0 left-0'>
            <img src='./images/coaching.svg' />
            <h3 className='card-title'>Coaching</h3>
            <p className='textType '>Loren rasion gravida auem is bibenua tase</p>
          </div>
          <div className='card absolute left-[42px] bottom-0'>
            <img src='./images/partner.svg' />
            <h3 className='card-title'>Digital Partner</h3>
            <p className='textType '>Loren rasion gravida auem is bibenua tase</p>
          </div>
          <div className='card absolute right-0 top-[193px]'>
            <img src='./images/coaching.svg' />
            <h3 className='card-title'>SEO</h3>
            <p className='textType '>Loren rasion gravida auem is bibenua tase</p>
          </div>
        </div>
        <div className='w-[464px] mt-[180px] '>
          <h2 className='subtitle'>Perfect Solution for
            Your <span className='line'>Bussiness</span> </h2>
          <p className='textType pt-[18px] pb-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
          <Button buttonText="Read More" backgroundColor="bg-[#FACA10]" />
        </div>
      </div>
      <div className='  bg-[#F2F2F2]  px-[80px] py-[96px] '>
        <div className='w-[864px] mx-auto my-0 text-center'>
          <h2 className='subtitle mb-[28px] z-10'>Reason to Choose Us</h2>
          <p className='textType'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        </div>
        <div className='mt-[50px]'>
          <div className='buttonList flex gap-[35px] justify-center mb-[60px]  '>
            <ChooseButton buttonText="Market Research" />
            <ChooseButton buttonText="Branding" />
            <ChooseButton buttonText="Reporting" />
            <ChooseButton buttonText="Data Analysis" />
          </div>
          <div className='bg-white w-full h-[413px]  rounded-[30px] flex justify-between px-[42px] items-center'>
            <div className='shadow-[0px_0px_20px_0px_rgba(0,0,0,0.25)] w-[550px] rounded-[25px]  h-[260px] p-[10px]'>
              <img className='w-full h-full' src='./images/brand.jpg' />
            </div>
            <div className='w-[600px] relative'>
              <img className='absolute left-[-80px] top-[-10px]' src='./images/chooseicon.svg' />
              <div >
                <h3 className='pb-[17px]'>
                  Branding
                </h3>
                <p className='textType pb-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                <Button buttonText="Read More" backgroundColor='bg-black' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container pt-[100px] pb-[185px] px-[150px]'>
        <div className='flex flex-col items-center justify-center gap-[28px] text-center'>
          <h2 className='subtitle'>Our Research & Case Studies</h2>
          <p className='textType w-[864px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        </div>
        <div className='flex  justify-between mt-[48px] items-center'>
          <div className='w-[548px]'>
            <h3 className='pb-[13px]'>Lorem Ipsum is simply</h3>
            <p className='textType pb-[21px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
            </p>
            <Button buttonText="Read More" backgroundColor="#FACA10" />
          </div>
          <div className='p-[10px] bg-white rounded-[25px] w-[497px] h-[441px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.10)]'>
            <img className='rounded-[20px]' src='./images/caseimg.jpg' />
          </div>
        </div>
      </div>
      <div className='bg-[#F2F2F2]'>
        <div className='container pt-[82px] pb-[160px] '>
          <h2 className='subtitle text-center pb-[64px]'>Our Blogs</h2>
          <div className='flex items-center gap-[72px] justify-center'>
            <Cart />
            <Cart />
            <Cart />
          </div>
          <div className='text-center pt-[34px]'>
            <Button buttonText="View More" backgroundColor="bg-orangeBtn" />
          </div>
        </div>
      </div>
      <Comment users={users} setUsers={setUsers} activeIndex={activeIndex} handleNext={handleNext} handlePrev={handlePrev}/>
      <Connection/>
      <Footer />

    

    </div>
  )
}
