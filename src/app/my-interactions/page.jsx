import { auth } from "@/lib/auth";
import { headers } from "next/headers";
const MyInteractionPage =async () => {
    const session = await auth.api.getSession({
    headers: await headers(),
      });
    const user = session?.user;
    console.log(user?.id)
    
    const res = await fetch(`http://localhost:5000/comments/${user?.id}`);
    
    const data = await res.json()
    console.log(data[0])
    return (
        <div>
            <h1>My Interaction</h1>
            <div>
                {
                 data.map((d) => (
              <div key={d.id}>
                <h1>{d.userName}</h1>
                <p>{d.commentText}</p>
               <p>{d.createdAt}</p>
            </div>
          ))
                }
           
            </div>
        </div>
    );
};

export default MyInteractionPage;