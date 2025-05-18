
import React from "react";

const StatusFooter: React.FC = () => {
  return (
    <div className="bg-gray-50 py-6 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-darkText">James continues with DebtPal</h3>
              <p className="text-sm text-gray-600">Awaiting Lisa's reply. DebtPal will notify James when she responds.</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="text-primary font-medium text-sm hover:underline">
              Set reminders
            </button>
            <span className="text-gray-400">|</span>
            <button className="text-primary font-medium text-sm hover:underline">
              View settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusFooter;
