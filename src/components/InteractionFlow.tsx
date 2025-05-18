
import React from "react";

const InteractionFlow: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 content-appear">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-darkText mb-3">Making Connections</h2>
        <p className="text-gray-600">James sees Lisa and thinks she's an interesting contact.</p>
        <p className="text-gray-600">He asks DebtPal to generate a cold email draft.</p>
      </div>
      
      <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-md">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="white"/>
                <path d="M9 9H15V15H9V9Z" fill="#2563eb"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-darkText mb-2">DebtPal has generated a draft</h3>
              <p className="text-gray-600 text-sm">James sends it to Lisa.</p>
            </div>
          </div>
          
          <div className="flex-1 bg-white rounded-lg shadow p-4 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="James" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs text-gray-500">From: James</p>
                  <p className="text-xs text-gray-500">To: Lisa</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">12:45 PM</span>
            </div>
            
            <div className="mb-4">
              <h4 className="font-medium text-darkText">Unleash Your Innovation with Agentic AI</h4>
              <div className="mt-2 text-sm text-gray-600 typewriter-container animate-typewriter">
                <p>Hi Lisa,</p>
                <p className="mt-2">I noticed your work in financial innovation and thought you might be interested in discussing how DebtPal is leveraging AI to revolutionize debt management.</p>
                <p className="mt-2">Would you have 15 minutes to connect this week?</p>
                <p className="mt-2">Best regards,<br />James</p>
              </div>
            </div>
            
            <button className="bg-primary text-white rounded-md py-2 px-4 text-sm font-medium hover:bg-primary/90 transition-colors w-full">
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractionFlow;
