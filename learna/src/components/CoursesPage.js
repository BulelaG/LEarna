function CoursesPage() {
    const courses = [
      { id: 1, title: "Blockchain 101", description: "Intro to Blockchain" },
      { id: 2, title: "Smart Contracts", description: "Learn how to create dApps" },
      { id: 3, title: "DeFi Mastery", description: "Dive into Decentralized Finance" }
    ];
  
    return (
      <div className="courses-page">
        <h2>Our Courses</h2>
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button>View Course</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default CoursesPage;
  