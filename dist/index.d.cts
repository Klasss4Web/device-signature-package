type SayHelloProps = {
    age: number;
    firstName: string;
    lastName?: string;
};

declare const sayHello: ({ firstName, lastName, age }: SayHelloProps) => void;

export { type SayHelloProps, sayHello };
