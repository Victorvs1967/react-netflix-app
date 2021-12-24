import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import styled from 'styled-components';

const FeaturedContainer = styled.div`
  height: 90vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  oblect-fit: cover;
`;

const InfoContainer = styled.div`
  width: 35%;
  position: absolute;
  left: 50px;
  bottom: 100px;
  color: white;
  display: flex;
  flex-direction: column;
  img {
    width: 400px;
  }
  .desc {
    margin: 20px 0px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  margin-right: 10px;
  cursor: pointer;
  background: ${props => props.primary ? "white" : "#0b0b0b"};
  color: ${props => props.primary ? "#0b0b0b" : "white"};
  span {
    margin-left: 5px;
  }
`;

const Featured = () => {
  return (
    <FeaturedContainer>
      <Image src="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80" alt="main" />
      <InfoContainer>
        <Image src="https://www.seekpng.com/png/full/210-2107842_the-matrix-logo-matrix-movie-logo-png.png" alt="logo" />
        <span className="desc">
          The Matrix depicts a dystopian future in wich humanityis unknowingly trapped inside the simulated reality, the Matrix, which intelligence machines have created to distract humans while using their bodies as an energy source.
        </span>
        <ButtonContainer>
          <StyledButton primary>
            <PlayArrow />
            <span>Play</span>
          </StyledButton>
          <StyledButton>
            <InfoOutlined />
            <span>Info</span>
          </StyledButton>
        </ButtonContainer>
      </InfoContainer>
    </FeaturedContainer>
  );
};

export default Featured;