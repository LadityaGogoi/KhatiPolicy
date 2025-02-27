export function PolicyScreen() {
    return (
        <div className="flex justify-center items-start bg-gray-100 min-h-screen">
            <div className="w-[320px] min-h-screen bg-white mx-auto flex flex-col justify-center items-start gap-y-4 p-4">
                <div className="text-xl font-bold text-gray-700 underline text-center w-full">Privacy Policy for Khati</div>
                
                <div className="text-sm text-gray-500">
                    Welcome to Khati, developed by gogoibrothers. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our App.
                </div>
                <div className="text-sm text-gray-500">
                    By using our App, you agree to the collection and use of information per this policy. If you do not agree, please do not use the App.
                </div>
                
                <div className="flex flex-col w-full">
                    <div className="text-base font-semibold text-gray-600">1. Information We Collect</div>
                    <ul className="list-disc pl-5 text-sm text-gray-500">
                        <li>Personal Information: Name, email address, and phone number (if you sign up).</li>
                        <li>Usage & Device Information: App usage analytics, device model, OS version, IP address, crash logs.</li>
                        <li>Data from Third Parties: If you sign in via Google, we collect your name and email.</li>
                    </ul>
                </div>
                
                <div className="flex flex-col w-full">
                    <div className="text-base font-semibold text-gray-600">2. How We Use Your Information</div>
                    <ul className="list-disc pl-5 text-sm text-gray-500">
                        <li>Providing and improving our mock test and job preparation services.</li>
                        <li>Personalizing your learning experience.</li>
                        <li>Monitoring performance, debugging, and enhancing app security.</li>
                        <li>Communicating updates, promotions, or support responses.</li>
                    </ul>
                </div>
                
                <div className="flex flex-col w-full">
                    <div className="text-base font-semibold text-gray-600">3. Sharing of Information</div>
                    <ul className="list-disc pl-5 text-sm text-gray-500">
                        <li>We do not sell your personal information.</li>
                        <li>Service Providers: With trusted third parties that help run our app (e.g., analytics, cloud hosting).</li>
                        <li>Legal Compliance: If required by law or to protect rights and safety.</li>
                        <li>Business Transfers: If we merge, acquire, or sell assets, your data may be transferred.</li>
                    </ul>
                </div>
                
                <div className="flex flex-col w-full">
                    <div className="text-base font-semibold text-gray-600">4. Data Retention & Security</div>
                    <ul className="list-disc pl-5 text-sm text-gray-500">
                        <li>Your data is securely stored and retained as long as necessary to provide our services.</li>
                        <li>We implement encryption and secure authentication to protect your data.</li>
                        <li>You can request data deletion by contacting gogoiladitya@gmail.com.</li>
                    </ul>
                </div>
                
                <div className="flex flex-col w-full">
                    <div className="text-base font-semibold text-gray-600">5. Your Rights</div>
                    <ul className="list-disc pl-5 text-sm text-gray-500">
                        <li>Access, update, or delete your personal data.</li>
                        <li>Opt-out of non-essential notifications.</li>
                        <li>Withdraw consent for data collection (some app features may be limited).</li>
                    </ul>
                </div>
                
                <div className="flex flex-col w-full">
                    <div className="text-base font-semibold text-gray-600">6. Third-Party Services</div>
                    <ul className="list-disc pl-5 text-sm text-gray-500">
                        <li>We may use third-party services such as:</li>
                        <li>Google Analytics (to track app usage).</li>
                        <li>Supabase (for database and authentication).</li>
                        <li>These services have their own privacy policies.</li>
                    </ul>
                </div>
                
                <div className="flex flex-col w-full">
                    <div className="text-base font-semibold text-gray-600">7. Changes to This Privacy Policy</div>
                    <div className="text-sm text-gray-500">We may update this policy from time to time. Changes will be reflected on this page, and we will notify users of major updates.</div>
                </div>
                
                <div className="flex flex-col w-full">
                    <div className="text-base font-semibold text-gray-600">8. Contact Us</div>
                    <div className="text-sm text-gray-500">If you have questions, contact us at:</div>
                    <div className="text-sm text-gray-600 font-semibold">📧 gogoiladitya@gmail.com</div>
                </div>
            </div>
        </div>
    );
}
