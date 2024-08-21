import JobDetails from "@/components/career/job";

const JobDetailsPage = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return <JobDetails />;
};

export default JobDetailsPage;
