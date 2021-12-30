import React, { useEffect, useState } from "react";
import { IconFont } from "src/components/IconFont";
import { AVATAR_LIST } from "src/config/avatar";
import { Title, NineLayout, Item, Button, SelectAvatarLayout } from "./styles";

export default function SelectAvatar() {
  const [index, setIndex] = useState(0);
  const [isStart, setIsStart] = useState(false);
  const [dsq, setDsq] = useState<NodeJS.Timeout>();

  const start = () => {
    if (!isStart) {
      setDsq(
        setInterval(() => {
          setIndex(Math.floor(Math.random() * AVATAR_LIST.length));
        }, 100)
      );
      setIsStart(true);
    }
    console.log(34);
  };
  const end = () => {
    if (dsq) {
      clearInterval(dsq);
      setIsStart(false);
    }
    console.log(AVATAR_LIST[index]);
  };

  const clickKeyBoard = () => {
    window.addEventListener("keyup", (e) => {
      const { key } = e;
      console.log(11, key);
      switch (key) {
        case "1":
          start();
          break;
        case "2":
          end();
          break;
        default:
          break;
      }
    });
  };
  useEffect(() => {
    clickKeyBoard();
  }, []);
  return (
    <SelectAvatarLayout>
      <Title>换头像大挑战</Title>
      <NineLayout>
        {AVATAR_LIST.map((item) => (
          <Item
            key={item.type}
            choose={item.id === index}
            onClick={() => {
              setIndex(item.id);
            }}
          >
            <IconFont type={item.type} style={{ fontSize: "60px" }} />
            <p>{item.name}</p>
          </Item>
        ))}
      </NineLayout>
      <Button onClick={start}>开始</Button>
      <Button onClick={end}>结束</Button>
    </SelectAvatarLayout>
  );
}
