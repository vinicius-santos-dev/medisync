import { StatusIcon } from "@/constants";
import clsx from "clsx";
import Image from "next/image";

/**
 * StatusBadge Component - Visual indicator for appointment status with color coding and icons
 * 
 * Features:
 * - Dynamic color based on status
 * - Status-specific icons
 * - Consistent styling across app
 * - Type-safe status handling
 */
const StatusBadge = ({ status }: { status: Status }) => {
  return <div className={clsx("status-badge", {
    "bg-green-600": status === "scheduled",
    "bg-blue-600": status === "pending",
    "bg-red-600": status === "cancelled"
  })}>
    <Image src={StatusIcon[status]}
    width={24}
    height={24}
    alt="Status"
    className="h-fit w-3"
    />
    <p className={clsx("text-12-semibold capitalize", {
      "text-green-500": status === "scheduled",
      "text-blue-500": status === "pending",
      "text-red-500": status === "cancelled"
    })}>{status}</p>
  </div>;
};

export default StatusBadge;
