type GreetProps = {
  name: string;
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>Welcome to TS {props.name}!</h1>
    </div>
  );
};
