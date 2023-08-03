import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import {useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";

const Homepage = () => {
  const navigate = useNavigate();
 
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) navigate("/chats");
  }, [navigate]);
  
  
  
  return (
    // <Container maxW="800px" centerContent>
    <div style={{ height: "100vh", width: "100%", margin: "2px", padding: "1px" }}>
      <Navbar/>
      <Container maxW="xl" centerContent>
        <Box
          display="flex"
          justifyContent= "Center"
          p={3}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily="Work sans" textAlign={"center"}>
            CHITCHAT
          </Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs isFitted variant="soft-rounded" colorScheme="green">
            <TabList mb="1em">
              <Tab width="50%">Login</Tab>
              <Tab width="50%">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
      </div>
    // </Container>  
  );
}

export default Homepage;  