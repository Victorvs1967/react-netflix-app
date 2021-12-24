import styled from 'styled-components';

const ItemContainer = styled.div`
  width: 225px%;
  height: 125px;
  background-color: #obobob;
  margin-right: 5px;
  overflow: hidden;
  cursor: pointer;
  color: white;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const MovieItem = ({ index }) => {
  return (
    <ItemContainer>
      <MainImage
        src="http://cdn.cloudflare.steamstatic.com/steam/apps/1265780/capsule_616x353.jpg?t=1618237900" alt="trailer"
      />
    </ItemContainer>
  );
};

export default MovieItem;