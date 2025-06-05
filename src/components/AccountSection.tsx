
import React from "react";
import { ChevronRight, Edit, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AccountSection = () => {
  const accountOptions = [
    { label: "Edit Profile", icon: Edit, action: "profile" },
    { label: "Payment Methods", action: "payment" },
    { label: "Verification Status", action: "verification", badge: "Verified" },
    { label: "Referral Code", action: "referral", value: "ADT2024" }
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
        <div className="relative">
          <Avatar className="w-16 h-16 border-2 border-white shadow-lg">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold">
              JD
            </AvatarFallback>
          </Avatar>
          <Button size="sm" className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full p-0 bg-blue-500 hover:bg-blue-600">
            <Camera className="w-3 h-3 text-white" />
          </Button>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">John Doe</h4>
          <p className="text-sm text-gray-600">john.doe@example.com</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs text-green-600 font-medium">Active Member</span>
          </div>
        </div>
      </div>
      
      {accountOptions.map((option, index) => (
        <Button
          key={index}
          variant="ghost"
          className="w-full justify-between h-12 px-3 hover:bg-gray-50 transition-colors duration-200"
        >
          <div className="flex items-center gap-3">
            {option.icon && <option.icon className="w-4 h-4 text-gray-500" />}
            <span className="text-gray-700">{option.label}</span>
          </div>
          <div className="flex items-center gap-2">
            {option.badge && (
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                {option.badge}
              </span>
            )}
            {option.value && (
              <span className="text-sm text-gray-500 font-mono">{option.value}</span>
            )}
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </Button>
      ))}
    </div>
  );
};

export default AccountSection;
