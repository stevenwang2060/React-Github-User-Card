import React from 'react';
import styled from 'styled-components';

const Container = styled.div
`
width: 95%;
margin: 0 auto;
`

const UserCardBody = styled.div
`
    border: solid black 2px;
    padding: 5%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2% 0;
`

const UserCardHeader = styled.div
`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    padding: 0 1%;
`

const ProfileNameLink = styled.a
`
    text-decoration: none;
    color: black;
    font-size: 1.8rem;
    font-style: bold;
`
const Image = styled.img`
    width: 200px;
    height: 200px;
`
const UserCardText = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 65%;
    padding: 1%;
`
const FollowerCardContainer = styled.div
`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`
const FollowerCardBody = styled.div
`
    border: solid black 2px;
    max-width: 200px;
    min-width: 200px;
    padding: 1% 3% 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2% 0;
`

const UserCard = (props) => {
    console.log(props.followers);

    return (
        <>
            <Container>
                <div className="userProfile">
                    <UserCardBody className="UserCardBody">
                        <UserCardHeader>
                            <p>
                                <ProfileNameLink
                                    className="userTitle"
                                    href={props.myUser.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {props.myUser.name}
                                </ProfileNameLink>
                            </p>
                            <Image src={props.myUser.avatar_url} alt="profile picture" />
                        </UserCardHeader>
                        <UserCardText className="other-info">
                            <p>User Name: {props.myUser.login}</p>
                            <p>Number of Followers: {props.myUser.followers}</p>
                            <p>Number Following: {props.myUser.following}</p>
                        </UserCardText>
                    </UserCardBody>
                </div>

                {/* Followers */}
                <h2>{props.myUser.name}'s Followers</h2>
                <FollowerCardContainer className="followerListContainer">
                    {props.followers.map(item => {
                        return (
                            <FollowerCardBody className="FollowerListBody">
                                <p>
                                    <ProfileNameLink
                                        className="followerList"
                                        href={item.html_url}
                                        key={item.login}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.login}
                                    </ProfileNameLink>
                                </p>
                                <Image className="FollowerListImg" src={item.avatar_url} alt="follower profile picture" />
                            </FollowerCardBody>
                        )
                    })
                    }
                </FollowerCardContainer>
            </Container>
        </>
    )
};

export default UserCard;