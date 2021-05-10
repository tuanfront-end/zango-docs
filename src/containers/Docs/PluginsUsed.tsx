import React from "react";

const PluginsUsed = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Library</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>React</td>
            <td>
              React is a JavaScript library for building user interfaces. Learn
              what React is all about on{" "}
              <a
                href="https://reactjs.org/docs/getting-started.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
              .
            </td>
          </tr>
          {/* ------------------------------------------- */}
          <tr>
            <td>React dom</td>
            <td>
              The react-dom package provides DOM-specific methods that can be
              used at the top level of your app and as an escape hatch to get
              outside of the React model if you need to. Most of your components
              should not need to use this module.
            </td>
          </tr>
          {/* ------------------------------------------- */}
          <tr>
            <td>React router dom</td>
            <td>
              To get started with React Router in a web app, you’ll need a React
              web app. If you need to create one, we recommend you try Create
              React App. It’s a popular tool that works really well with React
              Router.
            </td>
          </tr>
          {/* ------------------------------------------- */}
          <tr>
            <td> Redux Toolkit</td>
            <td>
              The Redux Toolkit package is intended to be the standard way to
              write Redux logic. It was originally created to help address three
              common concerns about Redux.{" "}
            </td>
          </tr>
          {/* ------------------------------------------- */}
          <tr>
            <td> Glide Js</td>
            <td>
              A dependency-free JavaScript ES6 slider and carousel. It’s
              lightweight, flexible and fast. Designed to slide. No less, no
              more.{" "}
              <a
                href="https://glidejs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Readmore
              </a>
            </td>
          </tr>
          {/* ------------------------------------------- */}
          {/* ------------------------------------------- */}
          <tr>
            <td> Headlessui</td>
            <td>
              Completely unstyled, fully accessible UI components, designed to
              integrate beautifully with Tailwind CSS
            </td>
          </tr>
          {/* ------------------------------------------- */}
          <tr>
            <td> Popperjs</td>
            <td>Tooltio & popover position library</td>
          </tr>

          {/* ------------------------------------------- */}
          <tr>
            <td> Html-react-parser</td>
            <td>
              The parser converts an HTML string to one or more React elements{" "}
            </td>
          </tr>
          {/* ------------------------------------------- */}
          <tr>
            <td> Masonry Layout</td>
            <td>
              Masonry is a JavaScript grid layout library. It works by placing
              elements in optimal position based on available vertical space,
              sort of like a mason fitting stones in a wall.{" "}
            </td>
          </tr>
          {/* ------------------------------------------- */}
          <tr>
            <td> React-number-format</td>
            <td>React component to format number in an input or as a text. </td>
          </tr>
          {/* ------------------------------------------- */}
          <tr>
            <td> React-Toastify</td>
            <td>
              React-Toastify allows you to add notifications to your app with
              ease. No more nonsense!.{" "}
            </td>
          </tr>
          {/* ------------------------------------------- */}
          <tr>
            <td> TailwindCss</td>
            <td>
              A utility-first CSS framework packed with classes like flex, pt-4,
              text-center and rotate-90 that can be composed to build any
              design, directly in your markup.{" "}
            </td>
          </tr>
          {/* ------------------------------------------- */}
        </tbody>
      </table>
    </div>
  );
};

export default PluginsUsed;
