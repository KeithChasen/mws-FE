import React, {useContext, useState} from 'react';
import { useMutation } from "@apollo/client";

import { UPLOAD_AVATAR } from "../../graphql/user";
import { AuthContext } from "../../context/auth";
import { StyledFileButton, StyledFileInput, StyledFileLabel } from "../../elements/Form";

const UploadAvatar = ({ edit, setMessage }) => {

  const { updateAccount } = useContext(AuthContext);

  const [upload, { loading }] = useMutation(UPLOAD_AVATAR);
  const [file, setFile] = useState(null);

  const submitForm = e => {
    e.preventDefault();

    upload({ variables: { file } })
      .then(res => {
        if (res.data.uploadAvatar) {
          setMessage('Photo uploaded successfully');
          updateAccount(res.data.uploadAvatar);
          edit(false);
        }
      })
      .catch(err => console.log(err, 'file err'))
  };

  const onChange = e => {
    setFile(e.target.files[0]);
  };

  return loading ?
    (<p>Loading...</p>) :
    (
      <div className="uploadAvatar">
        <h1>Upload You Profile Photo</h1>
        <form onSubmit={submitForm}>
          <StyledFileLabel htmlFor="avatar">Select File</StyledFileLabel>
          <StyledFileInput type="file" id="avatar" name='avatar' onChange={onChange}/>
          <StyledFileButton>Save</StyledFileButton>
        </form>
      </div>
    );
};

export default UploadAvatar;
