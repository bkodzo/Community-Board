import React from 'react';
import EventCard from './components/EventCard';
import './App.css';

const events = [
  { 
    title: 'React Documentation', 
    description: 'Learn React from the official docs',
    link: 'https://react.dev/',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=150&fit=crop'
  },
  { 
    title: 'JavaScript Basics', 
    description: 'Learn JavaScript fundamentals',
    link: 'https://javascript30.com/',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=150&fit=crop'
  },
  { 
    title: 'LeetCode Practice', 
    description: 'Practice coding problems',
    link: 'https://leetcode.com/',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=300&h=150&fit=crop'
  },
  { 
    title: 'MDN Web Docs', 
    description: 'Complete web development guide',
    link: 'https://developer.mozilla.org/',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=150&fit=crop'
  },
  { 
    title: 'Git Guide', 
    description: 'Learn version control with Git',
    link: 'https://git-scm.com/doc',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=300&h=150&fit=crop'
  },
  { 
    title: 'FreeCodeCamp', 
    description: 'Free coding lessons',
    link: 'https://www.freecodecamp.org/',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=150&fit=crop'
  },
  { 
    title: 'Stack Overflow', 
    description: 'Ask coding questions',
    link: 'https://stackoverflow.com/',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=150&fit=crop'
  },
  { 
    title: 'CodePen', 
    description: 'Online code editor',
    link: 'https://codepen.io/',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=150&fit=crop'
  },
  { 
    title: 'Node.js Docs', 
    description: 'Server-side JavaScript',
    link: 'https://nodejs.org/en/docs/',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=150&fit=crop'
  },
  { 
    title: 'CSS Tricks', 
    description: 'CSS tips and tricks',
    link: 'https://css-tricks.com/',
    image: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=300&h=150&fit=crop'
  }
];

function App() {
  return (
    <div className="app">
      <h1>Learning Resources</h1>
      <p>Helpful links for learning web development</p>
      
      <div className="cards-container">
        {events.map((event, index) => (
          <EventCard 
            key={index}
            title={event.title}
            description={event.description}
            link={event.link}
            image={event.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;