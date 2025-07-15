import useMutation from "../api/useMutation";
import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";

export default function ActivitiesPage() {
  const {
    data: activities,
    loading,
    error,
  } = useQuery("/activities", "activity");

  const { isLoggedIn } = useAuth();

  const 

  const {
    mutate,
    data: addedActivity,
    loading: adding,
    error: addError,
  } = useMutation("POST", "/activities", ["activity"]);

  const {
    mutate,
    data: deletedActivity,
    loading: adding,
    error: addError,
  } = useMutation("DELETE", "/activities", ["activity"]);

  const addActivity = (FormData) => {
    const name = FormData.get("name");
    mutate({ name, description: "excersise" });
  };

  const removeActivity = (id) => {
    mutate({ id });
  };

  return (
    <>
      <h1>Activities</h1>
      <p>Imagine all the activities!</p>
      <main>
        <ul>
          {activities &&
            activities.map((activity) => {
              return (
                <li key={activity.id}>
                  {activity.name} <br />
                  {isLoggedIn ? (
                    <button onClick={removeActivity}>Delete</button>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
        </ul>
        <br />
        {isLoggedIn ? (
          <form action={addActivity}>
            <h1>Add a new activity</h1>
            <label>
              Name: <input name="name" required />
            </label>
            <br />
            <label>
              Description: <input name="description" required />
            </label>
            <br />
            <button>Create New Activity</button>
          </form>
        ) : (
          ""
        )}
      </main>
    </>
  );
}
