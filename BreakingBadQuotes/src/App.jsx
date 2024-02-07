import { useEffect, useState } from 'react';
import Badger from './assets/Badger.jpg';
import Fly from './assets/FLY.jfif';
import Gale from './assets/Gale.jfif';
import Gustavo from './assets/Gustavo.jfif';
import Hank from './assets/Hank.jpg';
import Jesse from './assets/Jesse.jfif';
import Mike from './assets/Mike.jfif';
import Saul from './assets/Saul.jfif';
import Skyler from './assets/Skyler.jfif';
import Tuco from './assets/Tuco.jfif';
import Walter from './assets/Walter.jfif';
import WalterJR from './assets/WalterJR.jfif';

function App() {
  const [quote, setQuote] = useState("'Loading...please refresh'");
  const [author, setAuthor] = useState("'Someone...please refresh'");
  const [image, setImage] = useState(Jesse);

  function whichImage(author) {
    switch (author) {
      case 'Walter White':
        setImage(Walter);
        break;
      case 'Gale Boetticher':
        setImage(Gale);
        break;
      case 'Mike Ehrmantraut':
        setImage(Mike);
        break;
      case 'Jesse Pinkman':
        setImage(Jesse);
        break;
      case 'Tuco Salamanca':
        setImage(Tuco);
        break;
      case 'Skyler White':
        setImage(Skyler);
        break;
      case 'Hank Schrader':
        setImage(Hank);
        break;
      case 'Gustavo Fring':
        setImage(Gustavo);
        break;
      case 'Saul Goodman':
        setImage(Saul);
        break;
      case 'Walter White Jr':
        setImage(WalterJR);
        break;
      case 'The Fly':
        setImage(Fly);
        break;
      case 'Badger':
        setImage(Badger);
        break;
      default:
        setImage(Walter);
        break;
    }
  }

  useEffect(() => {
    fetch('https://api.breakingbadquotes.xyz/v1/quotes')
      .then((res) => res.json())
      .then((data) => {
        const quote = data[0].quote;
        const author = data[0].author;
        whichImage(author);
        setQuote(quote);
        setAuthor(author);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <img src={image} alt="" />
      <h1>Breaking Bad Quotes</h1>
      <h2>Quote:</h2>
      <h4>"{quote}"</h4>
      <h3>Author:</h3>
      <h4>'{author}'</h4>
    </>
  );
}

export default App;
