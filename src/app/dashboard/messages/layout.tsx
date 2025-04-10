import ConversationList from "@/components/Messages/ConversationList";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full w-full bg-yellow-50">
      <h1 className="text-2xl font-semibold w-full bg-blue-500 px-5 py-4 text-white">
        My Conversations
      </h1>
      <div className="w-full flex min-h-[85vh]">
        <ConversationList />
        {children}
      </div>
    </div>
  );
}
