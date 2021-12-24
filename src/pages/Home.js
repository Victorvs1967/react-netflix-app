import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Featured from '../components/Featured';
import MovieList from '../components/MovieList';

const HomeContainer = styled.div`
  bacground-color: #0b0b0b;
  overflow: hidden;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Featured />
      <MovieList />
      <MovieList />
      <MovieList />
      <MovieList />
    </HomeContainer>
  );
};

export default Home;