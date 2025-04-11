export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
        Terms of Service
      </h1>
      
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg mb-8">
        <p className="mb-4 text-gray-200">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        
        <h2 className="text-xl font-semibold mb-3 text-purple-300">1. Acceptance of Terms</h2>
        <p className="mb-4 text-gray-200">
          By accessing and using WasteTime Games, you accept and agree to be bound by the terms and provisions of this agreement. 
          If you do not agree to these terms, please do not use our services.
        </p>
        
        <h2 className="text-xl font-semibold mb-3 text-purple-300">2. Use License</h2>
        <p className="mb-4 text-gray-200">
          Permission is granted to temporarily access the materials on WasteTime Games for personal, non-commercial use. 
          This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-200 mb-4">
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose</li>
          <li>Attempt to decompile or reverse engineer any software contained on the website</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
        </ul>
        <p className="text-gray-200">
          This license shall automatically terminate if you violate any of these restrictions and may be terminated by WasteTime Games at any time.
        </p>
        
        <h2 className="text-xl font-semibold mb-3 mt-6 text-purple-300">3. Disclaimer</h2>
        <p className="mb-4 text-gray-200">
          The materials on WasteTime Games are provided on an 'as is' basis. WasteTime Games makes no warranties, expressed or implied, 
          and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of 
          merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
        
        <h2 className="text-xl font-semibold mb-3 mt-6 text-purple-300">4. Limitations</h2>
        <p className="mb-4 text-gray-200">
          In no event shall WasteTime Games or its suppliers be liable for any damages (including, without limitation, damages for loss of 
          data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if 
          WasteTime Games or an authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>
        
        <h2 className="text-xl font-semibold mb-3 mt-6 text-purple-300">5. Revisions and Errata</h2>
        <p className="text-gray-200">
          The materials appearing on WasteTime Games could include technical, typographical, or photographic errors. WasteTime Games does not 
          warrant that any of the materials on its website are accurate, complete or current. WasteTime Games may make changes to the materials 
          contained on its website at any time without notice.
        </p>
      </div>
    </div>
  );
} 