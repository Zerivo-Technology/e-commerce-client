import Button from "@/components/element/Button";
import Input from "@/components/element/Input";
import { useState } from "react"


const LoginAdmin = () => {
    const [emailValue, setEmailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('');

    return (
        <div className="h-screen w-full bg-gray-100 flex items-center justify-center">
            <div className="w-[90%] max-w-[400px] h-max bg-white shadow-lg rounded flex items-center flex-col px-7 py-10">
                <h1 className="text-3xl font-pridi font-semibold">Zerivo Shop</h1>
                <div className="flex flex-col w-full h-max gap-5 mt-10">
                    <Input 
                        value={emailValue}
                        onChange={setEmailValue}
                        placeholder="Email"
                        type="email"
                        mandatory={true}
                    />
                    <Input 
                        value={passwordValue}
                        onChange={setPasswordValue}
                        placeholder="Password"
                        type="password"
                        mandatory={true}
                    />
                    <Button 
                        label="Sign In"
                        className="bg-primary-color hover:bg-hover-color rounded text-white font-medium h-12 mt-6"
                    />
                </div>
            </div>
        </div>
    )
}

export default LoginAdmin