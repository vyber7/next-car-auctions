import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function InfoEdit() {
  const router = useRouter();
  const { data: session } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.push("/");
    },
  });

  return <div>Edit your shit</div>;
}

export default InfoEdit;
