import express from 'express'
const app = express()

const port = process.env.port || 3000

app.get('/api/jokes' , (req , res) => {
    const articles = [
        {
            id: 1,
            title: "Introduction to JavaScript",
            content: "JavaScript is a versatile programming language used for web development."
        },
        {
            id: 2,
            title: "Understanding HTML",
            content: "HTML stands for HyperText Markup Language and is the standard language for creating web pages."
        },
        {
            id: 3,
            title: "CSS Basics",
            content: "CSS stands for Cascading Style Sheets and is used to style and layout web pages."
        },
        {
            id: 4,
            title: "Getting Started with React",
            content: "React is a popular JavaScript library for building user interfaces."
        },
        {
            id: 5,
            title: "Learning Python",
            content: "Python is a high-level programming language known for its readability and versatility."
        },
        {
            id: 6,
            title: "Introduction to SQL",
            content: "SQL stands for Structured Query Language and is used for managing and manipulating databases."
        },
        {
            id: 7,
            title: "Basics of Node.js",
            content: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, enabling server-side scripting."
        },
        {
            id: 8,
            title: "Understanding APIs",
            content: "An API, or Application Programming Interface, allows different software applications to communicate with each other."
        },
        {
            id: 9,
            title: "Web Development Frameworks",
            content: "Frameworks like Angular, Vue, and Laravel help streamline the web development process."
        },
        {
            id: 10,
            title: "Introduction to Machine Learning",
            content: "Machine learning is a subset of artificial intelligence that focuses on building systems that learn from data."
        }
    ];
    res.send(articles)
})

app.listen(port , () => {
    console.log("Server is running")
})