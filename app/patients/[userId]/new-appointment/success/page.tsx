import SuccessContent from "@/components/SuccessContent";
import { getAppointment } from "@/lib/actions/appointment.actions";

/**
 * Appointment Success Page - Displays confirmation after successful appointment creation
 * 
 * Route: /patients/[userId]/new-appointment/success?appointmentId=[id]
 * 
 * Features:
 * - Appointment details display
 * - Success confirmation message
 * - Navigation options
 */
const Success = async (props: SearchParamProps) => {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const { userId } = params;

  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  return <SuccessContent appointment={appointment} userId={userId} />;
};

export default Success;
