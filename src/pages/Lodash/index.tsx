import React from "react";
import _ from "lodash";
import md5 from "md5";
export function Lodash() {
  const id1 = _.uniqueId();
  const id2 = _.uniqueId();
  const id3 = _.uniqueId("text");

  const md1 = md5("111");
  const md2 = md5("111");
  return (
    <div>
      <div>
        id:{id1}-{id2}-{id3}
        {_.stubTrue()}
      </div>

      <div>md5:{md1}</div>
      <div>md5:{md2}</div>
    </div>
  );
}
