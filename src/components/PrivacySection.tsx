
import React from "react";
import { ChevronRight, Lock, Eye, Fingerprint, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const PrivacySection = () => {
  const privacyOptions = [
    {
      type: "button",
      label: "Change Password",
      icon: Lock,
      action: "password"
    },
    {
      type: "button",
      label: "Two-Factor Authentication",
      icon: Fingerprint,
      action: "2fa",
      badge: "Enabled"
    },
    {
      type: "toggle",
      label: "Biometric Login",
      icon: Fingerprint,
      description: "Use fingerprint or face ID",
      checked: true
    },
    {
      type: "toggle",
      label: "Profile Visibility",
      icon: Eye,
      description: "Show profile to other users",
      checked: false
    },
    {
      type: "button",
      label: "Privacy Policy",
      icon: Shield,
      action: "policy"
    },
    {
      type: "button",
      label: "Data Download",
      icon: Shield,
      action: "download"
    }
  ];

  return (
    <div className="space-y-2">
      {privacyOptions.map((option, index) => {
        const IconComponent = option.icon;
        
        if (option.type === "toggle") {
          return (
            <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <div className="flex items-center gap-3 flex-1">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <IconComponent className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{option.label}</div>
                  <div className="text-sm text-gray-500">{option.description}</div>
                </div>
              </div>
              <Switch
                checked={option.checked}
                className="data-[state=checked]:bg-purple-500"
              />
            </div>
          );
        }

        return (
          <Button
            key={index}
            variant="ghost"
            className="w-full justify-between h-auto p-3 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <IconComponent className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-gray-700">{option.label}</span>
            </div>
            <div className="flex items-center gap-2">
              {option.badge && (
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
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

export default PrivacySection;
