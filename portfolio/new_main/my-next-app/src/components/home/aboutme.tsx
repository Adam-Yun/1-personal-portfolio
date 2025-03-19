import "./aboutme.css";
import Image from 'next/image';

const aboutMeSection = (  
  <section className="flex flex-col p-4 border border-zinc-800">
    {/* Section Title */}
    <header className="">
      <h2 className="font-bold text-4xl">About Me</h2>
    </header>

    {/* About Me Container */}
    <div className="about-me-container flex">
      {/* Profile Image & My Name */}
      <div className="max-w-[150px]">
        <div className="relative overflow-hidden rounded-full border border-zinc-800">
          
          <Image className="profile-image" alt="Profile Image" src="/images/memoji.jpg" width={5000} height={5000} priority></Image>
        </div>
        <p className="font-bold mt-4 flex justify-center items-center border border-yellow-500">Adam Yun</p>
      </div>

      {/* Description Container */}
      <div className="w-full ml-2 p-2 border border-blue-500">
        {/* My Description or Story */}
        <p className="flex justify-start items-center">
          Description of me
        </p>
      </div>
    </div>
  </section>
);

export default aboutMeSection;