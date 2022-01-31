import React from 'react';

function MobileServices() {
  return(
      <section style={{height: '100vh',width: '100%' ,backgroundColor:"#fff"}}>
       <div style={{width:"100%",display:"flex",justifyContent: "center" ,alignItems: "center" ,flexDirection: "row" ,marginTop: "50px"}}>
          <span style={{border: "0.5px solid #8a888a" ,width:"40%",width:'230px', color:"#064b76",fontSize:"28.8px", fontWeight: 600, position:"relative", marginBottom:"32px"}}></span>
     <h1 style={{width:'400px', color:"#064b76",fontSize:"28.8px", fontWeight: 600, position:"relative", marginBottom:"32px"}}>What Are The Services?</h1>
     <span style={{border: "0.5px solid #8a888a" ,width:"40%",width:'230px', color:"#064b76",fontSize:"28.8px", fontWeight: 600, position:"relative", marginBottom:"32px"}}></span>
     </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems: "center",flexDirection:"row"}}>
           <div style={{width:400 ,height:"90vh" ,justifyContent: "center",alignItems: "center",flexDirection:"column"}}>
               <div style={{height:200 ,width:"100%" ,display:"flex",justifyContent:"space-between",alignItems: "center"}}>
               <img src="/images/pngwing.com10.png" height="200" width="50%"></img> <h4 className="serviceheading">Full Loading Service<h6 className="servicePara">We provide Full Truck load transportation services with varied type of trucks available with the click of a button.</h6></h4>
               </div>
               <div style={{height:200 ,width:"100%" ,display:"flex",justifyContent:"space-between",alignItems: "center"}}>
               <img src="/images/pricing.png" height="200" width="50%"></img> <h4 className="serviceheading">Transparent Pricing<h6 className="servicePara">With our fare calculator, we instantaneously give you best possible rates online.</h6></h4>

               </div>
               <div style={{height:200 ,width:"100%" ,display:"flex",justifyContent:"space-between",alignItems: "center"}}>
               <img src="/images/service.png" height="200" width="50%"></img> <h4 className="serviceheading">Quick & Easy Portal<h6 className="servicePara">Hiring a truck is now just a click away, through our hassle free online booking system.</h6></h4>

               </div>
           </div>
           <div style={{width:400 ,height:"90vh" ,display:"flex", alignItems: "center",justifyContent: "center"}}>
               <img src="/images/mapTruck.png" width="100%" height="80%">
               </img>
           </div>
           <div style={{width:400 ,height:"90vh" ,justifyContent: "center",alignItems: "center",flexDirection:"column"}}>
               <div style={{height:200 ,width:"100%" ,display:"flex",justifyContent:"space-between",alignItems: "center"}}>
               <h4 className="serviceheading">Advance Booking<h6 className="servicePara">Our vehicle availability is guaranteed on daily/weekly/monthly basis to ensure on-time reporting.</h6></h4><img src="/images/booking.png" height="200" width="50%"></img> 
               </div>
               <div style={{height:200 ,width:"100%" ,display:"flex",justifyContent:"space-between",alignItems: "center"}}>
              <h4 className="serviceheading">Live Tracking<h6 className="servicePara">Get real time updates of your goods with our simplified technology.</h6></h4> <img src="/images/trackingLog.png" height="200" width="50%"></img> 

               </div>
               <div style={{height:200 ,width:"100%" ,display:"flex",justifyContent:"space-between",alignItems: "center"}}>
                <h4 className="serviceheading">24/7 Service<h6 className="servicePara">TruckGuru is dedicated to provide exceptional customer support over the Phone & whatsapp Chat.</h6></h4><img src="/images/24service.png" height="200" width="50%"></img>

               </div>
           </div>
        </div>
      </section>
  );
}

export default MobileServices;
