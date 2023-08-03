import React from 'react';
import { Box } from '@chakra-ui/react';

const NotificationBadge = ({ count }) => {
  return (
    <Box
      position="absolute"
      top="8px" // Adjust this value to vertically position the badge on the BellIcon
      right="100px" // Adjust this value to horizontally position the badge on the BellIcon
      minWidth="20px" // Set the minimum width to ensure the badge size doesn't change based on the count
      height="20px"
      borderRadius="50%"
      backgroundColor="red" // Customize the background color
      color="white" // Customize the text color
      textAlign="center"
      fontSize="12px"
      lineHeight="20px"
      zIndex="1" // Set a higher z-index to make sure the badge appears on top of the BellIcon
    >
      {count}
    </Box>
  );
};

export default NotificationBadge;
