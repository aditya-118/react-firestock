import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useGlobalContext } from "../../context";

const Profile = () => {
  const {
    state: { items, currentUser },
  } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) navigate("/*", { replace: true });
  }, [currentUser]);

  const details = [
    { key: "name", value: currentUser?.displayName },
    { key: "email", value: currentUser?.email },
    {
      key: "phone no.",
      value: currentUser?.phoneNumber ? currentUser?.phoneNumber : "-",
    },
    {
      key: "uploaded",
      value: items.filter(
        (obj) =>
          obj.user ===
          currentUser?.displayName?.split(" ").join("").toLowerCase()
      ).length,
    },
    { key: "-", value: "-" },
  ];
  return (
    <div className="profile">
      <div className="container text-center mt-5">
        <h1 className="text-center">Profile</h1>
        <hr style={{ width: "75%", margin: "3rem auto" }} />
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          <img
            style={{ borderRadius: "4px " }}
            src={currentUser?.photoURL}
            alt={currentUser?.displayName}
            width="200"
            height="200"
            className="mx-lg-3 my-3"
          />
          <ul className="list-group mx-lg-3 my-3" style={{ width: "30rem" }}>
            {details.map((detail, idx) => (
              <li
                key={idx}
                className="list-group-item d-flex justify-content-between"
              >
                <span className="fs-5 text-capitalize">{detail.key}</span>{" "}
                <span
                  className="fs-5 text-success text-end"
                  style={{ width: "15rem", overflowWrap: "break-word" }}
                >
                  {detail.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Profile;
