import { motion } from "framer-motion";
import Configurator from "./Configurator";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const{ blockColors, blockColor, setBlockColor } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection />
      <SkillsSection blockColors={blockColors} blockColor={blockColor} setBlockColor={setBlockColor}/>
      <ContactSection />
    </div>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold ml-24 leading-snug">
        Hi, I'm
        <br />
        <span className="px-1 italic bg-yellow-300 ">Kiddy Block</span>
      </h1>
      <motion.p
        className="mt-4 text-lg ml-24 text-gray-600"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I like to try new things
        <br />
        learning how to build 3D apps
      </motion.p>
      <motion.button
        className={`bg-[rgb(228,36,4)] text-white ml-24 py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "Threejs / React Three Fiber",
    level: 80,
  },
  {
    title: "React / React Native",
    level: 90,
  },
  {
    title: "Nodejs",
    level: 90,
  },
  {
    title: "Typescript",
    level: 60,
  },
  {
    title: "3D Modeling",
    level: 40,
  },
];
const languages = [
  {
    title: "🇫🇷 French",
    level: 100,
  },
  {
    title: "🇺🇸 English",
    level: 80,
  },
  {
    title: "🇯🇵 Japanese",
    level: 20,
  },
];

const SkillsSection = (props) => {
  const{ blockColors, blockColor, setBlockColor } = props;
  return (
    <Section>
       <Configurator blockColors={blockColors} blockColor={blockColor} setBlockColor={setBlockColor}/>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact me</h2>
      <div className="max-w-full p-8 mt-8 bg-white rounded-md w-96">
        <form>
          <label for="name" className="block mb-1 font-medium text-gray-900">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full p-3 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          />
          <label
            for="email"
            className="block mt-8 mb-1 font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full p-3 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          />
          <label
            for="email"
            className="block mt-8 mb-1 font-medium text-gray-900"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="block w-full h-32 p-3 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          />
          <button className="px-8 py-4 mt-16 text-lg font-bold text-white bg-indigo-600 rounded-lg ">
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};