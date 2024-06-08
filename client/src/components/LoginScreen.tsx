import { Box, Button, Grid, Paper, Stack, Typography } from '@mui/material'
import { FC } from 'react'


const LoginScreen: FC = () => {
    return (
        <Grid
            container
            style={{
                height: '100vh',
                display: "flex",
                justifyContent: "center",

            }}
        >
            <Grid
                style={{
                    width: '100%',
                    height: '220px',
                    backgroundColor: '#00a884',
                    position: 'relative',
                }}
            >
                <Stack spacing={2}
                    mt={5}
                    ml={23}

                    direction="row"
                    alignItems="center"
                >
                    <img src='images/whatsapp.png' width={36} />
                    <Typography variant="h6" style={{ color: '#fff', fontWeight: '600', textTransform: 'uppercase', fontSize: '15px' }} >
                        whatsapp web
                    </Typography>

                </Stack>
                <Paper elevation={3}
                    sx={{
                        padding: 4,
                        width: '74%',
                        position: 'absolute',
                        top: '60%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        marginTop: '40px',

                    }}
                >

                    <Box

                        minWidth={'80%'}
                        mx={'auto'}
                        display="flex"
                        alignItems="center"
                        gap={4}
                        p={3}
                        borderRadius={1}
                        sx={{ border: '1px solid rgba(0, 0, 0, .2)' }}

                    >
                        <img src="/images/whatsapp-desktop.png" alt="" />
                        <Typography variant="h6">
                            <span style={{ fontSize: '17px', display: 'block', opacity: '.9' }}>Download WhatsApp for windows</span>
                            <span style={{ fontSize: '14px', marginTop: '-2px', opacity: '.7', display: 'block' }}>Get calling, screen sharing and a faster experience with the new Windows app.</span>
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: 'none',
                                backgroundColor: '#017561',
                                fontWeight: 'bold',
                                borderRadius: '50px',
                                '&:hover': {
                                    backgroundColor: '#015a47',
                                }
                            }}
                        >
                            Get the app
                        </Button>
                    </Box>
                </Paper>
            </Grid>

        </Grid>
    )

}

export default LoginScreen
