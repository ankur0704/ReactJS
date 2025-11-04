
import Card from './components/Card'


const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag: "Full-time",
    tag2: "Junior Level",
    pay: "$65/hour",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Data Analyst",
    tag: "Full-time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Cloud Solutions Architect",
    tag: "Full-time",
    tag2: "Senior Level",
    pay: "$85/hour",
    location: "Redmond, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag: "Contract",
    tag2: "Mid Level",
    pay: "$70/hour",
    location: "Cupertino, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "Machine Learning Engineer",
    tag: "Full-time",
    tag2: "Senior Level",
    pay: "$90/hour",
    location: "Menlo Park, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: "Data Scientist",
    tag: "Full-time",
    tag2: "Mid Level",
    pay: "$75/hour",
    location: "Los Gatos, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "10 weeks ago",
    post: "Software QA Engineer",
    tag: "Full-time",
    tag2: "Junior Level",
    pay: "$60/hour",
    location: "Austin, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "2 days ago",
    post: "AI Research Intern",
    tag: "Part-time",
    tag2: "Internship",
    pay: "$45/hour",
    location: "Santa Clara, USA",
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "Frontend Developer",
    tag: "Full-time",
    tag2: "Mid Level",
    pay: "$65/hour",
    location: "Noida, India",
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    companyName: "IBM",
    datePosted: "3 weeks ago",
    post: "DevOps Engineer",
    tag: "Full-time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Pune, India",
  },
];


  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){

        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} brandLogo={elem.brandLogo} />
        </div>
      })}               
    </div>
      
      
  )
}

export default App
