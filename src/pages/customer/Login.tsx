import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
    } catch (error) {
        console.log(error);
    }
};

onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
        navigate("/");
    }
});
const [authing, setAuthing] = useState(false);

const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
        .then((response) => {
            console.log(response.user.uid);
            navigate('/');
        })
        .catch((error) => {
            console.log(error);
            setAuthing(false);
        });
};
  return (
    <div className="cont">
      <Form className="form1" onSubmit={signIn}>
        <h3 className="sign2">Signin</h3>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="email"
            className="formcontrol"
            placeholder="Enter Email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            style={{color: " #1340DE",border: "1px solid #2B67F6"}}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="password"
            className="formcontrol"
            placeholder="Enter Password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            style={{color: " #1340DE",border: "1px solid #2B67F6"}}
          />
        </Form.Group>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
        <button onClick={() => signInWithGoogle()} disabled={authing}>
                Sign in with Google
            </button>
        <p className="forgot-password text-right">
          Not Registered <Link to={"/register"}>Sign up</Link>
        </p>
      </Form>
      <img src="/Assets/Images/signupimg.svg" className="image1" alt="" />
    </div>
  
  );
};

export default Login;
