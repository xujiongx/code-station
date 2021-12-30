import React, { useState } from "react";
import { IconFont } from "src/components/IconFont";
import { AVATAR_LIST } from "src/config/avatar";
import AppRecoil from "../Recoil";
import { Title, Image, NineLayout, Item } from "./styles";

export default function Test() {
  const [hello, setHello] = useState("hello");
  return (
    <div>
      <Title>HAHAHAH</Title>
      <h1 style={{ background: "#ccc" }}>{hello}</h1>
      <h2 style={{ color: "red", fontSize: "40px" }}>hahah</h2>
      <button onClick={() => setHello("hello word")}>click me?</button>
      <Image src="https://www.tuimzi.com/pic/2019/06/01/ppduzbzafio.jpg" />
      <AppRecoil />
      <IconFont type="a-Group18" style={{ fontSize: "30px" }} />
      <NineLayout>
        {AVATAR_LIST.map((item) => (
          <Item key={item.type}>
            <IconFont type={item.type} style={{ fontSize: "60px" }} />
            <p>{item.name}</p>
          </Item>
        ))}
      </NineLayout>
    </div>
  );
}
