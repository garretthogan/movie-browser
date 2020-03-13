import React from 'react';
import { Box, Text } from 'rebass';

function Score({ score, sx }) {
  return (
    <Box
      sx={{
        display: 'inline-block',
        color: '#0e1111',
        bg: '#FFD700',
        px: [2, 3],
        py: [1, 2, 3],
        borderRadius: 9999,
        ...sx
      }}
    >
      <Text fontSize={[1, 2, 3]}>{Math.trunc(score)}</Text>
    </Box>
  );
}

export default Score;
