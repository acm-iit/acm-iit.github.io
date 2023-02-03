import logo from './logo.svg';
import './App.css';

type LinkProps = {
  text: string,
  url: string
};

const Link = ({text, url}: LinkProps) => (
  <a
    className="App-link"
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
);

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Association for Computing Machinery @ Illinois Institute of Technology
      </p>
      <Link text="Discord" url="https://discord.gg/SJS8468yHc" />
      <Link text="Instagram" url="https://www.instagram.com/acm_iit/" />
      <Link text="LinkedIn" url="https://www.linkedin.com/in/acm-iit/" />
      <Link text="Twitter" url="https://twitter.com/acm_iit" />
      <Link text="Mailing List" url="https://forms.gle/xnmfoQgqbz4gZReTA" />
    </header>
  </div>
);

export default App;
