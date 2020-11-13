import axios from "axios";

const base_url = "https://api.github.com/graphql";

const github_data = {
  token: "a63e79f5f9a2ad0f0aa829bf0a78b3d4436bc519",
  username: "Fedigs",
};

const get_All_repo_query = {
  query: `
  {
    repositoryOwner(login:"${github_data.username}"){
     
      login
      avatarUrl
      resourcePath
      id  
      repositories(first:20, orderBy: {field: UPDATED_AT, direction: DESC}){
        totalCount
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
              edges{
                node{
                  id,
                  name,
                  color
                }
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

export const get_All_Repositories = async () => {
  return await axios.post(base_url, JSON.stringify(get_All_repo_query), {
    headers: {
      Authorization: "bearer " + github_data.token,
    },
  });
};
