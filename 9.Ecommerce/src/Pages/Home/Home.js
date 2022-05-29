import React from "react"
import "./Home.css"
import imgHomeShop from "./shopimg.jpg"

export default function Home() {
  return (
    <div className="global-container">
      <h1 className="home-title">
        Bienvenue au <span>Shop</span>
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
        explicabo dignissimos rem cumque adipisci, excepturi ullam aspernatur
        accusantium eligendi error veritatis. Vel repudiandae, ipsam molestiae
        corrupti modi maxime aut odio est perspiciatis quia ad cumque repellat
        necessitatibus doloremque reprehenderit ullam fuga quam adipisci? Natus,
        omnis a neque voluptatibus quod nihil.
      </p>
      <img src={imgHomeShop} alt="Acceuil shop" />
    </div>
  )
}
