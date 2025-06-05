
import React from "react";
import { ChevronRight, Wallet, TrendingUp, Target, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const EarningsSection = () => {
  const earningsData = {
    totalEarned: 1247.50,
    thisMonth: 183.25,
    watchTime: 42.5,
    nextReward: 50
  };

  const earningsOptions = [
    { label: "Payment History", icon: Wallet, action: "history" },
    { label: "Withdrawal Methods", icon: TrendingUp, action: "withdrawal" },
    { label: "Earning Goals", icon: Target, action: "goals" },
    { label: "Bonus Rewards", icon: Gift, action: "bonus", badge: "3 Available" }
  ];

  return (
    <div className="space-y-4">
      <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">${earningsData.totalEarned}</div>
            <div className="text-xs text-gray-600">Total Earned</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">${earningsData.thisMonth}</div>
            <div className="text-xs text-gray-600">This Month</div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Progress to next reward</span>
            <span className="font-medium text-orange-600">${earningsData.nextReward - earningsData.watchTime}/${earningsData.nextReward}</span>
          </div>
          <Progress 
            value={(earningsData.watchTime / earningsData.nextReward) * 100} 
            className="h-2 bg-orange-100"
          />
        </div>
      </div>
      
      {earningsOptions.map((option, index) => {
        const IconComponent = option.icon;
        return (
          <Button
            key={index}
            variant="ghost"
            className="w-full justify-between h-12 px-3 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <IconComponent className="w-4 h-4 text-yellow-600" />
              </div>
              <span className="text-gray-700">{option.label}</span>
            </div>
            <div className="flex items-center gap-2">
              {option.badge && (
                <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
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

export default EarningsSection;
