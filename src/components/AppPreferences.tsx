
import React, { useState } from "react";
import { ChevronRight, Moon, Globe, Smartphone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AppPreferences = () => {
  const [preferences, setPreferences] = useState({
    darkMode: false,
    autoDownload: true,
    dataSync: true
  });

  const togglePreference = (key: string) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-pink-100 rounded-lg">
            <Moon className="w-4 h-4 text-pink-600" />
          </div>
          <div>
            <div className="font-medium text-gray-800">Dark Mode</div>
            <div className="text-sm text-gray-500">Switch to dark theme</div>
          </div>
        </div>
        <Switch
          checked={preferences.darkMode}
          onCheckedChange={() => togglePreference('darkMode')}
          className="data-[state=checked]:bg-pink-500"
        />
      </div>

      <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-pink-100 rounded-lg">
            <Globe className="w-4 h-4 text-pink-600" />
          </div>
          <div className="font-medium text-gray-800">Language</div>
        </div>
        <Select defaultValue="en">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Español</SelectItem>
            <SelectItem value="fr">Français</SelectItem>
            <SelectItem value="de">Deutsch</SelectItem>
            <SelectItem value="pt">Português</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-pink-100 rounded-lg">
            <Smartphone className="w-4 h-4 text-pink-600" />
          </div>
          <div className="font-medium text-gray-800">Video Quality</div>
        </div>
        <Select defaultValue="auto">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select quality" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="auto">Auto</SelectItem>
            <SelectItem value="hd">HD (720p)</SelectItem>
            <SelectItem value="sd">SD (480p)</SelectItem>
            <SelectItem value="low">Low (360p)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-pink-100 rounded-lg">
            <Download className="w-4 h-4 text-pink-600" />
          </div>
          <div>
            <div className="font-medium text-gray-800">Auto Download</div>
            <div className="text-sm text-gray-500">Download videos on WiFi</div>
          </div>
        </div>
        <Switch
          checked={preferences.autoDownload}
          onCheckedChange={() => togglePreference('autoDownload')}
          className="data-[state=checked]:bg-pink-500"
        />
      </div>
    </div>
  );
};

export default AppPreferences;
