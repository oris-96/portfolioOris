/** @format */

import CaseDetails from '@/components/CaseDetails';

const page = () => {
  return (
    <div>
      <CaseDetails
        header=" MORENT - A Car Rental Website"
        startDate="24/01/2023"
        endDate="02/03/2023"
        firstParagraph=" Morent, a cutting-edge car rental application that was developed
                using the MERN stack. The app boasts a dynamic homepage that
                showcases featured vehicles, along with convenient pickup and
                drop-off location options and a comprehensive list of available
                cars."
        secondParagraph="My team and I also developed the car listing page which offers a
                search bar and various filtering options for users to find the
                perfect vehicle. Additionally, it has a car details page which
                provides users with detailed information along with suggestions
                for other recommended vehicles.
          "
        thirdParagraph="Car owners are also able to list their cars for rent through our
                Add Car page, while users can easily track their rented and
                rented-out cars through their profile page. Overall, we've
                created an intuitive and user-friendly MVP version of the
                platform that will make renting a car a breeze."
        problemStatement="One of the main problems that people face when looking to rent a
              car is the hassle of finding a reliable and user-friendly platform
              to search for and book rental cars. In addition, car owners who
              want to rent out their vehicles often struggle to find a suitable
              platform to list their cars and manage their rentals."
        firstTakeAway="Gained extensive knowledge of full authentication and
                      authorization implementation, including the use of
                      industry-standard security protocols such as JSON Web
                      Tokens (JWT)."
        secondTakeAway="Sharpened my backend skills, specifically in optimizing
                      database queries, improving performance, and handling
                      server-side logic."
        thirdTakeAway=" Learned how to properly handle files, including file
                      upload, storage, and retrieval, ensuring that the apps
                      data is organized and easily accessible while keeping it
                      secure."
        fourthTakeAway="Acquired proficiency in NextJS and implemented various
                      features utilizing industry-standard best practices."
        firstChallenge="As we developed Morent, our team encountered various
                      obstacles. One of our biggest challenges was choosing the
                      right tools and technologies for the project."
        secondChallenge=" We conducted brainstorming and carefully weighed our
                      options before making a decision. Furthermore, using
                      NextJS was a new experience for us, and we encountered
                      difficulties while implementing its features. Finally, we
                      had to work under time constraints, which added pressure
                      to the project."
        thirdChallenge="However, we collaborated effectively to overcome these
                      obstacles and ultimately delivered a high-quality product
                      within the given timeline."
        colorTxt="text-buttonBg"
        colorBg="bg-buttonBg"
        anchor="/anchor.svg"
        gridOneText="Home Screen"
        gridTwoText="User Query"
        gridThreeText="Profile Page"
        gridFourText="Backend Response"
        gridFiveText="Complete"
        gridSixText="Display Data Results"
        gridSevenText="Rent Car"
        laptopView="/rentLap.png"
        mobileView="/rentcase.svg"
        problemStatementImage="/cartax.png"
        highFidelity="/rentfigma.png"
      />
    </div>
  );
};

export default page;
