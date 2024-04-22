import Layout from "./Layout";
// import patient from "../../assets/images/patient.png";
import provider from "../../assets/images/provider.png";
import pharmacy from "../../assets/images/pharmacy.png";
import lab from "../../assets/images/lab.png";
import ButtonLong from "../../components/ButtonLong";
import { useNavigate } from "react-router";
import { useState } from "react";
import { toast } from "react-hot-toast";
const GetStarted = () => {
  const [selectedUser,setSelectedUser] = useState(""); 
  const [activeCard, setActiveCard] = useState("");
  const userTypes = [
    // {
    //   type: "Patient",
    //   icon: patient,
    //   value: "patient",
    // },
    {
      type: "Provider",
      icon: provider,
      value: "provider",
    },
    {
      type: "Pharmacy",
      icon: pharmacy,
      value: "pharmacy",
    },
    {
      type: "Lab",
      icon: lab,
      value: "lab",
    },
  ];
  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setActiveCard(user)
    console.log(user);
  }

  const navigate = useNavigate();
  const handleButtonSubmit = () => {
    if (selectedUser) {
         navigate("/register", {state: {data: selectedUser }})
    }else{
      toast.error("Select a Role", {
          style: {
    background: 'red',
    color: 'white',
        },
          iconTheme: {
    primary: '#fff',
    secondary: '#000',
  },
      });
    }
 
  }
  return (
    <Layout>
      <div className="font-bold text-xl mb-8">
        How would you like to get started?
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {userTypes.map((user, index) => {
          return (
            <div
              onClick={() => {
                handleSelectUser(user.value);
              }}
              key={user.value}             
              className={`flex items-center h-24  hover:bg-primary/20 cursor-pointer border-2 rounded-md justify-center gap-4 px-4 py-2.5 ${
                user.value === activeCard
                  ? "bg-primary/20"
                  : ""
              } ${index === 0 ? "col-span-2" : ""}`}
            >
              <div className="w-8">
                <img src={user.icon} alt={user.type} />
              </div>
              <p className="text-primary">{user.type}</p>
            </div>
          );
        })}
      </div>
      <div className="h-8"></div>

      <ButtonLong
        text="Get Started"
        type="submit"
        onClick={handleButtonSubmit}
      />
    </Layout>
  );
};

export default GetStarted;
