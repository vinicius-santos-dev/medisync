import CurrentYear from "@/components/CurrentYear";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";

/**
 * New Appointment Page - Handles creation of new appointments for existing patients
 * 
 * Route: /patients/[userId]/new-appointment
 * 
 * Features:
 * - Dynamic patient data loading
 * - Appointment scheduling form
 * - Validation and submission handling
 */
const NewAppointment = async (props: SearchParamProps) => {
  const params = await props.params;

  const { userId } = params;

  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.png"
            height={1000}
            width={1000}
            alt="MediSync Logo"
            className="mb-12 h-12 w-fit"
          />
        </div>

        <AppointmentForm
          type="create"
          userId={userId}
          patientId={patient.$id}
        />

        <p className="copyright mt-10 py-12">
          © <CurrentYear /> MediSync
        </p>
      </section>

      <Image
        src="/assets/images/appointment-img.webp"
        height={1000}
        width={1000}
        alt="Appointment Image"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default NewAppointment;
