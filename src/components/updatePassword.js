import React from "react";
import step_5 from "./../media/forgotpassword/step_5.png";
import Authrization from "./authrization";

function updatePassword() {
  return (
    <div>
      <h2>Update My Password</h2>

      <Authrization />

      <p className="docs_desc">
        To Update the password for the currently logged in user, you need to make a PATCH
        request to the following endpoint
      </p>
      <br />
      <span className="hilight m-m">
        PATCH <div className="empty_space"></div>{" "}
        http://localhost:3000/api/v1/users/updateMyPassword
      </span>

      <p className="docs_desc m-m">
        This will make a patch request to the api and it will try find the user and update
        his/her password, however, In order for this to work then we need to provide some
        needed info to veryfiy this proccess, IN our case we need to send three paeaces of
        information in the request body which are currentPassword, newPassword,
        passwordConfirm as shown in the tabel below:
      </p>

      <br />
      <table>
        <tr>
          <th>Property</th>
          <th>Required</th>
        </tr>

        <tr>
          <td>currentPassword</td>
          <td>True</td>
        </tr>
        <tr>
          <td>newPassword</td>
          <td>True</td>
        </tr>

        <tr>
          <td>passwordConfirm</td>
          <td>True</td>
        </tr>
      </table>

      <p className="docs_desc m-m">
        so you should send a json object that look something like this:
      </p>

      <img src={step_5} alt="forgot password step" className="docs__img" />
    </div>
  );
}

export default updatePassword;
