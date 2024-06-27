import AboutPic from "../assets/AboutPic.png";
import { PicwShad } from "./PicwShad";
export const About = () => {
  return (
    <div className="bg-gray-50 ">
      <div className="m-9">
        <div className="flex justify-center">
          <button className="rounded-full bg-gray-200 text-gray-600 w-[105px] h-[28px] mt-12 items-center">
            About me
          </button>
        </div>
        <div className="md-flex">
          <div className="flex justify-center">
           <PicwShad src={AboutPic}/>
          </div>
          <div className="sm-w-343px">
            <p className="text-2xl mt-4">Curious about me? Here you have it:</p>
            <div className="text-gray-600 mt-4 mb-9">
              <p>
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p className="mt-4">
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p className="mt-4">
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>
              <p className="mt-4">
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
              <p className="mt-4">Finally, some quick bits about me.</p>
              <div className="mt-4 flex-wrap">
                <li>B.E. in Computer Engineering</li>
                <li>Full time freelancer</li>
                <li>Avid learner</li>
                <li>Aspiring indie hacker</li>
              </div>
              <dot />
              <p className="mt-4 mb-10">
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
