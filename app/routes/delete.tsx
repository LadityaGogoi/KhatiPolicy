import { supabase } from "lib/supabase";
import { useState } from "react";
import type { Route } from "../+types/root";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Khati Web Page | delete" },
        { name: "description", content: "Queries for Playstore!" },
    ];
}

const DeleteAccountScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<String>() || null
    const [success, setSuccess] = useState<String>() || null
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmitRequest = async () => {
        setIsLoading(true)
        const { data, error } = await supabase.from("deletion_requests").insert([{ email, password }])

        if (error) {
            setError("Failed to submit request. Please try again.")
        } else {
            setSuccess("your request has been submitted successfully")
            setEmail("")
            setPassword("")
        }
        setIsLoading(false)
    }

    return (
        <div className="flex justify-center items-start bg-gray-100 min-h-screen">
            <div className="w-[320px] bg-white min-h-screen mx-auto flex flex-col justify-center items-center gap-y-4 p-4">
                <div className="text-lg text-center text-gray-500 font-bold underline">Account Deletion Request</div>

                <div className="flex flex-col w-11/12 mx-auto gap-y-2">
                    <label className="text-sm text-gray-500 font-medium">Enter your email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                </div>
                <div className="flex flex-col w-11/12 mx-auto gap-y-2">
                    <label className="text-sm text-gray-500 font-medium">Enter your password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                </div>
                {error && <div className="text-xs text-center text-red-500 font-medium">{error}</div>}
                {success && <div className="text-xs text-center text-green-500 font-medium">{success}</div>}
                <div className="w-2/3 mx-auto flex flex-row justify-center items-center">
                    <button disabled={isLoading} className="bg-red-500 p-3 rounded-full text-white text-sm font-semibold" onClick={() => handleSubmitRequest()}>Delete Account *</button>
                </div>
                <div className="w-full">
                    <div className="text-sm text-red-500 font-bold mb-3 text-center">* Terms & Conditions</div>
                    <div className="flex flex-col gap-y-1 mb-3">
                        <li className="text-xs text-gray-400">Upon account deletion, all your personal data, including profile information and usage history, will be permanently removed from our database.</li>
                        <li className="text-xs text-gray-400">Some data may be retained for legal or security purposes for a period of [7 days/months], after which it will be completely erased</li>
                        <li className="text-xs text-gray-400">If your account deletion request is approved, you will lose access to all app services.</li>
                    </div>
                    <div className="text-sm text-gray-500 font-medium mb-3 text-center flex flex-row justify-center items-center">Contact Us : <p className="text-xs text-sky-500 font-medium"> gogoiladitya@gmail.com</p></div>
                </div>
            </div>
        </div>
    );
}

export default DeleteAccountScreen;
