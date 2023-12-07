import React, { useContext, useState } from 'react'
import "./registration.css";
import { Form , Button, Card } from 'react-bootstrap'
import TopBar from '../../components/TopBar/TopBar'
import Footer1 from '../../components/FooterBar/Footer1'
import Footer2 from '../../components/FooterBar/Footer2'
import Footer3 from '../../components/FooterBar/Footer3'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const RegistrationLogin = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

      const registerUser = async () => {
        try{  
          const res = await fetch("https://academics.newtonschool.co/api/v1/user/signup",{
            method:"POST",
            headers:{
              "Content-Type": "application/json",
              "projectID": "f104bi07c490"
            },
            body:JSON.stringify({
              name : name,
              email : email,
              password : password,
              appType : "ecommerce"
            })
          });
          const result = await res.json();
          console.log(result);
          userContext.setUser(result.data.user);
          setEmail("");
          setName("");
          setPassword("");
          navigate("/userprofile");
          localStorage.removeItem('token');
          localStorage.setItem(`token`,result.token);
      }catch(error){
          console.error(error.message);
      }
    }



  return (
    <div>
      <TopBar/>
      <div>
          <div className='login_container'>
            <Card  style={{ width: '18rem' ,boxShadow:'0px 8px 16px 0px rgba(0,0,0,0.2)'}}>
                <Card.Body>
                    <Card.Title className='login_title'>New User Account</Card.Title> 
                    <hr />
                    <div className=''>
                        <Form className='registration_from'>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control value={name} onChange={(e)=>setName(e.target.value)} required type="email" placeholder="Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} required type="password" placeholder="Password" />
                            </Form.Group>
                            <div className='signup_button_container'>
                                <Link className='login_btn' to={"/login"} >Already Signup?</Link>
                                <Button onClick={registerUser} className='signup_button'>SignUp</Button>
                            </div>
                        </Form>
                    </div>
                </Card.Body>
            </Card>
        </div>
      </div>
      <Footer1/>
      <Footer2/>
      <Footer3/>
    </div>
  )
}

export default RegistrationLogin