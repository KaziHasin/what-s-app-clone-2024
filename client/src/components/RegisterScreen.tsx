import { Button, TextField, Typography } from '@mui/material'
import { FC } from 'react'

interface registerScreenProps {
    toggleLogin: () => void;
}
const RegisterScreen: FC<registerScreenProps> = ({ toggleLogin }) => {
    return (
        <>
            <Typography variant="h5">Register</Typography>

            <form>
                <TextField required fullWidth label="Username" id="username" type="text" margin="normal" variant="outlined" />
                <TextField required fullWidth label="Email ID" id="email-id" type="email" margin="normal" variant="outlined" />
                <TextField required fullWidth label="Password" id="password" type="password" margin="normal" variant="outlined" />
                <Button variant="contained" type="submit" color="primary" fullWidth sx={{ marginTop: '1rem' }}>Register</Button>
                <Typography textAlign={"center"} sx={{ marginTop: ".5rem" }}>Already have an account?</Typography>
                <Button variant="text" fullWidth sx={{ marginTop: '1rem' }} onClick={toggleLogin}>Login</Button>
            </form>
        </>
    )
}

export default RegisterScreen
