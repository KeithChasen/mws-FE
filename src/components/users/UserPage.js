import React from 'react';
import { useQuery } from "@apollo/client";

import { GET_USER } from '../../graphql/users'
import ProfileDetails from "../shared/ProfileDetails";

const UserPage = () => {
  const url = window.location.href;
  const userId = url.substr(url.lastIndexOf('/') + 1);
  const { loading, error, data } = useQuery(GET_USER, { variables: { userId }});

  return (
    loading ? <div>Loading</div> : <ProfileDetails loadedUser={ data.getUser } panelSize={90} fullSize={true} />
  );
};

export default UserPage;
