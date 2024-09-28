import project1 from "../assets/projects/E-commerce.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/demoNike.png";
import project4 from "../assets/projects/blogPost.png";

export const HERO_CONTENT = `I'm a passionate frontend web developer with over 2 years of experience, dedicated to crafting responsive, user-friendly websites. I thrive on turning creative ideas into polished digital experiences. I'm currently seeking opportunities to contribute to a dynamic team where I can continue to grow and make an impact.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "02/2022 - 05/2024",
    project: "Health and Benefits Project",
    company: " WIPRO",
    description: ['My responsibility was to implement a user-friendly health landing website using ReactJs , HTML and CSS featuring dynamic enrollment processes for health plans. I used Redux Toolkit for efficient state management across different user interactions, ensuring a seamless and responsive user experience across multiple clients.',
      'Additionally, I implemented a Qualified Life Event Website using React, Redux, and RESTful API integration to dynamically manage enrollment options based on significant life events across multiple clients, reducing load times by 30% through optimized API calls and efficient state management.',
      'Achieved a 25% increase in user enrollment completion rates by streamlining the process of selecting health insurance providers, managing plan options based on duration, pricing, and dependent coverage.',
      'Achieved a 25% increase in user enrollment completion rates by optimising the process of selecting health insurance providers and managing plan options based on duration, pricing, and dependent coverage.',
      'Integrated CI/CD pipelines using tools like Jenkins to automate the build, testing, and deployment processes. I incorporated Jest for testing and debugging which drastically decreased application errors by 40% .',
    ],
      
    technologies: ["ReactJs", "Javascript", "Redux Toolkit","RESTful APIs","Jenkins", "HTML","CSS"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    link: "https://insta-shop-ochre.vercel.app/",
    image: project1,
    description:[
      "Built a scalable and responsive E-commerce website using React, leveraging Redux Toolkit for state management and Context API to streamline props handling, enhancing the user interface and experience.","Integrated Firebase for backend services, including authentication, real-time database, admin panel, ensuring seamless and secure operations."],

    technologies: [
      "HTML",
      "Tailwind CSS",
      "React",
      "Redux",
      "Firebase",
      "Headless Ui",
    ],
  },
  {
    title: "Url Shortner",
    link: "https://url-shortner-dusky-eight.vercel.app/",
    image: project2,
    description:[
      "Developed a responsive URL-shortening website using React and Tailwind CSS. Allows users to create short links instead of random long strings.","Integrated Firebase for secure real-time database management and implemented QR code generation for easy sharing of shortened URLs"],
    technologies: ["HTML", "Tailwind CSS", "React", "Firebase"],
  },
  {
    title: "Nike Demo Page",
    link: "https://nike-demo-blush.vercel.app/",
    image: project3,
    description:
      ["Developed a responsive and visually appealing demo Nike website using React and Tailwind CSS, focused on enhancing user experience with a sleek and intuitive interface."],
    technologies: ["HTML", " Tailwind CSS", "React"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    link: "https://social-media-project-pearl.vercel.app/",
    description:
      ["A platform for creating and publishing blog posts, with features like total number of posts reactions, Hashtags and user profiles."],
    technologies: ["HTML","REACT JS", " CSS", "Bootstrap", "Dummy Json Api"],
  },
];

export const CONTACT = {
  address: " Noida, India",
  phoneNo: "+918340415248 ",
  email: "amit.sinha4t@gmail.com",
};
