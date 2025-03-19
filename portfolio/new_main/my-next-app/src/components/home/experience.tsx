const experience = (
    <section className="p-4">
    <header>
      <h2 className="font-bold text-4xl">Experience</h2>
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
);

export default experience