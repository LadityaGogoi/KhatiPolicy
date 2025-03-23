export function PolicyScreen() {
    return (
        <div className="flex flex-col bg-gray-100 min-h-screen w-11/12 lg:w-3/4 mx-auto py-5 px-3">
            <div className="text-3xl font-bold text-center">Privacy Policy</div>
            <p className="text-lg text-slate-700"><strong>Last updated: March 23, 2025</strong></p>
            <p className="text-slate-500 text-sm">This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Khati Service and informs You about Your privacy rights and how the law protects You.</p>
            <p className="text-slate-500 text-sm">We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>

            <hr className="text-slate-300 my-5" />

            <h2 className="text-2xl text-center font-bold text-slate-700">Interpretation and Definitions</h2>

            <h3 className="text-xl font-bold text-slate-700">Interpretation</h3>
            <p className="text-slate-500 text-sm">The words with the initial letter capitalized have meanings defined under the following conditions.</p>

            <h3 className="text-xl font-bold text-slate-700">Definitions</h3>
            <ul className="list-disc pl-5">
                <li className="text-slate-500 text-sm"><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                <li className="text-slate-500 text-sm"><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party.</li>
                <li className="text-slate-500 text-sm"><strong>Application</strong> refers to <strong>Khati</strong>, the software program provided by the Company.</li>
                <li className="text-slate-500 text-sm"><strong>Company</strong> refers to <strong>Khati LLC</strong>, Nit, Silchar, Assam, India.</li>
                <li className="text-slate-500 text-sm"><strong>Country</strong> refers to Assam, India.</li>
                <li className="text-slate-500 text-sm"><strong>Device</strong> means any device that can access the Service such as a computer, cellphone, or tablet.</li>
                <li className="text-slate-500 text-sm"><strong>Personal Data</strong> is any information relating to an identifiable individual.</li>
                <li className="text-slate-500 text-sm"><strong>Service</strong> refers to the Application.</li>
                <li className="text-slate-500 text-sm"><strong>Service Provider</strong> means any person processing the data on behalf of the Company.</li>
                <li className="text-slate-500 text-sm"><strong>Usage Data</strong> refers to data collected automatically during use of the Service.</li>
            </ul>

            <h2 className="text-2xl text-center font-bold text-slate-900">Collecting and Using Your Personal Data</h2>

            <h3 className="text-xl font-bold text-slate-700 text-center">Types of Data Collected</h3>

            <h4 className="text-lg font-bold text-slate-700">Personal Data</h4>
            <p className="text-sm text-slate-500">We may ask You to provide Us with personally identifiable information, including but not limited to:</p>
            <ul className="list-disc pl-5">
                <li className="text-sm text-slate-500">Email address</li>
                <li className="text-sm text-slate-500">First and last name</li>
                <li className="text-sm text-slate-500">Phone number (Optional)</li>
                <li className="text-sm text-slate-500">Password (Stored securely using Supabase authentication)</li>
            </ul>

            <h4 className="text-lg font-bold text-slate-700">Usage Data</h4>
            <p className="text-sm text-slate-500">Usage Data is collected automatically and may include information such as:</p>
            <ul className="list-disc pl-5">
                <li className="text-sm text-slate-500">Your IP address</li>
                <li className="text-sm text-slate-500">Browser type and version</li>
                <li className="text-sm text-slate-500">Pages visited and time spent</li>
                <li className="text-sm text-slate-500">Device information</li>
                <li className="text-sm text-slate-500">Diagnostic data</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-700">Use of Your Personal Data</h3>
            <p className="text-sm text-slate-500">We may use Your Personal Data for purposes including:</p>
            <ul className="list-disc pl-5">
                <li className="text-sm text-slate-500">Providing and maintaining our Service</li>
                <li className="text-sm text-slate-500">Managing Your Account</li>
                <li className="text-sm text-slate-500">Contacting You regarding updates or security notifications</li>
                <li className="text-sm text-slate-500">Providing You with offers or promotions</li>
                <li className="text-sm text-slate-500">Analyzing and improving our Service</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-700">Third-Party Services</h3>
            <p className="text-slate-500 text-sm">We use third-party services like:</p>
            <ul className="list-disc pl-5">
                <li className="text-slate-500 text-sm"><strong>Google Analytics</strong> for tracking app usage and user behavior.</li>
                <li className="text-slate-500 text-sm"><strong>Supabase</strong> for database management, authentication, and backend services.</li>
            </ul>

            <h2 className="text-2xl text-center font-bold text-slate-700">Data Security</h2>
            <p className="text-slate-500 text-sm">We implement industry-standard security measures, including:</p>
            <ul className="list-disc pl-5">
                <li className="text-slate-500 text-sm">Secure storage of hashed passwords</li>
                <li className="text-slate-500 text-sm">Encrypted communication using HTTPS</li>
                <li className="text-slate-500 text-sm">Regular audits and vulnerability assessments</li>
            </ul>

            <h2 className="text-2xl text-center font-bold text-slate-700">Your Data Protection Rights</h2>
            <p className="text-slate-500 text-sm">You have the following rights:</p>
            <ul className="list-disc pl-5">
                <li className="text-slate-500 text-sm">Access your data</li>
                <li className="text-slate-500 text-sm">Request correction of your data</li>
                <li className="text-slate-500 text-sm">Request deletion of your data</li>
                <li className="text-slate-500 text-sm">Restrict data processing</li>
                <li className="text-slate-500 text-sm">Request data portability</li>
            </ul>

            <h2 className="text-2xl text-center font-bold text-slate-700">Children's Privacy</h2>
            <p className="text-slate-500 text-sm">We do not knowingly collect data from children under the age of 13. If you believe a child has provided us with Personal Data, please contact Us.</p>

            <h2 className="text-2xl text-center font-bold text-slate-700">Changes to This Privacy Policy</h2>
            <p className="text-slate-500 text-sm">We may update Our Privacy Policy. You will be notified of changes via email or a prominent notice in the Service.</p>

            <h2 className="text-2xl text-center font-bold text-slate-700">Contact Us</h2>
            <p className="text-slate-500 text-sm">If you have any questions about this Privacy Policy, contact us by email: <a href="mailto:gogoiladitya@gmail.com" className="text-blue-500">gogoiladitya@gmail.com</a></p>
        </div>
    );
}
