import marie from "../../assets/marie.jpg";
import pc from "../../assets/ambient_pc.jpg";
import kid from "../../assets/kid_space.jpg";
import smart_toy from "../../assets/smart_toy.jpg";

export const projectData = [
    {
        id: 1,
        image: marie,
        title: "MARIE",
        category: "AI",
        introduction: ["How to Fine-tuned a LLM for Specific Domain?",<br/>,"MARIE is our exploration of LLM with industrial tasks.",<br/>,"How to let human collaborate with AI?"],
        link:"/marie",
    },

    {
        id: 2,
        image: pc,
        title: "Designing on the edge",
        category: "hardware",
        introduction: ["The ambient PC is a second screen concept laptop.", <br/>, "Users may connect with laptop just like phone.",<br/>,"How to get best use of the second screen?"],
        link:"/ambientpc",
    },

    {
        id: 3,
        image: kid,
        title: "Kid Space",
        category: "AR",
        introduction: ["For young children to experience AR without HMD", <br/>, "For young children to learn through play",<br/>,"How did I bring the concept into reality?"],
        link:"/kidspace",
    },

    {
        id: 4,
        image: smart_toy,
        title: "Smart Toys",
        category: "education",
        introduction: ["Innovate LEGO bricks", <br/>, "Learn to code through play",<br/>,"Encourage creativity through story"],
        link:"/smarttoy",
    },
]

export const projectsNav = [
    {name: "all"},
    {name: "AI"},
];