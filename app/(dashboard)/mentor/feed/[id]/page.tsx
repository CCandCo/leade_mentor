interface PageProps {
  params: Promise<{ id: string }>;
}
const page = async ({ params }: PageProps) => {
  const { id } = await params;
  return (
    <div>
      <h1>Feed Page - ID: {id}</h1>
    </div>
  );
};

export default page;
