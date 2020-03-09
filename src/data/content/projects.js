import React, { Fragment } from 'react';

export const projects = [
    {
        title: 'JSDB',
        subtitle: 'Fast and easy to use temporary database based on JSON',
        url: 'https://github.com/NielXu/jsdb',
        details: [
            'Support insert, delete, find and update operations just like normal database',
            'Can be used as a mock database for local frontend testing, also includes delayed responses feature that can simluate the response time between backend and frontend',
            'Implemented a query parser similar with MongoDB and gained more experience about database design and parser design',
            'Main Technologies Used: JavaScript, express',
        ]
    },
    {
        title: 'Pexpr',
        subtitle: 'A powerful tool to evaluate math expressions and convert them to PDF',
        url: 'https://github.com/NielXu/pexpr',
        details: [
            'A tool that can parse any math expression to a syntax tree and perform operations such as evaluating the result, building a subtree and rearranging tree structures',
            'Allow users to convert expressions from command line to the corresponding expressions in latex format and later compile them into PDFs',
            'Attempting to bring the syntax tree to a higher level and make it as an abstract syntax tree, which allows user to implement their own languages and operations',
            'Technologies used: Python, Parser,Abstract Syntax Tree',
        ]
    },
    {
        title: 'Novelty',
        subtitle: 'A platform that allows admins to manage events and members',
        url: 'https://github.com/NielXu/novelty.events',
        details: [
            'Built using React framework at the frontend and used React-BootStrap elements for pretty UI view and better user experience',
            'Built using GraphQL at the backend to help API requests more efficient by quering and building schema',
            'Built using MongoDB as the database and implemented a custom database manager to handle database access',
            'Features including login/logout, member registration, admin control, activity management and photos gallary were completed',
            'Technologies used: JavaScript, React, GraphQL, MongoDB, Docker',
        ]
    },
];
