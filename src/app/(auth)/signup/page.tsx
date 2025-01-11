import { WEBSITE } from "@/config/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: `Signup | ${WEBSITE.name}`
};

export default function SignupPage(): React.ReactElement {
    return <div>SignUp Page</div>;
}
