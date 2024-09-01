"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const f = require("fs");
const acornmail = require("../index");
(() => {
    try {
        const acorn = acornmail.NewAcornEmailComponents();
        const timeline = acorn.NewTimeline([
            {
                Time: '2007 - 2008',
                Title: 'Massachusetts Institute of Technology',
                Content: 'Co-wrote a book on the Semantic Web and Best Practices for Developers.',
            },
            {
                Time: '2004 - 2006',
                Title: 'Parsons School of Design',
                Content: 'Awarded Best Designer of the Year voted by student and teacher body.',
            },
            {
                Time: '2002 - 2004',
                Title: 'Berkley College',
                Content: 'Two year program with a focus on design principles and Javascript development.',
            },
        ]);
        const boilerplate = acorn.GetBoilerplate([timeline]);
        f.writeFileSync('boilerplate.html', boilerplate);
    }
    catch (error) {
        console.log(error);
    }
})();
