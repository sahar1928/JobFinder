const jobs = [
    {
      id: 1,
      imgSrc: 'assets/img/job/google.png',
      jobTitle: 'Web Development',
      company: 'Google',
      location: 'Mountain',
      salary: 5000,
      postedTime: '2 days ago',
      jobTime: 'Freelance',
      vacancies: 8,
    },
    {
      id: 2,
      imgSrc: 'assets/img/job/apple.png',
      jobTitle: 'IOS Developer',
      company: 'Apple',
      location: 'Cupertino',
      salary: 7000,
      postedTime: '1 days ago',
      jobTime: 'Full Time',
      vacancies: 8,
    },
    {
      id: 3,
      imgSrc: 'assets/img/job/starbuck.png',
      jobTitle: 'Finance Manager',
      company: 'Starbucks',
      location: 'California',
      salary: 8000,
      postedTime: '4 days ago',
      jobTime: 'Full Time',
      vacancies: 8,
    },
    {
      id: 4,
      imgSrc: 'assets/img/job/meta.png',
      jobTitle: 'Digital Marketing',
      company: 'Meta',
      location: 'Menlo',
      salary: 6000,
      postedTime: '2 days ago',
      jobTime: 'Internship',
      vacancies: 8,
    },
    {
      id: 5,
      imgSrc: 'assets/img/job/volkswagen.png',
      jobTitle: 'Account Manager',
      company: 'Volkswagen',
      location: 'Wolfsburg',
      salary: 4000,
      postedTime: '2 days ago',
      jobTime: 'Full Time',
      vacancies: 8,
    },
    {
        id: 6,
        company: 'Nike',
        jobTitle: 'Account Manager',
        location: 'Oregon',
        salary: 9000,
        postedTime: '3 days ago',
        jobTime: 'Part Time',
        vacancies: 8,
        imgSrc: 'assets/img/job/nike.png'
    },
    {
      id: 7,
      imgSrc: 'assets/img/job/microsoft.png',
      jobTitle: 'Software Engineer',
      company: 'Microsoft',
      location: 'Redmond',
      salary: 8500,
      postedTime: '1 day ago',
      jobTime: 'Full Time',
      vacancies: 8,
    },
    {
      id: 8,
      imgSrc: 'assets/img/job/amazon.png',
      jobTitle: 'Product Manager',
      company: 'Amazon',
      location: 'Seattle',
      salary: 7500,
      postedTime: '5 days ago',
      jobTime: 'Full Time',
      vacancies: 8,
    },
  ];
  const tabPanes = [
    {
      title: 'Web Development',
      image: 'assets/img/services/service-details-1.jpg',
    },
    {
      title: 'Digital Marketing',
      image: 'assets/img/services/service-details-2.jpg',
    },
    {
      title: 'Human Resources',
      image: 'assets/img/services/service-details-3.jpg',
    },
    {
      title: 'Project Management',
      image: 'assets/img/services/service-details-4.jpg',
    },
    {
      title: 'Software Developer',
      image: 'assets/img/services/service-details-5.jpg',
    },
    {
      title: 'Mobile Apps Developer',
      image: 'assets/img/services/service-details-6.jpg',
    },
  ];
  const candidates = [
    {
      id: 1,
      name: 'Alfread Bonaport',
      image: 'assets/img/team/1.jpg',
      position: 'Market Analyst',
      workExp: '11 Years',
      location: 'Washington, USA',
    },
    {
      id: 2,
      name: 'Micheal Tevaz',
      image: 'assets/img/team/2.jpg',
      position: 'Market Analyst',
      workExp: '11 Years',
      location: 'Washington, USA',
    },
    {
      id: 3,
      name: 'Micheal Smith',
      image: 'assets/img/team/6.jpg',
      position: 'Market Analyst',
      workExp: '11 Years',
      location: 'Washington, USA',
    },
    {
      id: 4,
      name: 'Maria Bonaport',
      image: 'assets/img/team/5.jpg',
      position: 'Market Analyst',
      workExp: '11 Years',
      location: 'Washington, USA',
    },
    {
      id: 5,
      name: 'Alfread Bonaport',
      image: 'assets/img/team/3.jpg',
      position: 'Market Analyst',
      workExp: '11 Years',
      location: 'Washington, USA',
    },
    {
      id: 6,
      name: 'Jimmy Doe',
      image: 'assets/img/team/4.jpg',
      position: 'Market Analyst',
      workExp: '11 Years',
      location: 'Washington, USA',
    },
  ];

 const skills = [
      {
        id: 1,
        name: "JavaScript"
      },
      {
        id: 2,
        name: "Python"
      },
      {
        id: 3,
        name: "Java"
      },
      {
        id: 4,
        name: "C#"
      },
      {
        id: 5,
        name: "C++"
      },
      {
        id: 6,
        name: "Ruby"
      },
      {
        id: 7,
        name: "HTML/CSS"
      },
      {
        id: 8,
        name: "SQL"
      },
      {
        id: 9,
        name: "React"
      },
      {
        id: 10,
        name: "Angular"
      },
      {
        id: 11,
        name: "Vue.js"
      },
      {
        id: 12,
        name: "Node.js"
      },
      {
        id: 13,
        name: "Express.js"
      },
      {
        id: 14,
        name: "MongoDB"
      },
      {
        id: 15,
        name: "AWS"
      },
      {
        id: 16,
        name: "Docker"
      },
      {
        id: 17,
        name: "Kubernetes"
      },
      {
        id: 18,
        name: "Machine Learning"
      },
      {
        id: 19,
        name: "Data Science"
      },
      {
        id: 20,
        name: "Artificial Intelligence"
      },
      {
        id: 21,
        name: "Cybersecurity"
      },
      {
        id: 22,
        name: "Big Data"
      },
      {
        id: 23,
        name: "DevOps"
      },
      {
        id: 24,
        name: "UI/UX Design"
      },
      {
        id: 25,
        name: "Blockchain"
      },
      {
        id: 26,
        name: "AR/VR"
      },
      {
        id: 27,
        name: "Mobile App Development"
      },
      {
        id: 28,
        name: "Embedded Systems"
      },
      {
        id: 29,
        name: "Robotics"
      },
      {
        id: 30,
        name: "Quantum Computing"
      }
    ]

