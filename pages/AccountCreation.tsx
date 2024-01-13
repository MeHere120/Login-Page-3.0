// [meta] name: AccountCreation
// [meta] description: make a page where you input credentials to make an account. Specifically first and last name, username password and confirm password

import { Alert } from "@/components/ui/alert";
import { AlertDescription } from "@/components/ui/alert";
import { AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent } from "@/components/ui/tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@/components/ui/tooltip";
import { Key } from "lucide-react";
import { UserCircle } from "lucide-react";
import { useState } from "react";

const AccountCreation = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPasswordMatch(formState.password === formState.confirmPassword);

    if (formState.password === formState.confirmPassword) {
      // Submit form logic
      console.log("Account successfully created.");
    } else {
      console.log("Passwords do not match.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-purple-600 dark:from-gray-700 dark:to-gray-800 bg-decals p-8 rounded-lg shadow-xl w-full max-w-md mx-auto my-6">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formState.firstName}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formState.lastName}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formState.username}
            onChange={handleInputChange}
            icon={
              <UserCircle className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            }
          />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formState.password}
                  onChange={handleInputChange}
                  icon={
                    <Key className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  }
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Must be at least 8 characters</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formState.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
        {!passwordMatch && (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Passwords do not match.</AlertDescription>
          </Alert>
        )}
        <Button
          type="submit"
          className="w-full mt-6 bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded"
        >
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default AccountCreation;
