import { Typewriter } from 'react-simple-typewriter'

const Announcement = () => {
  return (
    <div className="bg-[#A8D5BA] flex items-center justify-center text-white text-[18px] font-semibold h-[30px]">
        <Typewriter
            words={['Now', '20%', 'Discount', 'On your Products!']}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
        />
    </div>
  )
}

export default Announcement