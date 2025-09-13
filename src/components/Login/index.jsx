import { useLogin } from "../../context/login-context"
import { userLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const { loginDispatch, email, password, token } = useLogin();
    const navigate = useNavigate();

    const onFormSubmit = async (ev) => {
        ev.preventDefault();
        const data = await userLogin(email, password);
        
        loginDispatch({
            type: 'TOKEN',
            payload: {
                token: data
            }
        })

        if(data.access_token) navigate('/')
    }

    const onEmailChange = (ev) => {
        loginDispatch({
            type: 'EMAIL',
            payload: {
                value: ev.target.value
            }
        })
    }

    const onPasswordChange = (ev) => {
        loginDispatch({
            type: 'PASSWORD',
            payload: {
                value: ev.target.value
            }
        })
    }

    return (
        <form 
            onSubmit={onFormSubmit} 
            className="w-full max-w-sm mx-auto bg-gray-50 shadow-md rounded-lg p-8 mt-20 space-y-6"
        >
            <div>
                <label className="block text-gray-700 font-medium mb-2">Email*</label>
                <input
                    onChange={onEmailChange}
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
            </div>

            <div>
                <label className="block text-gray-700 font-medium mb-2">Password*</label>
                <input
                    onChange={onPasswordChange}
                    type="password"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
            </div>

            <div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 active:bg-blue-800 transition font-semibold"
                >
                    Login
                </button>
            </div>
        </form>
    )
}
