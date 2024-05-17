import { Button, TextField, Typography } from '@mui/material'
import { FC } from 'react'

interface LoginScreenProps {
    toggleLogin: () => void;
}
const LoginScreen: FC<LoginScreenProps> = ({ toggleLogin }) => {
    return (
        <>
            <Typography variant="h5">Login</Typography>

            <form>
                <TextField required fullWidth label="Username" id="username" type="text" margin="normal" variant="outlined" />
                <TextField required fullWidth label="Password" id="password" type="password" margin="normal" variant="outlined" />
                <Button variant="contained" type="submit" color="primary" fullWidth sx={{ marginTop: '1rem' }}>Login</Button>
                <Typography textAlign={"center"} sx={{ marginTop: ".5rem" }}>OR</Typography>
                <Button variant="text" fullWidth sx={{ marginTop: '1rem' }} onClick={toggleLogin}>Register</Button>
            </form>
        </>
    )
}

export default LoginScreen
