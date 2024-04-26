import { useEffect } from 'react';
import { Searcher } from './Components/Searcher';
import { Col, Spin } from 'antd';
import { PokemonList } from './Components/PokemonList';
import logo from './Statics/logo.svg'
import './App.css';
import { getPokemon} from './Api';
import { getPokemonWithDetails, setLoading } from './Actions';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const pokemons = useSelector(state => state.pokemons);
  const laoding = useSelector((state) => state.laoding);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemon = async () => {
      dispatch(setLoading(true));
      const pokemonRes = await getPokemon();
        dispatch(getPokemonWithDetails(pokemonRes))
        dispatch(setLoading(false))
    };

    fetchPokemon();
  }, []);

  return (
    <div className="App">
      <Col
      span={4}
      offset={10}>
      <img src={logo} alt='pokedux-logo' />
      </Col>
      <Col 
      span={8}
      offset={8}>
      <Searcher />
      </Col>
      {laoding ? (
        <Col 
        offset={12}>
        <Spin spinning size='large' />
        </Col>
      ): (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}


export default App;
