
import React from "react";
import { ArrowLeft, User, Bell, Shield, Coins, Palette, HelpCircle, LogOut } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SettingsHeader from "./SettingsHeader";
import AccountSection from "./AccountSection";
import NotificationSection from "./NotificationSection";
import PrivacySection from "./PrivacySection";
import EarningsSection from "./EarningsSection";
import AppPreferences from "./AppPreferences";
import SupportSection from "./SupportSection";

const Settings = () => {
  const settingsSections = [
    {
      id: "account",
      title: "Account",
      icon: User,
      component: AccountSection,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "notifications",
      title: "Notifications",
      icon: Bell,
      component: NotificationSection,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "privacy",
      title: "Privacy & Security",
      icon: Shield,
      component: PrivacySection,
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: "earnings",
      title: "Earnings",
      icon: Coins,
      component: EarningsSection,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: "preferences",
      title: "App Preferences",
      icon: Palette,
      component: AppPreferences,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: "support",
      title: "Help & Support",
      icon: HelpCircle,
      component: SupportSection,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        <SettingsHeader />
        
        <div className="px-4 pb-20 space-y-4">
          {settingsSections.map((section, index) => {
            const IconComponent = section.icon;
            const SectionComponent = section.component;
            
            return (
              <Card 
                key={section.id}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className={`h-2 bg-gradient-to-r ${section.color}`} />
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${section.color} shadow-lg`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800">{section.title}</h3>
                  </div>
                  <SectionComponent />
                </div>
              </Card>
            );
          })}
          
          <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-r from-red-500 to-pink-500">
            <Button 
              variant="ghost" 
              className="w-full h-16 text-white hover:bg-white/20 transition-colors duration-200"
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span className="font-semibold">Sign Out</span>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
