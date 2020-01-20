import * as React from "react";

export interface HelloWorld {
  compile: string;
  framework: string;
}

export const Hello = (props: HelloWorld) => {
  return <h3>this project is developed by {props.compile} and {props.framework}</h3>
}