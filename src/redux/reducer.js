export const initialState = {
  userName: "Yugabdh Pashte",
  oneLiner: "Greetings Yugabdh here, I'm passionate Coder and Developer.",
  about: `Excepteur ullamco aliqua non exercitation quis. 
    Aliqua et duis laboris enim et nostrud laboris ex dolore. 
    Quis ad aliquip consectetur voluptate ut consectetur sint consectetur laborum irure pariatur eiusmod quis. 
    Incididunt magna ut aliqua voluptate est et voluptate velit dolor veniam esse. 
    Sunt commodo sint et cillum. Incididunt eu sunt nostrud pariatur deserunt ut. 
    Non voluptate non ipsum Lorem eu do exercitation cillum occaecat.`,
  profilePic: "https://drive.google.com/uc?export=view&id=1cTyPG1xZP9aPqwgdmt4B9jPsL0AE-Grh",
  education: [
    {
      type: "Graduation",
      institute: "Pillai College of engineering, Panvel",
      university: "Mumbai University",
      stream: "Information Technology",
      passingYear: "2021",
      score: "7.5"
    },
    {
      type: "Under Graduation",
      institute: "Pragati college of Arts, Science and Commerce",
      university: "Mumbai University",
      passingYear: "2017",
      score: "81.83"
    },
    {
      type: "SSC",
      institute: "Swami vivekanand",
      university: "Maharashtra Boards",
      passingYear: "2015",
      score: "91.94"
    }
  ],
  projects: [
    {
      name: "Codelit : Learn to code in C (Web application)",
      img: "https://drive.google.com/uc?export=view&id=1oFF8W-iS9An6WJ0qQd3VZIC8Qjzjvz32",
      source: "#!",
      live: "#!",
      description: `Excepteur ullamco aliqua non exercitation quis. 
      Aliqua et duis laboris enim et nostrud laboris ex dolore. 
      Quis ad aliquip consectetur voluptate ut consectetur sint consectetur laborum irure pariatur eiusmod quis. 
      Incididunt magna ut aliqua voluptate est et voluptate velit dolor veniam esse. 
      Sunt commodo sint et cillum. Incididunt eu sunt nostrud pariatur deserunt ut. 
      Non voluptate non ipsum Lorem eu do exercitation cillum occaecat.`,
      skills: ["PHP", "SQL", "HTML", "CSS"]
    }
  ]
}

export const Reducer = (state = initialState, action) => {
  return state;
}