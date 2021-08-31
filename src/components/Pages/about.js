import React from 'react'

const About = () => {
    const posts = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'}
      ];
    const listitems=posts.map(number=>{
        return <li key={number.id}>Title: {number.title} Content: {number.content}</li>
    })

    return (
        <div>
            <ul>{listitems}</ul>
        </div>
    )
}

export default About
