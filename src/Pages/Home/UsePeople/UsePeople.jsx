import { BsPersonWorkspace, BsPersonFillGear,  BsPersonFillCheck, BsPersonFillDash, BsPersonFillAdd, BsPersonFillLock } from "react-icons/bs";
const UsePeople = () => {
  return (
    <div data-aos="zoom-in-down"
    data-aos-duration="3000" className="text-center mb-16 mt-8">
      <h2 className="md:text-3xl  font-bold text-xl">
        Perfect Fit For <span className="text-[#434343]">Every Team</span>
      </h2>
      <p className="lg:text-base md:text-sm text-xs font-medium mt-3 text-gray-500">
        Get started fast with out-of-the box solution. <br /> Easily create and
        manage your tasks with Todoist.
      </p>
      <div className="grid  md:grid-cols-3 grid-cols-1 gap-5">
        <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
        <BsPersonWorkspace className="text-3xl mx-auto"></BsPersonWorkspace>
          <h2 className="text-xl font-semibold text-center">Web Developer</h2>
            <p className="text-base font-normal text-gray-600">Join us as a Web Developer thousands of developers around the world use Todoist. </p>
           
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
        <BsPersonFillAdd className="text-3xl mx-auto"></BsPersonFillAdd>
          <h2 className="text-xl font-semibold text-center">Banker</h2>
            <p className="text-base font-normal text-gray-600">Join us as a Banker thousands of bankers around the world use Todoist. </p>
           
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
        <BsPersonFillDash className="text-3xl mx-auto"></BsPersonFillDash>
          <h2 className="text-xl font-semibold text-center">Corporate Worker</h2>
            <p className="text-base font-normal text-gray-600">Join us as a Corporate Worker thousands of corporate workers around the world use Todoist. </p>
           
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
        <BsPersonFillCheck className="text-3xl mx-auto"></BsPersonFillCheck>
          <h2 className="text-xl font-semibold text-center">Professor</h2>
            <p className="text-base font-normal text-gray-600">Join us as a Web Developer thousands of developers around the world use Todoist. </p>
           
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
        <BsPersonFillGear className="text-3xl mx-auto"></BsPersonFillGear>
          <h2 className="text-xl font-semibold text-center">Engineer</h2>
            <p className="text-base font-normal text-gray-600">Join us as a Engineer thousands of engineers around the world use Todoist. </p>
           
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
        <BsPersonFillLock className="text-3xl mx-auto"></BsPersonFillLock>
          <h2 className="text-xl font-semibold text-center">Architect</h2>
            <p className="text-base font-normal text-gray-600">Join us as a Architect thousands of architects around the world use Todoist. </p>
           
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default UsePeople;
