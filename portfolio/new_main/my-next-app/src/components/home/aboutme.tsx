import "./styles/aboutme.css";
import Image from 'next/image';

const aboutMeSection = (  
  <section className="flex flex-col p-4">
    {/* Section Title */}
    <header className="about-me-title">
      <h2 className="font-bold text-4xl">Hello, it's me!</h2>
    </header>

    {/* About Me Container */}
    <div className="about-me-container mt-4 flex">
      {/* Profile Image & My Name */}
      <div className="max-w-[150px] flex flex-col justify-center items-center p-1">
        <div className="relative flex justify-center items-center overflow-hidden rounded-full border border-zinc-800">
          <Image className="profile-image" alt="Profile Image" src="/images/memoji.jpg" width={5000} height={5000} priority></Image>
          <div className="profile-image-invert-shadow"></div>
        </div>
        <p className="text-xl font-bold mt-2 flex justify-center items-center">Adam Yun</p>
      </div>

      {/* Description Container */}
      <div className="description-container w-7/10 ml-4 p-4 border border-zinc-800 rounded-[10px]">
        {/* My Description or Story */}
        <p className="tems-center">
        I'm Nael Adam Yun Lihtdean, I know it's a very long name to pronounce, so just call me <span className="font-black">Adam</span>!<br></br><br></br> I'm all about tech and innovation. With a degree in Computer Science from San Francisco State University, I bring a mix of creativity and analytical skills to the table.<br></br><br></br> As a Software Developer, I love to think outside the box and explore new ideas. I have a curiosity for diving into the latest tech trends and off the clock you'll find me tinkering with side projects because building is what I love to do.
        </p>
      </div>
    </div>
  </section>
);

export default aboutMeSection;