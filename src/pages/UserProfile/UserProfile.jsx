import React, { useContext } from 'react'
import { UserContext } from '../../App'
import Top1 from '../../components/TopBar/Top1';
import Top2 from '../../components/TopBar/Top2';

const UserProfile = () => {
  const userContext = useContext(UserContext);
  return (
    <div>
        <Top1/>
        <Top2/>
        hello {userContext.user.name}
    </div>
  )
}

export default UserProfile