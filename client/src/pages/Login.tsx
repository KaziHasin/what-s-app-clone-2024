import { useState, FC } from "react"
import LoginScreen from "../components/LoginScreen";
import RegisterScreen from "../components/RegisterScreen";
import { Container, Paper } from "@mui/material";


const Login: FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const toggleLogin = () => {
        setIsLogin(!isLogin);
    }
    return (
        <Container component={'main'} maxWidth="sm" sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {isLogin ?
                    <LoginScreen toggleLogin={toggleLogin} />
                    :
                    <RegisterScreen toggleLogin={toggleLogin} />

                }
            </Paper>
        </Container>
    )
}

export default Login
