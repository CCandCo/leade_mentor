interface PageProps {
  params: Promise<{ id: string }>;
}
const page = async ({ params }: PageProps) => {
  const { id } = await params;
  return (
    <div className="p-4 md:max-w-md mx-auto bg-amber-400 text-accent-foreground">
      <h1>Feed Page - ID: {id}</h1>
    </div>
  );
};

export default page;
