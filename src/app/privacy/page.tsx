export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
        Privacy Policy
      </h1>
      
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg mb-8">
        <p className="mb-4 text-gray-200">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <h2 className="text-xl font-semibold mb-3 text-purple-300">1. Introduction</h2>
        <p className="mb-4 text-gray-200">
          WasteTime Games ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. 
          This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
        </p>
        <p className="mb-4 text-gray-200">
          We do not collect any personal information unless explicitly provided by you. Please read this policy carefully 
          to understand our practices regarding your information.
        </p>
        
        <h2 className="text-xl font-semibold mb-3 mt-6 text-purple-300">2. Information We Collect</h2>
        <p className="mb-4 text-gray-200">
          We only collect information that is necessary for the functioning of our games:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-200 mb-4">
          <li>Game scores and progress (stored locally in your browser)</li>
          <li>Cookies that are essential for the website's functionality</li>
          <li>Anonymous usage statistics to improve our games</li>
        </ul>
        <p className="mb-4 text-gray-200">
          We do not collect personally identifiable information unless you voluntarily provide it to us, such as when you contact us via email.
        </p>
        
        <h2 className="text-xl font-semibold mb-3 mt-6 text-purple-300">3. How We Use Your Information</h2>
        <p className="mb-4 text-gray-200">
          Any information we collect is used solely for:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-200 mb-4">
          <li>Providing and maintaining our games</li>
          <li>Improving, personalizing, and expanding our offerings</li>
          <li>Responding to your requests or inquiries</li>
          <li>Monitoring the usage of our website</li>
          <li>Detecting, preventing, and addressing technical issues</li>
        </ul>
        
        <h2 className="text-xl font-semibold mb-3 mt-6 text-purple-300">4. Cookies and Tracking Technologies</h2>
        <p className="mb-4 text-gray-200">
          We use cookies to enhance your experience on our website. These are small files placed on your device that allow us to 
          remember your preferences and settings. You can set your browser to refuse all or some browser cookies, but this might 
          affect certain functionalities of our website.
        </p>
        
        <h2 className="text-xl font-semibold mb-3 mt-6 text-purple-300">5. Third-Party Services</h2>
        <p className="mb-4 text-gray-200">
          We may employ third-party companies and individuals to facilitate our website or provide services on our behalf. These 
          third parties have access to your information only to perform these tasks and are obligated not to disclose or use it for any other purpose.
        </p>
        
        <h2 className="text-xl font-semibold mb-3 mt-6 text-purple-300">6. Children's Privacy</h2>
        <p className="mb-4 text-gray-200">
          Our website is not intended for children under the age of 13. We do not knowingly collect personally identifiable 
          information from children under 13. If you are a parent or guardian and you are aware that your child has provided us 
          with personal information, please contact us.
        </p>
        
        <h2 className="text-xl font-semibold mb-3 mt-6 text-purple-300">7. Changes to This Privacy Policy</h2>
        <p className="text-gray-200">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
          on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </div>
    </div>
  );
} 