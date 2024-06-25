import { IoFastFood } from 'react-icons/io5';
import { GiMicrophone } from 'react-icons/gi';
import { GiDramaMasks } from 'react-icons/gi';
import { GiLovers } from 'react-icons/gi';
import { PiDiscoBall, PiSunLight, PiPresentationChart } from 'react-icons/pi';
import { BiJoystick } from 'react-icons/bi';

const Category = () => {
  return (
    <div className="max-w-screen-xl p-5  justify-center overflow-x-auto mx-auto ">
      <div className="grid grid-cols-8 gap-5 sm:grid-cols-8 md:grid-cols-8 lg:grid-cols-8  sm:gap-2">
        <div className="bg-white ho p-5 rounded-full max-w-lg   bg-origin-border">
          <GiMicrophone size={70} className="px-3" />
        </div>
        <div className="bg-white ho p-5 rounded-full max-w-lg  ">
          <PiDiscoBall size={70} className="px-3" />
        </div>
        <div className="bg-white ho p-5 rounded-full max-w-lg  ">
          <GiDramaMasks size={70} className="px-3" />
        </div>
        <div className="bg-white ho p-5 rounded-full max-w-lg  ">
          <PiSunLight size={70} className="px-3" />
        </div>
        <div className="bg-white ho p-5 rounded-full max-w-lg  ">
          <GiLovers size={70} className="px-3" />
        </div>
        <div className="bg-white ho p-5 rounded-full max-w-lg  ">
          <BiJoystick size={70} className="px-3" />
        </div>
        <div className="bg-white ho p-5 rounded-full max-w-lg  ">
          <PiPresentationChart size={70} className="px-3" />
        </div>
        <div className="bg-white ho p-5 rounded-full max-w-lg  ">
          <IoFastFood size={70} className="px-3" />
        </div>
      </div>
    </div>
  );
};

export default Category;
