const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
      <p>I am {props.age} years old </p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <p>Greetings </p>
      <Hello name="Uzman" age="10" />
    </div>
  );
};

export default App;
