import JobDetails from "@/components/career/job";
import { jobData } from "@/handlers/career";
import { notFound } from "next/navigation";

const JobDetailsPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const data = await jobData(params.id);

  if (!data) {
    return notFound();
  }
  return <JobDetails data={data} />;
};

export default JobDetailsPage;
