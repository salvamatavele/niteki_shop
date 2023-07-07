"use client"
import { SpeakerNotes } from '@mui/icons-material';
import { Box, CircularProgress } from '@mui/material';
import React from 'react';

// import { Container } from './styles';

const Loading: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: "center"}}>
            <CircularProgress />
        </Box>
    );
}

export default Loading;