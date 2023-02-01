import React, { useState, useEffect } from "react";
import Menu from "./Menu";   
import NewsGrid from "./NewsGrid";
import axios from "axios";
import "./News.css";

function News() {
const [items, setItems] = useState([]);
const [active, setActive] = useState(1);
const [category, setCategory] = useState("General");

useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&category=' + category + '&apiKey=83acb2b34a6f4018837373bd4254356b')
      .then((res) => {
        setItems(res.data.articles);
      })
      .catch((error) => console.error(error));
  }, [category]);

return (
<div className="App">
<h1 className="title">See The Latest News</h1>
<Menu active={active} setActive={setActive} setCategory={setCategory}/>
<NewsGrid items={items}/>
</div>
)
}

export default News;   
