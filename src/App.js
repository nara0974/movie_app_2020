import React from 'react';

function Food({name, picture}){
  //console.log(props.favortie)
  return (
    <div>
      <h1>I like {name}</h1> 
      <img src={picture}></img>
    </div>
  )
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://newsimg.hankookilbo.com/2020/04/23/202004231500779914_1.jpg"
  },
  {
    name: "Samgyeopsal",
    image: "https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200"
  },
  {
    name: "Kimbap",
    image: "https://i1.wp.com/seonkyounglongest.com/wp-content/uploads/2019/08/Korean-Eggroll-Kimbap5.jpg?fit=1300%2C867&ssl=1"
  },
  {
    name: "Bibimbap",
    image: "https://media.eggs.ca/assets/RecipeThumbs/_resampled/FillWyIxMjgwIiwiNzIwIl0/BIBINBAP-OVERHEAD.jpg"
  }
]

function App() {
  return (
    <div className="App">
      <h1>Hello!!!</h1>
        {foodILike.map(item => (
            <Food name={item.name} picture={item.image}/>
          ))}
    </div>
  );
}

export default App;
