import React from 'react';


const exercises = {
  HTML: [
    { name: "Exercise 1", path: "/home.html" },
    { name: "Exercise 2", path: "/lab1.html" },
    { name: "Exercise 3", path: "/imagemap.html" },
    { name: "Exercise 4a", path: "/form1.html" },
    { name: "Exercise 4b", path: "/form2.html" },
    { name: "Exercise 4c", path: "/form3.html" },
    { name: "Exercise 5", path: "/resume.html" },
    { name: "Exercise 6a", path: "/css.html" },
    { name: "Exercise 6b", path: "/calculator.html" },
    { name: "Exercise 6c", path: "/singer.html" },
    { name: "Exercise 7a", path: "/college.html" },
    { name: "Exercise 7b", path: "/pet.html" },
      
  ],
  JavaScript: [
    { name: "Exercise 8a", path: "/calc.html" },
    { name: "Exercise 8b", path: "/age.html" },
    { name: "Exercise 8c", path: "/student.html" },
    { name: "Exercise 8d", path: "/rate.html" },
    { name: "Exercise 8e", path: "/reg.html" },
    { name: "Exercise 8f", path: "/ticket.html" },
    { name: "Exercise 9a", path: "/TEMP.html" },
    { name: "Exercise 9b", path: "/ticket1.html" },
    { name: "Exercise 9c", path: "/bmi.html" },
    { name: "Exercise 10a", path: "/sort.html" },
    { name: "Exercise 10b", path: "/dom.html" },
    { name: "Exercise 10c", path: "/order.html" },
    { name: "Exercise 11a", path: "/eventlis.html" },
    { name: "Exercise 11b", path: "/stopw.html" },
    { name: "Exercise 11c", path: "/formv.html" },
    { name: "Exercise 12a", path: "/canvasjs.html" },
    { name: "Exercise 12b", path: "/canvas an.html" },
    { name: "Exercise 12c", path: "/clock.html" },
    { name: "Exercise 12d", path: "/charts.html" },
    { name: "Exercise 12e", path: "/zindex.html" }
  ],
  React: [
    { name: "React Exercise 13", path: "/Ex13/index.html" },
    { name: "React Exercise 14a", path: "/Ex14a/index.html" },
    { name: "React Exercise 14b", path: "/Ex14b/index.html" },
    { name: "React Exercise 15", path: "/Ex15/index.html" }
  ]
};

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🌐 Web Programming Exercises</h1>

      {Object.entries(exercises).map(([category, links]) => (
        <div key={category} style={styles.card}>
          <h2 style={styles.subheading}>{category} Exercises</h2>
          <ul style={styles.list}>
            {links.map((item, idx) => (
              <li key={idx} style={styles.listItem}>
                <a 
                  href={item.path} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={styles.link}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
    padding: '20px'
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '40px',
    fontSize: '2.5rem'
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '600px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  },
  subheading: {
    color: '#0077cc',
    marginBottom: '15px'
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0'
  },
  listItem: {
    marginBottom: '10px'
  },
  link: {
    textDecoration: 'none',
    color: '#0077cc',
    fontSize: '1.1rem'
  }
};

export default App;
