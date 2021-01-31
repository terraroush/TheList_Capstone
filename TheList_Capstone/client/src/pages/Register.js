import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import "./Login.css";
// import { storage } from '../index';

const Register = () => {
  const { register } = useContext(UserProfileContext);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  // const [image, setImage] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const history = useHistory();

  // const { getToken } = useContext(UserProfileContext)

  // const AddUserImage = (image) => {
  //   const imageObj = { imageName: image}
  //   return getToken().then((token) =>
  //     fetch(`/api/userprofile`, {
  //       method: "PUT",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(imageObj)
  //     })
  //   );
  // };

  // const handleChange = e => {
  //   if (e.target.files[0]) {
  //     setImage(e.target.files[0])
  //   }
  // }

  // const handleUpload = () => {
  //   if (image !== null) {
  //     const uploadTask = storage.ref(`images/${image.name}`).put(image);
  //     uploadTask.on(
  //       "state_changed",
  //       snapshot => {},
  //       error => {
  //         console.log(error);
  //       },
  //       () => {
  //         storage
  //           .ref("images")
  //           .child(image.name)
  //           .getDownloadURL()
  //           .then(url => {
  //             localStorage.setItem("image", url)
  //           }).then(() => {
  //             setUrl(localStorage.getItem("image"));
  //             AddUserImage(url)
  //           })
  //       }
  //     )
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    const profile = {
      name,
      userName,
      profilePicUrl,
      email,
    };
    register(profile, password)
      .then((user) => {
        setLoading(false);
        toast.info(`Welcome ${user.userName}`);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("This email is already in use.");
      })
      // .then(() => {
      //   handleUpload()
      // })
      .then(() => {
        history.push("/");
      });
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="avatar bg-primary">
          <img src="/quill.png" alt="Avatar" />
        </div>
        <h2 className="text-center">User Register</h2>
        <div className="form-group">
          <Input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            required="required"
          />
        </div>
        <div className="form-group">
          <Input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            className="form-control"
            name="userName"
            placeholder="Username"
            required="required"
          />
        </div>
        <div className="form-group">
          <Input
            onChange={(e) => setProfilePicUrl(e.target.value)}
            type="text"
            className="form-control"
            name="profilePicUrl"
            placeholder="profilePicUrl"
          />
        </div>
        <div className="form-group">
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            required="required"
          />
        </div>
        <div className="form-group">
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required="required"
          />
        </div>
        <div className="form-group">
          <Input
            onChange={(e) => setConfirm(e.target.value)}
            type="password"
            className="form-control"
            name="confirmPassword"
            placeholder="Confirm Password"
            required="required"
          />
        </div>
        {/* <div>
          <input type="file" onChange={handleChange}/>
        </div> */}
        <div className="form-group">
          <Button type="submit" block color="danger" disabled={loading}>
            Sign Up
          </Button>
        </div>
        <div className="text-center small">
          Already have an account?
          <div>
            <Link to="/login">Log in here</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
