export const initialState = {
  userName: "Yugabdh Pashte",
  oneLiner: "Greetings Yugabdh here, I'm passionate Coder and Developer.",
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
      institute: "Pragati college",
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
  ]
}

export const Reducer = (state = initialState, action) => {
  return state;
}