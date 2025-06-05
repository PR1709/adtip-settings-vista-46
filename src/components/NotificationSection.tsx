
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Volume2, VolumeX, Smartphone, Mail } from "lucide-react";

const NotificationSection = () => {
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sound: true,
    vibration: true,
    earnings: true,
    promotions: false
  });

  const updateNotification = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  const notificationOptions = [
    {
      key: "push",
      label: "Push Notifications",
      description: "Get notified about new videos and earnings",
      icon: Smartphone
    },
    {
      key: "email",
      label: "Email Notifications",
      description: "Receive updates via email",
      icon: Mail
    },
    {
      key: "sound",
      label: "Sound",
      description: "Play sound for notifications",
      icon: Volume2
    },
    {
      key: "vibration",
      label: "Vibration",
      description: "Vibrate for notifications",
      icon: Smartphone
    },
    {
      key: "earnings",
      label: "Earnings Updates",
      description: "Notify when you earn rewards",
      icon: null
    },
    {
      key: "promotions",
      label: "Promotional Offers",
      description: "Special deals and bonus opportunities",
      icon: null
    }
  ];

  return (
    <div className="space-y-4">
      {notificationOptions.map((option) => {
        const IconComponent = option.icon;
        return (
          <div key={option.key} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
            <div className="flex items-center gap-3 flex-1">
              {IconComponent && (
                <div className="p-2 bg-green-100 rounded-lg">
                  <IconComponent className="w-4 h-4 text-green-600" />
                </div>
              )}
              <div className="flex-1">
                <div className="font-medium text-gray-800">{option.label}</div>
                <div className="text-sm text-gray-500">{option.description}</div>
              </div>
            </div>
            <Switch
              checked={notifications[option.key as keyof typeof notifications]}
              onCheckedChange={(checked) => updateNotification(option.key, checked)}
              className="data-[state=checked]:bg-green-500"
            />
          </div>
        );
      })}
    </div>
  );
};

export default NotificationSection;
