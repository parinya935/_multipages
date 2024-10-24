const users = [
    {
        user: 'user',
        pass: 'pass',
        role: 'admin',
        token: 'user'
    }
]


export function verifyUser( user, pass ) {
    const userCheck = users.find( (u) => {
        return u.user === user && u.pass === pass
    })

    return userCheck ? { role: userCheck.role, token: userCheck.token } : null
}