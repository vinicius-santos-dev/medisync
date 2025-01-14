"use client";

import Image from "next/image";
import { Button } from "./ui/button";

interface ButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}

/**
 * SubmitButton Component - Reusable button component for form submissions with loading state
 *
 * Features:
 * - Loading state indicator
 * - Disabled state during submission
 * - Custom children content
 * - Consistent styling across forms
 *
 * @param props.isLoading - Loading state flag
 * @param props.children - Button content/label
 */
const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="Loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
