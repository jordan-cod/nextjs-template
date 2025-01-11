import { WEBSITE } from "@/config/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Login | ${WEBSITE.name}`
};

export default function LoginPage(): React.ReactElement {
    return <div>Login</div>;
}
