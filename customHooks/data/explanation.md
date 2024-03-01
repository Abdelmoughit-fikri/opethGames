# explanation for the custom hooks
*** we created useData hook as a generic data fetching hook for several purposes :
  1. separation of concerns : we separate the logic of the data fetching in useEffect hook , in a seperate file than the compoenet , so we keep the component pure and knowing nothing about sending http requests.
  2. multiple  calls to Api with diffrent parameters : in this application so far , i need to get "/games" and "/genres" endpoints , each endpoint holds diffrent data with diffrent types , so we make the generic useData hook to have any type possible with a generic type (T[])
  3. so the useGames and the useGenres hooks are mainly used just to pass the appropriate data types using interfaces as the generic type for useData.
*** when working , we import just the useGmaes or useGenres hooks , holding the data variable created in useData generic hook.