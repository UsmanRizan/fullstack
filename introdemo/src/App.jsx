const Footer = (props) => {
  return (
    <div>
      <p>
        greetings app created by{" "}
        <a href="https://github.com/UsmanRizan">{props.owner}</a>
      </p>
    </div>
  );
};

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
      <p>I am {props.age} years old </p>
    </div>
  );
};

const App = () => {
  const owner = "UsmanRizan";
  return (
    <div>
      <p>Greetings </p>
      <Hello name="Uzman" age="10" />
      <Hello name="Rizan" age="40" />
      <Footer owner={owner} />
    </div>
  );
};

export default App;
