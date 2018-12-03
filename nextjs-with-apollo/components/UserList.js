import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'

export const allUsersQuery = gql`
  query {
    allUsers {
      name
      githubLogin
      avatar
    }
  }
`

const ADD_FAKE_USERS_MUTATION = gql`
  mutation addFakeUsers($count: Int!) {
    addFakeUsers(count: $count) {
      githubLogin
      name
      avatar
    }
  }
`

export const allUsersQueryVars = {}

export const refreshUsers = () => {
  window.location = '/users'
}

export default function UserList () {
  return (
    <Query query={allUsersQuery} variables={allUsersQueryVars}>
      {({ loading, error, data }) => {
        if (error) return <ErrorMessage message={`${error}`} />
        if (loading) return <div>Loading</div>
        if (!data) return null
        const { allUsers } = data

        return (
          <section>
            <ul>
              {allUsers && allUsers.map((user, index) => (
                <li key={user.githubLogin}>
                  <div>
                    <a href={user.avatar} target='__blank'>{user.name} - {user.githubLogin}</a>
                  </div>
                </li>
              ))}
            </ul>
            <button id='btn-refresh-users' onClick={refreshUsers}>Refresh users</button>
            <p />
            <Mutation mutation={ADD_FAKE_USERS_MUTATION} variables={{ count: 1 }} onCompleted={refreshUsers} >
              {addFakeUsers => (
                <button
                  id='btn-add-fake-users'
                  onClick={addFakeUsers}
                >
                  Add Fake User
                </button>
              )}
            </Mutation>
          </section>
        )
      }}
    </Query>
  )
}