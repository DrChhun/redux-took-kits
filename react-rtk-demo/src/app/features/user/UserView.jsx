import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'

export const UserView = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    console.log(user.users);
    return (
        <div>
            <h2>List of Users</h2>
            {user.loading && <div>Loading...</div>}
            {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
            {/* {!user.loading && user.users.length ? (
                <ul>
                    {user.users.map(user => (
                        <li key={user.id}>{user}</li>
                    ))}
                </ul>
            ) : null} */}
            {user.users.map(x => (
                <p key={x.id}>{x.name}</p>
            ))}
        </div>
    )
}