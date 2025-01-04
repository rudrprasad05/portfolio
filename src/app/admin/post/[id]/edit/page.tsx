import { PostProvider } from "@/hooks/usePostContext";

import ClientWrapper from "./wrapper";

export default async function page({ params }: { params: { id: string } }) {
  return (
    <PostProvider>
      <ClientWrapper />
    </PostProvider>
  );
}
