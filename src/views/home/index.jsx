import React, { memo, useEffect, useState } from "react";
import HYRequest from "@/services";
const Home = memo(() => {

  // 定义状态

const [highScore ,setHighScore] = useState({})

  useEffect(() => {
    HYRequest.get({url:'./home/highscore'}).then(res=>{
      console.log(res)
      setHighScore(res)
    })
  }, []);
  // 空数组保证只调用一次

  return (<div>
    <h2>{highScore.title}</h2>
    <h2>{highScore.subtitle}</h2>
    {
      highScore?.list?.map((item)=>{
        return <li key={item.id}>{item.name}</li>
      })
    }
  </div>);
});

export default Home;
