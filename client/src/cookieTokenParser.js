export default function parseTokenFromCookies() {
  let cookies = document.cookie

  let token = ""

  cookies = cookies.split(';')


  for (let i = 0; i < cookies.length; i++){
    let split = cookies[i].split('=')
    let key = split[0]
    let value = split[1]

    if (key === " token" || key === "token") {
      token = value
      console.log("TOken FOund")
      break;
    }
  }

  return token
} 