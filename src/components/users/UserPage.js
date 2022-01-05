import React from 'react';
import { useQuery } from "@apollo/client";

import { GET_USER } from '../../graphql/users'
import ProfileDetails from "../shared/ProfileDetails";

const UserPage = () => {
  //replace with use params hook
  const url = window.location.href;
  const userId = url.substr(url.lastIndexOf('/') + 1);
  const { loading, error, data } = useQuery(GET_USER, { variables: { userId }});

  return (
    loading ?
      <div>Loading</div> :
      error ?
        <div>Wasn't able to fetch user info</div> :
        <ProfileDetails loadedUser={ data.getUser } panelSize={90} fullSize={true} mobileWidth={85}/>
  );
};

export default UserPage;
