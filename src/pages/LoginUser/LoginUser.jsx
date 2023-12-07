import React, { useContext, useState } from 'react';
import './loginuser.css';
import TopBar from '../../components/TopBar/TopBar';
import { Button, Card, Form } from 'react-bootstrap';
import Footer1 from '../../components/FooterBar/Footer1';
import Footer2 from '../../components/FooterBar/Footer2';
import Footer3 from '../../components/FooterBar/Footer3';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const LoginUser = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    // const [validated, setValidated] = useState(false);
    
    const loginUser = async () => {
      
          const res = await fetch("https://academics.newtonschool.co/api/v1/user/login",{
            method:"POST",
            headers:{
              "Content-Type": "application/json",
              "projectID": "f104bi07c490"
            },
            body:JSON.stringify({
              email : email,
              password : password,
              appType : "ecommerce"
            })
          });
          const result = await res.json();
          console.log(result);
          if(result.status==="success"){
            navigate("/userprofile");
            localStorage.removeItem("token");
            localStorage.setItem("token",result.token);
            userContext.setUser(result.data);
          }
          else if(result.status==="fail")
          {
            setError(result.message)
          }
          setEmail("");
          setPassword("");

        
    }
     

  return (
    <div>
        <TopBar/>
        <div className='login_container'>
            <Card  style={{ width: '18rem' ,boxShadow:'0px 8px 16px 0px rgba(0,0,0,0.2)'}}>
                <Card.Body>
                    <Card.Title className='login_title'>Login</Card.Title> 
                    <hr />
                    {error ?<p className='login_error'>{error}</p>:<></>}
                    <div className=''>
                        <Form  className='login_form' >
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                                <Form.Control.Feedback type="invalid">
                                  Please provide a valid state.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                            </Form.Group>
                            <div className='login_btn_container'>
                                <Link className='signup_btn' to={"/register"}>New Here?</Link>
                                <Button onClick={loginUser} className='login_button'>Login</Button>
                            </div>
                        </Form>
                    </div>
                </Card.Body>
            </Card>
        </div>
        <Footer1/>
        <Footer2/>
        <Footer3/>
    </div>
  )
}

export default LoginUser