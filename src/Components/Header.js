import logo from '../troll-face.png';

function Header(){
  return (
    <header className="header">
      <img src={logo} className="App-logo" alt="logo" width="40" />
      <i className="fa-solid fa-earth-americas logo"></i>
      <h1>Meme Generator</h1>
    </header>
  )
}
export default Header