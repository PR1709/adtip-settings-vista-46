
import React from "react";
import { ChevronRight, MessageCircle, BookOpen, Star, Bug, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const SupportSection = () => {
  const supportOptions = [
    { label: "Help Center", icon: BookOpen, action: "help" },
    { label: "Contact Support", icon: MessageCircle, action: "contact" },
    { label: "Report a Bug", icon: Bug, action: "bug" },
    { label: "Rate App", icon: Star, action: "rate" },
    { label: "Call Support", icon: Phone, action: "call", badge: "24/7" },
    { label: "Email Us", icon: Mail, action: "email" }
  ];

  return (
    <div className="space-y-2">
      <div className="p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl mb-4">
        <div className="text-center">
          <div className="text-lg font-semibold text-teal-700 mb-1">Need Help?</div>
          <div className="text-sm text-gray-600 mb-3">We're here to assist you 24/7</div>
          <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
            <MessageCircle className="w-4 h-4 mr-2" />
            Start Live Chat
          </Button>
        </div>
      </div>
      
      {supportOptions.map((option, index) => {
        const IconComponent = option.icon;
        return (
          <Button
            key={index}
            variant="ghost"
            className="w-full justify-between h-12 px-3 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-teal-100 rounded-lg">
                <IconComponent className="w-4 h-4 text-teal-600" />
              </div>
              <span className="text-gray-700">{option.label}</span>
            </div>
            <div className="flex items-center gap-2">
              {option.badge && (
                <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                  {option.badge}
                </span>
              )}
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
          </Button>
        );
      })}
    </div>
  );
};

export default SupportSection;
