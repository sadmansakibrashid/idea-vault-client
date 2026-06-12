import { auth } from "@/lib/auth";
import { headers } from "next/headers";
const MyInteractionPage =async () => {
    const session = await auth.api.getSession({
    headers: await headers(),
      });
    const user = session?.user;
    const res = await fetch(`http://localhost:5000/comments/${user?.id}`);
    const data = await res.json()
    console.log(data)
    return (
        <div>
            <h1>My Interaction</h1>
        </div>
    );
};

export default MyInteractionPage;