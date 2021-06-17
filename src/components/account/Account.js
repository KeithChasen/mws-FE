import React, { useContext, useState } from 'react';
import { AuthContext } from "../../context/auth";
import { StyledProfileWrapper, StyledCardWrapper } from "../../elements/account/Card";
import AccountDetails from "./AccountDetails";
import AccountEdit from "./AccountEdit";


const Account = () => {
  const { user } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const content = editing ? <AccountEdit user={user} /> : <AccountDetails user={user} edit={setEditing}/>;

  return (
    <StyledProfileWrapper>
      <StyledCardWrapper>
        { content }
      </StyledCardWrapper>
    </StyledProfileWrapper>
  )
};

export default Account;