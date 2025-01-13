import SuccessContent from "@/components/SuccessContent";
import { getAppointment } from "@/lib/actions/appointment.actions";

const Success = async (props: SearchParamProps) => {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const {
    userId
  } = params;

  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);
  

  return <SuccessContent appointment={appointment} userId={userId} />
};

export default Success;
