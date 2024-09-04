import "./assets/img.jpg";

const logotext = "Tarusi Ambule";
const meta = {
  title: "Tarusi Ambule",
  description:
    "Welcome to the digital portfolio of Tarusi Ambule, a passionate Software Engineer currently contributing to groundbreaking projects at ATMECS Global Inc.",
};

const introdata = {
  title: "Hi, I’m Tarusi Ambule",
  animated: {
    first: "Crafting immersive web experiences...",
    second: "Bringing innovative mobile apps to life...",
    third: "Turning ideas into digital realities...",
  },
  description:
    "As a Full-Stack Developer at ATMECS Technologies Private Limited, Hyderabad, I specialize in React and React Native to build powerful, user-friendly web and mobile applications.",
  your_img_url: `url(${"./assets/img.jpg"})`,
};

const dataabout = {
  title: "A bit about myself",
  aboutme:
    "With over 1.5 years of experience at ATMECS, I have honed my skills in developing dynamic web and mobile apps using ReactJS and React Native. My journey includes working on the NFT Marketplace, where I gained insights into Blockchain and Ethereum, and developing sports apps for the EPL. I thrive in environments where I can blend creativity with technology, consistently delivering high-quality digital solutions.",
};

const worktimeline = [
  {
    jobtitle: "Designer of the Week",
    where: "YAdfi",
    date: "2020",
  },
  {
    jobtitle: "Designer of the Week",
    where: "Jamalya",
    date: "2019",
  },
  {
    jobtitle: "Designer of the Week",
    where: "ALquds",
    date: "2019",
  },
];

const skills = [
  {
    name: "ReactJS",
    value: 90,
  },
  {
    name: "React Native",
    value: 90,
  },
  {
    name: "JavaScript",
    value: 80,
  },
  {
    name: "HTML",
    value: 90,
  },
  {
    name: "CSS",
    value: 90,
  },
  {
    name: "jQuery",
    value: 70,
  },
];

const services = [
  {
    title: "UI & UX Design",
    description:
      "Specializing in crafting intuitive UI & UX designs, I’ve developed and implemented mobile apps for projects like Ports America and HealthX, focusing on both Android and iOS platforms.",
  },
  {
    title: "Mobile & iOS App Development",
    description:
      "I’ve led the design and development of The Fan Lounge (TFL) app using React Native, overseeing everything from bug fixes to new screen designs, and deploying the app to the Play Store.",
  },
  {
    title: "Web Development",
    description:
      "I designed and developed a responsive web app for the NFT Marketplace using ReactJS, meeting client specifications and delivering a seamless user experience.",
  },
];

const contactConfig = {
  YOUR_EMAIL: "tarusi.ambule18@gmail.com",
  YOUR_FONE: "7972922451 / 9623722683",
  description:
    "Excited about potential collaborations or opportunities? Don’t hesitate to reach out!",
};

const socialprofils = {
  github: "https://github.com/",
  facebook: "https://www.facebook.com/tarusi.ambule",
  linkedin: "https://www.linkedin.com/in/tarusi-ambule-2a6b43199",
};

export {
  meta,
  dataabout,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
