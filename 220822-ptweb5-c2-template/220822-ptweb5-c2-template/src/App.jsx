import Slide from "./Components/Slide";
import "./App.css";
import React from "react";

// once you download the template; please run  "npm install" command and that will install all the packages required for this project by referencing package.json;

// do not remove any of the data-cy attributes;

// API to get the data : https://slides-app-220822.herokuapp.com/slides


export default function App() {
  const [DataList, setDataList] = React.useState([]);
  const [Page, setPage] = React.useState(1);
  const [totalItem, settotalItem] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [Error, setError] = React.useState(false);

  React.useEffect(() => {
    setLoading(true)
    getData();
  }, [Page]);

  const getData = () => {
    fetch(`https://slides-app-220822.herokuapp.com/slides?_page=${Page}&_limit= 1`)
      .then((res) => {
        let total = res.headers.get("X-Total-Count");
        settotalItem(+total);
        return res.json()
      })
      .then((res) => {
        setDataList(res)
      })
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
      }
      )
  }


  return (
    <div className="App">
      <h1 data-cy="header">Slides</h1>
      {DataList.map((item) => {
        return <div className="content">
          {loading ? ( <h3>Loading...</h3>) : 
            Error ?
                    (<h2 className="red">Error occured : Something went wrong </h2>)
                    : <Slide key={item.id} {...item} />}
        </div>
      })}
      <button className="naviBtn" data-cy="prev" onClick={() => setPage(Page - 1)} disabled={Page === 1}>Prev</button>
      <span className="center">{Page}</span>
      <button className="naviBtn" data-cy="next" onClick={() => setPage(Page + 1)} disabled={Page === Math.ceil(totalItem / 1)}>Next</button>
    </div>
  );
}