const locations = [  
    {
      id: 1,
      name: "Tel Aviv"
    },
    {
      id: 2,
      name: "Jerusalem"
    },
    {
      id: 3,
      name: "Haifa"
    },
    {
      id: 4,
      name: "Rishon LeZion"
    },
    {
      id: 5,
      name: "Petah Tikva"
    },
    {
      id: 6,
      name: "Ashdod"
    },
    {
      id: 7,
      name: "Netanya"
    },
    {
      id: 8,
      name: "Beer Sheva"
    },
    {
      id: 9,
      name: "Bnei Brak"
    },
    {
      id: 10,
      name: "Rehovot"
    },
    {
      id: 11,
      name: "Bat Yam"
    },
    {
      id: 12,
      name: "Nahariya"
    },
    {
      id: 13,
      name: "Lod"
    },
    {
      id: 14,
      name: "Ashkelon"
    },
    {
      id: 15,
      name: "Tiberias"
    },
    {
      id: 16,
      name: "Eilat"
    },
    {
      id: 17,
      name: "Herzliya"
    },
    {
      id: 18,
      name: "Kfar Saba"
    },
    {
      id: 19,
      name: "Ra'anana"
    },
    {
      id: 20,
      name: "Acre",
    },
    {
      id: 21,
      name: "Modi'in"
    },
    {
      id: 22,
      name: "Beitar Illit"
    },
    {
      id: 23,
      name: "Hod HaSharon"
    },
    {
      id: 24,
      name: "Ramat Gan"
    },
    {
      id: 25,
      name: "Ramla"
    },
    {
      id: 26,
      name: "Nazareth"
    },
    {
      id: 27,
      name: "Rehovot"
    },
    {
      id: 28,
      name: "Beersheba"
    },
    {
      id: 29,
      name: "Afula"
    },
    {
      id: 30,
      name: "Holon"
    },
    {
      id: 31,
      name: "Sderot"
    },
    {
      id: 32,
      name: "Givatayim"
    },
    {
      id: 33,
      name: "Lod"
    },
    {
      id: 34,
      name: "Maalot-Tarshiha"
    },
    {
      id: 35,
      name: "Arad"
    },
    {
      id: 36,
      name: "Hod HaSharon"
    },
    {
      id: 37,
      name: "Hadera"
    },
    {
      id: 38,
      name: "Kiryat Gat"
    },
    {
      id: 39,
      name: "Nahariya"
    },
    {
      id: 40,
      name: "Karmiel"
    },
    {
      id: 41,
      name: "Tiberias"
    },
    {
      id: 42,
      name: "Eilat"
    },
    {
      id: 43,
      name: "Ramat HaSharon"
    },
    {
      id: 44,
      name: "Migdal HaEmek"
    },
    {
      id: 45,
      name: "Kiryat Motzkin"
    },
    {
      id: 46,
      name: "Ofakim"
    },
    {
      id: 47,
      name: "Sakhnin"
    },
    {
      id: 48,
      name: "Tamra"
    },
    {
      id: 49,
      name: "Netivot"
    },
    {
      id: 50,
      name: "Tirat Carmel"
    }
  ]
  export {jobs,tabPanes, candidates,locations, skills}