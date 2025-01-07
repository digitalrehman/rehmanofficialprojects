const projects = [
  {
    id: 1,
    title: "Digital Clock",
    description:
      "A sleek and modern digital clock built using HTML, CSS, and JavaScript. This clock displays the current time with hours, minutes, and seconds, and updates in real-time. It also features a responsive design, ensuring it looks great on both desktop and mobile devices.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl:
      "https://res.cloudinary.com/daarlhxp1/image/upload/v1719760179/screencapture-digitalclocreh-netlify-app-2024-06-30-19_12_05_nt9eiz.jpg",
    link: "https://digitalclocreh.netlify.app/",
    github: "https://github.com/Digitalrehman/Digital-Clock/tree/master",
    features: [
      "Real-time clock updates",
      "Responsive design for all devices",
      "Sleek and modern user interface",
      "Displays hours, minutes, and seconds",
    ],
    date: "January 2023",
    deployed: "yes",
    challenges:
      "Implementing real-time updates efficiently and ensuring cross-browser compatibility.",
    learnings:
      "Enhanced my understanding of JavaScript timing functions and responsive web design techniques.",
      appFor : "Frontend Developer"
  },
  {
    id: 2,
    title: "Calculator",
    description:
      "A simple and user-friendly calculator built using HTML, CSS, and JavaScript. This calculator can perform basic arithmetic operations including addition, subtraction, multiplication, and division. It features a clean and intuitive interface and is designed to be responsive, ensuring it works seamlessly on both desktop and mobile devices.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl:
      "https://res.cloudinary.com/daarlhxp1/image/upload/v1719760179/screencapture-calculatorreh-netlify-app-2024-06-30-19_12_56_yofruo.jpg",
    link: "https://calculatorreh.netlify.app/",
    github: "https://github.com/Digitalrehman/Calculator/tree/master",
    features: [
      "Basic arithmetic operations (addition, subtraction, multiplication, division)",
      "Responsive design for all devices",
      "Clean and intuitive user interface",
      "Error handling for invalid operations",
    ],
    date: "March 2023",
    deployed: "yes",
    challenges:
      "Handling edge cases in arithmetic operations and ensuring accurate calculations.",
    learnings:
      "Improved my skills in JavaScript event handling and error handling, as well as designing responsive and user-friendly interfaces.",
      appFor : "Frontend Developer"
  },
  {
    id: 3,
    title: "Multiplication Table",
    description:
      "An interactive multiplication table built using HTML, CSS, and JavaScript. This application allows users to select a number and view its multiplication table up to 10. The table updates in real-time based on user input and features a clean and responsive design.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl:
      "https://res.cloudinary.com/daarlhxp1/image/upload/v1719760180/screencapture-digitaltable-netlify-app-2024-06-30-19_14_07_o5g8fi.jpg",
    link: "https://digitaltable.netlify.app/",
    github: "https://github.com/Digitalrehman/Table/tree/master",
    features: [
      "Real-time table generation based on user input",
      "Responsive design for all devices",
      "Interactive and user-friendly interface",
      "Supports multiplication tables up to 10",
    ],
    date: "May 2023",
    deployed: "yes",
    challenges:
      "Ensuring accurate calculations and creating an intuitive user interface.",
    learnings:
      "Enhanced my skills in JavaScript DOM manipulation and responsive design principles.",
      appFor : "Frontend Developer"
  },
  {
    id: 4,
    title: "Fibonacci Series",
    description:
      "An interactive application that generates the Fibonacci series up to a user-defined number of terms. Built using HTML, CSS, and JavaScript, this app allows users to input a number and view the corresponding Fibonacci sequence. The app features a clean and responsive design, ensuring it works seamlessly on both desktop and mobile devices.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl:
      "https://res.cloudinary.com/daarlhxp1/image/upload/v1719760177/screencapture-fibonacciseq-netlify-app-2024-06-30-19_14_47_glydga.jpg",
    link: "https://fibonacciseq.netlify.app/",
    github: "https://github.com/Digitalrehman/Fibonacci-sequence",
    features: [
      "Generates Fibonacci series up to a user-defined number of terms",
      "Responsive design for all devices",
      "Interactive and user-friendly interface",
      "Displays sequence in real-time based on user input",
    ],
    date: "June 2023",
    deployed: "yes",
    challenges:
      "Implementing the Fibonacci algorithm efficiently and ensuring accurate sequence generation.",
    learnings:
      "Improved my understanding of recursion and iterative algorithms, as well as designing responsive and user-friendly interfaces.",
      appFor : "Frontend Developer"
  },
  {
    id: 5,
    title: "Gym Training Center",
    description:
      "A dynamic and visually appealing website for a gym training center, built using HTML and Tailwind CSS. This website provides information about various training programs, trainers, schedules, and membership plans. It features a responsive design that ensures optimal user experience on both desktop and mobile devices.",
    techStack: ["HTML", "Tailwind CSS"],
    imageUrl:
      "https://res.cloudinary.com/daarlhxp1/image/upload/v1719760182/screencapture-gymtrainingcenter-netlify-app-2024-06-30-19_15_46_qdmxid.jpg",
    link: "https://gymtrainingcenter.netlify.app/",
    github: "https://github.com/Digitalrehman/GYM_Website_TailwindCSS",
    features: [
      "Information about training programs and schedules",
      "Responsive design for all devices",
      "Modern and clean user interface",
      "Details about trainers and membership plans",
    ],
    date: "July 2023",
    deployed: "yes",
    challenges:
      "Ensuring a visually appealing design while maintaining responsive functionality.",
    learnings:
      "Enhanced my skills in using Tailwind CSS for creating modern and responsive web designs.",
      appFor : "Frontend Developer"
  },
  {
    id: 6,
    title: "Random Password Generator",
    description:
      "A secure and efficient random password generator built using HTML, CSS, and JavaScript. This application allows users to generate random passwords of specified lengths with options to include uppercase letters, lowercase letters, numbers, and special characters. It features a responsive design, ensuring it works seamlessly on both desktop and mobile devices.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl:
      "https://res.cloudinary.com/daarlhxp1/image/upload/v1736240427/password_ux0vyi.png",
    github: "https://github.com/Digitalrehman/Password-Generator",
    features: [
      "Generates secure random passwords",
      "Options to include uppercase, lowercase, numbers, and special characters",
      "Responsive design for all devices",
      "User-friendly and interactive interface",
    ],
    date: "August 2023",
    deployed: "yes",
    challenges:
      "Ensuring the randomness and security of the generated passwords.",
    learnings:
      "Enhanced my understanding of JavaScript's random functions and best practices for password generation.",
      appFor : "Frontend Developer"
  },
  {
    id: 7,
    title: "GitHub Profile Fetcher",
    description:
      "An application that fetches and displays GitHub user profiles based on the provided username. Built using HTML, CSS, and JavaScript, this app retrieves information such as the user's repositories, followers, following, and other profile details. It features a clean and responsive design, ensuring it works seamlessly on both desktop and mobile devices.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl:
      "https://res.cloudinary.com/daarlhxp1/image/upload/v1719760175/screencapture-githubfetchreh-netlify-app-2024-06-30-19_16_20_kjlmn3.jpg",
    link: "https://githubfetchreh.netlify.app/",
    github: "https://github.com/Digitalrehman/GitHub_Fetch",
    features: [
      "Fetches and displays GitHub user profiles",
      "Responsive design for all devices",
      "User-friendly and interactive interface",
      "Displays repositories, followers, following, and other profile details",

    ],
    date: "September 2023",
    deployed: "yes",
    challenges:
      "Efficiently fetching data from the GitHub API and ensuring accurate display of user information.",
    learnings:
      "Improved my skills in using APIs and handling asynchronous JavaScript, as well as designing responsive and user-friendly interfaces.",
      appFor : "Frontend Developer"
  },
  {
    id: 8,
    title: "Spotify Clone",
    description:
      "A visually appealing and functional clone of the popular music streaming service, Spotify. Built using HTML, CSS, and JavaScript, this application allows users to search for songs, artists, and playlists. It features a responsive design, ensuring it works seamlessly on both desktop and mobile devices.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl:
      "https://res.cloudinary.com/daarlhxp1/image/upload/v1719760176/screencapture-spotifyreh-netlify-app-2024-06-30-19_17_48_q6suvp.jpg",
    link: "https://spotifyreh.netlify.app/",
    github: "https://github.com/Digitalrehman/Spotify-Clone",
    features: [
      "Responsive design for all devices",
      "Modern and clean user interface",
      "Music playback functionality",
      "Search functionality",
    ],
    date: "October 2023",
    deployed: "yes",
    challenges:
      "Implementing a robust search functionality and ensuring smooth music playback.",
    learnings:
      "Enhanced my skills in JavaScript event handling, API integration, and creating responsive web designs.",
      appFor : "Frontend Developer"
  },
  {
    id: 9,
    title: "Amazon Clone",
    description:
      "A fully functional clone of the popular e-commerce platform, Amazon. Built using HTML, CSS, and JavaScript, this application allows users to browse products, add items to their cart, and proceed to checkout. It features a clean and responsive design, ensuring it works seamlessly on both desktop and mobile devices.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl:
      "https://res.cloudinary.com/daarlhxp1/image/upload/v1719760173/screencapture-amazonclonereh-netlify-app-2024-06-30-19_22_26_jncc1x.jpg",
    link: "https://amazonclonereh.netlify.app/",
    github: "https://github.com/Digitalrehman/Amazon-Clone",
    features: [
      "Responsive design for all devices",
      "Clean and intuitive user interface",
      "Proceed to checkout functionality",
      "Cart management and checkout",
    ],
    date: "November 2023",
    deployed: "yes",
    challenges:
      "Implementing a robust search functionality and ensuring smooth user experience during checkout.",
    learnings:
      "Enhanced my skills in JavaScript event handling, local storage, and creating responsive web designs.",
      appFor : "Frontend Developer"
  },
  {
    id: 10,
    title: "Time Counter",
    description:
      "An easy-to-use and functional stop timer built using HTML, CSS, and JavaScript. This application allows users to start, stop, and reset the timer. It features a clean and intuitive interface with a responsive design, ensuring it works seamlessly on both desktop and mobile devices.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl:
      "https://res.cloudinary.com/daarlhxp1/image/upload/v1719760168/screencapture-stoptimerreh-netlify-app-2024-06-30-19_20_58_b8dyj6.jpg",
    link: "https://stoptimerreh.netlify.app/",
    github: "https://github.com/Digitalrehman/Stop_Timer",
    features: [
      "Start, stop, and reset functionality",
      "Responsive design for all devices",
      "Clean and intuitive user interface",
      "Accurate time tracking",
    ],
    date: "December 2023",
    deployed: "yes",
    challenges:
      "Ensuring precise time tracking and creating an intuitive user interface.",
    learnings:
      "Improved my understanding of JavaScript timing functions and event handling.",
      appFor : "Frontend Developer"
  },
  {
    id: 11,
    title: "Quiz App",
    description:
      "An interactive quiz application built using HTML, CSS, and JavaScript. This app allows users to take quizzes on various topics, providing immediate feedback and keeping track of scores. It features a clean, intuitive interface and a responsive design, ensuring it works seamlessly on both desktop and mobile devices.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl:
      "https://res.cloudinary.com/daarlhxp1/image/upload/v1719760170/screencapture-quizappreh-netlify-app-2024-06-30-19_19_36_pdzsak.jpg",
    link: "https://quizappreh.netlify.app/",
    github: "https://github.com/Digitalrehman/Quiz_App",
    features: [
      "Multiple choice questions",
      "Score tracking",
      "Responsive design for all devices",
      "User-friendly and intuitive interface",
    ],
    date: "December 2023",
    deployed: "yes",
    challenges:
      "Creating a dynamic quiz logic and ensuring accurate score tracking.",
    learnings:
      "Enhanced my skills in JavaScript for dynamic content generation and user interaction handling.",
      appFor : "Frontend Developer"
  },
  {
    id: 12,
    title: "To-Do List",
    description:
      "A simple and efficient to-do list application built using HTML, CSS, and JavaScript. This app allows users to add, delete, and mark tasks as completed. It features a clean, intuitive interface and a responsive design, ensuring it works seamlessly on both desktop and mobile devices.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl:
      "https://res.cloudinary.com/daarlhxp1/image/upload/v1719760170/screencapture-todolistdatastore-netlify-app-2024-06-30-19_18_30_crcgth.jpg",
    link: "https://todolistdatastore.netlify.app/",
    github: "https://github.com/Digitalrehman/To-Do-List-with-Data-Store",
    features: [
      "Add, delete, and mark tasks as completed",
      "User-friendly and intuitive interface",
      "Data persistence using localStorage",
      "Responsive design for all devices",
    ],
    date: "December 2023",
    deployed: "yes",
    challenges:
      "Implementing persistent storage and ensuring a smooth user experience.",
    learnings:
      "Enhanced my skills in JavaScript DOM manipulation and working with localStorage for data persistence.",
      appFor : "Frontend Developer"
  },
  {
    id: 13,
    title: "Contact Form",
    description:
      "A simple and effective contact form built using HTML, CSS, and JavaScript. This form allows users to submit their contact information and message. It features form validation, a responsive design, and a clean, intuitive interface.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl:
      "https://res.cloudinary.com/daarlhxp1/image/upload/v1719760172/screencapture-contactrehman-netlify-app-2024-06-30-19_18_10_aikqwc.jpg",
    link: "https://contactrehman.netlify.app/",
    github: "https://github.com/Digitalrehman/Contact-Form",
    features: [
      "Form validation",
      "Responsive design for all devices",
      "Clean and intuitive user interface",
      "Handles user input securely",
    ],
    date: "December 2023",
    deployed: "yes",
    challenges: "Ensuring form validation and secure handling of user inputs.",
    learnings:
      "Improved my skills in JavaScript form validation and secure data handling.",
      appFor : "Frontend Developer"
  },
  {
    id: 14,
    title: "Age Calculator",
    description:
      "A user-friendly age calculator built using HTML, CSS, and JavaScript. This application allows users to input their birth date and calculates their age in years, months, and days. It features a responsive design and a clean, intuitive interface.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl:
      "https://res.cloudinary.com/daarlhxp1/image/upload/v1719760174/screencapture-digital-age-calculator-netlify-app-2024-06-30-19_18_20_qmsvfu.jpg",
    link: "https://digital-age-calculator.netlify.app/",
    github: "https://github.com/Digitalrehman/Age_Calculator",
    features: [
      "Calculates age in years, months, and days",
      "Responsive design for all devices",
      "Clean and intuitive user interface",
      "Handles various date formats and leap years",
    ],
    date: "january 2024",
    deployed: "yes",
    challenges:
      "Handling various date formats and ensuring accurate calculations, including leap years.",
    learnings:
      "Improved my skills in JavaScript date manipulation and form validation.",
      appFor : "Frontend Developer"
  },
  {
    id: 15,
    title: "HD Wallpaper",
    description:
      "A collection of high-definition wallpapers available for download, built using HTML, CSS, and JavaScript. This application showcases various wallpapers categorized by themes and allows users to view and download their favorite wallpapers. It features a responsive design and a visually appealing interface.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl:
      "https://res.cloudinary.com/daarlhxp1/image/upload/v1719760172/screencapture-hddisplay-netlify-app-2024-06-30-19_18_44_ypq5mw.jpg",
    link: "https://hddisplay.netlify.app/",
    github: "private files",
    features: [
      "Collection of high-definition wallpapers",
      "search feature",
      "Responsive design for all devices",
      "Download functionality",
    ],
    date: "February 2024",
    deployed: "yes",
    challenges:
      "Ensuring fast loading times for high-resolution images and creating a visually appealing layout.",
    learnings:
      "Enhanced my skills in image optimization and creating visually engaging web designs.",
      appFor : "Frontend Developer"
  },
  {
    id: 16,
    title: "Music Player",
    description:
      "A modern and interactive music player built using HTML, CSS, and JavaScript. This application allows users to play, pause, and navigate through songs. It features a responsive design, playlist management, and an intuitive interface.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl:
      "https://res.cloudinary.com/daarlhxp1/image/upload/v1719760171/screencapture-mediaplayermusic-netlify-app-2024-06-30-19_18_38_hehnej.jpg",
    link: "https://mediaplayermusic.netlify.app/",
    github: "https://github.com/Digitalrehman/Music-Player",
    features: [
      "Play, pause, and navigate through songs",
      "Playlist management",
      "Responsive design for all devices",
      "Intuitive and user-friendly interface",
    ],
    date: "March 2024",
    deployed: "yes",
    challenges:
      "Ensuring smooth audio playback and creating an intuitive user interface.",
    learnings:
      "Enhanced my understanding of JavaScript's audio API and improved my skills in creating interactive web applications.",
      appFor : "Frontend Developer"
  },
  {
    id: 17,
    title: "Speech to Text Converter",
    description:
      "An interactive speech-to-text converter built using HTML, CSS, and JavaScript. This application allows users to convert spoken words into written text in real-time. It features a clean and responsive design, ensuring a seamless user experience on both desktop and mobile devices.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl:
      "https://res.cloudinary.com/daarlhxp1/image/upload/v1719760167/screencapture-speechconvert-netlify-app-2024-06-30-19_20_04_eb2lm5.jpg",
    link: "https://speechconvert.netlify.app/",
    github: "https://github.com/Digitalrehman/Text-to-speech-converter",
    features: [
      "Real-time speech to text conversion",
      "Responsive design for all devices",
      "Clean and intuitive user interface",
      "Supports multiple languages",
    ],
    date: "March 2024",
    deployed: "yes",
    challenges:
      "Ensuring accurate speech recognition and handling different accents and languages.",
    learnings:
      "Improved my understanding of speech recognition APIs and enhanced my skills in real-time data processing.",
      appFor : "Frontend Developer"
  },
  {
    id: 18,
    title: "Registration Form",
    description:
      "A simple and effective signup form built using HTML, CSS, and JavaScript. This form allows users to create an account by entering their name, email, password, and other details. It features form validation, responsive design, and a clean, user-friendly interface.",
    techStack: ["HTML", "CSS", "JavaScript", "Gsap"],
    imageUrl:
      "https://res.cloudinary.com/daarlhxp1/image/upload/v1719760168/screencapture-signinsignupregistrationform-netlify-app-2024-06-30-19_19_49_zglkni.jpg",
    link: "https://signinsignupregistrationform.netlify.app/",
    github: "https://github.com/Digitalrehman/Registration-Form",
    features: [
      "User account creation with form validation",
      "Responsive design for all devices",
      "Clean and intuitive user interface",
      "Secure handling of user inputs",
    ],
    date: "April 2024",
    deployed: "yes",
    challenges:
      "Implementing secure password handling and ensuring user-friendly form validation.",
    learnings:
      "Enhanced my skills in JavaScript form validation and secure data handling practices.",
      appFor : "Frontend Developer"
  },
  {
    id: 19,
    title: "E-commerce Website",
    description:
      "A static e-commerce website built using HTML and CSS. This website showcases a variety of products, allows users to browse categories, view product details, and add items to their cart. It features a responsive design for optimal viewing on different devices.",
    techStack: ["HTML", "CSS"],
    imageUrl:
      "https://res.cloudinary.com/daarlhxp1/image/upload/v1719760167/screencapture-staticecommer-netlify-app-2024-06-30-19_21_31_kdfjj7.jpg",
    link: "https://staticecommer.netlify.app/",
    github: "https://github.com/Digitalrehman/Static-Ecommerce",
    features: [
      "Product catalog with categories",
      "Product details and image gallery",
      "Responsive design for all devices",
      "Cart management and checkout",
    ],
    date: "May 2024",
    deployed: "yes",
    challenges:
      "Creating a visually appealing layout for products and ensuring responsive functionality.",
    learnings:
      "Improved my skills in HTML and CSS layout techniques for e-commerce websites.",
      appFor : "Frontend Developer"
  },
];

export {
  projects
}
