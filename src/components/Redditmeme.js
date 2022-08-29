import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import "../styles/Redditmemes.css";
function Redditmemes() {
  const [pic, setPic] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function call() {
      const meme = await (
        await axios.get("https://www.reddit.com/r/memes.json")
      ).data.data.children;
      setPic(meme);
      setIndex(index + 1);
    }
    call();
  }, []);

  const getImg = () => pic[index].data.url;
  const clicked = () => {
    index + 1 !== pic.length && setIndex(index + 1);
    index + 1 === pic.length && setIndex(1);
  };
  return (
    <div>
      {pic === null ? (
        <Loader />
      ) : (
        <div className="main">
          {" "}
          <img src={getImg()} className="memes" />
          <button
            className="custom-btn btn-3"
            style={{ display: "block" }}
            onClick={clicked}
          >
            <span>
              Next {"  "}
              <i class="fa-solid fa-arrow-right-long"></i>
            </span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Redditmemes;
