import React, { useEffect, useState, ComponentType } from "react";
import { useRouter } from "next/navigation";

const withAuth = <P extends object>(
  WrappedComponent: ComponentType<P>,
  allowedIDs: number[]
) => {
  const ComponentWithAuth = (props: P) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        router.replace("/login");
      }

      const getUserRole = (token: any) => {
        const json_token = JSON.parse(token);
        return json_token["user_type_id"];
      };

      const userRole = getUserRole(token);

      if (!allowedIDs.includes(userRole)) {
        router.replace("/login");
      } else {
        setLoading(false);
      }
    }, [router]);

    if (loading) {
      return <div>Loading...</div>; // Or any loading indicator
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;
