import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({setUser}) {
    return (
        <main className="AuthPage">
            <h1>Authentication</h1>
            <h3>Sign up or login to start</h3>
            <SignUpForm setUser={setUser}/>
            <LoginForm setUser={setUser} />
        </main>
    )
}