import CurrentYear from "@/components/CurrentYear";
import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";

const Register = async (props: SearchParamProps) => {
  const params = await props.params;

  const {
    userId
  } = params;

  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.png"
            height={1000}
            width={1000}
            alt="MediSync Logo"
            className="mb-12 h-12 w-fit"
          />

          <RegisterForm user={user} />

          <p className="copyright py-12">
            © <CurrentYear /> MediSync
          </p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="Register Image"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
