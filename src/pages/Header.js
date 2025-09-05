import Reac from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const auth = getAuth();
  const navigate = useNavigate();


  const handleSignOut = () => {
    signOut(auth)
      .then((res) => {
        console.log("res logiut", res);
        alert("signOut Succesfulluy!");
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        console.log("res logiut error======", error);
        // An error happened.
      });
  };
  return (
    <header className="top-0 left-0 w-full z-10 bg-gradient-to-b from-black/70 to-transparent absolute">
      <div className="px-8 sm:px-12 py-4 flex  justify-between">
        <img
          className="w-32 sm:w-40"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
        />

        <div className="flex  justify-center flex-col">
          <img
            className=" object-contain"
            src="https://occ-0-2611-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
            alt="logo"
          />

          <p onClick={handleSignOut}>SignOut</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
