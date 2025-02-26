import ConversationList from "@/components/Messages/ConversationList";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full bg-yellow-50">
      <h1 className="text-2xl font-semibold w-full bg-blue-500 px-5 py-4 text-white">
        My Conersation
      </h1>
      <div className="w-full flex min-h-[80vh]">
        <ConversationList />
        <main className="w-full bg-[#fafafa]">{children}</main>
      </div>
    </div>
  );
}
