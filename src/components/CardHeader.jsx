import React, { useState } from "react";
import axios from "axios";

// import AddButton from "./AddButton";

export default function CardHeader({ onLogin, onLogout, isLoggedIn }) {
    // const [showLoginForm, setShowLoginForm] = useState(false);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const toggleLoginForm = () => {
    //     setShowLoginForm(!showLoginForm);
    // };

    // const handleLogout = () => {
    //     setIsLoggedIn(false)
    // }
    const handleLogin = async () => {
        try {
            const response = await axios.post('/auth', {
                email, password
            })
            if (response.data.success) {
                onLogin();
            } else {
                console.log('Login failed')
            }
        } catch (error) {
            console.error('Error during login:', error)
        }
    }

    const handleLogout = async () => {
        try {
            await axios.post('/logout');
            onLogout();
        } catch (error) {
            console.error('Error during logout:', error)
        }
    }

    return (
        <div className="card-header">
            <h1>Pets of Bellwines</h1>
            {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <div>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
}
//     return (
//         <div className="card-header">
//             <div className="centered">
//                 {/* <h1>header</h1>
//                 <button>Add</button> */}
//                 <h1>Pets of Bellwines</h1>

//                 {/* <AddButton addClick={addCard} /> */}
//             </div>
//             <div className="right-align">
//                 {!isLoggedIn && !showLoginForm && (
//                     <button onClick={toggleLoginForm}>Login</button>
//                 )}
//                 {isLoggedIn && (
//                     <button onClick={handleLogout}>Logout</button>
//                 )}
//             </div>
//             {showLoginForm && (
//                 <form className="login-form">
//                     <input type="text" placeholder="Email" />
//                     <input type="password" placeholder="Password" />
//                     <button type="submit">Login</button>
//                 </form>
//             )}
//         </div>
//     )
// }
    // const [currentList, setCurrentList] = useState(initialCardList)

    // const addCard = async () => {
    //     let { data } = await axios.post("/addPet", {
    //         description: "Type here!"
    //     })

    //     setCurrentList([...currentList, data])
    // }