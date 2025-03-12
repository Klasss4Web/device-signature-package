import { SayHelloProps } from "./types";

export const sayHello = ({ firstName, lastName, age }: SayHelloProps) => {
  console.log(`Hello, ${firstName} ${lastName}`);
};
