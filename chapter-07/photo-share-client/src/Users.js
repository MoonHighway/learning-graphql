import React from 'react'
import { Query, Mutation } from 'react-apollo'
import { ROOT_QUERY } from './App'
import { gql } from 'apollo-boost'

const ADD_FAKE_USERS_MUTATION = gql`
    mutation addFakeUsers($count:Int!) {
        addFakeUsers(count:$count) {  
            githubLogin
            name
            avatar
        }
    }
`

const Users = () => 
    <Query query={ROOT_QUERY} fetchPolicy="cache-and-network">
        {({ data, loading, refetch }) => loading ?
            <p>loading users...</p> :
            <UserList count={data.totalUsers} 
                users={data.allUsers} 
                refetch={refetch} />
        }
    </Query>  

const UserList = ({ count, users, refetch }) =>
    <div>
        <p>{count} Users</p>
        <button onClick={() => refetch()}>Refetch</button>
        <Mutation mutation={ADD_FAKE_USERS_MUTATION} 
            variables={{ count: 1 }}>
            {addFakeUsers => 
                <button onClick={addFakeUsers}>Add Fake User</button>
            }
        </Mutation>
        <ul>
            {users.map(user => 
                <UserListItem key={user.githubLogin} 
                    name={user.name}
                    avatar={user.avatar} />
            )}
        </ul>
    </div> 

const UserListItem = ({ name, avatar }) => 
    <li>
        <img src={avatar} width={48} height={48} alt="" />
        {name}
    </li>

export default Users