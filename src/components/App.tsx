import { useState } from "react";
import { dataCards } from "../data/data";

import clsx from "clsx";
import style from "./App.module.scss";

export const App = () => {
  const [activeCard, setActiveCard] = useState<boolean[]>(
    Array(dataCards.length).fill(false)
  );

  const clickCard = (i: number) => {
    const arr = [...activeCard]
    arr[i] = !arr[i]
    setActiveCard(arr)
  }

  return (
    <div className={style.container}>
      {dataCards.map((item, i) => (
        <article className={clsx(style.card, activeCard[i] && style.card__red)} key={item.id} onClick={() => clickCard(i)}>
          <h2 className={style.card_title}>{item.title}</h2>
          <p className={style.card_text}>{item.text}</p>
        </article>
      ))}
    </div>
  );
};
