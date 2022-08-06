import React from "react";
import "./index.css";
import { useState } from "react";
const Todo = () => {
  const [word, setword] = useState("");
  const [arr, setarr] = useState([]);
  const [id, setid] = useState(-1);
  const placeword = (e) => {
    setword(e.target.value);
  };
  const pushword = () => {
    if (id != -1) {
      console.log("hello" + id);
      const newarr = arr.map((item, index) => {
        if (index === id) return word;
        else return item;
      });
      setid(-1);
      setarr(newarr);
      setword("");
    } else {
      arr.push(word);
      setarr(arr);
      setword("");
    }
  };
  const clearall = () => {
    setarr([]);
  };
  const deletetext = (e) => {
    console.log(e.target.id);
    const newarr =
      arr &&
      arr.filter((item, index) => {
        return index != e.target.id;
      });
    setarr(newarr);
  };
  const edittext = (index, item) => {
    setword(item);
    console.log(parseInt(index));
    setid(parseInt(index));
  };
  return (
    <div className="container">
      <div className="header">ToDo List</div>
      <div className="main">
        <div>
          {" "}
          <input
            type="text"
            className="inputtext"
            placeholder="Enter Here"
            onChange={placeword}
            value={word}
          />
        </div>
        <div>
          {" "}
          <button className="inputbutton" onClick={pushword}>
            Submit
          </button>
        </div>
      </div>
      <div className="displaycontent">
        {arr &&
          arr.map((item, index) => {
            return (
              <div className="inserting">
                {index + ") " + item}{" "}
                <div className="del">
                  <button onClick={deletetext} id={index} className="delete">
                    &#10060;
                  </button>
                </div>
                <div className="ed">
                  {" "}
                  <button
                    onClick={() => edittext(index, item)}
                    className="edit"
                  >
                    &#9998;
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <div className="footer">
        <button className="clearall" onClick={clearall}>
          Clear all
        </button>
      </div>
    </div>
  );
};

export default Todo;
