import axios from "axios";

const base_url = "https://api.github.com/graphql";

const github_data = {
  token: "0179379129a3628c9e62e8073efb16af1974900c",
  username: "Fedigs",
};

const get_User_Informations_query = {
  query: `
  {
    user(login:"${github_data.username}"){
      login
      avatarUrl
      company
      name
      email
      bio
      followers(first:100){
        totalCount
      }
      following(first:100){
        totalCount
      }
      starredRepositories(first:100){
        totalCount
      }
      repositories(first:20){
        totalCount
      }
      
      
    }
  }
  

`,
};

export const get_User_Informations = async () => {
  return await axios.post(
    base_url,
    JSON.stringify(get_User_Informations_query),
    {
      headers: {
        Authorization: "bearer " + github_data.token,
      },
    }
  );
};
