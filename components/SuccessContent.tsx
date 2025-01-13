"use client";

import { Doctors } from "@/constants";
import { useTimezone } from "@/hooks/useTimeZone";
import { formatDateTime } from "@/lib/utils";
import { Appointment } from "@/types/appwrite.types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import CurrentYear from "./CurrentYear";

const SuccessContent = ({
  appointment,
  userId,
}: {
  appointment: Appointment;
  userId: string;
}) => {
  const timezone = useTimezone();
  const doctor = Doctors.find(
    (doc) => doc.name === appointment.primaryPhysician
  );

  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.png"
            width={1000}
            height={1000}
            alt="MediSync Logo"
            className="h-12 w-fit"
          />
        </Link>

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            width={300}
            height={280}
            alt="Success"
          />

          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">appointment request</span> has
            been successfully submitted!
          </h2>

          <p>We will be in touch shortly to confirm.</p>
        </section>

        <section className="request-details">
          <p>Requested appointment details:</p>
          <div className="flex items-center gap-3">
            {doctor && (
              <>
                <Image
                  src={doctor.image}
                  width={100}
                  height={100}
                  alt="Doctor"
                  className="size-6"
                />

                <p className="whitespace-nowrap">Dr. {doctor.name}</p>
              </>
            )}
          </div>

          <div className="flex gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="Calendar"
            />

            <p>{formatDateTime(appointment.schedule, timezone).dateTime}</p>
          </div>
        </section>

        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
        </Button>

        <p className="copyright">
          © <CurrentYear /> MediSync
        </p>
      </div>
    </div>
  );
};

export default SuccessContent;
