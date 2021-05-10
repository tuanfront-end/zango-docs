import React from "react";

const FolderStructure = () => {
  return (
    <div>
      <h3>Let's talk about what's inside the downloaded package.</h3>
      <p>
        Once you purchased our theme you've to download The All Files &
        Documentation zip file. Following folder structure is based on that zip
        file, in that zip file only you'll get all of our theme files including
        demo content & offline documentation folder.
      </p>
      <pre className="!leading-tight">
        Zango-ReactTs
        {`
│
├── README.md
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── postcss.config.js
├── index.html
├── manifest.json
├── postcss.config.js
├── .gitignore
│
├── documentation 
│
├── public
│   ├── css
│   ├── fonts
│   └── js
│   
├── dist
│   ├── assets
│   ├── css
│   ├── fonts
│   ├── js
│   
└── src
├── app
├── components 
├── constants
├── containers
├── data
├── images
├── routers
├── styles
├── utils
├── App.tsx
├── index.css
├── index.tsx
└── reportWebVitals.ts`}
      </pre>
    </div>
  );
};

export default FolderStructure;
