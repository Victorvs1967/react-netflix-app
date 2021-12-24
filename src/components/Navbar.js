import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import styled, { css } from 'styled-components';

const NavContainer = styled.div`
  width: 100%;
  color: white;
  font-size: 14px;
  position: fixed;
  top: 0;
  z-index: 999;
  background: linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.3) 50%);
`;

const MainContainer = styled.div`
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 25px;
    margin-right: 40px;
  }
  span {
    margin-right: 20px;
    cursor: pointer;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    object-fit: cover;
    cursor: pointer;
  }
  span {
    padding: 10px;
    cursor: pointer;
  }
`;

const ProfileContainer = styled.div`
  .options {
    display: none;
    background-color: #b0b0b0;
    border-radius: 5px;
  }
  &:hover {
    .options {
      display: flex;
      flex-direction: column;
      position: absolute;
    }
  }
`;

const sharedStyle = css`
  margin: 0px 15px;
  cursor: pointer;
`;

const MySearch = styled(Search)`
  ${sharedStyle}
`

const MyNotifications = styled(Notifications)`
  ${sharedStyle}
`;

const MyArrowDropDown = styled(ArrowDropDown)`
  ${sharedStyle}
`;

const Navbar = () => {
  return (
    <NavContainer>
      <MainContainer>
        <LeftContainer>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </LeftContainer>
        <RightContainer>
          <MySearch />
          <span>KID</span>
          <MyNotifications />
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="user image"/>
          <ProfileContainer>
            <MyArrowDropDown />
            <div className="options">
              <span>Setting</span>
              <span>Logout</span>
            </div>
          </ProfileContainer>
        </RightContainer>
      </MainContainer>
    </NavContainer>
  );
};

export default Navbar;