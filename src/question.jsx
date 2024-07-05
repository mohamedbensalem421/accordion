import React from "react";
import { useState } from "react";

function Question({ title, info }) {
  const [show, setShow] = useState(false);
  return (
    <article>
      <header>
        <h5>{title}</h5>
        {show ? (
          <i onClick={() => setShow(!show)} className="fa-solid fa-minus"></i>
        ) : (
          <i onClick={() => setShow(!show)} className="fa-solid fa-plus"></i>
        )}
      </header>
      {show && <p>{info}</p>}
    </article>
  );
}

export default Question;
