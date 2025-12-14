export type Experience = {
  company: string;
  title: string;
  start?: string;
  end?: string;
  location?: string;
  description: string[];
  skills?: string[];
};

export const experience: Experience[] = [
  {
    company: 'IBM',
    title: 'Senior Front-End Engineer',
    start: '2022',
    end: 'Present',
    location: 'Austin, TX (Remote)',
    description: [],
    skills: ['React', 'TypeScript', 'Material UI', 'Accessibility', 'Testing Library']
  },
  {
    company: 'Datastax',
    title: 'Senior Software Engineer',
    description: [
      'Redesigned and enhanced the Astra app\'s frontend architecture, improving performance, scalability, and maintainability while leading the development of critical features such as IAM (Identity and Access Management), Multi-Region, Private Link, and Okta SSO integration.',
      'Rebuilt and optimized GraphQL implementation, improving data exchange efficiency between the frontend and backend, reducing API response times, and enhancing error handling.',
      'Implemented advanced frontend performance optimizations, including graceful GraphQL error handling, retry mechanisms for server calls, and comprehensive E2E and unit testing, ensuring robustness and reliability.',
      'Refactored and optimized the codebase, reducing frontend code size by 40%, improving maintainability, and streamlining developer workflows.'
    ]
  },
  {
    company: 'FSASTORE',
    title: 'Front-End Developer',
    description: [
      'Developed cross-browser compatible e-commerce experiences using Next.js, React Hooks, Redux-Saga, Immer, CSS-in-JS, TypeScript, and modern JavaScript features.',
      'Integrated the e-commerce experience across third-party platforms to deliver a consistent customer journey.',
      'Gathered and refined business requirements while collaborating with multiple teams to produce detailed technical specifications.'
    ]
  },
  {
    company: 'CNBC',
    title: 'Front-End Developer',
    description: [
      'Designed and developed the CNBC redesigned website with HTML5, SCSS/CSS3, JavaScript, React, Redux, Jest, and Enzyme to meet accessibility and browser standards.',
      'Utilized GraphQL APIs for data fetching and transformation to power editorial experiences.',
      'Partnered with product leads, designers, and developers to elevate user experience and increase design consistency across the product.',
      'Led bi-weekly sprint demos and contributed to daily stand-ups, team meetings, and sprint planning.'
    ]
  },
  {
    company: 'Biogen',
    title: 'Front-End Developer',
    description: [
      'Contributed to the launch of new mobile and desktop websites (Zinbryta Pharmacy Portal, Alprolix, Eloctate-patient, BiogenHemophilia, SMA Lead Gen) using CSS3, HTML5, jQuery, Adobe Creative Cloud, and JSP.',
      'Redesigned high-visibility Biogen websites leveraging Alfresco, AEM, JavaScript, jQuery plugins, and Photoshop.',
      'Developed the Zinbryta Pharmacy Portal using Spring MVC, JavaScript, jQuery, JSP, and Bootstrap.',
      'Ensured reliable cross-platform and cross-browser development for marketing experiences.'
    ]
  },
  {
    company: 'AT&T',
    title: 'Front-End Developer',
    description: [
      'Developed web pages compatible with multiple browsers using JSP, HTML5, CSS3, JavaScript, AngularJS, DOM, JSON, jQuery, and AJAX.',
      'Regularly updated the website to support ad hoc marketing and product requirements.',
      'Collaborated with an offshore team to develop and maintain front-end features.'
    ]
  },
  {
    company: 'Techaspect Solutions',
    title: 'Programmer Analyst',
    description: [
      'Designed and developed website components using Backbone, JavaScript, jQuery, JSP, AJAX, HTML5, CSS scripting, and XHTML.',
      'Analyzed business requirements to ensure efficient and effective implementation that met customer needs.'
    ]
  },
  {
    company: 'Mercedes Benz',
    title: 'Front-End Developer',
    description: [
      'Developed Mercedes Benz intranet websites using JSP, JavaScript, jQuery, HTML, CSS, Velocity, DB2, and the Vignette CMS.',
      'Implemented automated testing with Selenium, JUnit, and TestNG within IntelliJ.',
      'Improved the registration process leveraging Java (POJO), REST, JSON, and Maven technologies.'
    ]
  }
];
