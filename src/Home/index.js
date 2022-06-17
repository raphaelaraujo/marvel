import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './index.css';
import api from "../services/api";
import md5 from "md5";


//URL: http://gateway.marvel.com/v1/public/comics?&ts=1655487037&apikey=9153bfb4aea6c854a88a10d5b4dcc6b4&hash=75d45cd14d99bcad4c234a4ba0b82fb2
//     http://gateway.marvel.com/v1/public/comics?&ts=1655487037&api_key=9153bfb4aea6c854a88a10d5b4dcc6b4&hash=75d45cd14d99bcad4c234a4ba0b82fb2

//public_key: 9153bfb4aea6c854a88a10d5b4dcc6b4 
//timestamp: 1655487037
// hash: 75d45cd14d99bcad4c234a4ba0b82fb2

function Home() {

    const publicKey = "9153bfb4aea6c854a88a10d5b4dcc6b4";
    const privateKey = "7386255bf25e3942732d10c19682b9a4dbb54e50";
    const time = Number(new Date());
    const hash = md5(time + privateKey + publicKey);


    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        async function loadCharacters() {

            const response = await api.get('characters?',
                {
                    params: {
                        ts: time,
                        apikey: publicKey,
                        hash: hash,
                    }
                });

            console.log(response.data.data.results);
            setCharacters(response.data.data.results);
        }

        loadCharacters();

    }, []);

    return (
        <div className="container">
            <div className="lista-characters">
                <h1>Home</h1>
                {characters.map((character) => {
                    return (
                        <article key={character.id}>
                            <strong>{character.name}</strong>
                            <img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt={character.name} />
                            <Link to={`/characters/${character.id}`}>Acessar</Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;