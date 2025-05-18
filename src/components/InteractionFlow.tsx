
import React from "react";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

const InteractionFlow: React.FC = () => {
  const { toast } = useToast();
  
  const handleSendEmail = () => {
    toast({
      title: "James continues with DebtPal",
      description: "Awaiting Lisa's reply. DebtPal will notify James when she responds.",
      action: (
        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
          <Check className="h-4 w-4 text-green-600" />
        </div>
      ),
    });
  };
  
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 content-appear">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-darkText mb-3">Making Connections</h2>
        <p className="text-gray-600">James sees Lisa and thinks she's an interesting contact.</p>
        <p className="text-gray-600">He asks DebtPal to generate a cold email draft.</p>
      </div>
      
      <div className="bg-gray-50 rounded-xl p-4 md:p-8 shadow-md">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-white border border-gray-200 mb-3">
            <img 
              src="/lovable-uploads/994fff0d-614c-4167-ba8b-ed4321977530.png"
              alt="DebtPal icon" 
              className="w-8 h-8 object-contain"
            />
          </div>
          <div>
            <h3 className="font-bold text-darkText">DebtPal has generated a draft</h3>
            <p className="text-gray-600 text-sm">James sends it to Lisa.</p>
          </div>
        </div>
        
        <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow p-4 border border-gray-100 px-10">
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
          
          <button 
            className="bg-primary text-white rounded-md py-2 px-4 text-sm font-medium hover:bg-primary/90 transition-colors w-full"
            onClick={handleSendEmail}
          >
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractionFlow;
