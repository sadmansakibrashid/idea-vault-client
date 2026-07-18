import { CommentDelete } from "@/components/CommentDelete";
import EditComment from "@/components/EditComment";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
const MyInteractionPage =async () => {
    const session = await auth.api.getSession({
    headers: await headers(),
      });
        const token = await auth.api.getToken({
    headers: await headers()
   })
    const user = session?.user;
    console.log(user?.id)
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/comments/${user?.id}`,{
        headers: {
            authorization: `Bearer ${token.token}`
        }
    });
    
    const data = await res.json()
    
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
        My Comments
      </h1>
            <div>
                {
                 data.map((d) => (
              <div key={d._id} 
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-md transition"
              >
                 <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {d.userName}
                </h2>

                <p className="text-gray-700 mt-2 leading-relaxed">
                  {d.commentText}
                </p>

                <p className="text-xs text-gray-400 mt-3">
                  {new Date(d.createdAt).toLocaleString()}
                </p>
              </div>
               
               <CommentDelete CommentId={d._id}></CommentDelete>
               <EditComment comment={d}></EditComment>
            </div>
          ))
                }
           
            </div>
        </div>
    );
};

export default MyInteractionPage;