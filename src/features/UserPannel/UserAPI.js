// A mock function to mimic making an async request for data
export function fetchLoggedInUser(userId) {
  return new Promise( async(resolve) =>{
    const response= await fetch('http://localhost:8080/users/'+userId)
  const data= await response.json
  resolve({data})
  }
  );
}
