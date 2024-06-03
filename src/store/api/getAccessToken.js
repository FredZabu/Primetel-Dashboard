
function getAccessToken() {
  const nullUser = JSON.stringify({
                    role: null,
                    token: null
                })
  const user = JSON.parse(sessionStorage.getItem("user") || nullUser)    
    return user.token;
}

export default getAccessToken;