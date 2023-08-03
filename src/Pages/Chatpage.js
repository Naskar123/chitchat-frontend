import { Flex } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider"
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { useState } from "react";


const Chatpage = () => {
    const {user} = ChatState();
    const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style = {{width:"100%"}}>
        {user && <SideDrawer/>}
        <Flex
            justifyContent="space-between"
            w="100%"
            h="91.5vh"
            p="10px"
            flexDirection={"row"}
            >
             {user && (
              <MyChats
                  fetchAgain = {fetchAgain} setFetchAgain = {setFetchAgain}
               />
              )} 
              {user && (
              <ChatBox
                  fetchAgain = {fetchAgain} setFetchAgain = {setFetchAgain}
               />
              )} 
        </Flex>
    </div>
  )
}

export default Chatpage