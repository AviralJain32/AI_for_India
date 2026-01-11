// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";

// const advisoryMembers = [
//   {
//     name: "Ramesh Chander",
//     role: "Director",
//     position: "Advisory Board Director",
//   },
//   {
//     name: "Aviral",
//     role: "Assistant – IT",
//     position: "Advisory Board",
//   },
//   {
//     name: "Tanishq Sagar",
//     role: "Assistant – Media",
//     position: "Advisory Board",
//   },
// ];

// const AdvisoryBoard = () => {
//   return (
//     <>
//     <Navbar/>
//     <section className="min-h-screen bg-deep-purple relative overflow-hidden py-24">
//       {/* Background glow */}
//       <div className="absolute -right-40 top-40 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
//       <div className="absolute -left-40 bottom-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
//             Advisory Board
//           </h1>
//           <p className="text-black/80 text-lg">
//             Meet the leadership and advisors guiding AFI Edutech’s vision and
//             strategic direction.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {advisoryMembers.map((member, index) => (
//             <Card
//               key={index}
//               className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl hover:border-saffron transition-all hover:scale-[1.03]"
//             >
//               <CardContent className="p-8 text-center">
//                 {/* Avatar placeholder */}
//                 <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-saffron to-neon-purple flex items-center justify-center text-black text-2xl font-bold">
//                   {member.name.charAt(0)}
//                 </div>

//                 <h3 className="text-xl font-semibold text-black mb-1">
//                   {member.name}
//                 </h3>

//                 <p className="text-saffron font-medium mb-1">
//                   {member.position}
//                 </p>

//                 <p className="text-black/70 text-sm">{member.role}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//     <Footer/>
//     </>
//   );
// };

// export default AdvisoryBoard;

import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const advisoryMembers = [
  {
    name: "Ramesh Chander",
    role: "Director",
    position: "Advisory Board Director",
  },
  {
    name: "Aviral",
    role: "Assistant – IT",
    position: "Advisory Board",
  },
  {
    name: "Tanishq Sagar",
    role: "Assistant – Media",
    position: "Advisory Board",
  },
];

const AdvisoryBoard = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-deep-purple relative overflow-hidden py-24">
        {/* Background glow */}
        <div className="absolute -right-40 top-40 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-40 bottom-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Advisory Board
            </h1>
            <p className="text-black/80 text-lg">
              Meet the leadership and advisors guiding AFI Edutech’s vision and
              strategic direction.
            </p>
          </div>

          {/* List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {advisoryMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center justify-between gap-6
                bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl
                px-6 py-5 hover:border-saffron transition-all hover:scale-[1.01]"
              >
                {/* Left: Avatar + Name */}
                <div className="flex items-center gap-4 w-full md:w-1/3">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-saffron to-neon-purple
                    flex items-center justify-center text-black text-xl font-bold">
                    {member.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-black">
                      {member.name}
                    </h3>
                    <p className="text-black/60 text-sm">
                      {member.position}
                    </p>
                  </div>
                </div>

                {/* Center: Position */}
                <div className="text-saffron font-medium text-center md:text-left w-full md:w-1/3">
                  {member.position}
                </div>

                {/* Right: Role */}
                <div className="text-black/70 text-sm text-center md:text-right w-full md:w-1/3">
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AdvisoryBoard;
