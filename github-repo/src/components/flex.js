import React from "react";
import "./flex.css";

function Flex() {
  return (
    <div className="wrapper">
      <header className="header">
        <h1>Header</h1>
      </header>
      <aside className="aside aside1">
        <h1>Aside1</h1>
      </aside>
      <article className="main">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius impedit
          dignissimos provident optio! Debitis veniam porro adipisci labore,
          praesentium iusto incidunt, sequi ab obcaecati amet velit delectus
          animi veritatis dolores.
        </p>
      </article>

      <footer className="footer">
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default Flex;
