//import react from 'react';
import Layout from "./Layout";
import ProfileSettings from "../../components/ProfileSettings";

export default function Profile() {
    
  return (
    <Layout>
      <div className="flex flex-col w-full">
       
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white-100">
          <div className="container mx-auto px-6 py-8">
            <ProfileSettings />
          </div>
        </main>
      </div>
    </Layout>
  );
}
