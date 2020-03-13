import React from 'react';
import { Box, Text, Flex } from 'rebass';

function AppBar({ title, children }) {
  return (
    <Flex
      sx={{ position: 'fixed', width: '100%', textAlign: 'center' }}
      py={2}
      px={2}
      color='white'
      bg='black'
      alignItems='center'
    >
      <Text fontSize={[1, 2]} sx={{ width: '100%' }} p={2} fontWeight='bold'>
        {title}
      </Text>
      {children}
      <Box mx='auto' />
    </Flex>
  );
}

export default AppBar;
