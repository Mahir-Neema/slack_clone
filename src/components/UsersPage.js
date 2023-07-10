import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectUsers } from '../features/userSlice';
import { styled } from 'styled-components';

const UsersPage = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <UsersPageContainer>
      {users.map((user) => (
        <UserCard key={user.id}>
          <img src={user.profileImage} alt={user.name} />
          <h3>{user.name}</h3>
        </UserCard>
      ))}
    </UsersPageContainer>
  );
};

export default UsersPage;

const UsersPageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin: 70px 20px 10px 20px;
  text-align: center;
`;

const UserCard = styled.div`
  width: 200px;
  height: 160px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 16px;
  text-align: center;
  background-color: #f5f5f5;

  > img{
    width: 80px;
    margin-bottom: 5px;
    height: auto;
    border-radius: 4px;
    object-fit: cover;
  }

  > h3{
    margin-top: 0;
    color: #1f1f1f; 
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
  }

`;