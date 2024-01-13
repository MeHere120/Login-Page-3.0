// [meta] name: null
// [meta] description: make it more neat and colorful while retaining all the same features

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { SelectContent } from "@/components/ui/select";
import { SelectItem } from "@/components/ui/select";
import { SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";
import { ChevronDown } from "lucide-react";
import { Search } from "lucide-react";
import { useState } from "react";

const UpdatedMultiSelectSearchDropdown = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [accessibilityQuery, setAccessibilityQuery] = useState("");

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto mb-8 bg-white dark:bg-black rounded-xl shadow-2xl">
      <div className="p-8 w-full">
        <div className="mb-6">
          <div className="bg-blue-500 dark:bg-blue-700 text-white p-4 rounded-lg mb-4">
            <h2 className="text-lg font-semibold">User Profile</h2>
            <p>Username: JohnDoe</p>
          </div>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-2">
            <Input
              type="text"
              placeholder="Search for jobs, companies..."
              className="flex-grow bg-transparent border-none p-3 rounded-lg focus:ring-0 text-gray-800 dark:text-gray-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="solid" className="ml-3" aria-label="Search">
              <Search className="h-5 w-5 text-blue-600 dark:text-white" />
            </Button>
          </div>

          <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-2">
            <Input
              type="text"
              placeholder="Accessibility Options"
              className="flex-grow bg-transparent border-none p-3 rounded-lg focus:ring-0 text-gray-800 dark:text-gray-300"
              value={accessibilityQuery}
              onChange={(e) => setAccessibilityQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-6">
          <Select className="bg-gray-100 dark:bg-gray-800 rounded-lg">
            <SelectTrigger className="flex justify-between items-center w-full p-3 rounded-lg bg-transparent border-none">
              <SelectValue placeholder="Yearly Salary" />
              <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 rounded-lg shadow-lg overflow-auto max-h-60">
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value=""
              >
                $0 - $50k
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="0-100k"
              >
                $50k - $100k
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="100k-150k"
              >
                $100k - $150k
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="150k-1m"
              >
                $150k - $200k
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="200k-250k"
              >
                $200k - $250k
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="250k-300k"
              >
                $250k - $300k
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="300k-350k"
              >
                $300k - $350k
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="350k-400k"
              >
                $350k - $400k
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="400k-450k"
              >
                $400k - $450k
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="450k-500k"
              >
                $450k - $500k
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="500k-550k"
              >
                $500k - $550k
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="550k-600k"
              >
                $550k - $600k
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="600k-650k"
              >
                $600k - $650k
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="650k-700k"
              >
                $650k - $700k
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="700k-750k"
              >
                $700k - $750k
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="750k-800k"
              >
                $750k - $800k
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="800k-850k"
              >
                $800k - $850k
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="850k-900k"
              >
                $850k - $900k
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="900k-950k"
              >
                $900k - $950k
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="950k-1m"
              >
                $950k - $1m
              </SelectItem>
            </SelectContent>
          </Select>

          <Select className="bg-gray-100 dark:bg-gray-800 rounded-lg">
            <SelectTrigger className="flex justify-between items-center w-full p-3 rounded-lg bg-transparent border-none">
              <SelectValue placeholder="Job Type" />
              <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 rounded-lg shadow-lg">
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="Full-time"
              >
                Full-time
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="Part-time"
              >
                Part-time
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="Contract"
              >
                Contract
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="Internship"
              >
                Internship
              </SelectItem>
            </SelectContent>
          </Select>

          <Select className="bg-gray-100 dark:bg-gray-800 rounded-lg">
            <SelectTrigger className="flex justify-between items-center w-full p-3 rounded-lg bg-transparent border-none">
              <SelectValue placeholder="Experience Level" />
              <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600 rounded-lg shadow-lg">
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="Internship"
              >
                Internship
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="Entry Level"
              >
                Entry Level
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="Associate Level"
              >
                Associate Level
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="Mid-Senior Level"
              >
                Mid-Senior Level
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="Director"
              >
                Director
              </SelectItem>
              <SelectItem
                className="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
                value="Executive"
              >
                Executive
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default UpdatedMultiSelectSearchDropdown;
  );
};

export default UpdatedMultiSelectSearchDropdown;
