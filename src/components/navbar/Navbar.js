import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const longText = `
    \nWELCOME, dear user

    Provide your name, email, password and profile
    picture(optional)
    On clicking SIGN UP you will be redirected to the
    chat page
    Now you can chat with your friends and families.
    You can have one to one chat as well as group chat
    All your chats are end to end encrypted
    We value your privacy

    Have fun!!
  `;

  const contactInfo = `
    phone : 12345678

    email : jhdbskjh@jhbd.com
  `;

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={3}
        bg="yellow.200"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Box ml={2}>
          <Button colorScheme="green" onClick={() => setIsModalOpen(true)}>
            Getting Started
          </Button>
        </Box>
        <Box mr={2}>
          <ButtonGroup>
            <Button variant="link" colorScheme="green" padding="10px">
              About Us
            </Button>
            {/* for contact us */}
            <Popover>
              <PopoverTrigger>
                <Button variant="link" colorScheme="green">
                  Contact Us
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Contact Information</PopoverHeader>
                <PopoverBody
                  bg="blue.500" // Set the baor)
                  color="white" // Set the fon
                  fontFamily="Arial" 
                  fontSize={15}
                  p={4}
                >
                  <pre
                    style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}
                  >
                    {contactInfo}
                  </pre>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </ButtonGroup>
        </Box>
      </Box>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Getting Started</ModalHeader>
          <ModalBody>
            <pre style={{ whiteSpace: "pre-wrap", fontFamily: "monospace" }}>
              {longText}
            </pre>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" onClick={() => setIsModalOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Navbar;
