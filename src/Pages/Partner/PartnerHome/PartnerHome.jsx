import ClientCompany from "../../Home/ClientCompany/Company";
import Achivement from "../Activites/Activites";
import PartnerBanner from "../Banner/PartnerBanner";

const PartnerHome = () => {
    return (
        <div>
      <PartnerBanner></PartnerBanner>      
       <Achivement></Achivement>
       <div className="max-md:pt-80 ms-10">

       <ClientCompany></ClientCompany>
       </div>
        </div>
    );
};

export default PartnerHome;