
import React from "react";
import { ArrowLeft, Search, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const SettingsHeader = () => {
  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="flex items-center justify-between p-4">
        <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Button>
        
        <div className="text-center">
          <h1 className="text-lg font-bold text-gray-800">Settings</h1>
          <p className="text-xs text-gray-500">Adtip - Watch & Earn</p>
        </div>
        
        <Button variant="ghost" size="sm" className="p-2 hover:bg-gray-100 rounded-full">
          <Search className="w-5 h-5 text-gray-600" />
        </Button>
      </div>
    </div>
  );
};

export default SettingsHeader;
