import React, {useContext, useState} from 'react';
import { useMutation } from "@apollo/client";

import { UPLOAD_AVATAR } from "../../graphql/user";
import { AuthContext } from "../../context/auth";

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

  const content = loading ?
    (<p>Loading...</p>) :
    (
      <div>
        Upload Avatar
        <form onSubmit={submitForm}>
          <input type="file" name='avatar' onChange={onChange}/>
          <button>Save</button>
        </form>
      </div>
    );

  return content;
};

export default UploadAvatar;
