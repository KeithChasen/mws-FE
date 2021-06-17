import React, { useState } from 'react';
import { StyledButton, StyledError, StyledForm, StyledInput } from "../../elements/Form";
import { useMutation } from "@apollo/client";
import { UPDATE_ACCOUNT } from "../../graphql/user";


const AccountEdit = ({ user, edit, setMessage }) => {
  const initialAccountInfo = {
    bio: user?.bio ? user.bio : '',
    age: user?.age ? user.age : '',
    occupation: user?.occupation ? user.occupation : '',
    nickname: user?.nickname ? user.nickname : '',
    firstname: user?.firstname ? user.firstname : '',
    lastname: user?.lastname ? user.lastname : '',
  };
  const [errors, setErrors] = useState({});
  const [accountInfo, setAccountInfo] = useState({
    ...initialAccountInfo
  });
  const [updateAccount, { loading }] = useMutation(UPDATE_ACCOUNT);

  const submitForm = e => {
    e.preventDefault();
    if (JSON.stringify(initialAccountInfo) === JSON.stringify(accountInfo)) {
      setMessage('Nothing to update...');
      edit(false);
      return;
    }

    updateAccount({ variables: accountInfo })
      .then(res => {
        if (res.data.updateUser) {
          setMessage('Account info updated successfully');
          edit(false);
        }
      })
      .catch(err => {
        setErrors({
          ...err.graphQLErrors[0].extensions.errors
        })
      });
  };

  const onChange = e => {
    setAccountInfo({
      ...accountInfo,
      [e.target.name]: e.target.value
    });
  };

  return loading ? (<p>Loading...</p>) : (
    <StyledForm onSubmit={submitForm}>
      <h1>Update Your Info</h1>
      <label htmlFor="age">Age</label>
      <StyledInput type="text" name='age' error={errors.age} onChange={onChange} value={accountInfo.age}/>
      <StyledError>{errors.age}</StyledError>
      <label htmlFor="occupation">Occupation</label>
      <StyledInput type="text" name='occupation' error={errors.occupation} onChange={onChange} value={accountInfo.occupation}/>
      <StyledError>{errors.occupation}</StyledError>
      <label htmlFor="nickname">Nickname</label>
      <StyledInput type="text" name='nickname' error={errors.nickname} onChange={onChange} value={accountInfo.nickname}/>
      <StyledError>{errors.nickname}</StyledError>
      <label htmlFor="firstname">First Name</label>
      <StyledInput type="text" name='firstname' error={errors.firstname} onChange={onChange} value={accountInfo.firstname}/>
      <StyledError>{errors.firstname}</StyledError>
      <label htmlFor="lastname">Last Name</label>
      <StyledInput type="text" name='lastname' error={errors.lastname} onChange={onChange} value={accountInfo.lastname}/>
      <StyledError>{errors.lastname}</StyledError>
      <label htmlFor="bio">Bio</label>
      <StyledInput type="text" name='bio' error={errors.bio} onChange={onChange} value={accountInfo.bio}/>
      <StyledError>{errors.bio}</StyledError>
      <StyledButton>Update</StyledButton>
      <StyledButton bgcolor='black'>Cancel</StyledButton>
      <StyledError>{errors.common}</StyledError>
    </StyledForm>
  );
};

export default AccountEdit;
