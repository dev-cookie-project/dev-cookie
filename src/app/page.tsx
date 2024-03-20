import CommentForm from "@/components/comment/CommentForm";
import CommentList from "@/components/comment/CommentList";

export default function Home() {
  return (
    <div>
      <CommentForm />
      <CommentList />
    </div>
  );
}
