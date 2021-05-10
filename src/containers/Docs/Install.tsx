import React from "react";
import install1 from "images/docs/install1.png";
import install2 from "images/docs/install2.png";
import install3 from "images/docs/install3.png";
import install4 from "images/docs/install4.png";

const Install = () => {
  return (
    <div>
      <h4>1. Extract the Zango-ReactTs.zip file.</h4>
      <div>
        <h4>
          2. Open the Terminal, write a <code>cd</code> and space and drag the
          folder into the Terminal, and press ENTER.
        </h4>
        <img src={install1} alt="install1" />
      </div>
      <div>
        <h4>
          3. Write <code>npm install</code>, press enter and wait for the system
          to finish installing all the plugins.
        </h4>
        <img src={install2} alt="install2" />
      </div>
      <div>
        <h4>
          4. Once the installation is completed successfully without errors you
          can run the template in the <code>npm run dev</code> command.
        </h4>
        <img src={install3} alt="install3" />
      </div>
      <div>
        <h4>5. Open browser in next URL: localhost:3000 command.</h4>
        <img src={install4} alt="install4" />
      </div>
    </div>
  );
};

export default Install;
