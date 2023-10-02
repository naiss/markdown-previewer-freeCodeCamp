function App() {
  return (
    <div>
      <Markdown />
    </div>
  );
}

const prefilledText = `# Markdown Previewer
## Welcome to my React Markdown Previewer!

#### This is a sub-heading...

This is a requested [link](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)

This is a word in **bold**

This is some code between 2 backticks --> \`<div></div>\`

This is multi-line code:

\`\`\`
render() {
return (
  <div>
    <h1>Contador: {this.state.contador}</h1>
    <button onClick={this.aumentarContador}>Incrementar</button>
  </div>
);
}
\`\`\`

This is an example of list:
- And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
            - That look like this.

1. And last but not least
2. let's not forget
3. embedded images:

![velero](https://img.freepik.com/vector-gratis/etiqueta-engomada-juguete-velero-sobre-fondo-blanco_1308-61477.jpg?w=826&t=st=1696246449~exp=1696247049~hmac=beee20ec556fe2055f149ba3bfdcfd59d6c8d193a83cbea9b5eada3314084c08)

`;

class Markdown extends React.Component {
  constructor() {
    super();
    this.state = { text: prefilledText, markedText: "" };
  }

  componentDidMount() {
    this.setState({ markedText: marked(this.state.text) });
  }

  handleChange = (event) => {
    this.setState({ markedText: marked(event.target.value) });
  };

  render() {
    return (
      <div id="main-container">
        <textarea id="editor" onChange={this.handleChange}>
          {this.state.text}
        </textarea>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: this.state.markedText }}
        ></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
