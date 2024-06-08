document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form");
    const resumeContainer = document.getElementById("resume");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        resumeContainer.innerHTML = ""; // Clear previous content

        const name = form.name.value;
        const address = form.address.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const university = form.university.value;
        const skillSelection = form.skill.value;
        const additionalSkillSelection = form["additional-skill"].value;
        const workSelection = form.work.value;

        const sections = [
            { title: "Myself", content: name },
            { title: "Address", content: address },
            { title: "Phone Number", content: phone },
            { title: "Email Id", content: email },
            { title: "Objective", content: "Highly motivated computer science student seeking an internship position to apply and further develop my technical skills in software development and gain real-world experience in the industry." },
            { title: "Education", content: `Bachelor of Science in Computer Science<br>University: ${university}` }
        ];

        const skills = {
            "Python": "I am proficient in the Python programming language and have a solid understanding of its syntax and features. I am comfortable writing Python code and can effectively use its built-in functions and libraries. Additionally, I have a good grasp of object-oriented programming (OOP) concepts, which allow me to design and develop modular and reusable code. I am familiar with classes, objects, inheritance, and other OOP principles in Python. Moreover, I have acquired knowledge of various data structures and algorithms, which enables me to efficiently solve problems and optimize code. I understand the importance of choosing the right data structure for different scenarios and implementing algorithms for tasks such as sorting, searching, and graph traversal.",
            "Java": "I am proficient in the Java programming language and have a strong command of its syntax and features. I am skilled in writing Java code and utilizing its extensive libraries and frameworks. I have a solid understanding of object-oriented programming (OOP) concepts in Java, including classes, objects, inheritance, and polymorphism. I can effectively design and develop modular and scalable code using OOP principles. Additionally, I have a deep knowledge of data structures and algorithms in Java. I am familiar with various data structures such as arrays, linked lists, stacks, queues, and trees, and understand how to implement them effectively. I am also proficient in implementing and optimizing algorithms for tasks like sorting, searching, and graph algorithms. My expertise in Java programming and understanding of data structures and algorithms enable me to solve complex problems efficiently and develop robust software solutions.",
            "Python and Java": "I am proficient in both Python and Java programming languages. I have a solid understanding of Python's syntax, built-in functions, and libraries, as well as a good grasp of object-oriented programming (OOP) concepts. Additionally, I have a strong command of Java's syntax, libraries, and OOP principles. My expertise in data structures and algorithms enables me to solve complex problems efficiently in both languages.",
            "None": ""
        };

        const additionalSkills = {
            "C": "I am proficient in the C programming language and have a strong grasp of its syntax and features. I am experienced in writing efficient and concise C code, and I can effectively utilize its libraries and functions. I have a solid understanding of procedural programming concepts in C, including variables, data types, control structures, and functions. I am skilled in designing and implementing algorithms and logical solutions using C. Moreover, I have a good knowledge of data structures in C, such as arrays, linked lists, stacks, queues, and trees. I understand how to manipulate and optimize data structures for various programming tasks. Additionally, I am adept at implementing algorithms for tasks like sorting, searching, and graph algorithms in C. My proficiency in the C language, combined with my understanding of data structures and algorithms, allows me to develop efficient and robust solutions to complex problems.",
            "C++": "I am proficient in the C++ programming language and have a strong command of its syntax and features. I am experienced in writing clean and efficient C++ code and can effectively utilize the language's powerful libraries and functionalities. I have a solid understanding of object-oriented programming (OOP) concepts in C++ and am skilled in designing and implementing classes, objects, inheritance, and polymorphism. I can effectively utilize encapsulation, abstraction, and other OOP principles to develop modular and reusable code. Moreover, I have a deep knowledge of data structures and algorithms in C++. I am familiar with various data structures, such as arrays, linked lists, stacks, queues, trees, and graphs, and understand how to implement and manipulate them effectively. I am also proficient in designing and optimizing algorithms for tasks such as sorting, searching, and graph traversal in C++. My expertise in C++ programming and understanding of data structures and algorithms enable me to develop efficient and scalable software solutions to complex problems.",
            "C and C++": "I am proficient in both C and C++ programming languages. I have a strong grasp of C's syntax, libraries, and procedural programming concepts, as well as a deep understanding of C++'s syntax, object-oriented programming (OOP) principles, and powerful libraries. My expertise in data structures and algorithms allows me to solve complex problems efficiently in both languages.",
            "None": ""
        };

        const workOptions = {
            "Freelancing": "I work as a freelancer, taking on various projects and assignments. As a freelancer, I have the freedom to choose the projects that align with my skills and interests. I enjoy the flexibility and independence that comes with freelancing, allowing me to manage my own schedule and work remotely. I take pride in delivering high-quality work to my clients and ensuring their satisfaction. Freelancing provides me with the opportunity to continuously learn and grow as I take on new and diverse projects. I value the collaborative nature of freelancing, working closely with clients to understand their needs and provide tailored solutions. Overall, freelancing allows me to pursue my passion for my work while enjoying a flexible and fulfilling career.",
            "Web Development": "I work as a web developer, specializing in creating and maintaining websites. As a web developer, I am responsible for designing and coding web pages, ensuring they are visually appealing and functional. I am skilled in front-end development, utilizing HTML, CSS, and JavaScript to create user-friendly and responsive websites. Additionally, I am experienced in back-end development, using frameworks and languages like PHP, Python, or Node.js to handle server-side operations and database management. I enjoy the process of turning clients' ideas into fully functioning websites, paying attention to detail and delivering high-quality results. Being a web developer allows me to combine my technical skills with creativity to build engaging online experiences. I am dedicated to staying up-to-date with the latest web development trends and technologies to provide the best solutions to my clients.",
            "Freelancing and Web Development": "I work as both a freelancer and a web developer, taking on various projects and assignments. As a freelancer, I have the flexibility to choose projects that align with my skills and interests, allowing me to manage my own schedule and work remotely. I value the independence that comes with freelancing and enjoy delivering high-quality work to my clients. In addition to freelancing, I specialize in web development, designing and coding websites to create visually appealing and functional online experiences. I am skilled in both front-end and back-end development, using HTML, CSS, JavaScript, and server-side frameworks to build responsive and user-friendly websites. Combining freelancing and web development allows me to pursue a diverse and fulfilling career, continuously learning and growing while providing tailored solutions to clients' needs.",
            "None": ""
        };

        if (skills[skillSelection]) {
            sections.push({ title: "Primary Skill", content: skills[skillSelection] });
        }

        if (additionalSkills[additionalSkillSelection]) {
            sections.push({ title: "Additional Skill", content: additionalSkills[additionalSkillSelection] });
        }

        if (workOptions[workSelection]) {
            sections.push({ title: "Work Type", content: workOptions[workSelection] });
        }

        sections.forEach(section => {
            if (section.content) { // Check if content is not empty
                const sectionElement = document.createElement("div");
                sectionElement.innerHTML = `<h1>${section.title}</h1><p>${section.content}</p>`;
                resumeContainer.appendChild(sectionElement);
            }
        });

        // Hide the form after submission
        form.style.display = 'none';
    });
});
