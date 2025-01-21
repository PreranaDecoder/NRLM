import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  Users,
  Building2,
  CreditCard,
  Wallet,
  Ban as Bank,
} from "lucide-react";

const stats = [
  {
    id: 1,
    name: "No. of Gram Panchayat (GP)",
    value: "3",
    icon: Building2,
    route: "/dashboard/gram-panchayat",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    name: "No. of Village Organisation (VO)",
    value: "4",
    icon: Users,
    route: "/dashboard/village-organisation",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    id: 3,
    name: "No. of Self Help Group (SHG)",
    value: "5",
    icon: Users,
    route: "/dashboard/self-help-group",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: 4,
    name: "Outstanding Amount",
    value: "₹0",
    icon: CreditCard,
    route: "/dashboard/outstanding",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    id: 5,
    name: "Cash in Hand Amount",
    value: "₹0",
    icon: Wallet,
    route: "/dashboard/cash-in-hand",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    id: 6,
    name: "Cash in Bank Amount",
    value: "₹0",
    icon: Bank,
    route: "/dashboard/cash-in-bank",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
];

const transactions = [
  {
    id: 1,
    name: "Total amount provided as loan",
    value: "₹0",
  },
  {
    id: 2,
    name: "Total return amount as EMI",
    value: "₹0",
  },
  {
    id: 3,
    name: "Total return amount as interest",
    value: "₹0",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.route)}
            className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-200 text-left relative group"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className={`flex-shrink-0 rounded-lg p-3 ${item.bgColor}`}>
                  <item.icon
                    className={`h-6 w-6 ${item.color}`}
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {item.name}
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">
                      {item.value}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-300 group-hover:text-gray-400">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Transactions */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {transactions.map((item) => (
          <div
            key={item.id}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <FileText
                    className="h-6 w-6 text-primary-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {item.name}
                    </dt>
                    <dd className="text-lg font-semibold text-gray-900">
                      {item.value}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
