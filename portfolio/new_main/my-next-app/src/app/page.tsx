import Image from "next/image";
import "./page.css";

// TODO: I dont really like that the hover not change the font the grey from even the white space between the navbar choices

export default function Home() {
  return (
    <div id="divBody" className="box-border">
      
      <nav className="px-8 py-4 flex justify-between items-center">
        <a className="name text-xl flex justify-between items-center font-bold">A.Y.</a>
        <ol id="navbarList" className="w-1/2 py-4 px-4 text-xl flex justify-between items-center">
          <li className="">
            <a>Home</a>
          </li>
          <li className="">
            <a>Projects</a>
          </li>
          <li className="">
            <a>Experience</a>
          </li>
          <li className="">
            <a>About</a>
          </li>
          <li className="">
            <a>Contact</a>
          </li>
        </ol>
        <button className="text-xl flex justify-between items-center">English</button>
      </nav>

      <main id="main" className="p-4 flex justify-center items-center">
        <div id="sectionContainer" className="w-full max-w-7/10 p-4">
          {/* Introduction */}
          <section className="intro-section p-4 border border-zinc-800">
            <div className="flex justify-between items-center">
              <header>
                <h2 className="name font-bold text-4xl">Adam Yun</h2>
              </header>
              <div className="icons text-xl">
                <i className="fa fa-github"></i>
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-envelope-o"></i>
              </div>
            </div>

            <div className="pt-1 pb-2 flex justify-start items-center">
              <i className="fa fa-map-marker mr-2 mb-0.5"></i>
              <p>Kota Kinabalu, Malaysia</p>
            </div>

            <div className="pb-1.5">
              <p className="text-lg font-semibold">I'm Full-Stack Developer and I like to build.</p>
            </div>
          </section>

          {/* Experience */}
          <section className="p-4">
            <header>
              <h2 className="font-bold text-4xl underline">Experience</h2>
            </header>
            <ol className="experience-list py-1">
              <li className="experience">
                <h3 className="experience-title text-blue-500 text-2xl font-semibold">
                  NATT
                </h3>
                
                <h4 className="experience-position text-lg font-semibold">
                  Software Engineer
                </h4>

                <div className="experience-end-date text-sm flex justify-start items-center">
                   <p><time>November, 2023</time> - Present</p>
                </div>

                <p className="experience-description text-lg font-medium">
                  A description
                </p>
              </li>

              <li className="experience">
                <h3 className="experience-title text-blue-500 text-2xl font-semibold">
                  UBTS Academy
                </h3>
                
                <h4 className="experience-position text-lg font-semibold">
                  Customer Service Representative
                </h4>

                <div className="experience-end-date text-sm">
                  <p><time>July, 2023</time> - <time>November, 2023</time></p>
                </div>

                <p className="experience-description text-lg font-medium">
                  A description
                </p>
              </li>

              <li className="experience">
                <h3 className="experience-title text-blue-500 text-2xl font-semibold">
                  BMW FM Autohaus
                </h3>
                
                <h4 className="experience-position text-lg font-semibold">
                  IT Intern
                </h4>

                <div className="experience-end-date text-sm">
                  <p><time>February, 2018</time> - <time>July, 2018</time></p>
                </div>

                <p className="experience-description text-lg font-medium">
                  A description
                </p>
              </li>
            </ol>
          </section>

          {/* Projects */}
          <section className="p-4 border border-zinc-800">
            <header>
              <h2 className="font-bold underline text-4xl">Projects</h2>
            </header>

            {/* Project List */}
            <ol className="project-list">
              <li className="project">
                <div className="project-info-container">
                  <h3>
                    Project Title
                  </h3>
                  {/* Project Tech Stack List */}
                  <ol className="project-tech-stack-list">
                    <li>
                      <p>
                        Python
                      </p>
                    </li>
                    <li>
                      <p>
                        Python
                      </p>
                    </li>
                    <li>
                      <p>
                        Python
                      </p>
                    </li>
                  </ol>
                  <p>The Project Description</p>
                  <p>Learn More</p>
                </div>
              </li>

              <li className="project">
                <div className="project-info-container">
                  <h3>
                    Project Title
                  </h3>
                  {/* Project Tech Stack List */}
                  <ol className="project-tech-stack-list">
                    <li>
                      <p>
                        Python
                      </p>
                    </li>
                    <li>
                      <p>
                        Python
                      </p>
                    </li>
                    <li>
                      <p>
                        Python
                      </p>
                    </li>
                  </ol>
                  <p>The Project Description</p>
                  <p>Learn More</p>
                </div>
              </li>

              <li className="project">
                <div className="project-info-container">
                  <h3>
                    Project Title
                  </h3>
                  {/* Project Tech Stack List */}
                  <ol className="project-tech-stack-list">
                    <li>
                      <p>
                        Python
                      </p>
                    </li>
                    <li>
                      <p>
                        Python
                      </p>
                    </li>
                    <li>
                      <p>
                        Python
                      </p>
                    </li>
                  </ol>
                  <p>The Project Description</p>
                  <p>Learn More</p>
                </div>
              </li>
            </ol>
          </section>

          {/* About Me */}
          <section className="p-4 border border-zinc-800">
            <header>
              <h2 className="font-bold underline text-4xl">About Me</h2>
            </header>
          </section>
        </div>
      </main>

      <footer className="px-2 py-4 flex justify-center items-center border-1 border-red-500">
        <a target="_blank" rel="noopener noreferrer"> &copy; 2024 Adam Yun </a>
        <a href="" target="_blank" rel="noopener noreferrer"> Github </a>
        <a href="" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
        <a href="" target="_blank" rel="noopener noreferrer"> Email </a>
      </footer>

    </div>
  );
}


/*
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
*/