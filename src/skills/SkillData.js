import frontend from "../assets/upgrade.png";
import backend from "../assets/triple-corn.png";
import tools from "../assets/hawk-emblem.png";
import softskills from "../assets/astronaut-helmet.png";

export const SKILLS=[
    {
        title:"FrontEnd",
        icon: frontend,
        skills:[
            {skill:"HTML5",percentage:"95%"},
            {skill:"CSS3",percentage:"90%"},
            {skill:"JavaScript",percentage:"85%"},
            {skill:"ReactJs",percentage:"80%"},
        ],
    },
    {
        title:"Backend",
        icon: backend,
        skills:[
            {skill:"NodeJs",percentage:"80%"},
            {skill:"ExpressJs",percentage:"80%"},
            {skill:"Flask",percentage:"60%"},
        ],
    },
    {
        title:"Tools",
        icon: tools,
        skills:[
            {skill:"Git & GitHub",percentage:"85%"},
            {skill:"MongoDB",percentage:"90%"},
            {skill:"PostgreSQL",percentage:"80%"},
        ],
    },
    {
        title:"Soft Skills",
        icon: softskills,
        skills:[
            {skill:"Problem-Solving",percentage:"85%"},
            {skill:"Team-Player",percentage:"90%"},
            {skill:"Creative-Thinking",percentage:"85%"},
        ],
    },
]