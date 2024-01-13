// [meta] name: AccountCreation
// [meta] description: make a page that has a search engine that lets your filter salary and position

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { SearchCheck } from "lucide-react";
import { useState } from "react";

const AccountCreation = () => {
  const [salaryRange, setSalaryRange] = useState<[number, number]>([
    50000, 150000,
  ]);

  // Placeholder data, replace with actual data fetching and rendering
  const jobListings = [
    {
      title: "Software Engineer",
      description: "A leading tech company",
      salary: "$120,000",
    },
    {
      title: "Product Manager",
      description: "Innovative startup",
      salary: "$130,000",
    },
    // More placeholder listings...
  ];

  return (
    <div className="bg-white dark:bg-black p-8">
      <div className="mb-8">
        <Input placeholder="Position title" type="text" className="mb-4" />
        <Slider
          defaultValue={[50000, 150000]}
          onValueChange={(value) => setSalaryRange(value as [number, number])}
          min={0}
          max={300000}
          step={1000}
        />
        <div className="mt-2 text-right text-sm text-gray-600 dark:text-gray-400">
          Salary range: ${salaryRange[0].toLocaleString()} - $
          {salaryRange[1].toLocaleString()}
        </div>
      </div>
      <Button className="mb-8 flex items-center justify-center">
        <SearchCheck className="mr-2 h-4 w-4" />
        Search
      </Button>
      <div className="space-y-4">
        {jobListings.map((job, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>{job.description}</CardDescription>
            </CardHeader>
            <CardContent>Salary: {job.salary}</CardContent>
            <CardFooter>
              <Button variant="outline">View</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AccountCreation;
