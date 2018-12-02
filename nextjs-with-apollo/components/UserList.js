import { Query } from 'react-apollo'
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

export const allUsersQueryVars = {}

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
          </section>
        )
      }}
    </Query>
  )
}