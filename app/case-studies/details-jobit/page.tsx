/** @format */

import CaseDetails from '@/components/CaseDetails';

const page = () => {
  return (
    <div>
      <CaseDetails
        header=" Job - A Job Finder Application"
        startDate="01/01/2023"
        endDate="02/02/2023"
        demoSite="https://cohort4-web-nerds-job-it.vercel.app/"
        sourceCode="https://github.com/JavaScript-Mastery-PRO/Cohort4_Storm_JobIt"
        firstParagraph=" JobIt, an advanced job search platform, leverages the power of the MERN stack to deliver robust, reliable, and real-time job seeking solutions. The application features a dynamic homepage that highlights trending job opportunities, combined with highly customizable search parameters like job role, location, salary range, and industry."
        secondParagraph="My team and I designed the job listing page on JobIt, which offers a dynamic search bar and a multitude of filtering options for users to find the perfect job that fits their qualifications and preferences. These filters could be set based on job title, location, salary range, industry, and more to refine the job search experience."
        thirdParagraph="Additionally, we created a comprehensive job details page which provides users with in-depth information about each job listing. This includes details about the job role, company, requirements, benefits, and how to apply. For enhanced user experience, the job details page also offers suggestions for other recommended jobs based on the user's search and profile, further assisting users in their job search journey."
        problemStatement="One of the main challenges that job seekers encounter is the difficulty of finding a reliable and user-friendly platform to search for and apply to job vacancies. They often struggle with outdated job listings, complex application processes, and a lack of personalized job recommendations. Similarly, employers looking to recruit often find it hard to locate a suitable platform where they can efficiently list job openings, manage applications, and communicate with potential candidates."
        firstTakeAway="Gained practical knowledge in the development of efficient job matching algorithms, enhancing the JobIt platform's capability to connect job seekers with relevant opportunities swiftly and accurately."
        secondTakeAway="Enhanced my frontend skills, specifically in creating responsive design, improving user interface, and managing client-side logic, all of which contribute to a better user experience on the JobIt platform."
        thirdTakeAway="Developed proficiency in integrating seamless navigation, implementing interactive elements, and optimizing load times, resulting in an intuitive and engaging user experience on the JobIt platform."
        fourthTakeAway="Gained expertise in developing user-focused design patterns and implementing accessibility standards, ensuring that the JobIt platform is inclusive and user-friendly for all job seekers and employers."
        firstChallenge="While developing JobIt, our team navigated several challenges. One of our largest hurdles was determining the most suitable tools and technologies that would allow us to efficiently match job seekers with potential employers, while also providing an engaging and easy-to-navigate user experience."
        secondChallenge=" During the development of JobIt, we held intensive brainstorming sessions and weighed our options carefully before deciding on our technological stack. Interacting with an existing REST API was a new experience for us, and we faced a learning curve while understanding its intricacies and integrating it with our frontend. Additionally, working under strict deadlines added a layer of pressure, necessitating effective time management to deliver a robust and user-friendly job finding platform."
        thirdChallenge="Nonetheless, through effective collaboration and dedicated efforts, we were able to surmount these challenges. Ultimately, we delivered a top-tier, user-focused job finding platform, JobIt, successfully meeting our set timelines."
        colorTxt="text-jobitColorTxt"
        colorBg="bg-jobitColorTxt"
        anchor="/anchor.svg"
        gridOneText="Home Screen"
        gridTwoText="Fetched Api Data"
        gridThreeText="Job Details"
        gridFourText="Display Data Results"
        gridFiveText=" Jobs Linked"
        gridSixText="Company Results "
        gridSevenText="Company Details"
        laptopView="/jobitcase.png"
        mobileView="/jobitmobile.png"
        problemStatementImage="/cartax.png"
        highFidelity="/jobitthumb.png"
        imgUrl="/userFlow.svg"
      />
    </div>
  );
};

export default page;
