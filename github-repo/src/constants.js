const base_url = "https://api.github.com/graphql";

const github_data = {
  token: "a00b7219412677217ca25a2a345560db316eb5d9 ",
  username: "Fedigs",
};
const headers = {
  "Content-Type": "application/json",
  Authentication: "bearer " + github_data["token"],
};

const get_All_repo_query = {
  query: `

{
    repositoryOwner(login:${github_data["username"]}){
     
      login
      avatarUrl
      resourcePath
      id  
      repositories(first:20){
        edges{
          
          node{
            id
            name
            url
            createdAt
            updatedAt
            description
            stargazerCount
            licenseInfo{
              name
            }
            languages(first:1){
              nodes{
                id
                name
                color
              }
            }
            , 
          }
        }
      }
    }
  }

`,
};
